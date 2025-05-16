import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { imageUrl } = await req.json()

    // For now, we mock the AI analysis with a random roast
    const roasts = [
      "Bro sits like he's melting into the chair 💀",
      "That posture screams 'I've given up' 😂",
      "Your spine called. It wants a refund.",
      "Are you practicing to become a shrimp or what?",
      "Even bananas have better posture 🍌",
      "You bend more than my will to live after Monday meetings."
    ]

    const randomRoast = roasts[Math.floor(Math.random() * roasts.length)]

    return NextResponse.json({ roast: randomRoast })
  } catch (error) {
    console.error('Error analyzing pose:', error)
    return NextResponse.json({ roast: 'Oops! Something went wrong.' }, { status: 500 })
  }
}
