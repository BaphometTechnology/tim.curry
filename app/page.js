import Link from "next/link";

const highlights = [
  {
    role: "Dr. Frank-N-Furter",
    work: "The Rocky Horror Picture Show",
    year: "1975",
    note: "A sweet transvestite from Transsexual, Transylvania — the stage role, reprised on film, that made him a cult icon overnight.",
  },
  {
    role: "Wadsworth",
    work: "Clue",
    year: "1985",
    note: "The butler who doesn't just serve the story — he narrates it, sprints through it, and re-explains it three different ways.",
  },
  {
    role: "Pennywise",
    work: "It",
    year: "1990",
    note: "A children's miniseries villain so effective he rewired an entire generation's relationship with storm drains.",
  },
  {
    role: "Cardinal Richelieu",
    work: "The Three Musketeers",
    year: "1993",
    note: "Velvet-voiced villainy played with total conviction and just enough relish to be delicious.",
  },
  {
    role: "Long John Silver",
    work: "Muppet Treasure Island",
    year: "1996",
    note: "Proof that a great pirate performance works exactly as well opposite felt as it does opposite flesh and blood.",
  },
  {
    role: "Nigel Thornberry",
    work: "The Wild Thornberrys",
    year: "1998–2004",
    note: "SMASHING! One of animation's great documentarian fathers, voiced with unmistakable, booming glee.",
  },
];

const facts = [
  { label: "Born", value: "April 19, 1946 · Grappenhall, England" },
  { label: "Breakthrough", value: "The Rocky Horror Show, 1973" },
  { label: "Stage", value: "Two-time Tony Award nominee" },
  { label: "Range", value: "Villains, butlers, pirates, cardinals & clowns" },
];

export default function Home() {
  return (
    <div>
      <section className="curtain-backdrop relative overflow-hidden border-b border-gold/20">
        <div className="spotlight absolute inset-0" />
        <div className="relative mx-auto max-w-4xl px-6 py-28 text-center sm:py-36">
          <p className="font-serif text-xs uppercase tracking-[0.4em] text-gold-soft">
            A Life on Stage &amp; Screen
          </p>
          <h1 className="mt-6 font-serif text-5xl leading-tight text-paper text-balance sm:text-7xl">
            Tim Curry
          </h1>
          <p className="mt-4 font-serif text-lg italic text-gold-soft/90 sm:text-xl">
            Actor. Singer. One of a kind.
          </p>
          <p className="mx-auto mt-8 max-w-2xl text-balance text-paper/80 sm:text-lg">
            For five decades Tim Curry has slipped between menace and
            mischief with equal relish — from the fishnet-clad doctor who
            made him a cult legend, to the butler who narrated a murder, the
            clown who haunted a town, and the pirate who charmed a crew of
            Muppets. This is a fan-made tribute to his work and life.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/filmography"
              className="rounded-full bg-gold px-6 py-3 text-sm font-semibold uppercase tracking-widest text-ink transition-colors hover:bg-gold-soft"
            >
              Explore the Filmography
            </Link>
            <Link
              href="/biography"
              className="rounded-full border border-gold/50 px-6 py-3 text-sm font-semibold uppercase tracking-widest text-gold-soft transition-colors hover:border-gold hover:text-gold"
            >
              Read the Biography
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-gold/10 bg-ink-soft">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 px-6 py-12 sm:grid-cols-4">
          {facts.map((fact) => (
            <div key={fact.label} className="text-center sm:text-left">
              <p className="text-xs uppercase tracking-[0.2em] text-gold-soft/80">
                {fact.label}
              </p>
              <p className="mt-2 text-sm text-paper/85 sm:text-base">
                {fact.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="text-center">
          <h2 className="font-serif text-3xl text-paper sm:text-4xl">
            Signature Roles
          </h2>
          <p className="mt-3 text-paper/60">
            A handful of the performances he&rsquo;s best remembered for.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.role}
              className="rounded-lg border border-gold/15 bg-ink-soft p-6 transition-colors hover:border-gold/40"
            >
              <p className="font-serif text-xl text-gold-soft">{item.role}</p>
              <p className="mt-1 text-sm uppercase tracking-widest text-paper/50">
                {item.work} &middot; {item.year}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-paper/75">
                {item.note}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-gold/10 bg-ink-soft">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <h2 className="font-serif text-3xl text-paper sm:text-4xl">
            Why He Endures
          </h2>
          <p className="mt-6 text-balance leading-relaxed text-paper/75">
            Few performers have moved as freely between camp and menace, or
            between the West End and the Muppets, without ever losing their
            own unmistakable voice. Tim Curry made a career of roles that
            could have been throwaway villains or one-note gags in lesser
            hands, and turned nearly every one of them into something people
            still quote decades later.
          </p>
        </div>
      </section>
    </div>
  );
}
