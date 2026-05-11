import { useState } from "react";
import Icon from "@/components/ui/icon";

interface Section {
  id: string;
  label: string;
}

interface NavbarProps {
  sections: Section[];
  active: string;
  onNavigate: (id: string) => void;
}

const Navbar = ({ sections, active, onNavigate }: NavbarProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[var(--ossetia-brown)] text-[var(--ossetia-cream)] shadow-md">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xl">🏔️</span>
          <span className="font-bold text-lg tracking-wide">Осетия для детей</span>
        </div>

        {/* Desktop nav */}
        <ul className="hidden lg:flex gap-1 flex-wrap">
          {sections.map((s) => (
            <li key={s.id}>
              <button
                onClick={() => onNavigate(s.id)}
                className={`px-3 py-1.5 rounded text-sm font-medium transition-colors ${
                  active === s.id
                    ? "bg-[var(--ossetia-gold)] text-[var(--ossetia-brown)]"
                    : "hover:bg-white/10 text-[var(--ossetia-cream)]"
                }`}
              >
                {s.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile burger */}
        <button
          className="lg:hidden p-2 rounded hover:bg-white/10"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Icon name={menuOpen ? "X" : "Menu"} size={22} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[var(--ossetia-brown)] border-t border-white/10 px-4 pb-4">
          <ul className="flex flex-col gap-1 pt-2">
            {sections.map((s) => (
              <li key={s.id}>
                <button
                  onClick={() => { onNavigate(s.id); setMenuOpen(false); }}
                  className={`w-full text-left px-3 py-2 rounded text-sm font-medium transition-colors ${
                    active === s.id
                      ? "bg-[var(--ossetia-gold)] text-[var(--ossetia-brown)]"
                      : "hover:bg-white/10 text-[var(--ossetia-cream)]"
                  }`}
                >
                  {s.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
