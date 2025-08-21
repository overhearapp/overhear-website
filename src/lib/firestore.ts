import { collection, getDocs, query, orderBy, limit, doc, getDoc } from 'firebase/firestore';
import { db } from './firebase';
import { constructUrl } from './constructUrl';

export interface Artist {
  id: string;
  name: string;
  title?: string;
  image?: string;
  description?: string;
  portfolio?: string;
  order?: number;
  active?: boolean;
  authorKey?: string;
}

// Helper function to check if an image is valid (from original ArtistGallery)
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

// Helper function to process image URL (from original ArtistGallery)
const processImageUrl = (imagePath: string): string => {
  return constructUrl(imagePath);
};

export async function fetchArtists(): Promise<Artist[]> {
  try {
    const snapshot = await getDocs(collection(db, 'Authors'));
    
    const artists: Artist[] = snapshot.docs.map(doc => {
      const data = doc.data();
      const image = data.image || '';
      
      // Only include authors with valid images
      if (image && isValidImage(image)) {
        return {
          id: doc.id,
          name: data.name || '',
          title: data.title || '',
          image: processImageUrl(image),
          description: data.description || '',
          portfolio: data.portfolio || '',
          order: data.order || 0,
          active: data.active !== false, // Default to true if not specified
          authorKey: data.authorKey || doc.id
        };
      } else {
        return null; // Will be filtered out
      }
    }).filter(Boolean) as Artist[]; // Remove null values
    
    return artists;
    
  } catch (error) {
    throw new Error('Failed to fetch authors');
  }
}

export async function fetchArtistById(id: string): Promise<Artist | null> {
  try {
    const artistRef = doc(db, 'artists', id);
    const artistDoc = await getDoc(artistRef);
    
    if (artistDoc.exists()) {
      const data = artistDoc.data();
      return {
        id: artistDoc.id,
        name: data.name || '',
        title: data.title || '',
        image: data.image || '',
        description: data.description || '',
        portfolio: data.portfolio || '',
        order: data.order || 0,
        active: data.active !== false
      };
    }
    
    return null;
  } catch (error) {
    console.error('Error fetching artist by ID:', error);
    throw new Error('Failed to fetch artist');
  }
}
