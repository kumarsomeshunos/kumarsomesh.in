import { introductionMD } from "./introductionMD";

const navbar = {
  name: undefined,
  version: "MK-VII",
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

const hero = {
  greetings: undefined,
  name: "𝕊𝕠𝕞𝕖𝕤𝕙 𝕂𝕦𝕞𝕒𝕣",
  backgroundImageName: undefined,
  introductionMD: introductionMD,
  heroButtons: [
    {
      key: "Projects",
      value: "/projects",
    },
    {
      key: "Blogs",
      value: "/blogs",
    },
    {
      key: "Portfolio Builder",
      value: "/test/form2",
      color: "black",
      background:
        "url('https://cdn.dribbble.com/users/4025749/screenshots/7319596/media/e8e15b54c947cdc39e9abe93a9080e73.gif') center/cover",
    },
  ],
  displayProfile:
    "https://images.prismic.io/miscellaneous/9dbdaa4a-04ec-4a9c-837f-23b9bbde21d6_hero.png",
  displayProfileAlt: undefined,
};

const projectsSection = {
  heading: undefined,
  subheading: "Here you'll find some of my projects that I've worked on.",
  backgroundImage: undefined,
  projects: [
    {
      title: "The Popcorn Protocol",
      postedOn: "27 July 2024",
      status: "In Progress",
      subtitle: "Make Piracy Easier",
      description:
        "Even granny should be a able to download movies without paying.",
      links: [
        {
          key: "TPP",
          value: "https://example.com/research-paper",
        },
      ],
      src: "https://champagne.pages.dev/static/cheers.gif",
      slug: "the-popcorn-protocol",
      details: {
        key: "TPP",
        value: "https://example.com/research-paper",
      },
    },
    {
      title: "Organized Octopus",
      postedOn: "07 April 2024",
      status: "Completed",
      subtitle: undefined,
      description:
        "A Bookmark Manager. Make website collection and sharing easier.",
      links: [
        {
          key: "Link",
          value: "https://example.com/research-paper",
        },
      ],
      src: "https://images.prismic.io/miscellaneous/Zxd55oF3NbkBXzyl_bookmarksmanager.webp",
      slug: "the-organized-octopus",
      details: {
        key: "TPP",
        value: "https://example.com/research-paper",
      },
    },
    {
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
    },
    {
      title: "TEDxManipal",
      postedOn: "17 November 2023",
      status: "Completed",
      subtitle: undefined,
      description: undefined,
      links: [
        {
          key: "TEDxManipal",
          value: "https://example.com/research-paper",
        },
      ],
      src: "https://images.prismic.io/miscellaneous/93609c16-ee87-4ba8-9377-fc1acd13dbc8_tedx.png",
      slug: "tedxmuj",
      details: {
        key: "TPP",
        value: "https://example.com/research-paper",
      },
    },
    {
      title: "EdiImg",
      postedOn: "11 July 2023",
      status: "Completed",
      subtitle: "Image Manuplation Software",
      description:
        "A simple desktop app for editing images. It's built with Python and has lots of tools to help you change your photos.",
      links: [
        {
          key: "GitHub Link",
          value: "https://example.com/research-paper",
        },
      ],
      src: undefined,
      slug: "ediimg",
      details: false,
    },
    {
      title: "DoomScoll",
      postedOn: "19 Decemeber 2023",
      status: "Completed",
      subtitle: "Because learning shouldn't feel like a chore",
      description:
        "An app featuring an engaging Instagram Reels-style feed on various topics, powered by a fine-tuned GPT-4 model.",
      links: [
        {
          key: "DoomScoll",
          value: "https://example.com/research-paper",
        },
      ],
      src: "https://images.prismic.io/miscellaneous/6ce1ad8c-5d7c-463a-8a3b-bb7ba1d73f86_doomscroll.png",
      slug: "doomscrol",
      details: {
        key: "TPP",
        value: "https://example.com/research-paper",
      },
    },
  ],
};

const blogsSection = {
  heading: undefined,
  subheading: undefined,
  backgroundImage: undefined,
  blogs: [
    {
      title: "FaceID in Manipal University",
      postedOn: "24 October 2024",
      tags: [{ key: "FaceID" }, { key: "Manipal" }, { key: "University" }],
      description:
        "How we implemented FaceID in Manipal University to make the campus more secure. It was a fun project to work on.",
      thumbnail: undefined,
      slug: "faceid-in-manipal-university",
      readMoreLink: {
        text: "Read more...",
      },
    },
    {
      title: "The $200 DigitalOcean Credits",
      postedOn: "13 July 2024",
      tags: [{ key: "DigitalOcean" }, { key: "Credits" }],
      description: "How the $200 DigitalOcean credits changed the way I work?",
      thumbnail:
        "https://images.prismic.io/miscellaneous/8a335656-046e-4bdf-bc22-680b3f3b05fe_digitalocean-blogs.png",
      slug: "the-200-digitalocean-credits",
      readMoreLink: {
        text: "Read more...",
      },
    },
  ],
};

const nowSection = {
  heading: undefined,
  subheading: undefined,
  backgroundImage: undefined,
  now: {
    nowTitle: "Now Playing",
    description: "This is the song I am listening to right now.",
    rNowTitle: "About this card",
    rNowDescription: "This is a card that shows what I'm doing now.",
    buttons: {
      left: {
        key: "Listen on Spotify",
        value: "https://open.spotify.com/track/6K4t31amVTZDgR3sKmwUJJ",
      },
      right: {
        key: "Listen on Apple Music",
        value:
          "https://music.apple.com/in/album/the-less-i-know-the-better/1051385062?i=1051385063",
      },
    },
  },
};

const footer = {
  footerImageSrc: "https://images.squarespace-cdn.com/content/v1/60133069ccdf254ecbbd6f57/cfcb226c-f821-471c-8d58-7b4e6de6bdec/end-of-road-rebranded.gif",
  footerImageAlt: "Footer Image",
  footerLinksTitle: "Quick Links",
  footerLinks: [
    {
      key: "Content Editor",
      value: "/test/contentEditor",
    },
    {
      key: "Edit Navbar",
      value: "/test/editnavbar",
    },
    {
      key: "Form Two",
      value: "/test/form2",
    },
    {
      key: "Form",
      value: "/test/form",
    },
    {
      key: "F.I.R.S.T",
      value: "/",
    },
    {
      key: "The Popcorn Protocol",
      value: "/projects/the-popcorn-protocol",
    },
    {
      key: "The Organized Octopus",
      value: "/projects/the-organized-octopus",
    },
  ],
};

export { navbar, hero, projectsSection, blogsSection, nowSection, footer };
