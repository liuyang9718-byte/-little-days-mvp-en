"use client";

import { useState } from "react";
import { BookOpen, Camera, HeartPulse, Moon, Save, Soup, Sparkles } from "lucide-react";

export default function AddPage() {
  const [saved, setSaved] = useState(false);

  return (
    <>
      <header className="page-header">
        <span className="eyebrow">QUICK ENTRY</span>
        <h1>Add Today</h1>
        <p className="muted">A sentence or two is enough.</p>
      </header>

      <form className="card form-card" onSubmit={(e) => { e.preventDefault(); setSaved(true); }}>
        <label>A moment from today
          <input placeholder="For example: Used a spoon independently for the first time" />
        </label>

        <label>A funny moment today
          <textarea placeholder="A little moment you want to remember…" rows={4}/>
        </label>

        <div className="chip-grid">
          <button type="button"><Camera size={17}/> Photos</button>
          <button type="button"><Moon size={17}/> Sleep</button>
          <button type="button"><Soup size={17}/> Meals</button>
          <button type="button"><HeartPulse size={17}/> Health</button>
          <button type="button"><BookOpen size={17}/> Stories</button>
          <button type="button"><Sparkles size={17}/> Milestones</button>
        </div>

        <button className="primary-button full" type="submit"><Save size={18}/> Save Today’s Note</button>
        {saved && <p className="saved-note">Saved in this demo only. Connect Supabase to keep real records.</p>}
      </form>
    </>
  );
}
