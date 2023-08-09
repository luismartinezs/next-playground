import Head from "next/head";

import { getMoviesList } from "@/lib/movies";
import { useEffect, useState } from "react";

export async function getStaticProps() {
  return {
    props: {
      movies: getMoviesList(),
    },
  };
}

type Movie = {
  id: number;
  title: string;
};

export default function MoviesPage({ movies }: { movies: Movie[] }) {
  const [list, setList] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchMovies() {
      setLoading(true);
      const response = await fetch("/api/movies/list");
      const data = await response.json();
      setList(data.movies);
      setLoading(false);
    }
    fetchMovies();
  }, []);

  return (
    <>
      <Head>
        <title>Movies | Next Playground</title>
        <meta name="description" content="Movies | Next Playground" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <div>Movies</div>
        <div>Movies from server</div>
        {movies && (
          <ul>
            {movies?.map((movie) => (
              <li key={movie.id}>{movie.title}</li>
            ))}
          </ul>
        )}
        <div>Movies from API</div>
        {!loading && list && (
          <ul>
            {list?.map((movie) => (
              <li key={movie.id}>{movie.title}</li>
            ))}
          </ul>
        )}
        {loading && <div>Loading client side...</div>}
      </>
    </>
  );
}
