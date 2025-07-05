export default function CommunityContent() {
  return (
    <div className="flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 py-16">
      <div className="bg-white rounded-lg p-8 sm:p-12 max-w-2xl w-full text-center border-4 border-dashed border-blue-400">
        <h1 className="text-3xl sm:text-4xl font-bold text-blue-500 mb-6">
          Join Formixio on Telegram
        </h1>
        
        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          Get Class 10 & 12 formula sheets, study tips, and daily math help – directly on Telegram.
        </p>

        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300 transform hover:scale-105">
          Join Now
        </button>
      </div>
    </div>
  );
}