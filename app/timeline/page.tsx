import { Camera, Star } from "lucide-react";

const memories = [
  { date: "Sep 28", title: "First time using a spoon", text: "She wanted to do it herself at breakfast and ended up with food everywhere." },
  { date: "Sep 24", title: "Started putting toys away", text: "When we said “time to tidy up,” she started putting blocks back in the box." },
  { date: "Sep 18", title: "Loves animal sounds", text: "She points to dogs and tries to copy their sound." }
];

export default function TimelinePage() {
  return (
    <>
      <header className="page-header">
        <span className="eyebrow">MEMORIES</span>
        <h1>Growth Timeline</h1>
        <p className="muted">Little changes add up to a story you can revisit.</p>
      </header>

      <section className="memory-grid">
        {memories.map((m, i) => (
          <article className="card memory-card" key={m.date}>
            <div className="memory-photo">
              {i === 0 ? <Camera size={32}/> : <Star size={30}/>}
            </div>
            <div className="card-pad">
              <span className="eyebrow">{m.date}</span>
              <h3>{m.title}</h3>
              <p className="muted">{m.text}</p>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
