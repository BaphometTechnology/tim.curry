export const metadata = {
  title: "Filmography",
  description:
    "Selected film, television, and voice credits from Tim Curry's five-decade acting career.",
};

const film = [
  { year: "1975", title: "The Rocky Horror Picture Show", role: "Dr. Frank-N-Furter" },
  { year: "1981", title: "Times Square", role: "Johnny LaGuardia" },
  { year: "1982", title: "Annie", role: "Rooster Hannigan" },
  { year: "1985", title: "Clue", role: "Wadsworth" },
  { year: "1985", title: "Legend", role: "Darkness" },
  { year: "1986", title: "The Worst Witch", role: "The Grand Wizard" },
  { year: "1992", title: "Home Alone 2: Lost in New York", role: "The Concierge" },
  { year: "1993", title: "The Three Musketeers", role: "Cardinal Richelieu" },
  { year: "1995", title: "Congo", role: "Herkermer Homolka" },
  { year: "1996", title: "Muppet Treasure Island", role: "Long John Silver" },
];

const television = [
  { year: "1990", title: "It", role: "Pennywise the Dancing Clown", note: "Miniseries" },
  { year: "1998–2004", title: "The Wild Thornberrys", role: "Nigel Thornberry (voice)", note: "Series" },
];

const voice = [
  { year: "1992", title: "FernGully: The Last Rainforest", role: "Hexxus" },
  { year: "1998–2004", title: "The Wild Thornberrys", role: "Nigel Thornberry" },
  { year: "2003", title: "Rugrats Go Wild", role: "Nigel Thornberry" },
  { year: "2005–present", title: "Ratchet & Clank series", role: "Dr. Nefarious", note: "Video game franchise" },
];

function CreditTable({ rows }) {
  return (
    <div className="overflow-hidden rounded-lg border border-gold/15">
      <table className="w-full text-left text-sm">
        <tbody className="divide-y divide-gold/10">
          {rows.map((row) => (
            <tr key={`${row.year}-${row.title}`} className="hover:bg-ink-soft">
              <td className="w-28 whitespace-nowrap px-4 py-3 align-top font-serif text-gold-soft">
                {row.year}
              </td>
              <td className="px-4 py-3 align-top">
                <p className="text-paper">{row.title}</p>
                {row.note && (
                  <p className="mt-0.5 text-xs uppercase tracking-widest text-paper/40">
                    {row.note}
                  </p>
                )}
              </td>
              <td className="px-4 py-3 align-top text-paper/70">{row.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function FilmographyPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <p className="text-center font-serif text-xs uppercase tracking-[0.4em] text-gold-soft">
        Screen Credits
      </p>
      <h1 className="mt-4 text-center font-serif text-4xl text-paper sm:text-5xl">
        Film &amp; TV
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-center text-paper/70">
        A curated, non-exhaustive selection of the film, television, and
        voice roles Curry is best remembered for.
      </p>

      <div className="mt-16 space-y-16">
        <section>
          <h2 className="font-serif text-2xl text-paper">Film</h2>
          <div className="mt-6">
            <CreditTable rows={film} />
          </div>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-paper">Television</h2>
          <div className="mt-6">
            <CreditTable rows={television} />
          </div>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-paper">Voice &amp; Video Games</h2>
          <div className="mt-6">
            <CreditTable rows={voice} />
          </div>
        </section>
      </div>
    </div>
  );
}
