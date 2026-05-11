const events = [
  { year: "I–IV вв.", event: "Аланские племена заселяют степи Предкавказья", emoji: "🌿" },
  { year: "IV в.", event: "Нашествие гуннов вытесняет аланов в горы Кавказа", emoji: "⚔️" },
  { year: "VI–VII вв.", event: "Принятие христианства от Византии", emoji: "⛪" },
  { year: "X–XII вв.", event: "Расцвет Аланского царства — торговля, культура, искусство", emoji: "👑" },
  { year: "1239–1240", event: "Монгольское нашествие разрушает Аланию", emoji: "🔥" },
  { year: "XIV–XVII вв.", event: "Осетины живут в изолированных горных ущельях, сохраняя язык и традиции", emoji: "🏔️" },
  { year: "1774", event: "Присоединение Осетии к Российской империи", emoji: "🤝" },
  { year: "1861–1906", event: "Жизнь и творчество Коста Хетагурова — основателя осетинской литературы", emoji: "✍️" },
  { year: "1924", event: "Создание Северо-Осетинской автономной области", emoji: "🏛️" },
  { year: "1990", event: "Республика Северная Осетия объявляет государственный суверенитет", emoji: "🇷🇺" },
  { year: "Сегодня", event: "Осетины живут в России, Грузии и по всему миру, сохраняя свою уникальную культуру", emoji: "🌍" },
];

const Timeline = () => {
  return (
    <section id="timeline" className="pt-10">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold text-white"
          style={{ backgroundColor: "var(--ossetia-blue)" }}>⏳</div>
        <h2 className="text-3xl font-bold" style={{ color: "var(--ossetia-brown)", fontFamily: "'Cormorant', serif" }}>
          Хронология истории
        </h2>
      </div>

      <div className="relative">
        <div className="absolute left-6 top-0 bottom-0 w-0.5" style={{ backgroundColor: "var(--ossetia-gold)" }} />
        <div className="space-y-4">
          {events.map((e, i) => (
            <div key={i} className="flex gap-4 items-start pl-0">
              <div className="relative flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-xl z-10 shadow"
                style={{ backgroundColor: "var(--ossetia-cream)", border: "2px solid var(--ossetia-gold)" }}>
                {e.emoji}
              </div>
              <div className="flex-1 pb-2">
                <div className="rounded-xl p-3 shadow-sm"
                  style={{ backgroundColor: "white", border: "1px solid var(--ossetia-sand)" }}>
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full mr-2"
                    style={{ backgroundColor: "var(--ossetia-gold)", color: "var(--ossetia-brown)" }}>
                    {e.year}
                  </span>
                  <span className="text-sm" style={{ color: "var(--ossetia-brown)" }}>{e.event}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
