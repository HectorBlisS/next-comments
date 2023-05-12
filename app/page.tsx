import Image from "next/image";

export default function Home() {
  return (
    <section className="min-h-screen ">
      <main className="flex px-4 py-24 gap-4">
        <div>
          <h2 className="text-2xl">Comentarios:</h2>
          <p className="text-sm text-gray-500">Administra tus comentarios</p>
        </div>
        <input
          type="search"
          className="max-w-xs py-2 px-4 rounded-md ml-auto text-black"
          placeholder="🔍 busca entre tus comentarios"
        />
        <Button>+ Nuevo</Button>
      </main>
    </section>
  );
}

const Button = ({ ...props }: { [x]: any }) => {
  return (
    <button
      className="bg-white text-black rounded-md py-2 px-6 hover:bg-black hover:text-white border border-black hover:border-white"
      {...props}
    />
  );
};
