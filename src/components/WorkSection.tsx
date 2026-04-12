import { map } from "lodash-es";
import { Link } from "react-router-dom";
import { PROJECTS, PROJECT_SLUGS } from "../constants";
import ProjectCard from "./ProjectCard";

const WORK_SECTION_DESKTOP_WIDTH = "calc(100% + var(--nav-total-offset))";

export default function WorkSection() {
  return (
    <section
      id="work"
      className="flex flex-col gap-[50px] w-full pt-[50px] md:pt-[50px] lg:pt-0"
    >
      <style>{`@media (min-width: 1024px) { #work { width: ${WORK_SECTION_DESKTOP_WIDTH}; } }`}</style>
      {map(PROJECTS, (project, index) => {
        const slug = PROJECT_SLUGS[project.title];
        const card = (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            layout={project.layout}
            index={index}
          />
        );

        if (slug === "marketlog" || slug === "killbills" || slug === "ichi") {
          return (
            <Link
              key={project.title}
              to={`/work/${slug}`}
              className="block cursor-pointer hover:opacity-90 transition-opacity"
            >
              {card}
            </Link>
          );
        }

        return card;
      })}
    </section>
  );
}
