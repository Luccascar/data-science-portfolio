import { Github, Linkedin, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contato" className="border-t border-border px-6 py-24">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
          Contato
        </h2>
        <h3 className="mb-4 text-3xl font-bold md:text-4xl">Vamos conversar?</h3>
        <p className="mx-auto mb-8 max-w-md text-muted-foreground">
          Estou aberto a oportunidades, colaborações e novos projetos.
          Entre em contato!
        </p>

        <div className="flex items-center justify-center gap-6">
          <a
            href="mailto:seuemail@email.com"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary px-5 py-2.5 text-sm font-medium transition-colors hover:bg-secondary/80"
          >
            <Mail size={16} />
            Email
          </a>
          <a
            href="https://github.com/Luccascar"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary px-5 py-2.5 text-sm font-medium transition-colors hover:bg-secondary/80"
          >
            <Github size={16} />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/lucas-carvalho-la"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary px-5 py-2.5 text-sm font-medium transition-colors hover:bg-secondary/80"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>
        </div>

        <p className="mt-16 text-xs text-muted-foreground">
          © 2026 Seu Nome. Feito com 💜
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
