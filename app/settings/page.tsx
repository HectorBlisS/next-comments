import Image from "next/image";
import { Suspense } from "react";

export default async function Blissmo() {
  const url = "https://rickandmortyapi.com/api/character";
  const res = await fetch(url);
  const data = await res.json();

  return (
    <div className="min-h-screen grid place-items-center">
      <h2 className="text-6xl">Rick y Morty API</h2>
      <Suspense fallback={<Spinner />}>
        <div className="flex flex-wrap gap-2">
          {data.results.map((char) => (
            <Image key={char.id} alt="avatar" src={char.image} />
          ))}
        </div>
      </Suspense>
    </div>
  );
}

const Spinner = () => (
  <>
    <div className="h-8 w-8 rounded-full border-4 m-4 border-t-indigo-500 animate-spin" />
  </>
);
