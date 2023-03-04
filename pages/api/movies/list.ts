import { NextApiRequest, NextApiResponse } from "next"
import { NextAuthOptions } from "next-auth"
import { getServerSession } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]"

export default async function listMovies(req: NextApiRequest, res:
  NextApiResponse
) {
  const session = await getServerSession(req, res, authOptions)

  if (session) {
    res.send({
      movies: [
        { title: "Alien vs Predator", id: 1 },
        { title: "Reservoir Dogs", id: 2 },
      ],
    })
  } else {
    res.send({
      error: "You must sign in to view movies.",
    })
  }
}
