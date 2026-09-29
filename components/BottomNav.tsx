"use client";

import Link from "next/link";
import { BookOpen, HeartPulse, Home, Sparkles, Stars } from "lucide-react";
import { usePathname } from "next/navigation";

const nav = [
  { href: "/", label: "Today", icon: Home },
  { href: "/timeline", label: "Timeline", icon: Stars },
  { href: "/health", label: "Health", icon: HeartPulse },
  { href: "/library", label: "Library", icon: BookOpen },
  { href: "/ai", label: "AI", icon: Sparkles }
];

export default function BottomNav() {
  const path = usePathname();
  return (
    <nav className="bottom-nav">
      {nav.map(({href,label,icon:Icon}) => (
        <Link className={path === href ? "active" : ""} href={href} key={href}>
          <Icon size={20}/><span>{label}</span>
        </Link>
      ))}
    </nav>
  );
}
