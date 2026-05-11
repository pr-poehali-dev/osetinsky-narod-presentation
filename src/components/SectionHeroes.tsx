const heroes = [
  {
    name: "Коста Хетагуров",
    years: "1859–1906",
    role: "Поэт, художник, основоположник осетинской литературы",
    emoji: "✍️",
    fact: "Создал первую книгу стихов на осетинском языке «Ирон фандыр» — «Осетинская лира».",
  },
  {
    name: "Исса Плиев",
    years: "1903–1979",
    role: "Советский военачальник, дважды Герой Советского Союза",
    emoji: "⭐",
    fact: "Командовал конно-механизированными соединениями во Второй мировой войне. Непревзойдённый стратег.",
  },
  {
    name: "Вадим Цаликов",
    years: "1876–1938",
    role: "Революционер, государственный деятель",
    emoji: "🏛️",
    fact: "Один из основателей советской Осетии, активный участник революционного движения.",
  },
  {
    name: "Сослан Андиев",
    years: "1952–2018",
    role: "Борец, двукратный чемпион мира и Олимпийских игр",
    emoji: "🏆",
    fact: "Легенда вольной борьбы. За 12 лет карьеры не проиграл ни одного чемпионата мира.",
  },
  {
    name: "Булат Газданов",
    years: "1922–2014",
    role: "Учёный-лингвист, исследователь осетинского языка",
    emoji: "📖",
    fact: "Посвятил всю жизнь изучению и сохранению осетинского языка и нартского эпоса.",
  },
  {
    name: "Людмила Гатагова",
    years: "р. 1951",
    role: "Историк, доктор исторических наук",
    emoji: "🎓",
    fact: "Известный исследователь истории Кавказа и межнациональных отношений.",
  },
];

const SectionHeroes = () => {
  return (
    <section id="heroes" className="pt-10">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold text-white"
          style={{ backgroundColor: "var(--ossetia-brown)" }}>7</div>
        <h2 className="text-3xl font-bold" style={{ color: "var(--ossetia-brown)", fontFamily: "'Cormorant', serif" }}>
          Знаменитые осетины
        </h2>
      </div>

      <p className="text-base leading-relaxed mb-6" style={{ color: "var(--ossetia-brown)" }}>
        Осетинский народ подарил миру многих выдающихся людей — воинов, учёных, поэтов и
        спортсменов, которые прославили свою родину на весь мир.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {heroes.map((h) => (
          <div key={h.name} className="p-4 rounded-2xl border shadow-sm"
            style={{ backgroundColor: "white", borderColor: "var(--ossetia-sand)" }}>
            <div className="flex items-start gap-3 mb-3">
              <div className="w-12 h-12 rounded-full flex items-center justify-center text-2xl flex-shrink-0"
                style={{ backgroundColor: "var(--ossetia-sand)" }}>
                {h.emoji}
              </div>
              <div>
                <h3 className="font-bold leading-tight" style={{ color: "var(--ossetia-brown)" }}>{h.name}</h3>
                <div className="text-xs mt-0.5" style={{ color: "var(--ossetia-gold)" }}>{h.years}</div>
              </div>
            </div>
            <div className="text-xs font-medium mb-2 px-2 py-1 rounded-full inline-block"
              style={{ backgroundColor: "var(--ossetia-sand)", color: "var(--ossetia-brown)" }}>
              {h.role}
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "#5a4a3a" }}>{h.fact}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionHeroes;
