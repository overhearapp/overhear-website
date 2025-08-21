// Utility function to construct Firebase Storage URLs
export function constructUrl(imagePath: string): string {
  // If it's already a full URL, return as is
  if (imagePath.startsWith('http')) {
    return imagePath;
  }
  
  // If it's a Firebase Storage path, construct proper URL
  if (imagePath.startsWith('images/') || imagePath.startsWith('author_images/')) {
    // Replace with your actual Firebase Storage bucket
    const bucket = process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || 'your-bucket-name';
    return `https://storage.googleapis.com/${bucket}/${imagePath}`;
  }
  
  // For local assets, return as is
  return imagePath;
}
