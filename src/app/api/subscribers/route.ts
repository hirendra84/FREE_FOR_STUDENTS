import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const subscribers = await prisma.subscriber.findMany({
      orderBy: {
        subscribedAt: 'desc'
      }
    });
    return NextResponse.json({ subscribers });
  } catch (error) {
    console.error("Failed to fetch subscribers:", error);
    return NextResponse.json(
      { error: "Failed to fetch subscribers" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, gradYear } = body;

    if (!name || !email || !gradYear) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Check if email already exists
    const existing = await prisma.subscriber.findUnique({
      where: { email },
    });

    if (existing) {
      return NextResponse.json(
        { error: "Email is already subscribed" },
        { status: 400 }
      );
    }

    const subscriber = await prisma.subscriber.create({
      data: {
        name,
        email,
        gradYear,
      },
    });

    return NextResponse.json({ subscriber, success: true }, { status: 201 });
  } catch (error) {
    console.error("Failed to create subscriber:", error);
    return NextResponse.json(
      { error: "Failed to save subscriber" },
      { status: 500 }
    );
  }
}
