import { Briefcase, Code, FileJson, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Full-Stack Developer
            </h3>
            <p className="text-muted-foreground">
              As a full-stack developer, I find immense satisfaction in
              architecting and building digital solutions from the ground up. I
              thrive on the challenge of connecting a powerful, efficient
              backend with a responsive and intuitive frontend, ensuring every
              part of the application works in perfect harmony.
            </p>
            <p className="text-muted-foreground">
              My development philosophy is rooted in writing clean, scalable
              code and a commitment to best practices. I believe that a
              well-built product is not only functional but also maintainable
              and ready for future growth. My goal is to deliver technical
              excellence that directly translates into business value and a
              seamless user experience.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a
                href="/franky-wahyu-prasetyo-cv.pdf"
                download="Franky_Wahyu_Prasetyo_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <FileJson className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Backend Developer</h4>
                  <p className="text-muted-foreground">
                    I build the server-side logic that powers applications. This
                    includes designing databases, creating secure APIs, and
                    ensuring high performance and scalability for a reliable
                    foundation.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Frontend Developer</h4>
                  <p className="text-muted-foreground">
                    I translate complex requirements and designs into
                    responsive, interactive, and high-performance user
                    interfaces. I am passionate about using modern web
                    technologies to create engaging and accessible experiences.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> UI/UX Designer</h4>
                  <p className="text-muted-foreground">
                    I focus on creating user-centric flows and intuitive
                    interfaces. My process involves understanding user needs to
                    design wireframes and prototypes that solve real-world
                    problems and are a pleasure to use.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
