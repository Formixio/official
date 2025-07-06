'use client';
export const runtime = 'edge';

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