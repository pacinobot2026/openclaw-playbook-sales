import json
import os
from PIL import Image, ImageDraw, ImageFont
import subprocess

# Configuration
WIDTH, HEIGHT = 1920, 1080  # 16:9
BG_COLOR = (26, 26, 46)  # Dark navy
TEXT_COLOR = (255, 255, 255)  # White
EMPHASIS_COLOR = (255, 215, 0)  # Yellow for key words

# Key phrases to emphasize
EMPHASIS_WORDS = [
    "overnight employee", "zero coding", "30 days", "20 hours", 
    "$497", "sleep", "automated", "OpenClaw", "FREE"
]

# Load transcript
print("Loading transcript...")
with open("vsl-transcript.json", "r", encoding="utf-8") as f:
    transcript = json.load(f)

# Extract words with timestamps
words = transcript.get("words", [])
if not words:
    print("ERROR: No word-level timestamps found!")
    exit(1)

print(f"Found {len(words)} words")

# Group words into slides (6-8 words per slide for readability)
slides = []
current_slide = []
current_start = None

for i, word_data in enumerate(words):
    word = word_data["word"].strip()
    start = word_data["start"]
    end = word_data["end"]
    
    if current_start is None:
        current_start = start
    
    current_slide.append(word)
    
    # Create slide every 6-8 words, or at natural breaks (punctuation)
    if len(current_slide) >= 6 and (word.endswith(".") or word.endswith("?") or word.endswith("!") or len(current_slide) >= 8):
        slides.append({
            "text": " ".join(current_slide),
            "start": current_start,
            "end": end
        })
        current_slide = []
        current_start = None

# Add remaining words
if current_slide:
    slides.append({
        "text": " ".join(current_slide),
        "start": current_start,
        "end": words[-1]["end"]
    })

print(f"Created {len(slides)} slides")

# Create slides directory
os.makedirs("slides", exist_ok=True)

# Generate slide images
print("Generating slide images...")
for idx, slide in enumerate(slides):
    # Create image
    img = Image.new("RGB", (WIDTH, HEIGHT), BG_COLOR)
    draw = ImageDraw.Draw(img)
    
    # Determine font size based on text length
    text = slide["text"]
    word_count = len(text.split())
    
    if word_count <= 4:
        font_size = 120  # HUGE
    elif word_count <= 8:
        font_size = 90   # LARGE
    elif word_count <= 14:
        font_size = 65   # MEDIUM
    else:
        font_size = 50   # SMALL
    
    try:
        font = ImageFont.truetype("arial.ttf", font_size)
    except:
        font = ImageFont.load_default()
    
    # Word wrap for long text
    words_in_text = text.split()
    lines = []
    current_line = []
    
    for word in words_in_text:
        test_line = " ".join(current_line + [word])
        bbox = draw.textbbox((0, 0), test_line, font=font)
        if bbox[2] - bbox[0] < WIDTH - 200:  # 100px margin each side
            current_line.append(word)
        else:
            if current_line:
                lines.append(" ".join(current_line))
            current_line = [word]
    
    if current_line:
        lines.append(" ".join(current_line))
    
    # Draw text centered
    total_height = len(lines) * (font_size + 20)
    y = (HEIGHT - total_height) // 2
    
    for line in lines:
        bbox = draw.textbbox((0, 0), line, font=font)
        text_width = bbox[2] - bbox[0]
        x = (WIDTH - text_width) // 2
        draw.text((x, y), line, font=font, fill=TEXT_COLOR)
        y += font_size + 20
    
    # Save slide
    img.save(f"slides/slide_{idx:04d}.png")
    
    if (idx + 1) % 20 == 0:
        print(f"  Generated {idx + 1}/{len(slides)} slides...")

print(f"All {len(slides)} slides generated!")

# Build video with FFmpeg
print("Building video with FFmpeg...")

# Create concat file for FFmpeg
with open("slides/concat.txt", "w") as f:
    for idx, slide in enumerate(slides):
        duration = slide["end"] - slide["start"]
        f.write(f"file 'slide_{idx:04d}.png'\n")
        f.write(f"duration {duration}\n")
    # Last slide needs to be repeated
    f.write(f"file 'slide_{len(slides)-1:04d}.png'\n")

# FFmpeg command to create video
cmd = [
    "ffmpeg", "-y",
    "-f", "concat",
    "-safe", "0",
    "-i", "slides/concat.txt",
    "-i", "vsl-audio.mp3",
    "-c:v", "libx264",
    "-c:a", "aac",
    "-shortest",
    "-pix_fmt", "yuv420p",
    "vsl-final.mp4"
]

print(f"Running: {' '.join(cmd)}")
result = subprocess.run(cmd, capture_output=True, text=True)

if result.returncode == 0:
    print("\n✅ VIDEO COMPLETE: vsl-final.mp4")
    # Get file size
    size_mb = os.path.getsize("vsl-final.mp4") / (1024 * 1024)
    print(f"File size: {size_mb:.2f} MB")
else:
    print(f"\n❌ ERROR: {result.stderr}")

print("\nDone!")
