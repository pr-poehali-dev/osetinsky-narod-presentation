interface HeroProps {
  onStart: () => void;
}

const Hero = ({ onStart }: HeroProps) => {
  return (
    <section
      className="relative py-20 px-4 text-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, var(--ossetia-brown) 0%, var(--ossetia-blue) 100%)",
      }}
    >
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-3xl mx-auto">
        <div className="text-6xl mb-4">🏔️</div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
          Осетия: история и культура
        </h1>
        <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
          Познакомься с древним и гордым народом Кавказа — его историей,
          традициями, языком и знаменитыми людьми
        </p>
        <button
          onClick={onStart}
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-lg transition-transform hover:scale-105 active:scale-95"
          style={{
            backgroundColor: "var(--ossetia-gold)",
            color: "var(--ossetia-brown)",
          }}
        >
          Начать изучение →
        </button>
      </div>
    </section>
  );
};

export default Hero;
