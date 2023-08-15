import { Taviraj } from "next/font/google";
import classnames from "~/utils/classnames";

const serif = Taviraj({
  subsets: ["latin"],
  weight: ["300"],
});

export default function Home() {
  return (
    <main>
      <section className="bg-black-coral relative">
        <figure>
          <img
            src="/pattern.svg"
            alt="Pattern"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </figure>
        <div className="container relative mx-auto h-screen px-4">
          <div className="text-silver my-auto flex h-full w-full max-w-4xl flex-col justify-center">
            <h1
              className={classnames(
                "text-4xl text-zinc-50 sm:text-5xl",
                serif.className,
              )}
            >
              We are Acquis, <br /> a bespoke software development firm.
            </h1>

            <p className="mt-10 max-w-2xl text-sm uppercase tracking-wide text-zinc-400">
              Catering to the modern technology needs of businesses, we build
              custom software solutions that are scalable, secure and
              user-friendly.
            </p>

            <div>
              <button className="border-silver text-silver hover:text-cyber-yellow hover:border-cyber-yellow mt-8 border px-6 py-3 text-sm uppercase transition ease-out">
                Get in touch
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
