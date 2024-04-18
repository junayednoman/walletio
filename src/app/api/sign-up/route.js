import getDb from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
    //   try {
    //     // Fetch user data from your database or use dummy data
    //     const db = getDb(); // Use your function to get the database connection
    //     const users = await db.collection('users').find().toArray(); // Example query to fetch users

    //     res.status(200).json(users); // Send the user data as JSON response
    //   } catch (error) {
    //     console.error('Error fetching users:', error);
    //     res.status(500).json({ error: 'Internal Server Error' });
    //   }
   return NextResponse.json({ hello: "Hellos" })
}