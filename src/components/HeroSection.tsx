import { Github, Linkedin, ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center px-6">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      {/* Glow orb */}
      <div className="absolute left-1/2 top-1/3 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]" />

      <div className="relative z-10 text-center">
        <p className="mb-4 animate-fade-up text-sm font-medium uppercase tracking-widest text-primary opacity-0 [animation-delay:0.1s]">
          Cientista de Dados
        </p>
        <h1 className="mb-6 animate-fade-up text-5xl font-bold leading-tight opacity-0 [animation-delay:0.2s] md:text-7xl">
          Olá, eu sou{" "}
          <span className="text-gradient">Seu Nome</span>
        </h1>
        <p className="mx-auto mb-8 max-w-lg animate-fade-up text-lg text-muted-foreground opacity-0 [animation-delay:0.3s]">
          Transformando dados em insights e soluções inteligentes.
          Graduando em Ciência de Dados.
        </p>

        <div className="flex animate-fade-up items-center justify-center gap-4 opacity-0 [animation-delay:0.4s]">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary px-5 py-2.5 text-sm font-medium transition-colors hover:bg-secondary/80"
          >
            <Github size={16} />
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>
        </div>
      </div>

      <button
        onClick={() =>
          document.querySelector("#sobre")?.scrollIntoView({ behavior: "smooth" })
        }
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground"
      >
        <ChevronDown size={24} />
      </button>
    </section>
  );
};

export default HeroSection;
