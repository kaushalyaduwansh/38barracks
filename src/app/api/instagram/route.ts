import { NextResponse } from 'next/server';

export async function GET() {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;
  
  if (!token) {
    return NextResponse.json({ 
        error: 'missing_token',
        message: 'Instagram integration requires an INSTAGRAM_ACCESS_TOKEN. Please generate one and add it to your .env file.' 
    }, { status: 400 });
  }

  try {
    const response = await fetch(`https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&access_token=${token}&limit=6`);
    
    if (!response.ok) {
      const errText = await response.text();
      console.error('Instagram API Error:', errText);
      throw new Error('Failed to fetch from Instagram API. Token might be invalid or expired.');
    }

    const data = await response.json();
    return NextResponse.json({ data: data.data });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}
