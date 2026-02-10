import { useState } from "react";
import { Github, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

interface Project {
  title: string;
  description: string;
  tags: string[];
  category: string;
  github?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    title: "Previsão de Churn de Clientes",
    description:
      "Modelo de Machine Learning para prever a rotatividade de clientes usando Random Forest e XGBoost, alcançando 92% de acurácia.",
    tags: ["Python", "Scikit-learn", "Pandas", "XGBoost"],
    category: "Machine Learning",
    github: "#",
  },
  {
    title: "Análise de Sentimentos - Twitter",
    description:
      "Pipeline de NLP para analisar sentimentos em tweets usando BERT, com dashboard interativo para visualização dos resultados.",
    tags: ["Python", "NLP", "BERT", "Streamlit"],
    category: "NLP",
    github: "#",
    demo: "#",
  },
  {
    title: "Dashboard de Vendas",
    description:
      "Dashboard interativo construído com Power BI para análise de vendas, incluindo KPIs, tendências e segmentação de clientes.",
    tags: ["Power BI", "SQL", "DAX"],
    category: "Visualização",
    github: "#",
  },
  {
    title: "Detecção de Fraudes",
    description:
      "Sistema de detecção de fraudes em transações financeiras utilizando Deep Learning com redes neurais e técnicas de balanceamento.",
    tags: ["Python", "TensorFlow", "Deep Learning"],
    category: "Deep Learning",
    github: "#",
  },
  {
    title: "Análise Exploratória - COVID-19",
    description:
      "Estudo completo dos dados de COVID-19 no Brasil com visualizações geográficas e análises de tendências temporais.",
    tags: ["Python", "Pandas", "Matplotlib", "Folium"],
    category: "Análise de Dados",
    github: "#",
    demo: "#",
  },
  {
    title: "Sistema de Recomendação",
    description:
      "Algoritmo de recomendação de filmes usando filtragem colaborativa e baseada em conteúdo com a base MovieLens.",
    tags: ["Python", "Scikit-learn", "Surprise"],
    category: "Machine Learning",
    github: "#",
  },
];

const categories = ["Todos", ...Array.from(new Set(projects.map((p) => p.category)))];

const ProjectsSection = () => {
  const [active, setActive] = useState("Todos");

  const filtered =
    active === "Todos" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projetos" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">
          Portfólio
        </h2>
        <h3 className="mb-8 text-3xl font-bold md:text-4xl">Projetos</h3>

        {/* Filters */}
        <div className="mb-10 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-all ${
                active === cat
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <Card
              key={project.title}
              className="card-hover group border-border/50 bg-card"
            >
              <CardContent className="flex h-full flex-col p-6">
                <h4 className="mb-2 text-lg font-semibold group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <div className="mb-4 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded bg-secondary px-2 py-0.5 text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <Github size={14} />
                      Código
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <ExternalLink size={14} />
                      Demo
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
