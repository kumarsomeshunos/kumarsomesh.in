import MasonryCardHolder from "@/components/core/Cards/MasonryCardHolder/MasonryCardHolder";
import ProjectCard from "@/components/core/Cards/ProjectCard/ProjectCard";
import Heading from "@/components/core/Heading/Heading";
import SectionWrapper from "@/components/core/Wrappers/SectionWrapper";

export default function Projects({ data, styling, ...extraProps }) {
  return (
    <SectionWrapper styling={styling?.sectionWrapper}>
      <Heading data={data.heading} styling={styling?.heading} />
      <MasonryCardHolder styling={styling?.masonryCardHolder} {...extraProps}>
        {data.projects.map((project, index) => {
          return (
            <ProjectCard
              key={index}
              data={project}
              styling={styling?.projectCard}
            />
          );
        })}
      </MasonryCardHolder>
    </SectionWrapper>
  );
}
