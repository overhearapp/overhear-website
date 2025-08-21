'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

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

  useEffect(() => {
    const fetchArtists = async () => {
      try {
        const response = await fetch('/api/artists');
        if (!response.ok) {
          throw new Error('Failed to fetch artists');
        }
        const data = await response.json();
        setArtists(data.artists);
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

        {/* Artists Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {artists.map((artist) => (
            <div 
              key={artist.id} 
              className="group bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              {/* Artist Image */}
              <div className="relative mb-4">
                <div className="w-full h-64 relative overflow-hidden rounded-lg">
                  <Image
                    src={artist.image}
                    alt={artist.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
              </div>

              {/* Artist Info */}
              <div className="text-center">
                <h3 className="text-xl font-semibold text-white mb-1">
                  {artist.name}
                </h3>
                <p className="text-white/80 text-sm mb-3">
                  {artist.title}
                </p>
                <p className="text-white/70 text-sm leading-relaxed mb-4">
                  {artist.description}
                </p>
                
                {/* Portfolio Link */}
                {artist.portfolio && (
                  <a
                    href={artist.portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200"
                  >
                    View Portfolio
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArtistGallery;
