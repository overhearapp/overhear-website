import { NextResponse } from 'next/server';
import { fetchArtists } from '@/lib/firestore';

export async function GET() {
  try {
    const artists = await fetchArtists();
    
    return NextResponse.json({ artists });
  } catch (error) {
    console.error('Error fetching artists:', error);
    return NextResponse.json(
      { error: 'Failed to fetch artists' },
      { status: 500 }
    );
  }
}
