import MusicCard from "@/components/core/Cards/NowCards/MusicCard/MusicCard";
import SectionWrapper from "@/components/core/Wrappers/SectionWrapper";

export default function Now({ data, styling, ...extraProps }) {
  return (
    <SectionWrapper styling={styling?.sectionWrapper} {...extraProps}>
      <MusicCard data={data} styling={styling?.musicCard} />
    </SectionWrapper>
  );
}
