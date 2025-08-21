'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

// Component to test if an image loads successfully
const ImageWithFallback: React.FC<{ 
  src: string; 
  alt: string; 
  className: string;
  onImageError: () => void;
}> = ({ src, alt, className, onImageError }) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  if (imageError) {
    return null; // Don't render anything if image fails to load
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onLoad={() => setImageLoaded(true)}
      onError={() => {
        setImageError(true);
        onImageError(); // Notify parent that image failed
      }}
      style={{ display: imageLoaded ? 'block' : 'none' }}
    />
  );
};

interface Artist {
  id: string;
  name: string;
  title: string;
  image: string;
  description: string;
  portfolio?: string;
}

interface ArtistGalleryProps {
  title?: string;
  subtitle?: string;
  backgroundColor?: string;
}

const ArtistGallery: React.FC<ArtistGalleryProps> = ({
  title = "Meet Our Artists",
  subtitle = "The creative minds behind OVERHEAR",
  backgroundColor = "#285092"
}) => {
  const [artists, setArtists] = useState<Artist[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [failedImages, setFailedImages] = useState<Set<string>>(new Set());

  useEffect(() => {
    const fetchArtists = async () => {
      try {
        const response = await fetch('/api/artists');
        
        if (!response.ok) {
          throw new Error('Failed to fetch artists');
        }
        
        const data = await response.json();
        setArtists(data.artists || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchArtists();
  }, []);

  if (loading) {
    return (
      <section 
        className="py-16 lg:py-24"
        style={{ backgroundColor }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">{title}</h2>
            <p className="text-white/80 text-lg">{subtitle}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="w-full h-64 bg-white/20 rounded-lg mb-4"></div>
                <div className="h-4 bg-white/20 rounded mb-2"></div>
                <div className="h-3 bg-white/10 rounded w-3/4"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section 
        className="py-16 lg:py-24"
        style={{ backgroundColor }}
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-white/80">Unable to load artists at this time.</p>
        </div>
      </section>
    );
  }

  return (
    <section 
      className="py-16 lg:py-24"
      style={{ backgroundColor }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">{title}</h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">{subtitle}</p>
        </div>

        {/* Debug Info */}
        {artists.length === 0 && (
          <div className="text-center mb-8">
            <p className="text-white/60 text-sm">No artists found. Debug info:</p>
            <p className="text-white/60 text-xs">Artists array length: {artists.length}</p>
            <p className="text-white/60 text-xs">Loading: {loading.toString()}</p>
            <p className="text-white/60 text-xs">Error: {error || 'none'}</p>
          </div>
        )}

        {/* Artists Grid - 2 Rows with Horizontal Scroll */}
        <div className="-mx-6 lg:-mx-[calc((100vw-70rem)/2)]">
          {/* Filter artists with images */}
          {(() => {
            const handleImageError = (artistId: string) => {
              setFailedImages(prev => new Set(prev).add(artistId));
            };
            
            const artistsWithImages = artists.filter(artist => artist.image && !failedImages.has(artist.id));
            const firstRow = artistsWithImages.slice(0, Math.ceil(artistsWithImages.length / 2));
            const secondRow = artistsWithImages.slice(Math.ceil(artistsWithImages.length / 2));
            
            return (
              <>
                {/* First row */}
                <div className="flex gap-6 overflow-hidden pb-4 px-6 lg:px-[calc((100vw-80rem)/2+1.5rem)]">
                  <div className="flex gap-6 animate-scroll">
                    {firstRow.map((artist) => (
                      <div 
                        key={artist.id} 
                        className="group flex-shrink-0"
                      >
                        <div className="w-48 h-48 relative overflow-hidden rounded-lg">
                          <ImageWithFallback
                            src={artist.image}
                            alt={artist.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            onImageError={() => handleImageError(artist.id)}
                          />
                        </div>
                      </div>
                    ))}
                    {/* Duplicate for seamless loop */}
                    {firstRow.map((artist) => (
                      <div 
                        key={`${artist.id}-duplicate`} 
                        className="group flex-shrink-0"
                      >
                        <div className="w-48 h-48 relative overflow-hidden rounded-lg">
                          <ImageWithFallback
                            src={artist.image}
                            alt={artist.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            onImageError={() => handleImageError(artist.id)}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Second row */}
                <div className="flex gap-6 overflow-hidden pb-4 px-6 lg:px-[calc((100vw-80rem)/2+1.5rem)]">
                  <div className="flex gap-6 animate-scroll-reverse">
                    {secondRow.map((artist) => (
                      <div 
                        key={artist.id} 
                        className="group flex-shrink-0"
                      >
                        <div className="w-48 h-48 relative overflow-hidden rounded-lg">
                          <ImageWithFallback
                            src={artist.image}
                            alt={artist.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            onImageError={() => handleImageError(artist.id)}
                          />
                        </div>
                      </div>
                    ))}
                    {/* Duplicate for seamless loop */}
                    {secondRow.map((artist) => (
                      <div 
                        key={`${artist.id}-duplicate`} 
                        className="group flex-shrink-0"
                      >
                        <div className="w-48 h-48 relative overflow-hidden rounded-lg">
                          <ImageWithFallback
                            src={artist.image}
                            alt={artist.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            onImageError={() => handleImageError(artist.id)}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            );
          })()}
        </div>
      </div>
    </section>
  );
};

export default ArtistGallery;
