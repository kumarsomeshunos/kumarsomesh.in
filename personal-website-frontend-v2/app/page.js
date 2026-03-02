import MainButton from "@/components/core/Buttons/MainButton/MainButton";
import ProjectCard from "@/components/core/Cards/ProjectCard/ProjectCard";
import Heading from "@/components/core/Heading/Heading";
import TwoPaneLayout from "@/components/core/TwoPaneLayout/TwoPaneLayout";
import SectionWrapper from "@/components/core/Wrappers/SectionWrapper";
import Navbar from "@/components/section/Navbar/Navbar";
import Link from "next/link";
import MasonryCardHolder from "@/components/core/Cards/MasonryCardHolder/MasonryCardHolder";

const leftContent = (
  <div>
    <h1>Hi, I'm Somesh Kumar</h1>
    <p>
      a fourth-year B.Tech student at <Link href={"/"}>Manipal University</Link>{" "}
      | Jaipur, majoring in Information Technology. Passionate about tech and
      innovation, I specialize in the MERN stack. I work with languages like
      Java, JavaScript, C, and Python. Currently diving into the exciting world
      of Machine Learning 🤖, exploring its endless possibilities. Beyond
      coding, I'm intrigued by the inner workings of operating systems 💻 and
      love learning about them. Understanding how computers work and optimizing
      performance fuels my curiosity.
    </p>
    <br /><br />
    <MainButton data={{ text: "Projects", value: "/" }} />
  </div>
);

const rightContent = (
  <img
    src="https://beta.kumarsomesh.in/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Fmiscellaneous%2F9dbdaa4a-04ec-4a9c-837f-23b9bbde21d6_hero.png&w=1920&q=75"
    alt="Hero Image"
  />
);

const data = {
  name: "Somesh Kumar",
  version: "MK-X",
  navbarLinks: [
    {
      key: "Home",
      value: "/",
    },
    {
      key: "Projects",
      value: "/projects",
    },
    {
      key: "Blogs",
      value: "/blogs",
    },
    {
      key: "Now",
      value: "/now",
    },
    {
      key: "Contact",
      value: "/contact",
    },
    {
      key: "Updates",
      value: "/updates",
    },
  ],
};

export default function Home() {
  return (
    <>
      <Navbar
        data={data}
        styling={{
          sectionWrapper: {
            tailwind: {
              main: {
                add: ["bg-blue-800"],
              },
            },
          },
        }}
      />
      <SectionWrapper>
        <TwoPaneLayout leftContent={leftContent} rightContent={rightContent} styling={{
          tailwind: {
            main: {
              add: ["h-[90vh]", "w-full"],
            },
          }
        }} />
        </SectionWrapper>
        <SectionWrapper styling={{
          
            tailwind: {
              main: {
                add: ["bg-[url('https://cdn.dribbble.com/users/4025749/screenshots/7319596/media/e8e15b54c947cdc39e9abe93a9080e73.gif')]",
  "bg-center",
  "bg-cover",
  "bg-fixed"],
              },
            },
        }}>
          <Heading
          data={{
            heading: "This is the heading",
            subheading: "This is the subheading",
            hr: true,
          }}
        />
        <MasonryCardHolder
          breakpointCols={{
            default: 3,
            1100: 2,
            700: 1,
          }}
        >
          <ProjectCard
            data={{
              title: "Careers Portal",
              postedOn: "23 January 2024",
              status: "Completed",
              subtitle: undefined,
              description: "Careers portal for Manipal University.",
              links: [
                {
                  key: "Portal",
                  value: "https://example.com/research-paper",
                },
                {
                  key: "Backend Github",
                  value: "https://example.com/research-paper",
                },
              ],
              slug: "manipal-careers-portal",
              details: {
                key: "TPP",
                value: "https://example.com/research-paper",
              },
            }}
          />
          <ProjectCard
            data={{
              title: "Careers Portal",
              postedOn: "23 January 2024",
              status: "Completed",
              subtitle: undefined,
              description: "Careers portal for Manipal University.",
              links: [
                {
                  key: "Portal",
                  value: "https://example.com/research-paper",
                },
                {
                  key: "Backend Github",
                  value: "https://example.com/research-paper",
                },
              ],
              src: "https://images.prismic.io/miscellaneous/3484ab3b-c51c-42bf-9f00-b2432ed6a300_manipal.png",
              slug: "manipal-careers-portal",
              details: {
                key: "TPP",
                value: "https://example.com/research-paper",
              },
            }}
          />
          <ProjectCard
            data={{
              title: "Careers Portal",
              postedOn: "23 January 2024",
              status: "Completed",
              subtitle: undefined,
              description: "Careers portal for Manipal University.",
              links: [
                {
                  key: "Portal",
                  value: "https://example.com/research-paper",
                },
                {
                  key: "Backend Github",
                  value: "https://example.com/research-paper",
                },
              ],
              src: "https://images.prismic.io/miscellaneous/3484ab3b-c51c-42bf-9f00-b2432ed6a300_manipal.png",
              slug: "manipal-careers-portal",
              details: {
                key: "TPP",
                value: "https://example.com/research-paper",
              },
            }}
          />
          <ProjectCard
            data={{
              title: "Careers Portal",
              postedOn: "23 January 2024",
              status: "Completed",
              subtitle: undefined,
              description: "Careers portal for Manipal University.",
              links: [
                {
                  key: "Portal",
                  value: "https://example.com/research-paper",
                },
                {
                  key: "Backend Github",
                  value: "https://example.com/research-paper",
                },
              ],
              src: "https://images.prismic.io/miscellaneous/3484ab3b-c51c-42bf-9f00-b2432ed6a300_manipal.png",
              slug: "manipal-careers-portal",
              details: {
                key: "TPP",
                value: "https://example.com/research-paper",
              },
            }}
          />
          <ProjectCard
            data={{
              title: "Careers Portal",
              postedOn: "23 January 2024",
              status: "Completed",
              subtitle: undefined,
              description: "Careers portal for Manipal University.",
              src: "https://images.prismic.io/miscellaneous/3484ab3b-c51c-42bf-9f00-b2432ed6a300_manipal.png",
              slug: "manipal-careers-portal",
              details: {
                key: "TPP",
                value: "https://example.com/research-paper",
              },
            }}
          />
        </MasonryCardHolder>
        </SectionWrapper>
        <SectionWrapper>
        <Heading
          data={{
            heading: "This is the heading",
            subheading: "This is the subheading",
            hr: true,
          }}
        />
      </SectionWrapper>
    </>
  );
}
