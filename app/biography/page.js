export const metadata = {
  title: "Biography",
  description:
    "The life story of Tim Curry, from a Cheshire childhood through the Royal Shakespeare Company, The Rocky Horror Show, decades of unforgettable villains, and his later years.",
};

const chapters = [
  {
    era: "1946–1967",
    title: "Early Life",
    body: `Tim Curry was born on April 19, 1946, in Grappenhall, Cheshire, England. His
    father was a Methodist minister who served as a chaplain in the Royal
    Navy, and the family moved frequently during his childhood. He studied
    drama and English at the University of Birmingham, where he first
    performed on stage — an early sign of the theatrical career to come.`,
  },
  {
    era: "1968–1973",
    title: "Stage Beginnings",
    body: `Curry cut his teeth in British repertory theatre, appearing with the
    Royal Shakespeare Company early in his career. In 1973 he originated the
    role that would define the rest of his life: Dr. Frank-N-Furter in the
    original London stage production of The Rocky Horror Show at the Royal
    Court Theatre. His performance — magnetic, funny, and entirely
    unafraid — turned a cult fringe musical into a phenomenon.`,
  },
  {
    era: "1975–1981",
    title: "Rocky Horror & Broadway",
    body: `Curry reprised Frank-N-Furter for the 1975 film adaptation, The Rocky
    Horror Picture Show, which flopped on initial release before becoming
    one of the most beloved cult films of all time on the midnight-movie
    circuit. In 1980 he crossed to Broadway to originate the role of
    Wolfgang Amadeus Mozart in the original production of Amadeus, opposite
    Ian McKellen's Salieri, earning his first Tony Award nomination.`,
  },
  {
    era: "1982–1989",
    title: "Building a Screen Career",
    body: `Curry became a fixture of 1980s cinema, playing the conniving Rooster
    Hannigan in Annie (1982), the terrifying and seductive Darkness in
    Ridley Scott's Legend (1985), and — most famously — Wadsworth the
    butler in the cult comedy Clue (1985), a performance built almost
    entirely on breathless, rapid-fire narration.`,
  },
  {
    era: "1990–1996",
    title: "The Character Actor's Golden Era",
    body: `The 1990s cemented Curry as one of the screen's great character actors.
    He terrified millions as Pennywise the Dancing Clown in the 1990
    television adaptation of Stephen King's It, then pivoted to comedy as
    the fussy hotel concierge in Home Alone 2: Lost in New York (1992). He
    brought icy grandeur to Cardinal Richelieu in The Three Musketeers
    (1993) and warmth and swagger to Long John Silver in Muppet Treasure
    Island (1996) — a performance widely considered one of the best in the
    franchise.`,
  },
  {
    era: "1992–2004",
    title: "A Voice for Animation",
    body: `Alongside his live-action work, Curry became a favorite voice actor.
    He voiced the menacing spirit of pollution, Hexxus, in FernGully: The
    Last Rainforest (1992), and spent years as the booming, adventurous
    naturalist Nigel Thornberry on Nickelodeon's The Wild Thornberrys
    (1998–2004) — a role that introduced him to an entirely new generation.`,
  },
  {
    era: "2005",
    title: "Back to Broadway",
    body: `Curry returned to Broadway as King Arthur in Monty Python's Spamalot in
    2005, earning a second Tony Award nomination and reminding audiences
    that his stage work was every bit as sharp as his screen career.`,
  },
  {
    era: "2012–present",
    title: "Later Years",
    body: `In 2012, Curry suffered a serious stroke that left him using a
    wheelchair and largely ended his on-camera acting career. He has
    continued to contribute voice work when possible, including reprising
    Dr. Nefarious for the Ratchet & Clank video game series, and has
    appeared at public events celebrating his legacy. His decades of work
    continue to introduce him to new fans through frequent revivals,
    reissues, and reruns.`,
  },
];

export default function BiographyPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <p className="text-center font-serif text-xs uppercase tracking-[0.4em] text-gold-soft">
        The Story So Far
      </p>
      <h1 className="mt-4 text-center font-serif text-4xl text-paper sm:text-5xl">
        Biography
      </h1>
      <p className="mx-auto mt-6 max-w-xl text-center text-paper/70">
        From a Cheshire vicarage to the West End, Broadway, and Hollywood —
        the story of an actor who never played it safe.
      </p>

      <div className="mt-16 space-y-14">
        {chapters.map((chapter) => (
          <section key={chapter.title} className="border-l-2 border-gold/30 pl-6">
            <p className="text-xs uppercase tracking-[0.2em] text-gold-soft/80">
              {chapter.era}
            </p>
            <h2 className="mt-2 font-serif text-2xl text-paper">
              {chapter.title}
            </h2>
            <p className="mt-4 leading-relaxed text-paper/75">
              {chapter.body}
            </p>
          </section>
        ))}
      </div>
    </div>
  );
}
