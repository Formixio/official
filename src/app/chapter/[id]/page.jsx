// 'use client';

// import { useState, useEffect, use } from 'react';
// import { useSearchParams } from 'next/navigation';

// export default function ChapterPage({ params }) {
//   const [images, setImages] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [error, setError] = useState(null);
//   const searchParams = useSearchParams();
  
//   // Unwrap params using React.use() for newer Next.js versions
//   const resolvedParams = use(params);
//   const chapterId = resolvedParams?.id;
//   const title = searchParams?.get('title') || `Chapter ${chapterId}`;
//   const folder = searchParams?.get('folder') || `/class10/CH_${chapterId}`;

//   // Load images when component mounts
//   useEffect(() => {
//     if (chapterId) {
//       loadImages();
//     }
//   }, [chapterId, folder]);

//   const loadImages = async () => {
//     setLoading(true);
//     setError(null);
//     const foundImages = [];
    
//     try {
//       // Try to load images with the naming pattern CH_X_page-0001, CH_X_page-0002, etc.
//       const extensions = ['jpg', 'jpeg', 'png', 'webp'];
//       const chapterNum = chapterId.toString().padStart(1, '0');
      
//       // Try up to 50 pages (you can adjust this number)
//       for (let i = 1; i <= 50; i++) {
//         const pageNum = i.toString().padStart(4, '0');
        
//         for (const ext of extensions) {
//           const imagePath = `${folder}/CH_${chapterNum}_page-${pageNum}.${ext}`;
          
//           try {
//             // Check if image exists
//             const response = await fetch(imagePath, { method: 'HEAD' });
//             if (response.ok) {
//               foundImages.push(imagePath);
//               break; // Found this page, move to next page number
//             }
//           } catch (error) {
//             // Image doesn't exist, continue
//             continue;
//           }
//         }
//       }
      
//       setImages(foundImages);
//     } catch (err) {
//       setError('Failed to load images');
//       console.error('Error loading images:', err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const nextImage = () => {
//     setCurrentImageIndex((prev) => (prev + 1) % images.length);
//   };

//   const prevImage = () => {
//     setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
//   };

//   const goToImage = (index) => {
//     setCurrentImageIndex(index);
//   };

//   // Handle keyboard navigation
//   useEffect(() => {
//     const handleKeyPress = (e) => {
//       if (e.key === 'ArrowRight') {
//         nextImage();
//       } else if (e.key === 'ArrowLeft') {
//         prevImage();
//       }
//     };

//     window.addEventListener('keydown', handleKeyPress);
//     return () => window.removeEventListener('keydown', handleKeyPress);
//   }, [images.length]);

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500 mx-auto mb-4"></div>
//           <p className="text-gray-600 text-lg">Loading chapter images...</p>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
//         <div className="text-center max-w-md mx-auto p-8">
//           <div className="text-6xl mb-6">⚠️</div>
//           <h1 className="text-3xl font-bold text-gray-800 mb-4">Error Loading Images</h1>
//           <p className="text-gray-600 mb-6">{error}</p>
//           <button
//             onClick={loadImages}
//             className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors mr-4"
//           >
//             Retry
//           </button>
//           <button
//             onClick={() => window.history.back()}
//             className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
//           >
//             Go Back
//           </button>
//         </div>
//       </div>
//     );
//   }

//   if (images.length === 0) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
//         <div className="text-center max-w-md mx-auto p-8">
//           <div className="text-6xl mb-6">📚</div>
//           <h1 className="text-3xl font-bold text-gray-800 mb-4">No Images Found</h1>
//           <p className="text-gray-600 mb-6">
//             No images were found for {title} in the {folder} directory.
//           </p>
//           <p className="text-sm text-gray-500 mb-6">
//             Expected format: CH_{chapterId}_page-0001.jpg, CH_{chapterId}_page-0002.jpg, etc.
//           </p>
//           <button
//             onClick={() => window.history.back()}
//             className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
//           >
//             Go Back
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
//       {/* Header */}
//       <div className="bg-white/80 backdrop-blur-sm border-b border-white/20 sticky top-0 z-10">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
//           <div className="flex items-center justify-between">
//             <div>
//               <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
//               <p className="text-gray-600 mt-1">
//                 Page {currentImageIndex + 1} of {images.length}
//               </p>
//             </div>
//             <div className="flex items-center gap-4">
//               <button
//                 onClick={() => window.history.back()}
//                 className="text-gray-600 hover:text-gray-800 px-4 py-2 rounded-lg hover:bg-white/50 transition-colors flex items-center gap-2"
//               >
//                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
//                 </svg>
//                 Back
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Image Display */}
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
//           {/* Image Container */}
//           <div className="relative bg-gray-50 min-h-[70vh] flex items-center justify-center">
//             <img
//               src={images[currentImageIndex]}
//               alt={`Page ${currentImageIndex + 1}`}
//               className="max-w-full max-h-[70vh] object-contain"
//               onError={(e) => {
//                 console.error('Failed to load image:', images[currentImageIndex]);
//               }}
//             />
            
//             {/* Navigation Arrows */}
//             {images.length > 1 && (
//               <>
//                 <button
//                   onClick={prevImage}
//                   className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
//                   title="Previous page (←)"
//                 >
//                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//                   </svg>
//                 </button>
//                 <button
//                   onClick={nextImage}
//                   className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
//                   title="Next page (→)"
//                 >
//                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                   </svg>
//                 </button>
//               </>
//             )}
//           </div>

//           {/* Image Controls */}
//           <div className="p-6 bg-white border-t border-gray-200">
//             <div className="flex items-center justify-between mb-4">
//               <div className="text-sm text-gray-600">
//                 Page {currentImageIndex + 1} of {images.length}
//               </div>
//               <div className="flex items-center gap-2">
//                 <button
//                   onClick={prevImage}
//                   disabled={images.length <= 1}
//                   className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
//                 >
//                   Previous
//                 </button>
//                 <button
//                   onClick={nextImage}
//                   disabled={images.length <= 1}
//                   className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
//                 >
//                   Next
//                 </button>
//               </div>
//             </div>

//             {/* Thumbnail Strip */}
//             {images.length > 1 && (
//               <div className="border-t border-gray-200 pt-4">
//                 <div className="flex gap-2 overflow-x-auto pb-2">
//                   {images.map((image, index) => (
//                     <button
//                       key={index}
//                       onClick={() => goToImage(index)}
//                       className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
//                         index === currentImageIndex 
//                           ? 'border-blue-500 ring-2 ring-blue-200' 
//                           : 'border-gray-300 hover:border-gray-400'
//                       }`}
//                     >
//                       <img
//                         src={image}
//                         alt={`Page ${index + 1}`}
//                         className="w-full h-full object-cover"
//                         loading="lazy"
//                       />
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

'use client';

import { useState, useEffect, use } from 'react';
import { useSearchParams } from 'next/navigation';

export default function ChapterPage({ params }) {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const searchParams = useSearchParams();
  
  // Unwrap params using React.use() for newer Next.js versions
  const resolvedParams = use(params);
  const chapterId = resolvedParams?.id;
  const title = searchParams?.get('title') || `Chapter ${chapterId}`;
  const folder = searchParams?.get('folder') || `/class10/CH_${chapterId}`;

  // Load images when component mounts
  useEffect(() => {
    if (chapterId) {
      loadImages();
    }
  }, [chapterId, folder]);

  const loadImages = async () => {
    setLoading(true);
    setError(null);
    const foundImages = [];
    
    try {
      // Try to load images with the naming pattern CH_X_page-0001, CH_X_page-0002, etc.
      const extensions = ['jpg', 'jpeg', 'png', 'webp'];
      const chapterNum = chapterId.toString().padStart(1, '0');
      
      // Try up to 50 pages (you can adjust this number)
      for (let i = 1; i <= 50; i++) {
        const pageNum = i.toString().padStart(4, '0');
        
        for (const ext of extensions) {
          const imagePath = `${folder}/CH_${chapterNum}_page-${pageNum}.${ext}`;
          
          try {
            // Check if image exists
            const response = await fetch(imagePath, { method: 'HEAD' });
            if (response.ok) {
              foundImages.push(imagePath);
              break; // Found this page, move to next page number
            }
          } catch (error) {
            // Image doesn't exist, continue
            continue;
          }
        }
      }
      
      setImages(foundImages);
    } catch (err) {
      setError('Failed to load images');
      console.error('Error loading images:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading chapter...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Error Loading Chapter</h1>
          <p className="text-gray-600 mb-6">{error}</p>
          <button
            onClick={loadImages}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded font-medium transition-colors mr-4"
          >
            Retry
          </button>
          <button
            onClick={() => window.history.back()}
            className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded font-medium transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  if (images.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">No Images Found</h1>
          <p className="text-gray-600 mb-6">
            No images were found for {title}.
          </p>
          <button
            onClick={() => window.history.back()}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded font-medium transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Simple Header */}
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-semibold text-gray-900">{title}</h1>
            <p className="text-sm text-gray-600">{images.length} pages</p>
          </div>
          <button
            onClick={() => window.history.back()}
            className="text-gray-600 hover:text-gray-800 px-3 py-1 rounded hover:bg-gray-100 transition-colors flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back
          </button>
        </div>
      </div>

      {/* Simple Image Flow */}
      <div className="max-w-4xl mx-auto px-4 py-6">
        {images.map((image, index) => (
          <div key={index} className="mb-4">
            <img
              src={image}
              alt={`Page ${index + 1}`}
              className="w-full h-auto rounded-lg shadow-sm"
              loading={index === 0 ? "eager" : "lazy"}
              onError={(e) => {
                console.error('Failed to load image:', image);
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}