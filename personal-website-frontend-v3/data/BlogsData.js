const BlogsStyles = {
  blogCard: {
    tag: {
      tailwind: {
        main: {
          add: ["mt-2"],
        },
      },
    },
    tailwind: {
      main: {
        add: ["border"],
      },
      title: {
        add: ["text-3xl", "font-semibold", "pb-4"],
      },
      subtitle: {
        add: ["text-xl", "font-medium", "pb-2"],
      },
      date: {
        add: ["text-gray-500"],
      },
      description: {
        add: ["py-4"],
      },
      image: {
        add: ["mb-4", "shadow-2xl"],
      },
      tags: {
        add: ["mt-2"],
      },
      links: {
        add: ["pb-2"],
      },
      main: {
        add: [
          "border",
          "bg-white",
          "rounded-xl",
          "shadow-lg",
          "transform",
          "transition-all",
          "duration-300",
          "ease-in-out",
          "hover:bg-gray-200",
          "hover:shadow-xl",
          "hover:-translate-y-1",
        ],
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

const BlogsData = {
  heading: {
    heading: "Blogs",
    subheading: "Here are some of my blogs that I have written.",
  },
  blogs: [
    {
      title: "Blog One",
      subtitle: "An introduction to my first blog",
      description: "This is a brief description of my first blog post.",
      date: "2023-01-01",
      tags: ["Technology", "Design", "Web Development"],
    },
    {
      title: "Blog Two",
      subtitle: "Exploring the world of web development",
      description:
        "In this blog, I delve into the intricacies of web development, sharing tips and tricks that I have learned over the years.",
      image: "https://example.com/blog-two.png",
      date: "2023-02-01",
      tags: ["Web Development", "Programming"],
    },
    {
      title: "Blog Three",
      subtitle: "Understanding design principles",
      description:
        "This blog post discusses the fundamental principles of design.",
      date: "2023-03-01",
      tags: ["Design", "User Experience"],
    },
  ],
};

export { BlogsStyles, BlogsData };
