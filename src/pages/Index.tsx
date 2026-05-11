import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SectionHistory from "@/components/SectionHistory";
import SectionCulture from "@/components/SectionCulture";
import SectionLanguage from "@/components/SectionLanguage";
import SectionClothing from "@/components/SectionClothing";
import SectionHolidays from "@/components/SectionHolidays";
import SectionMusic from "@/components/SectionMusic";
import SectionHeroes from "@/components/SectionHeroes";
import Timeline from "@/components/Timeline";
import QuizGame from "@/components/QuizGame";
import Footer from "@/components/Footer";

const sections = [
  { id: "history", label: "История" },
  { id: "culture", label: "Культура" },
  { id: "language", label: "Язык" },
  { id: "clothing", label: "Одежда" },
  { id: "holidays", label: "Праздники" },
  { id: "music", label: "Музыка и танцы" },
  { id: "heroes", label: "Знаменитые люди" },
  { id: "timeline", label: "Хронология" },
  { id: "quiz", label: "Игра-викторина" },
];

const Index = () => {
  const [activeSection, setActiveSection] = useState("history");

  const scrollTo = (id: string) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-[var(--ossetia-cream)] font-sans">
      <Navbar sections={sections} active={activeSection} onNavigate={scrollTo} />
      <Hero onStart={() => scrollTo("history")} />

      <main className="max-w-5xl mx-auto px-4 pb-16 space-y-20">
        <SectionHistory />
        <SectionCulture />
        <SectionLanguage />
        <SectionClothing />
        <SectionHolidays />
        <SectionMusic />
        <SectionHeroes />
        <Timeline />
        <QuizGame />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
