export default function AboutContent() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-5xl lg:text-6xl font-bold text-black mb-8">
        About Formixio
      </h1>
      
      <p className="text-xl text-gray-800 leading-relaxed mb-8">
        Formixio is an education platform built to simplify Class 10th and 12th Mathematics. 
        Our mission is to help every student, especially those struggling, by providing concise 
        formula sheets, guided practice, and concept clarity.
      </p>
      
      <p className="text-xl text-gray-800 leading-relaxed mb-12">
        Whether you're revising for board exams or catching up on missed topics, Formixio is 
        your reliable study companion. We focus on building confidence through clarity, not 
        just memorization.
      </p>

      {/* Feature Cards */}
      <div className="flex flex-col md:flex-row gap-4 mb-12 justify-center">
        <div className="bg-white rounded-full px-6 py-3 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
          <span className="text-xl">📋</span>
          <span className="font-medium text-gray-700">One-Page Formula Sheets</span>
        </div>
        <div className="bg-white rounded-full px-6 py-3 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
          <span className="text-xl">🧠</span>
          <span className="font-medium text-gray-700">Concept-First Learning</span>
        </div>
        <div className="bg-white rounded-full px-6 py-3 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
          <span className="text-xl">🤝</span>
          <span className="font-medium text-gray-700">Supportive Community</span>
        </div>
      </div>

      <p className="text-xl text-black font-semibold">
        Let's make Math simple — together.
      </p>
    </div>
  );
}