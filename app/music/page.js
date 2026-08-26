export const metadata = {
  title: "Music",
  description:
    "Tim Curry's recording career, from his glam-rock solo albums to The Rocky Horror Picture Show soundtrack and his spoken-word narrations.",
};

const albums = [
  {
    year: "1978",
    title: "Read My Lips",
    note: "Curry's debut solo album, leaning into glam and rock and roll and produced with the theatrical flair of his stage work.",
  },
  {
    year: "1979",
    title: "Fearless",
    note: "His second studio album, featuring the single \"I Do the Rock,\" which became a modest chart hit and remains a cult favorite.",
  },
];

const recordings = [
  {
    title: "The Rocky Horror Picture Show Soundtrack",
    note: "Curry's performances of \"Sweet Transvestite\" and \"I Can Make You a Man,\" among others, remain the definitive versions of Richard O'Brien's songs.",
  },
  {
    title: "Spoken-Word & Narration",
    note: "Beyond music, Curry lent his distinctive voice to numerous audiobook and narration projects, including recordings of classic children's stories, earning him a Grammy Award nomination for his work.",
  },
];

export default function MusicPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <p className="text-center font-serif text-xs uppercase tracking-[0.4em] text-gold-soft">
        A Voice for Song
      </p>
      <h1 className="mt-4 text-center font-serif text-4xl text-paper sm:text-5xl">
        Music
      </h1>
      <p className="mx-auto mt-6 max-w-xl text-center text-paper/70">
        Long before &ldquo;Sweet Transvestite&rdquo; became a showstopper,
        Curry was a trained singer — and he kept recording throughout his
        acting career.
      </p>

      <section className="mt-16">
        <h2 className="font-serif text-2xl text-paper">Solo Albums</h2>
        <div className="mt-6 space-y-6">
          {albums.map((album) => (
            <div
              key={album.title}
              className="rounded-lg border border-gold/15 bg-ink-soft p-6"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-gold-soft/80">
                {album.year}
              </p>
              <h3 className="mt-1 font-serif text-xl text-paper">
                {album.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-paper/75">
                {album.note}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="font-serif text-2xl text-paper">
          Soundtracks &amp; Recordings
        </h2>
        <div className="mt-6 space-y-6">
          {recordings.map((rec) => (
            <div
              key={rec.title}
              className="rounded-lg border border-gold/15 bg-ink-soft p-6"
            >
              <h3 className="font-serif text-xl text-paper">{rec.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-paper/75">
                {rec.note}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
