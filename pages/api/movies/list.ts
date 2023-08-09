import { NextApiRequest, NextApiResponse } from "next"
import { getServerSession } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]"
import { getMoviesList } from "@/lib/movies"

export default async function listMovies(req: NextApiRequest, res:
  NextApiResponse
) {
  const session = await getServerSession(req, res, authOptions)

  if (session) {
    res.send({
      movies: getMoviesList(),
    })
  } else {
    res.send({
      error: "You must sign in to view movies.",
    })
  }
}
