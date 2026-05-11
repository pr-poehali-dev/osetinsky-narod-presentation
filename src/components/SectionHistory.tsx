const SectionHistory = () => {
  return (
    <section id="history" className="pt-12">
      <div className="flex items-center gap-3 mb-8">
        <span className="text-4xl">⚔️</span>
        <div>
          <h2 className="text-3xl font-bold" style={{ color: "var(--ossetia-brown)", fontFamily: "'Cormorant', serif" }}>
            История осетинского народа
          </h2>
          <p className="text-sm mt-1" style={{ color: "var(--ossetia-gold)" }}>Древние корни и великое прошлое</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="rounded-2xl overflow-hidden shadow-md">
          <img
            src="https://cdn.poehali.dev/projects/a0b325a4-a620-4cda-862a-de0f91b8bbea/files/998649c5-4cbe-4fad-af11-79ad694b882e.jpg"
            alt="Осетинский воин"
            className="w-full h-56 object-cover"
          />
        </div>
        <div className="space-y-4">
          <div className="p-4 rounded-xl border-l-4" style={{ borderColor: "var(--ossetia-gold)", backgroundColor: "var(--ossetia-sand)", opacity: 1 }}>
            <h3 className="font-bold mb-1" style={{ color: "var(--ossetia-brown)" }}>Аланы — предки осетин</h3>
            <p className="text-sm leading-relaxed" style={{ color: "var(--ossetia-brown)" }}>
              Осетины — потомки древних аланов, могущественного народа, который создал 
              великое государство в степях и горах Кавказа. Аланы были известны как 
              храбрые воины и умелые кузнецы.
            </p>
          </div>
          <div className="p-4 rounded-xl border-l-4" style={{ borderColor: "var(--ossetia-red)", backgroundColor: "#f9ece8" }}>
            <h3 className="font-bold mb-1" style={{ color: "var(--ossetia-brown)" }}>Нарты — герои легенд</h3>
            <p className="text-sm leading-relaxed" style={{ color: "var(--ossetia-brown)" }}>
              У осетин есть свои особые героические сказания — нартский эпос. Нарты — 
              это богатыри, которые совершали великие подвиги и боролись со злом. 
              Этот эпос — один из древнейших в мире!
            </p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {[
          { icon: "🏰", title: "Горные башни", text: "Осетины строили высокие каменные башни в горах, которые служили крепостями и домами. Некоторые башни стоят до сих пор!" },
          { icon: "🛡️", title: "Воинская доблесть", text: "Осетинские воины славились во всём Кавказе своей храбростью. Многие служили в русской армии и получали высокие награды." },
          { icon: "⛪", title: "Христианство", text: "Осетины приняли христианство ещё в раннем Средневековье. Их вера соединила христианские и древние традиции." },
        ].map((item) => (
          <div key={item.title} className="p-4 rounded-xl text-center shadow-sm" style={{ backgroundColor: "white" }}>
            <div className="text-3xl mb-2">{item.icon}</div>
            <h4 className="font-bold mb-2 text-sm" style={{ color: "var(--ossetia-brown)" }}>{item.title}</h4>
            <p className="text-xs leading-relaxed" style={{ color: "#5a4a3a" }}>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionHistory;
