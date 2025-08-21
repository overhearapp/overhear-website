# Firebase Setup for OVERHEAR Website

## Environment Variables

Create a `.env.local` file in the root directory with the following Firebase configuration:

```env
# Firebase Configuration
# Get these values from your Firebase project settings
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

## Firestore Database Structure

### Authors Collection

Create a collection called `authors` with the following document structure:

```json
{
  "name": "Artist Name",
  "title": "Artist Title/Role",
  "image": "https://your-image-url.com/image.jpg",
  "description": "Artist description and bio",
  "portfolio": "https://artist-portfolio.com",
  "order": 1,
  "active": true
}
```

### Field Descriptions

- **name** (string, required): Author's full name
- **title** (string, optional): Author's role or title
- **image** (string, optional): URL or Firebase Storage path to author's profile image
- **description** (string, optional): Author's bio or description
- **portfolio** (string, optional): URL to author's portfolio website
- **order** (number, optional): Display order (1, 2, 3, etc.)
- **active** (boolean, optional): Whether to display this author (default: true)
- **authorKey** (string, optional): Unique identifier for the author

## Getting Firebase Configuration

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project
3. Click the gear icon (⚙️) next to "Project Overview"
4. Select "Project settings"
5. Scroll down to "Your apps" section
6. Click the web app icon (</>)
7. Copy the configuration values to your `.env.local` file

## Security Rules

Make sure your Firestore security rules allow reading the authors collection:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /authors/{authorId} {
      allow read: if true; // Allow public read access
      allow write: if false; // No write access from client
    }
  }
}
```
