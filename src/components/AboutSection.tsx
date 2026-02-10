import { Badge } from "@/components/ui/badge";

const skills = [
  "Python", "SQL", "Machine Learning", "Pandas", "Scikit-learn",
  "TensorFlow", "Power BI", "Estatística", "Deep Learning", "NLP",
  "Git", "R",
];

const AboutSection = () => {
  return (
    <section id="sobre" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
          Sobre Mim
        </h2>
        <h3 className="mb-6 text-3xl font-bold md:text-4xl">
          Quem sou eu
        </h3>
        <p className="mb-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Sou um estudante de Ciência de Dados no último período da graduação, 
          apaixonado por resolver problemas reais com dados. Tenho experiência em 
          análise exploratória, modelagem preditiva e visualização de dados. 
          Sempre buscando aprender e aplicar novas técnicas.
        </p>

        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge
              key={skill}
              variant="secondary"
              className="border border-border px-3 py-1.5 text-xs font-medium"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
