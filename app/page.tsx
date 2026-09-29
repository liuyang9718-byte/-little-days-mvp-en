import {
  Baby, BookOpen, Camera, HeartPulse, Moon, Plus, Sparkles, Soup
} from "lucide-react";
import Link from "next/link";

const stats = [
  { icon: Moon, label: "Sleep", value: "11h 40m", note: "Bedtime 8:35 PM" },
  { icon: Soup, label: "Meals", value: "4 meals", note: "New food: pumpkin" },
  { icon: BookOpen, label: "Stories", value: "2 books", note: "Goodnight Moon" },
  { icon: HeartPulse, label: "Health", value: "Doing well", note: "No notes today" }
];

const timeline = [
  { time: "08:10", title: "Breakfast", desc: "Egg, avocado & blueberries" },
  { time: "10:35", title: "Funny Moment", desc: "She used a spoon herself, then carefully offered Mom a bite." },
  { time: "12:40", title: "Nap", desc: "12:40–2:15 PM · 1h 35m" },
  { time: "19:45", title: "Bedtime Story", desc: "Brown Bear, Brown Bear" }
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div>
          <div className="eyebrow">LITTLE DAYS</div>
          <h1>Today with Baby</h1>
          <p className="muted">17 months · September 28, 2026</p>
        </div>
        <div className="round-icon"><Baby size={24} /></div>
      </section>

      <section className="card photo-card">
        <div className="photo-placeholder">
          <Camera size={36} />
          <span>Add today’s photo</span>
        </div>
        <div className="card-pad">
          <strong>A moment from today</strong>
          <p className="muted">She used a spoon by herself for the first time.</p>
        </div>
      </section>

      <section className="quick-actions">
        <Link href="/add" className="primary-button"><Plus size={18}/> Quick Add</Link>
        <Link href="/timeline" className="secondary-button"><Camera size={18}/> Photo Timeline</Link>
      </section>

      <section className="grid">
        {stats.map(({ icon: Icon, label, value, note }) => (
          <article className="card stat-card" key={label}>
            <div className="round-icon small"><Icon size={19}/></div>
            <span className="muted label">{label}</span>
            <strong className="big-value">{value}</strong>
            <small className="muted">{note}</small>
          </article>
        ))}
      </section>

      <section className="card section-card">
        <div className="section-title">
          <h2>Today’s Moments</h2>
          <span>4 moments</span>
        </div>
        {timeline.map(item => (
          <div className="timeline-item" key={item.time + item.title}>
            <time>{item.time}</time>
            <div>
              <strong>{item.title}</strong>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="ai-card">
        <div className="ai-heading"><Sparkles size={19}/> AI Growth Assistant</div>
        <p>This week, your little one is showing more interest in copying everyday actions. Try giving them safe chances to use a spoon, put toys away and turn book pages.</p>
        <Link href="/ai" className="text-link">See age-based ideas →</Link>
      </section>

      <section className="card section-card">
        <div className="section-title">
          <h2>This Week’s To-dos</h2><span>3 items</span>
        </div>
        <div className="todo-list">
          <label><input type="checkbox"/> Organize September photos</label>
          <label><input type="checkbox"/> Return library books</label>
          <label><input type="checkbox"/> Pick up food for next week</label>
        </div>
      </section>
    </>
  );
}
