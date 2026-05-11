const holidays = [
  {
    emoji: "🌱",
    name: "Куадзæн",
    time: "Апрель",
    desc: "Осетинская Пасха — главный весенний праздник. Семьи собираются за столом, пекут куличи и красят яйца.",
  },
  {
    emoji: "🌾",
    name: "Гæрæхты куывд",
    time: "Август",
    desc: "Праздник урожая. Люди благодарят богов за плодородие, накрывают большие столы прямо на улице.",
  },
  {
    emoji: "❄️",
    name: "Цыппурс",
    time: "Январь",
    desc: "Осетинское Рождество, один из самых любимых праздников. Дети ходят по домам и получают подарки.",
  },
  {
    emoji: "🌊",
    name: "Реком",
    time: "Июль",
    desc: "Праздник святилища Реком — покровителя охотников и путников. Отмечается в горных сёлах.",
  },
  {
    emoji: "⚔️",
    name: "Балсæджы æхсæв",
    time: "Ноябрь",
    desc: "День памяти предков. Семьи чтят память ушедших родственников и накрывают поминальный стол.",
  },
  {
    emoji: "🌟",
    name: "Новый год",
    time: "Январь",
    desc: "Осетины отмечают Новый год по старому стилю — в ночь с 13 на 14 января, с песнями и угощениями.",
  },
];

const SectionHolidays = () => {
  return (
    <section id="holidays" className="pt-10">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold text-white"
          style={{ backgroundColor: "var(--ossetia-red)" }}>5</div>
        <h2 className="text-3xl font-bold" style={{ color: "var(--ossetia-brown)", fontFamily: "'Cormorant', serif" }}>
          Национальные праздники
        </h2>
      </div>

      <p className="text-base leading-relaxed mb-6" style={{ color: "var(--ossetia-brown)" }}>
        У осетин есть множество праздников, многие из которых уходят корнями в глубокую
        древность. Они сочетают христианские и языческие традиции, создавая неповторимый
        колорит осетинской культуры.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {holidays.map((h) => (
          <div key={h.name} className="p-4 rounded-2xl shadow-sm border"
            style={{ backgroundColor: "white", borderColor: "var(--ossetia-sand)" }}>
            <div className="text-3xl mb-2">{h.emoji}</div>
            <div className="flex items-center gap-2 mb-2">
              <h3 className="font-bold" style={{ color: "var(--ossetia-brown)" }}>{h.name}</h3>
              <span className="text-xs px-2 py-0.5 rounded-full font-medium"
                style={{ backgroundColor: "var(--ossetia-sand)", color: "var(--ossetia-brown)" }}>
                {h.time}
              </span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "#5a4a3a" }}>{h.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionHolidays;
