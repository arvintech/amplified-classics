import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email, name, org, source } = body

    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { ok: false, error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // TODO: Integrate with your email service (e.g., Mailchimp, ConvertKit, SendGrid)
    // For now, we'll just log it and return success
    console.log('New subscription:', { email, name, org, source })

    // In production, you would:
    // 1. Add to email list
    // 2. Send welcome email with the PDF sampler
    // 3. Add to CRM/database

    return NextResponse.json({ 
      ok: true, 
      message: 'Successfully subscribed' 
    })
  } catch (error) {
    console.error('Subscription error:', error)
    return NextResponse.json(
      { ok: false, error: 'Something went wrong' },
      { status: 500 }
    )
  }
}

