import Image from "next/image";
import PageWrapper from "@/components/Motion/PageWrapper";

export default function Home() {
  return (
    <PageWrapper>
      <div className="items-center justify-items-center min-h-[20vh] p-8 pb-20 gap-16">
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">

          <section className="text-center">
            <h1 className="text-4xl font-bold">Turbopack</h1>
            <p className="mt-4 text-lg">Frontend Developer | React | Next.js | UI/UX</p>
          </section>

        </main>
      </div>
    </PageWrapper>
  );
}
