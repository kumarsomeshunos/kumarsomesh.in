const ProjectsStyles = {
  projectCard: {
    tailwind: {
      links: {
        add: ["pb-2"],
      },
      main: {
        add: ["border", "bg-white", "rounded-xl", "shadow-lg",
            "transform", "transition-all", "duration-300", "ease-in-out",
            "hover:bg-gray-200", "hover:shadow-xl", "hover:-translate-y-1"],
      },
      title: {
        add: ["text-3xl", "font-semibold", "pb-4"],
      },
      date: {
        add: ["text-gray-500"],
      },
      description: {
        add: ["py-4"],
      },
      image: {
        add: ["mt-4", "shadow-2xl"],
      },
    },
    mainButton: {
      tailwind: {
        main: {
          remove: ["px-4", "py-2", "hover:px-4", "hover:py-2"],
          add: ["px-2", "py-1", "text-sm", "rounded-xl"],
        },
      },
    },
  },
};

const ProjectsData = {
  heading: {
    heading: "Projects",
    subheading: "Here are some of my projects that I have worked on.",
  },
  projects: [
    {
      title: "IEEE Genesis",
      description:
        "This is a description of project one. It includes various features and functionalities that showcase my skills. It is designed to be user-friendly and efficient. It also includes a responsive design that works well on both desktop and mobile devices.",
      image:
        "https://alpha.kumarsomesh.in/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Fmiscellaneous%2F008ccbfc-44b2-48f0-aeb3-0079712066bf_genesis.png&w=1920&q=75",
      date: "2023-01-01",
      status: "Completed",
      links: [
        { text: "Learn More", link: "/projects/project-one" },
        { text: "View Code", link: "https://github.com/user/project-one" },
      ],
    },
    {
      title: "Project Two",
      description: "This is a description of project two.",
      date: "2023-02-01",
      status: "Ongoing",
      links: [
        { text: "Learn More", link: "/projects/project-two" },
        { text: "View Code", link: "https://github.com/user/project-two" },
      ],
    },
    {
      title: "Project Three",
      description:
        "This is a description of project three. It includes advanced features and a modern design. The project is built using the latest technologies and follows best practices in software development. It is optimized for performance and scalability.",
      date: "2023-03-01",
      status: "Ongoing",
      image:
        "https://beta.kumarsomesh.in/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Fmiscellaneous%2Fe46919f1-3aaa-499c-af5d-620afac59473_cryptx_randomize.gif&w=828&q=75",
      links: [
        { text: "Learn More", link: "/projects/project-three" },
        { text: "View Code", link: "https://github.com/user/project-three" },
      ],
    },
    {
      title: "Project Four",
      description: "This is a description of project four.",
      date: "2023-04-01",
      status: "Completed",
      links: [
        { text: "Learn More", link: "/projects/project-four" },
        { text: "View Code", link: "https://github.com/user/project-four" },
      ],
    },
    {
      title: "Project Five",
      description:
        "This is a description of project five. It showcases my ability to work with complex systems and integrate various technologies. The project is designed to be modular and maintainable, allowing for easy updates and enhancements in the future. It also includes comprehensive documentation for better understanding and usability. ",
      image:
        "https://beta.kumarsomesh.in/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Fmiscellaneous%2F073e1c23-e49a-498c-9794-230587f33e2f_oneiros22.png&w=828&q=75",
      date: "2023-05-01",
      status: "Completed",
      links: [
        { text: "Learn More", link: "/projects/project-five" },
        { text: "View Code", link: "https://github.com/user/project-five" },
      ],
    },
  ],
};

export { ProjectsStyles, ProjectsData };
