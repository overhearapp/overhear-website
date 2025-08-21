import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { AuthorManager } from '../../models/AuthorManager';
import { IAuthor } from '../../types/Author';
import { constructUrl } from '../../utilities/constructUrl';

interface ArtistGalleryProps {
  title?: string;
  subtitle?: string;
  backgroundColor?: string;
  textColor?: string;
  imageHeight?: { xs: string; md: string };
  gap?: { xs: string; md: string };
  borderRadius?: string;
  images?: string[];
  showOnlyWithImages?: boolean;
  fallbackImages?: string[];
}

const ArtistGallery: React.FC<ArtistGalleryProps> = ({
  title,
  subtitle,
  backgroundColor = "transparent",
  textColor = 'white',
  imageHeight = { xs: '120px', md: '150px' },
  gap = { xs: '4px', md: '6px' },
  borderRadius = '4px',
  images = [],
  showOnlyWithImages = true,
  fallbackImages = []
}) => {
  const [authors, setAuthors] = useState<IAuthor[]>([]);
  const [loading, setLoading] = useState(true);

  // Helper function to check if an image is valid
  const isValidImage = (imagePath: string): boolean => {
    if (!imagePath || imagePath.trim() === '') return false;
    
    // Filter out default user.svg images and unwanted content
    if (imagePath.includes('user.svg') || imagePath.includes('default-user')) return false;
    if (imagePath.includes('-pies-') || imagePath.includes('TransitPin')) return false;
    if (imagePath.includes('waatp logo')) return false;
    
    // Allow Firebase Storage paths - both old and new formats
    if (imagePath.startsWith('images/author/')) return true;
    if (imagePath.startsWith('author_images/')) return true;
    
    // Allow full URLs
    if (imagePath.startsWith('http')) return true;
    
    // Allow local assets
    if (imagePath.startsWith('/assets/')) return true;
    
    // Filter out everything else
    return false;
  };

  // Helper function to process image URL
  const processImageUrl = (imagePath: string): string => {
    // If it's already a full URL, return as is
    if (imagePath.startsWith('http')) return imagePath;
    
    // If it's a Firebase Storage path, construct proper URL
    if (imagePath.startsWith('images/') || imagePath.startsWith('author_images/')) {
      return constructUrl(imagePath);
    }
    
    // For local assets, return as is
    return imagePath;
  };

  // Fallback artist images if no Firebase images are available
  const defaultFallbackImages = [
    '/assets/overhear-assets/images/artists/emma bare fiction - poets, prattlers and pandemonialists.jpg',
    '/assets/overhear-assets/images/artists/Greg Leadbetter.jpg',
    '/assets/overhear-assets/images/artists/Romalyn Ante.jpg',
    '/assets/overhear-assets/images/artists/DSCF0023v3 - Jeff Phelps.jpg',
    '/assets/overhear-assets/images/artists/IMG-20190305-WA0026 - Hannah Taylor.jpg',
    '/assets/overhear-assets/images/artists/IMG_4785 - Kuli Kohli.jpg',
    '/assets/overhear-assets/images/artists/Poets online-11 - Dave Pitt.jpg',
    '/assets/overhear-assets/images/artists/Jacqui Rowe2.jpeg',
    '/assets/overhear-assets/images/artists/Ashok Patel.jpg',
    '/assets/overhear-assets/images/artists/Heddwen Creaney November 2017.JPG',
    '/assets/overhear-assets/images/artists/Nafeesa_edited.jpg',
    '/assets/overhear-assets/images/artists/Shaun Hill - CommonWord.jpg',
    '/assets/overhear-assets/images/artists/sofa - steve pottinger.jpeg',
    '/assets/overhear-assets/images/artists/20190913_184656.jpg',
    '/assets/overhear-assets/images/artists/20191101_144440 - Leanne Cooper.jpg',
    '/assets/overhear-assets/images/artists/A405E76B-9E96-45C0-A538-A5B503EC9D03.jpg'
  ];

  useEffect(() => {
    const fetchAuthors = async () => {
      try {
        setLoading(true);
        const allAuthors = await AuthorManager.getAllAuthors();
        // Filter authors with valid images
        
        // Filter authors based on preferences and image validity
        const filteredAuthors = showOnlyWithImages 
          ? allAuthors.filter(author => author.image && author.image.trim() !== '' && isValidImage(author.image))
          : allAuthors.filter(author => !author.image || isValidImage(author.image));
        

        
        setAuthors(filteredAuthors);
      } catch (error) {
        console.error('Error fetching authors:', error);
        setAuthors([]);
      } finally {
        setLoading(false);
      }
    };

    fetchAuthors();
  }, [showOnlyWithImages]);

  // Helper function to remove duplicates while preserving order
  const removeDuplicates = (imageArray: string[]): string[] => {
    const seen = new Set<string>();
    return imageArray.filter(image => {
      if (seen.has(image)) {
        return false;
      }
      seen.add(image);
      return true;
    });
  };

  // Determine which images to display
  const getImagesToDisplay = (): string[] => {
    if (images.length > 0) {
      // Use manually provided images, but still filter and process them
      const processedImages = images
        .filter(isValidImage)
        .map(processImageUrl);
      return removeDuplicates(processedImages);
    }
    
    if (authors.length > 0) {
      // Use Firebase author images, filtered and processed
      const validAuthors = authors.filter(author => author.image && isValidImage(author.image));
      const processedImages = validAuthors.map(author => processImageUrl(author.image!));
      
      if (processedImages.length > 0) {
        return removeDuplicates(processedImages);
      }
    }
    
    // Use fallback images
    const fallbackToUse = fallbackImages.length > 0 ? fallbackImages : defaultFallbackImages;
    return removeDuplicates(fallbackToUse);
  };

  const artistImages = getImagesToDisplay();

  return (
    <Box sx={{ 
      backgroundColor,
      py: { xs: 4, md: 6 }
    }}>
      {/* Title & Subtitle */}
      {(title || subtitle) && (
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          {title && (
            <Typography 
              variant="h2" 
              sx={{ 
                fontSize: { xs: '2rem', md: '3rem' }, 
                mb: 2,
                color: textColor
              }}
            >
              {title}
            </Typography>
          )}
          {subtitle && (
            <Typography 
              variant="h6" 
              sx={{ 
                opacity: 0.9,
                color: textColor,
                maxWidth: '600px',
                mx: 'auto'
              }}
            >
              {subtitle}
            </Typography>
          )}
        </Box>
      )}

      {/* Full-width square image gallery */}
      <Box sx={{ 
        width: '100vw',
        marginLeft: 'calc(-50vw + 50%)',
        overflow: 'hidden',
        height: { xs: 240, md: 280 }
      }}>
        {loading ? (
          // Loading skeleton
          <Box sx={{
            display: 'grid',
            gridTemplateRows: 'repeat(2, 1fr)',
            gridAutoFlow: 'column',
            gap,
            height: '100%',
            padding: gap
          }}>
            {Array.from({ length: 20 }).map((_, index) => (
              <Box
                key={`loading-${index}`}
                sx={{
                  width: { xs: 120, md: 140 },
                  height: { xs: 120, md: 140 },
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  borderRadius,
                  animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                  '@keyframes pulse': {
                    '0%, 100%': { opacity: 1 },
                    '50%': { opacity: 0.5 }
                  }
                }}
              />
            ))}
          </Box>
        ) : (
          <Box
            sx={{
              display: 'grid',
              gridTemplateRows: 'repeat(2, 1fr)',
              gridAutoFlow: 'column',
              gap,
              height: '100%',
              width: 'fit-content',
              padding: gap,
              animation: 'scroll 60s linear infinite',
              '@keyframes scroll': {
                '0%': { transform: 'translateX(0)' },
                '100%': { transform: 'translateX(-50%)' }
              }
            }}
          >
            {/* First set of images */}
            {artistImages.map((image, index) => {
              const author = authors.find(a => a.image === image);
              const altText = author?.name ? `${author.name}` : `Artist ${index + 1}`;
              
              return (
                <Box
                  key={author?.authorKey || `image-${index}`}
                  component="img"
                  src={image}
                  alt={altText}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                  sx={{
                    width: { xs: 120, md: 140 },
                    height: { xs: 120, md: 140 },
                    objectFit: 'cover',
                    borderRadius,
                    display: 'block',
                    backgroundColor: '#f5f5f5'
                  }}
                />
              );
            })}
            {/* Duplicate set for seamless scrolling */}
            {artistImages.map((image, index) => {
              const author = authors.find(a => a.image === image);
              const altText = author?.name ? `${author.name}` : `Artist ${index + 1}`;
              
              return (
                <Box
                  key={`duplicate-${author?.authorKey || `image-${index}`}`}
                  component="img"
                  src={image}
                  alt={altText}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                  sx={{
                    width: { xs: 120, md: 140 },
                    height: { xs: 120, md: 140 },
                    objectFit: 'cover',
                    borderRadius,
                    display: 'block',
                    backgroundColor: '#f5f5f5'
                  }}
                />
              );
            })}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default ArtistGallery;
