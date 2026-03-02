const HeroStyles = {
  twoPaneLayout: {
    tailwind: {
      main: {
        add: [],
      },
    },
  },
  left: {
    tailwind: {
      greetings: {
        add: ["mt-4", "text-3xl", "font-light"],
      },
      name: {
        add: [
          "text-4xl",
          "bg-clip-text",
          "text-transparent",
          "bg-[length:100%]",
          "bg-[url('https://cdn.dribbble.com/users/4025749/screenshots/7319596/media/e8e15b54c947cdc39e9abe93a9080e73.gif')]",
          "py-2",
        ],
      },
      description: {
        add: ["line-height-8", "mb-8"],
      },
    },
  },
};

const HeroData = {
  left: {
    greetings: "Hello, I'm",
    name: "Somesh Kumar",
    description: `<p>a third-year B.Tech student at <a href="https://jaipur.manipal.edu/muj.html">Manipal University | Jaipur</a>, majoring in Information Technology.</p>
<p>Passionate about tech and innovation, I specialize in the <a href="https://www.mongodb.com/mern-stack">MERN stack</a>. I work with languages like Java, JavaScript, C, and Python. Currently diving into the exciting world of <a href="https://en.wikipedia.org/wiki/Machine_learning">Machine Learning</a> 🤖, exploring its endless possibilities.</p>
<p>Beyond coding, I’m intrigued by the inner workings of <a href="https://en.wikipedia.org/wiki/Operating_system">operating systems</a> 💻 and love learning about them. Understanding how computers work and optimizing performance fuels my curiosity.</p>`,
    button: [
      {
        text: "Projects",
        link: "/projects",
      },
      {
        text: "Blogs",
        link: "/blogs",
      },
    ],
  },
  right: {
    image:
      "https://images.prismic.io/miscellaneous/9dbdaa4a-04ec-4a9c-837f-23b9bbde21d6_hero.png",
    alt: "Disply Picture of Somesh Kumar",
  },
};

export { HeroStyles, HeroData };
