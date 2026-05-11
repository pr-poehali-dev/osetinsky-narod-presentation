const instruments = [
  { emoji: "🪗", name: "Фандыр", desc: "Национальный смычковый инструмент — символ осетинской музыки" },
  { emoji: "🥁", name: "Дала-фандыр", desc: "Трёхструнный щипковый инструмент, звучит мягко и певуче" },
  { emoji: "🎺", name: "Уадынз", desc: "Продольная флейта из тростника — пастушеский инструмент" },
  { emoji: "🪘", name: "Дзæбæх", desc: "Большой барабан, задающий ритм танца" },
];

const dances = [
  { name: "Симд", desc: "Массовый торжественный танец — символ единства народа. Танцуют на свадьбах и праздниках." },
  { name: "Хонга кафт", desc: "Парный лирический танец — юноша и девушка кружатся в изящном ритме." },
  { name: "Зæрватыхъкъы", desc: "Сольный мужской танец — стремительный и виртуозный, демонстрирует ловкость." },
];

const SectionMusic = () => {
  return (
    <section id="music" className="pt-10">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold text-white"
          style={{ backgroundColor: "var(--ossetia-gold)" }}>6</div>
        <h2 className="text-3xl font-bold" style={{ color: "var(--ossetia-brown)", fontFamily: "'Cormorant', serif" }}>
          Музыка, танцы и наследие
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <div className="rounded-2xl overflow-hidden shadow-md mb-4">
            <img
              src="https://cdn.poehali.dev/projects/a0b325a4-a620-4cda-862a-de0f91b8bbea/files/12b9e41a-0b8a-4ca2-9b23-a1b7382c9e8e.jpg"
              alt="Осетинские танцы"
              className="w-full h-52 object-cover"
            />
          </div>
          <h3 className="font-bold text-lg mb-3" style={{ color: "var(--ossetia-brown)" }}>🎶 Музыкальные инструменты</h3>
          <div className="grid grid-cols-2 gap-3">
            {instruments.map((i) => (
              <div key={i.name} className="p-3 rounded-xl" style={{ backgroundColor: "var(--ossetia-sand)" }}>
                <div className="text-2xl mb-1">{i.emoji}</div>
                <div className="font-bold text-sm" style={{ color: "var(--ossetia-brown)" }}>{i.name}</div>
                <div className="text-xs mt-1" style={{ color: "#5a4a3a" }}>{i.desc}</div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-3" style={{ color: "var(--ossetia-brown)" }}>💃 Народные танцы</h3>
          <div className="space-y-3 mb-4">
            {dances.map((d) => (
              <div key={d.name} className="p-4 rounded-xl border-l-4"
                style={{ borderColor: "var(--ossetia-red)", backgroundColor: "white" }}>
                <div className="font-bold mb-1" style={{ color: "var(--ossetia-brown)" }}>{d.name}</div>
                <div className="text-sm" style={{ color: "#5a4a3a" }}>{d.desc}</div>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl" style={{ backgroundColor: "var(--ossetia-blue)" }}>
            <h4 className="font-bold text-white mb-2">🎬 Видео: Осетинский танец Симд</h4>
            <div className="aspect-video rounded-lg overflow-hidden bg-black/30 flex items-center justify-center">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/Vt9cBPv0lUc"
                title="Осетинский танец Симд"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionMusic;
