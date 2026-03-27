export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-sm uppercase tracking-wide mb-4 text-blue-200">
            Finally... A System That Actually Works
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Turn Your AI Agent Into Your <span className="text-yellow-300">Overnight Employee</span>
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-blue-100">
            (Without Coding, Without Confusion, Without Expensive Developers)
          </p>
          <p className="text-lg mb-8 text-blue-200">
            The only step-by-step system that transforms complete beginners into AI automation experts in 30 days — and gives you 20+ hours back every single week.
          </p>
          <a 
            href="https://checkout.stripe.com/c/pay/cs_live_a1Oh6Ae3wpNhNU1KV1ciJKKHaKdYWnKCPGWtJ7h2aAwgxfTNZW1nw2HbxX" 
            className="inline-block bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg text-xl font-bold hover:bg-yellow-300 transition-colors shadow-lg"
          >
            Get The Playbook Now — $497
          </a>
          <p className="mt-4 text-sm text-blue-200">
            ✅ 30-Day Money-Back Guarantee
          </p>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="aspect-video bg-black rounded-lg overflow-hidden shadow-2xl">
            <video 
              controls 
              className="w-full h-full"
              poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1920' height='1080'%3E%3Crect width='1920' height='1080' fill='%231a1a2e'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='48' fill='white'%3EClick to Play%3C/text%3E%3C/svg%3E"
            >
              <source src="https://files.catbox.moe/f8x6sp.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            If This Sounds Like You, Keep Reading...
          </h2>
          <div className="space-y-4">
            {[
              "You're drowning in emails, admin work, and tasks that don't make you money",
              "You KNOW AI could help... but every tutorial assumes you're a developer",
              "You don't have time to learn 47 different tools — you just want your business to RUN",
              "You're tired of being the bottleneck in your own business",
              "You want an 'overnight employee' who works while you sleep... for less than a Netflix subscription"
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                <span className="text-green-500 text-2xl flex-shrink-0">✅</span>
                <p className="text-lg text-gray-700">{item}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-xl font-semibold mt-8">
            If you nodded your head to ANY of those... this is for you.
          </p>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Introducing: The OpenClaw Automation Playbook
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12">
            The Complete 30-Day System That Turns Non-Techies Into Automation Experts
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Zero Coding Required", desc: "If you can click a mouse, you can do this" },
              { title: "ONE Tool Mastered Deeply", desc: "No tool-hopping. No overwhelm. Just OpenClaw." },
              { title: "Real Business Applications", desc: "Not theory. These are plug-and-play workflows." },
              { title: "30-Day Timeline", desc: "You'll be automated in a month, not 'someday'" },
              { title: "Done-With-You Support", desc: "Weekly group calls so you never get stuck" },
              { title: "Lifetime Access", desc: "All updates, forever. No recurring fees." }
            ].map((feature, idx) => (
              <div key={idx} className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-2 text-blue-900">✅ {feature.title}</h3>
                <p className="text-gray-700">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Here's Everything Inside The Playbook
          </h2>
          <div className="space-y-6">
            {[
              { module: "Module 1: Foundation (Days 1-5)", desc: "Setting up OpenClaw & your first automation in 30 minutes" },
              { module: "Module 2: Email Mastery (Days 6-10)", desc: "Inbox Zero automation & auto-responses that sound human" },
              { module: "Module 3: Social Media (Days 11-15)", desc: "Auto-posting across all platforms while you sleep" },
              { module: "Module 4: Client Systems (Days 16-20)", desc: "Automated follow-ups, scheduling, and onboarding" },
              { module: "Module 5: Business Intelligence (Days 21-25)", desc: "Automated reporting & data extraction" },
              { module: "Module 6: Advanced Workflows (Days 26-30)", desc: "Chain automations & build custom systems" }
            ].map((mod, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-xl mb-2 text-blue-900">{mod.module}</h3>
                <p className="text-gray-700">{mod.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-yellow-50 border-2 border-yellow-400 p-8 rounded-lg">
            <h3 className="font-bold text-2xl mb-4 text-center">BONUSES INCLUDED:</h3>
            <ul className="space-y-2 text-lg">
              <li>✅ 50+ Plug-and-Play Templates (Copy-Paste Ready)</li>
              <li>✅ Setup Troubleshooting Guide</li>
              <li>✅ 90 Days Community Access</li>
              <li>✅ Weekly Group Q&A Calls (Month 1)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Value Stack */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            The Real Value of What You're Getting
          </h2>
          <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
            <div className="space-y-3 mb-6">
              {[
                { item: "30-Day Video Training (42 Lessons)", value: "$997" },
                { item: "50+ Automation Templates", value: "$497" },
                { item: "Setup & Configuration Guide", value: "$297" },
                { item: "90 Days Community Access", value: "$297" },
                { item: "Weekly Group Calls (Month 1)", value: "$497" },
                { item: "Troubleshooting Support", value: "$197" }
              ].map((line, idx) => (
                <div key={idx} className="flex justify-between items-center border-b pb-2">
                  <span className="text-gray-700">{line.item}</span>
                  <span className="font-semibold">{line.value}</span>
                </div>
              ))}
            </div>
            <div className="border-t-2 border-gray-300 pt-4 mb-6">
              <div className="flex justify-between items-center text-xl font-bold">
                <span>TOTAL VALUE</span>
                <span>$2,782</span>
              </div>
            </div>
            <div className="bg-blue-600 text-white p-6 rounded-lg text-center">
              <p className="text-lg mb-2">Your Investment Today:</p>
              <p className="text-5xl font-bold">$497</p>
              <p className="text-sm mt-2 text-blue-200">That's 82% off the real value</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Here's What Students Are Saying
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { quote: "I got 15 hours back in my first week. This is insane.", author: "Sarah M., Online Coach" },
              { quote: "I'm not technical AT ALL. If I can do this, anyone can.", author: "Mike R., Consultant" },
              { quote: "Best $497 I've ever spent on my business. Period.", author: "Jessica L., Agency Owner" }
            ].map((test, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-700 italic mb-4">"{test.quote}"</p>
                <p className="text-sm font-semibold text-blue-900">— {test.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "Do I need to know how to code?",
                a: "Nope. Zero coding required. If you can click a mouse and follow simple instructions, you can do this."
              },
              {
                q: "What if I get stuck?",
                a: "You get 90 days of community access PLUS weekly group calls for the first month. You won't be alone."
              },
              {
                q: "How long does it take to see results?",
                a: "Most people have their first automation running within 24 hours. By week 2, you'll have 5-10 automations saving you hours every day."
              },
              {
                q: "Will this work for MY business?",
                a: "Yes. Whether you're a coach, consultant, agency owner, course creator, or solopreneur — these workflows adapt to ANY business."
              },
              {
                q: "Is there a refund policy?",
                a: "Yes. 30-day money-back guarantee. If you go through the course and don't save at least 20 hours in your first month, I'll refund every penny."
              }
            ].map((faq, idx) => (
              <div key={idx} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-2 text-blue-900">{faq.q}</h3>
                <p className="text-gray-700">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Urgency */}
      <section className="py-16 bg-red-50">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Limited Spots Available
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            I'm only opening this to <span className="font-bold">100 people</span> right now.
          </p>
          <p className="text-gray-700 mb-4">
            Not because of some fake scarcity... but because I personally show up to the group calls, and I can't handle more than that.
          </p>
          <p className="text-gray-700 mb-6">
            Once we hit 100, I'm closing the doors until the next cohort.
          </p>
          <div className="bg-white p-6 rounded-lg shadow-lg inline-block">
            <p className="text-2xl font-bold text-red-600">Current Enrollment: 23/100</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="order" className="py-16 bg-gradient-to-b from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Your Time Back?
          </h2>
          <p className="text-lg mb-8">Here's what happens when you click the button below:</p>
          <div className="space-y-3 text-left max-w-md mx-auto mb-8">
            <p>1️⃣ You'll be taken to a secure checkout page</p>
            <p>2️⃣ Instant access to the entire Playbook</p>
            <p>3️⃣ You'll get a welcome email with your login</p>
            <p>4️⃣ Start Module 1 today</p>
          </div>
          <a 
            href="https://checkout.stripe.com/c/pay/cs_live_a1Oh6Ae3wpNhNU1KV1ciJKKHaKdYWnKCPGWtJ7h2aAwgxfTNZW1nw2HbxX" 
            className="inline-block bg-yellow-400 text-blue-900 px-10 py-5 rounded-lg text-2xl font-bold hover:bg-yellow-300 transition-colors shadow-xl"
          >
            Yes! Give Me The Playbook — $497
          </a>
          <div className="mt-6 space-y-2 text-blue-200">
            <p>✅ 30-Day Money-Back Guarantee</p>
            <p>✅ Instant Access</p>
            <p>✅ Lifetime Updates</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2026 Chad Nicely | <a href="#" className="hover:text-white">Privacy Policy</a> | <a href="#" className="hover:text-white">Terms of Service</a></p>
          <p className="mt-2">support@nicelysupport.com</p>
        </div>
      </footer>
    </div>
  );
}
