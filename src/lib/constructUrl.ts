// Utility function to construct Firebase Storage URLs
// Base URL for Firebase storage
const FIREBASE_STORAGE_BASE_URL = `https://firebasestorage.googleapis.com/v0/b/overhear-2.appspot.com/o/`;

/**
 * Constructs a full URL for a file stored in Firebase storage.
 * @param {string} filePath - The path of the file in Firebase storage.
 * @param {boolean} includeMediaParam - Whether to include the media query parameter.
 * @returns {string} The full URL of the file.
 */
export function constructUrl(filePath: string, includeMediaParam: boolean = true): string {
  // If it's already a full URL, return as is
  if (filePath.startsWith('http')) {
    return filePath;
  }
  
  // If it's a Firebase Storage path, construct proper URL
  if (filePath.startsWith('images/') || filePath.startsWith('author_images/')) {
    return `${FIREBASE_STORAGE_BASE_URL}${encodeURIComponent(filePath)}${includeMediaParam ? '?alt=media' : ''}`;
  }
  
  // For local assets, return as is
  return filePath;
}
