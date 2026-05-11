const SectionClothing = () => {
  return (
    <section id="clothing" className="pt-10">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold text-white"
          style={{ backgroundColor: "var(--ossetia-gold)" }}>4</div>
        <h2 className="text-3xl font-bold" style={{ color: "var(--ossetia-brown)", fontFamily: "'Cormorant', serif" }}>
          Традиционная одежда
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <div className="rounded-2xl overflow-hidden shadow-md mb-4">
            <img
              src="https://cdn.poehali.dev/projects/a0b325a4-a620-4cda-862a-de0f91b8bbea/files/6d2dc45e-e9ce-418e-a394-07ed807ff785.jpg"
              alt="Осетинский национальный костюм"
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="p-4 rounded-xl" style={{ backgroundColor: "var(--ossetia-sand)" }}>
            <p className="text-sm leading-relaxed" style={{ color: "var(--ossetia-brown)" }}>
              Традиционный осетинский костюм отличается богатой вышивкой и украшениями из
              серебра и золота. Одежда была показателем достатка и социального статуса.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="p-4 rounded-xl border-l-4" style={{ borderColor: "var(--ossetia-gold)", backgroundColor: "white" }}>
            <h3 className="font-bold mb-2" style={{ color: "var(--ossetia-brown)" }}>👘 Мужской костюм</h3>
            <ul className="text-sm space-y-1" style={{ color: "var(--ossetia-brown)" }}>
              <li>🔸 <strong>Черкеска</strong> — верхний кафтан с газырями</li>
              <li>🔸 <strong>Бешмет</strong> — поддёвка под черкеску</li>
              <li>🔸 <strong>Папаха</strong> — меховая шапка, символ чести</li>
              <li>🔸 <strong>Башлык</strong> — капюшон из тонкого сукна</li>
              <li>🔸 <strong>Кинжал</strong> — неотъемлемая часть образа воина</li>
            </ul>
          </div>
          <div className="p-4 rounded-xl border-l-4" style={{ borderColor: "var(--ossetia-red)", backgroundColor: "white" }}>
            <h3 className="font-bold mb-2" style={{ color: "var(--ossetia-brown)" }}>👗 Женский костюм</h3>
            <ul className="text-sm space-y-1" style={{ color: "var(--ossetia-brown)" }}>
              <li>🔹 <strong>Платье-кафтан</strong> с богатой вышивкой</li>
              <li>🔹 <strong>Нагрудник</strong> — украшение из серебра</li>
              <li>🔹 <strong>Пояс</strong> — серебряный с чернением</li>
              <li>🔹 <strong>Шапочка</strong> с золотым шитьём</li>
              <li>🔹 <strong>Длинная фата</strong> — символ целомудрия</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionClothing;
