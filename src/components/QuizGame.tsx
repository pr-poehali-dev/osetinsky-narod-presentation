import { useState } from "react";

const questions = [
  {
    question: "Как называются предки осетинского народа?",
    options: ["Скифы", "Аланы", "Половцы", "Хазары"],
    correct: 1,
    explanation: "Осетины — потомки древних аланов, которые создали могущественное государство Аланию.",
  },
  {
    question: "Сколько пирогов ставят осетины на праздничный стол?",
    options: ["Один", "Два", "Три", "Четыре"],
    correct: 2,
    explanation: "Три осетинских пирога символизируют Бога, Солнце и Землю — это главный символ застолья.",
  },
  {
    question: "К какой языковой группе относится осетинский язык?",
    options: ["Тюркской", "Иранской", "Кавказской", "Славянской"],
    correct: 1,
    explanation: "Осетинский язык относится к иранской группе и является потомком языка древних аланов и скифов.",
  },
  {
    question: "Как называется массовый осетинский танец?",
    options: ["Лезгинка", "Симд", "Халиса", "Джигит"],
    correct: 1,
    explanation: "Симд — торжественный массовый танец, символизирующий единство осетинского народа.",
  },
  {
    question: "Кто написал первую книгу стихов на осетинском языке?",
    options: ["Исса Плиев", "Булат Газданов", "Коста Хетагуров", "Сослан Андиев"],
    correct: 2,
    explanation: "Коста Хетагуров — основоположник осетинской литературы, написал «Ирон фандыр» — «Осетинская лира».",
  },
];

const QuizGame = () => {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const q = questions[current];

  const handleAnswer = (idx: number) => {
    if (selected !== null) return;
    setSelected(idx);
    if (idx === q.correct) setScore((s) => s + 1);
  };

  const handleNext = () => {
    if (current + 1 < questions.length) {
      setCurrent((c) => c + 1);
      setSelected(null);
    } else {
      setFinished(true);
    }
  };

  const restart = () => {
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
  };

  return (
    <section id="quiz" className="pt-10">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold text-white"
          style={{ backgroundColor: "var(--ossetia-red)" }}>🎮</div>
        <h2 className="text-3xl font-bold" style={{ color: "var(--ossetia-brown)", fontFamily: "'Cormorant', serif" }}>
          Викторина: проверь себя!
        </h2>
      </div>

      <div className="max-w-2xl mx-auto">
        {finished ? (
          <div className="text-center p-8 rounded-2xl shadow-md" style={{ backgroundColor: "white" }}>
            <div className="text-6xl mb-4">{score >= 4 ? "🏆" : score >= 2 ? "👍" : "📚"}</div>
            <h3 className="text-2xl font-bold mb-2" style={{ color: "var(--ossetia-brown)", fontFamily: "'Cormorant', serif" }}>
              {score >= 4 ? "Отлично!" : score >= 2 ? "Хорошо!" : "Нужно ещё почитать!"}
            </h3>
            <p className="text-lg mb-6" style={{ color: "var(--ossetia-brown)" }}>
              Ты ответил правильно на <strong>{score}</strong> из <strong>{questions.length}</strong> вопросов
            </p>
            <button
              onClick={restart}
              className="px-6 py-3 rounded-full font-bold text-white transition-transform hover:scale-105"
              style={{ backgroundColor: "var(--ossetia-red)" }}
            >
              Пройти ещё раз
            </button>
          </div>
        ) : (
          <div className="rounded-2xl shadow-md overflow-hidden" style={{ backgroundColor: "white" }}>
            <div className="p-4 flex justify-between items-center" style={{ backgroundColor: "var(--ossetia-sand)" }}>
              <span className="text-sm font-medium" style={{ color: "var(--ossetia-brown)" }}>
                Вопрос {current + 1} из {questions.length}
              </span>
              <span className="text-sm font-bold" style={{ color: "var(--ossetia-green)" }}>
                ✅ {score} очков
              </span>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold mb-6" style={{ color: "var(--ossetia-brown)" }}>
                {q.question}
              </h3>

              <div className="space-y-3 mb-6">
                {q.options.map((opt, idx) => {
                  let bg = "white";
                  let border = "var(--ossetia-sand)";
                  const textColor = "var(--ossetia-brown)";

                  if (selected !== null) {
                    if (idx === q.correct) { bg = "#eef5f0"; border = "var(--ossetia-green)"; }
                    else if (idx === selected && idx !== q.correct) { bg = "#fef0f0"; border = "var(--ossetia-red)"; }
                  } else if (selected === idx) {
                    bg = "var(--ossetia-sand)";
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleAnswer(idx)}
                      className="w-full text-left p-3 rounded-xl border-2 font-medium transition-all hover:scale-[1.01]"
                      style={{ backgroundColor: bg, borderColor: border, color: textColor }}
                    >
                      {idx === q.correct && selected !== null ? "✅ " : ""}
                      {idx === selected && idx !== q.correct ? "❌ " : ""}
                      {opt}
                    </button>
                  );
                })}
              </div>

              {selected !== null && (
                <div className="mb-4 p-3 rounded-xl text-sm" style={{ backgroundColor: "var(--ossetia-sand)", color: "var(--ossetia-brown)" }}>
                  💡 {q.explanation}
                </div>
              )}

              {selected !== null && (
                <button
                  onClick={handleNext}
                  className="w-full py-3 rounded-xl font-bold text-white transition-transform hover:scale-[1.02]"
                  style={{ backgroundColor: "var(--ossetia-blue)" }}
                >
                  {current + 1 < questions.length ? "Следующий вопрос →" : "Посмотреть результат"}
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default QuizGame;
