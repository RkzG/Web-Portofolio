import { ArrowRight } from "lucide-react";

const Projects = [
  {
    id: 1,
    title: "Agree - Digital Ecosystem for Farmers and Fishermans",
    description:
      "A digital platform designed to empower farmers and fishermen by providing them with essential tools and resources to enhance their productivity and income.",
    image: "/projects/Agreeculture.id.png",
    tags: ["NodeJs", "Golang", "PostgreSQL", "MongoDB"],
    demoUrl: "https://agreeculture.id",
  },
  {
    id: 2,
    title: "Agreemart - Digital Platform for online grocery shopping",
    description:
      "Agree Market connects agribusiness with its wholesale buyers, which include MSMEs, hotels, restaurants, cafes, traditional and modern markets, as well as companies",
    image: "/projects/Agreemart.png",
    tags: ["NodeJs", "Golang", "PostgreSQL", "MongoDB"],
  },
  {
    id: 3,
    title: "Oss - Electronically Integrated Business Licensing System",
    description:
      "web-based application that functions to assist the process of submitting complaints and permits for subsequent enforcement processes carried out by the decision maker",
    image: "/projects/Oss.png",
    tags: ["NodeJs", "Golang", "PostgreSQL", "MongoDB"],
  },
  {
    id: 4,
    title: "Simklinik - Digital Ecosystem for Farmers and Fishermans",
    description:
      "Clinical Health Facility Information and Management System (Clinical SIM) for managing health facilities, including Patient Management and Reporting.",
    image: "/projects/Simklinik2.png",
    tags: ["NodeJs", "Golang", "PostgreSQL", "MongoDB"],
  },
  {
    id: 5,
    title: "PUPR - LSPV2",
    description:
      "Concerning procedures for implementing construction work competency certification for work positions that cannot yet be implemented by professional certification bodies",
    image: "/projects/pupr-lspv2.png",
    tags: ["php", "Laravel", "bootstrap", "MySql", "vueJs", "Tailwind CSS"],
  },
  {
    id: 6,
    title: "PUPR - Ticketing System",
    description:
      "systematic management system (in the form of tickets) to assist customer support in accommodating needs",
    image: "/projects/Pupr-Ticketing.png",
    tags: ["php", "Laravel", "bootstrap", "MySql", "vueJs", "Tailwind CSS"],
  },
];

export const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects that showcase my skills and
          experience in full-stack development. Feel free to explore them!
        </p>

        <div className="grid grid-cols:1 md-grid-cols-2 lg:grid-cols-3 gap-8">
          {Projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hiddend shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 ml-1 mr-1">
                {" "}
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                {" "}
                {project.description}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            href="https://www.linkedin.com/in/franky-wahyu-544182190/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Check My Linkedin <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
