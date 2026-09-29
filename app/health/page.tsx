import { HeartPulse, Ruler, Scale, Syringe } from "lucide-react";

const items = [
  { icon: Scale, title: "Weight", value: "10.8 kg", note: "Last recorded: Sep 20" },
  { icon: Ruler, title: "Height", value: "82 cm", note: "Last recorded: Sep 20" },
  { icon: Syringe, title: "Vaccinations", value: "Up to date", note: "Next appointment per family doctor" },
  { icon: HeartPulse, title: "Recent Health", value: "Doing well", note: "No symptoms noted" }
];

export default function HealthPage() {
  return (
    <>
      <header className="page-header">
        <span className="eyebrow">HEALTH</span>
        <h1>Health & Growth</h1>
        <p className="muted">Keep growth measurements, vaccinations, symptoms and appointments together.</p>
      </header>
      <section className="grid">
        {items.map(({icon:Icon, title, value, note}) => (
          <article className="card stat-card" key={title}>
            <div className="round-icon small"><Icon size={19}/></div>
            <span className="muted">{title}</span>
            <strong className="big-value">{value}</strong>
            <small className="muted">{note}</small>
          </article>
        ))}
      </section>
      <section className="card section-card">
        <div className="section-title"><h2>Recent Notes</h2><span>2 notes</span></div>
        <div className="list-row"><strong>Sep 20</strong><span>Height 82 cm · Weight 10.8 kg</span></div>
        <div className="list-row"><strong>Sep 12</strong><span>Mild runny nose; otherwise doing well</span></div>
      </section>
    </>
  );
}
