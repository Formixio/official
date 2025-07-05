'use client';

export default function Class10Content() {
  const openInNewPage = (chapter) => {
    const url = `/chapter/${chapter.id}?title=${encodeURIComponent(chapter.title)}&folder=${encodeURIComponent(chapter.folderPath)}`;
    window.location.href = url; 
  };

  // Updated chapters data - now goes from 1 to 14
  const chapters = [
    {
      id: 1,
      title: "Chapter 1: Real Numbers",
      description: "Euclid's division lemma, fundamental theorem of arithmetic, rational and irrational numbers",
      folderPath: "/class10/CH_1",
      icon: "🔢"
    },
    {
      id: 2,
      title: "Chapter 2: Polynomials",
      description: "Degree of polynomial, zeros of polynomial, relationship between zeros and coefficients",
      folderPath: "/class10/CH_2",
      icon: "📈"
    },
    {
      id: 3,
      title: "Chapter 3: Linear Equations",
      description: "Pair of linear equations in two variables, graphical and algebraic methods",
      folderPath: "/class10/CH_3",
      icon: "📊"
    },
    {
      id: 4,
      title: "Chapter 4: Quadratic Equations",
      description: "Standard form, nature of roots, methods of solving quadratic equations",
      folderPath: "/class10/CH_4",
      icon: "🔲"
    },
    {
      id: 5,
      title: "Chapter 5: Arithmetic Progressions",
      description: "AP, general term, sum of first n terms of an AP",
      folderPath: "/class10/CH_5",
      icon: "🔄"
    },
    {
      id: 6,
      title: "Chapter 6: Triangles",
      description: "Similar triangles, criteria for similarity, areas of similar triangles",
      folderPath: "/class10/CH_6",
      icon: "📐"
    },
    {
      id: 7,
      title: "Chapter 7: Coordinate Geometry",
      description: "Distance formula, section formula, area of triangle",
      folderPath: "/class10/CH_7",
      icon: "📍"
    },
    {
      id: 8,
      title: "Chapter 8: Trigonometry",
      description: "Trigonometric ratios, trigonometric identities, heights and distances",
      folderPath: "/class10/CH_8",
      icon: "📏"
    },
    {
      id: 9,
      title: "Chapter 9: Applications of Trigonometry",
      description: "Heights and distances, angle of elevation and depression",
      folderPath: "/class10/CH_9",
      icon: "🏔️"
    },
    {
      id: 10,
      title: "Chapter 10: Circles",
      description: "Tangent to a circle, number of tangents from a point on circle",
      folderPath: "/class10/CH_10",
      icon: "⭕"
    },
    {
      id: 11,
      title: "Chapter 11: Areas Related to Circles",
      description: "Area and circumference of circle, areas of sector and segment",
      folderPath: "/class10/CH_11",
      icon: "🟡"
    },
    {
      id: 12,
      title: "Chapter 12: Surface Areas and Volumes",
      description: "Surface areas and volumes of combinations of solids",
      folderPath: "/class10/CH_12",
      icon: "📦"
    },
    {
      id: 13,
      title: "Chapter 13: Statistics",
      description: "Mean, median, mode of grouped data, cumulative frequency graph",
      folderPath: "/class10/CH_13",
      icon: "📊"
    },
    {
      id: 14,
      title: "Chapter 14: Probability",
      description: "Classical definition of probability, simple problems on probability",
      folderPath: "/class10/CH_14",
      icon: "🎲"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl lg:text-5xl font-bold text-black mb-6">
          Class 10 Mathematics Notes
        </h1>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
          Complete chapter-wise image notes for CBSE Class 10 Mathematics. 
          Click on any chapter to view notes in a new page.
        </p>
      </div>

      {/* Chapters Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {chapters.map((chapter) => (
          <div
            key={chapter.id}
            onClick={() => openInNewPage(chapter)}
            className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30 hover:bg-white/30 hover:border-white/50 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] cursor-pointer group"
          >
            <div className="text-center">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {chapter.icon}
              </div>
              <h3 className="text-xl font-bold text-black mb-3 group-hover:text-blue-700 transition-colors">
                {chapter.title}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                {chapter.description}
              </p>
              <div className="inline-flex items-center text-blue-600 font-medium group-hover:text-blue-800 transition-colors">
                <span>View Notes</span>
                <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}