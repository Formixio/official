export default function ContactContent() {
  const contactItems = [
    {
      title: "Legal Contact Email",
      content: "formixio.legal@gmail.com",
      icon: "⚖️",
      isEmail: true
    },
    {
      title: "Copyright Infringement Claims",
      content: "Report any copyright violations or unauthorized use of content",
      icon: "©️"
    },
    {
      title: "DMCA Notices",
      content: "Submit Digital Millennium Copyright Act takedown requests",
      icon: "📋"
    },
    {
      title: "Content Violation Reports",
      content: "Report inappropriate or harmful content on our platform",
      icon: "🚫"
    },
    {
      title: "General Legal Inquiries",
      content: "Any other legal or policy-related questions and concerns",
      icon: "📞"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl lg:text-5xl font-bold text-black mb-6">
          CONTACT US FOR LEGAL OR COPYRIGHT CONCERNS
        </h1>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
          If you believe that any content on FORMIXIO infringes your copyright or violates any legal guidelines, 
          please reach out to us directly. We take all legal matters seriously and respond promptly.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1 max-w-4xl mx-auto">
        {contactItems.map((item, index) => (
          <div 
            key={index}
            className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30 hover:bg-white/30 hover:border-white/50 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
          >
            <div className="flex items-start gap-4">
              <div className="text-2xl flex-shrink-0 mt-1">
                {item.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-black mb-2">
                  {item.title}
                </h3>
                {item.isEmail ? (
                  <a 
                    href={`mailto:${item.content}`}
                    className="text-lg text-blue-700 hover:text-blue-800 font-medium underline decoration-2 underline-offset-4 hover:decoration-blue-800 transition-colors"
                  >
                    {item.content}
                  </a>
                ) : (
                  <p className="text-gray-700 leading-relaxed">
                    {item.content}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-8 border border-white/40 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-black mb-4">
            Quick Response Guarantee
          </h3>
          <p className="text-gray-700 leading-relaxed">
            We prioritize legal and copyright matters and aim to respond to all inquiries within 
            <span className="font-semibold text-black"> 24-48 hours</span>. For urgent matters, 
            please clearly mark your email as "URGENT" in the subject line.
          </p>
        </div>
      </div>
    </div>
  );
}