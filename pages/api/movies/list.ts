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

// https://nextjs.org/docs/pages/building-your-application/routing/api-routes#custom-config
export const config = {
  // runtime: 'edge', // https://nextjs.org/docs/pages/api-reference/edge often faster than Node.js-based API Routes but with some constraints https://nextjs.org/docs/pages/api-reference/edge#unsupported-apis (no native node.js APIs)
  api: {
    bodyParser: {
      sizeLimit: '1mb',
    },
    // bodyParser: false // eg to verify the raw body of a webhook request
    /**
     * , services like GitHub, when sending webhooks, also provide a signature of the webhook payload (the request body). To verify that the webhook is genuinely from GitHub (or whichever service is in question), you need to compute a signature on your end using the raw request body and compare it with the signature provided by GitHub. If you used the parsed body (which is the default behavior in Next.js), the computation wouldn't be accurate because the raw body and parsed body might differ in subtle ways, such as whitespace
     */
  },
}