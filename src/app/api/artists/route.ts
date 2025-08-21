import { NextResponse } from 'next/server';
import { fetchArtists } from '@/lib/firestore';

export async function GET() {
  try {
    console.log('API: Starting to fetch artists...');
    const artists = await fetchArtists();
    console.log('API: Fetched artists:', artists.length);
    console.log('API: First artist:', artists[0]);
    
    return NextResponse.json({ artists });
  } catch (error) {
    console.error('API: Error fetching artists:', error);
    return NextResponse.json(
      { error: 'Failed to fetch artists' },
      { status: 500 }
    );
  }
}
