import { Sparkles, MessageCircle, CalendarDays } from "lucide-react";

export default function AIPage() {
  return (
    <>
      <header className="page-header">
        <span className="eyebrow">AI GROWTH ASSISTANT</span>
        <h1>Growth Assistant</h1>
        <p className="muted">Explore age-based ideas and, in a future version, patterns from your own records.</p>
      </header>

      <section className="ai-card">
        <div className="ai-heading"><Sparkles size={19}/> Ideas for 17–18 months</div>
        <p><strong>Language: </strong>Name everyday things, talk together and reread favourite books.</p>
        <p><strong>Everyday skills: </strong>Offer safe chances to do things independently, such as using a toddler spoon or putting toys in a basket.</p>
        <p><strong>Play: </strong>Try copying games, simple sorting and pretend play.</p>
      </section>

      <section className="card section-card">
        <div className="section-title"><h2>AI Reports</h2><CalendarDays size={19}/></div>
        <div className="list-row"><strong>Weekly Summary</strong><span>More words and copying everyday actions</span></div>
        <div className="list-row"><strong>September Report</strong><span>82 photos · 6 new foods · 5 milestones</span></div>
      </section>

      <section className="card section-card">
        <div className="section-title"><h2>Ask the Assistant</h2><MessageCircle size={19}/></div>
        <div className="fake-input">For example: Naps are getting shorter. What might be worth watching?</div>
      </section>

      <p className="disclaimer">These are general activity ideas. Ask a qualified health professional about health, nutrition, development or medication concerns.</p>
    </>
  );
}
