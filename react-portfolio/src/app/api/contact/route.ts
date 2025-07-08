
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const scriptURL = 'https://script.google.com/macros/s/AKfycbzIwyP4atRrBWyTN7YovPB-FvT9l-u4jE5Pnu-J1tOPRQ1Z6_sO4BoqIJxoTyqVpKjkvA/exec';

  try {
    await fetch(scriptURL, { 
      method: 'POST', 
      body: formData,
      mode: 'no-cors',
    });
    return NextResponse.json({ message: 'Success' }, { status: 200 });
  } catch (error) {
    console.error('Error!', error);
    return NextResponse.json({ message: 'Error' }, { status: 500 });
  }
}
