import { NextResponse } from 'next/server'
import prisma from '@/utils/connect'
import { getAuthSession } from '@/utils/auth'

// GET ALL COMMENTS FOR A POST

export const GET = async (req) => {
  const { searchParams } = new URL(req.url)
  const postSlug = searchParams.get('postSlug')
  try {
    const comments = await prisma.comment.findMany({
      where: { ...(postSlug && { postSlug }) },
      include: { user: true },
    })
    return new NextResponse(JSON.stringify(comments, { status: 200 }))
  } catch (error) {
    console.log(error)
    return new NextResponse(
      JSON.stringify({ message: 'something went wrong' }, { status: 500 })
    )
  }
}

//CREATE A COMMENT

export const POST = async (req) => {
  // need a server verify to check and secure backend
  const session = await getAuthSession()

  if (!session) {
    console.log('NON LOGGato')
    return new NextResponse(
      JSON.stringify({ message: 'Not Auth!' }, { status: 401 })
    )
  }

  try {
    const body = await req.json()
    const comment = await prisma.comment.create({
      data: { ...body, userEmail: session.user.email },
    })
    return new NextResponse(JSON.stringify(comment, { status: 200 }))
  } catch (error) {
    console.log(error)
    return new NextResponse(
      JSON.stringify({ message: 'something went wrong' }, { status: 500 })
    )
  }
}
