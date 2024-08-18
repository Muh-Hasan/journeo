import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { eq } from 'drizzle-orm';
import { NextResponse } from 'next/server';

import { db } from '@/drizzle/db';
import { users } from '@/drizzle/schema';

export async function GET() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (!user || user == null || !user.id)
    throw new Error(`something went wrong with authentication${user}`);

  const dbUser = await db.select().from(users).where(eq(users.id, user.id));

  if (!dbUser) {
    await db.insert(users).values({
      id: user.id,
      firstName: user.given_name,
      lastName: user.given_name,
      email: user.email,
    });
  }

  return NextResponse.redirect('http://localhost:3000/trips');
}
