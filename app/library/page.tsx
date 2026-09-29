import { BookOpen, Soup, Stars } from "lucide-react";

const books = [
  ["Brown Bear, Brown Bear", "Read 12 times", "★★★★★"],
  ["Goodnight Moon", "Read 8 times", "★★★★★"],
  ["Dear Zoo", "Read 5 times", "★★★★☆"]
];

export default function LibraryPage() {
  return (
    <>
      <header className="page-header">
        <span className="eyebrow">LIBRARY</span>
        <h1>Little Bookshelf</h1>
        <p className="muted">Keep track of favourite books and how your little one responded.</p>
      </header>
      <section className="card section-card">
        <div className="section-title"><h2>Favourite Books</h2><BookOpen size={19}/></div>
        {books.map(b => (
          <div className="book-row" key={b[0]}>
            <div><strong>{b[0]}</strong><p className="muted">{b[1]}</p></div>
            <span>{b[2]}</span>
          </div>
        ))}
      </section>
      <section className="grid">
        <article className="card stat-card"><Soup/><span className="muted">Foods Tried</span><strong className="big-value">38</strong><small className="muted">6 new this month</small></article>
        <article className="card stat-card"><Stars/><span className="muted">Milestones</span><strong className="big-value">21</strong><small className="muted">3 new this month</small></article>
      </section>
    </>
  );
}
