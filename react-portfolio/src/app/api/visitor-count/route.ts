
import { NextResponse } from 'next/server';

export async function GET() {
  // In a real application, you would fetch this from a database.
  const count = 12345;
  return NextResponse.json({ count });
}
