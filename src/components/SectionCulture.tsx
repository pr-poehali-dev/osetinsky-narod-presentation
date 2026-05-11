const SectionCulture = () => {
  return (
    <section id="culture" className="pt-10">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold text-white"
          style={{ backgroundColor: "var(--ossetia-green)" }}>2</div>
        <h2 className="text-3xl font-bold" style={{ color: "var(--ossetia-brown)", fontFamily: "'Cormorant', serif" }}>
          Культура, традиции и обычаи
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="space-y-4">
          <p className="text-base leading-relaxed" style={{ color: "var(--ossetia-brown)" }}>
            Культура осетин богата и самобытна. В ней переплелись древние аланские традиции,
            христианские обряды и горский кодекс чести — <strong>«Æгъдау»</strong> (Агъдау).
          </p>
          <div className="p-4 rounded-xl border-l-4" style={{ borderColor: "var(--ossetia-green)", backgroundColor: "#eef5f0" }}>
            <h3 className="font-bold mb-1" style={{ color: "var(--ossetia-brown)" }}>🍞 Три осетинских пирога</h3>
            <p className="text-sm leading-relaxed" style={{ color: "var(--ossetia-brown)" }}>
              На любом торжестве стол украшают три круглых пирога — <strong>«Æртæ чъиры»</strong>.
              Они символизируют Бога, Солнце и Землю. Это главный символ осетинского застолья.
            </p>
          </div>
          <div className="p-4 rounded-xl border-l-4" style={{ borderColor: "var(--ossetia-gold)", backgroundColor: "var(--ossetia-sand)" }}>
            <h3 className="font-bold mb-1" style={{ color: "var(--ossetia-brown)" }}>🥂 Традиция Куванда</h3>
            <p className="text-sm leading-relaxed" style={{ color: "var(--ossetia-brown)" }}>
              Куванд — торжественное пиршество, на котором старейший произносит молитвы-тосты.
              Это сакральный ритуал, объединяющий семью и общину.
            </p>
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-md">
          <img
            src="https://cdn.poehali.dev/projects/a0b325a4-a620-4cda-862a-de0f91b8bbea/files/145e8fa2-f51e-4431-99b6-4340edfe3e83.jpg"
            alt="Осетинское застолье"
            className="w-full h-72 object-cover"
          />
          <div className="p-3 text-sm text-center" style={{ backgroundColor: "var(--ossetia-sand)", color: "var(--ossetia-brown)" }}>
            Традиционное осетинское застолье с тремя пирогами
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { emoji: "🤝", title: "Гостеприимство", desc: "Гость в осетинском доме — священен. Хозяин обязан накормить и защитить любого гостя." },
          { emoji: "👴", title: "Уважение к старшим", desc: "Молодые всегда уступают место старшим и не садятся без разрешения." },
          { emoji: "👨‍👩‍👧‍👦", title: "Семейные ценности", desc: "Семья и род — основа жизни осетина. Позор одного члена — позор всего рода." },
          { emoji: "⚖️", title: "Кодекс чести", desc: "Агъдау — неписаный закон горца: честь, достоинство и справедливость превыше всего." },
        ].map((item) => (
          <div key={item.title} className="rounded-xl p-4" style={{ backgroundColor: "white" }}>
            <div className="text-2xl mb-2">{item.emoji}</div>
            <div className="font-bold text-sm mb-1" style={{ color: "var(--ossetia-brown)" }}>{item.title}</div>
            <div className="text-xs leading-relaxed" style={{ color: "#5a4a3a" }}>{item.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionCulture;
