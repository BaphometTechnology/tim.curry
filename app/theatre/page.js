export const metadata = {
  title: "Stage & Theatre",
  description:
    "Tim Curry's stage career, from the Royal Shakespeare Company to the original Rocky Horror Show, Amadeus on Broadway, and Spamalot.",
};

const credits = [
  {
    year: "Early 1970s",
    title: "Royal Shakespeare Company & Repertory Theatre",
    role: "Company member",
    note: "Curry trained in British repertory theatre before his breakout, developing the stage presence that would define his career.",
  },
  {
    year: "1973",
    title: "The Rocky Horror Show",
    role: "Dr. Frank-N-Furter",
    venue: "Royal Court Theatre, London",
    note: "Curry originated the role of the sweet transvestite scientist in Richard O'Brien's cult musical, an instant sensation that launched him to stardom.",
  },
  {
    year: "1974–75",
    title: "The Rocky Horror Show",
    role: "Dr. Frank-N-Furter",
    venue: "King's Road Theatre & Roxy Theatre, Los Angeles",
    note: "The production transferred and toured, with Curry reprising the role before taking it to film in 1975.",
  },
  {
    year: "1980–81",
    title: "Amadeus",
    role: "Wolfgang Amadeus Mozart",
    venue: "Broadway, Broadhurst Theatre",
    note: "Curry originated the role of Mozart opposite Ian McKellen's Salieri in Peter Shaffer's play, earning a Tony Award nomination for Best Featured Actor in a Play.",
  },
  {
    year: "1992",
    title: "My Favorite Year",
    role: "Alan Swann",
    venue: "Broadway, Lincoln Center",
    note: "Curry led this musical adaptation of the 1982 film as a swashbuckling, hard-drinking movie star navigating the golden age of live television.",
  },
  {
    year: "2005",
    title: "Monty Python's Spamalot",
    role: "King Arthur",
    venue: "Broadway, Shubert Theatre",
    note: "Curry originated King Arthur in Eric Idle's Tony-winning Best Musical, receiving his second Tony Award nomination for Best Actor in a Musical.",
  },
];

export default function TheatrePage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <p className="text-center font-serif text-xs uppercase tracking-[0.4em] text-gold-soft">
        Where It Started
      </p>
      <h1 className="mt-4 text-center font-serif text-4xl text-paper sm:text-5xl">
        Stage &amp; Theatre
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-center text-paper/70">
        Long before Hollywood, Curry was a stage actor — and he never fully
        left. His theatre career spans the Royal Shakespeare Company,
        the original Rocky Horror Show, and two Tony-nominated Broadway
        performances.
      </p>

      <div className="mt-16 space-y-6">
        {credits.map((credit) => (
          <div
            key={`${credit.year}-${credit.title}`}
            className="grid gap-4 rounded-lg border border-gold/15 bg-ink-soft p-6 sm:grid-cols-[100px_1fr]"
          >
            <p className="font-serif text-lg text-gold-soft">{credit.year}</p>
            <div>
              <h2 className="font-serif text-xl text-paper">
                {credit.title}
              </h2>
              <p className="mt-1 text-sm uppercase tracking-widest text-paper/50">
                {credit.role}
                {credit.venue ? ` · ${credit.venue}` : ""}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-paper/75">
                {credit.note}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
