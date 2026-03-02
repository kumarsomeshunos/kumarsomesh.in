import MasonryCardHolder from "@/components/core/Cards/MasonryCardHolder/MasonryCardHolder";
import BlogCard from "@/components/core/Cards/BlogCard/BlogCard";
import Heading from "@/components/core/Heading/Heading";
import SectionWrapper from "@/components/core/Wrappers/SectionWrapper";

export default function Blogs({ data, styling, ...extraProps }) {
  return (
    <SectionWrapper styling={styling?.sectionWrapper}>
      <Heading data={data.heading} styling={styling?.heading} />
      <MasonryCardHolder styling={styling?.masonryCardHolder}>
        {data.blogs.map((blog, index) => {
          return (
            <BlogCard key={index} data={blog} styling={styling?.blogCard} />
          );
        })}
      </MasonryCardHolder>
    </SectionWrapper>
  );
}
