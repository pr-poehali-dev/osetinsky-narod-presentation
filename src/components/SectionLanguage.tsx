const words = [
  { ossetian: "Арв", russian: "Небо", transcription: "Арв" },
  { ossetian: "Хох", russian: "Гора", transcription: "Хох" },
  { ossetian: "Уарзт", russian: "Любовь", transcription: "Уарзт" },
  { ossetian: "Фыд", russian: "Отец", transcription: "Фыд" },
  { ossetian: "Мад", russian: "Мать", transcription: "Мад" },
  { ossetian: "Хорз", russian: "Хорошо", transcription: "Хорз" },
  { ossetian: "Бон хорз", russian: "Добрый день", transcription: "Бон хорз" },
  { ossetian: "Байрай", russian: "Здравствуй", transcription: "Байрай" },
];

const SectionLanguage = () => {
  return (
    <section id="language" className="pt-10">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold text-white"
          style={{ backgroundColor: "var(--ossetia-blue)" }}>3</div>
        <h2 className="text-3xl font-bold" style={{ color: "var(--ossetia-brown)", fontFamily: "'Cormorant', serif" }}>
          Осетинский язык
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="space-y-4">
          <p className="text-base leading-relaxed" style={{ color: "var(--ossetia-brown)" }}>
            Осетинский язык — один из <strong>иранских языков</strong>, потомок языка древних
            аланов и скифов. Он отличается от большинства языков Кавказа и ближе к
            персидскому и таджикскому.
          </p>
          <div className="p-4 rounded-xl" style={{ backgroundColor: "var(--ossetia-sand)" }}>
            <h3 className="font-bold mb-3" style={{ color: "var(--ossetia-brown)" }}>✍️ Интересные факты</h3>
            <ul className="space-y-2 text-sm" style={{ color: "var(--ossetia-brown)" }}>
              <li>📌 Осетинский язык делится на два диалекта: <strong>иронский</strong> и <strong>дигорский</strong></li>
              <li>📌 Алфавит основан на <strong>кириллице</strong> — 42 буквы</li>
              <li>📌 В языке много <strong>древних слов</strong>, которых нет в других языках</li>
              <li>📌 Осетинский является <strong>государственным языком</strong> Республики Северная Осетия–Алания</li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="font-bold mb-3 text-lg" style={{ color: "var(--ossetia-brown)" }}>
            📚 Выучи несколько слов!
          </h3>
          <div className="grid grid-cols-2 gap-2">
            {words.map((w) => (
              <div key={w.russian} className="p-3 rounded-xl border-2 text-center"
                style={{ borderColor: "var(--ossetia-gold)", backgroundColor: "white" }}>
                <div className="font-bold text-base" style={{ color: "var(--ossetia-red)" }}>{w.ossetian}</div>
                <div className="text-xs mt-1" style={{ color: "var(--ossetia-brown)" }}>{w.russian}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="p-5 rounded-2xl text-center" style={{ backgroundColor: "var(--ossetia-blue)" }}>
        <p className="text-2xl font-bold text-white mb-1" style={{ fontFamily: "'Cormorant', serif" }}>
          «Байрай, мæ хæрзбон!»
        </p>
        <p className="text-white/70 text-sm">Здравствуй, добрый день! — приветствие на осетинском</p>
      </div>
    </section>
  );
};

export default SectionLanguage;
