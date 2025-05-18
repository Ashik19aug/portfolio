import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">

        <section className="text-center">
          <h1 className="text-4xl font-bold">Turbopack</h1>
          <p className="mt-4 text-lg">Frontend Developer | React | Next.js | UI/UX</p>
        </section>

      </main>
    </div>
  );
}
