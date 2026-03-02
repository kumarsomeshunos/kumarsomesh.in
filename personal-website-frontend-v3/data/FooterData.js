const FooterStyles = {
    quoteCard: {
        mainButton: {
            tailwind: {
                main: {
                    add: ["px-2", "text-sm", "rounded-full"],
                }
            }
        }
    }
};

const FooterData = {
  footerLinks: [
    { key: "Home", value: "/" },
    { key: "Projects", value: "/projects" },
    { key: "Blogs", value: "/blogs" },
    { key: "Now", value: "/now" },
    { key: "Contact", value: "/contact" },
  ],
  quote: {
    quote:
      "The only limit to our realization of tomorrow is our doubts of today.",
    author: "~ Franklin D. Roosevelt",
    button: {
      link: "https://www.goodreads.com/quotes/1000-the-only-limit-to-our-realization-of-tomorrow-is-our-doubts",
      text: "Read more quotes",
    },
  },
};

export { FooterStyles, FooterData };
