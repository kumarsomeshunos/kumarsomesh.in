const NavbarStyles = {
  tailwind: {
    main: {
      add: ["sticky", "top-0", "z-10", "border-b"],
    },
    wrapper: {
      add: ["py-4"],
    },
    logo: {
      add: [
        // "hidden"
      ],
    },
    version: {
      add: [],
    },
    ul: {
      add: [
        "flex",
        "overflow-x-auto",
        "[&::-webkit-scrollbar]:hidden",
        "[-ms-overflow-style:none]",
        "[scrollbar-width:none]",
      ],
    },
    li: {
      add: ["mr-8"],
    },
  },
  vanilla: {
    main: {},
    wrapper: {},
    logo: {},
    version: {},
    ul: {},
    li: {},
  },
  sectionWrapper: {
    tailwind: {
      wallpaper: {
        add: ["bg-white"],
      },
    },
    vanilla: {},
  },
  styledLinkName: {
    tailwind: {
      main: {
        // add: ["link-unstyled"]
      }
    },
    vanilla: {},
  },
  styledLinkLi: {
    tailwind: {
      thickSpan: {
        remove: [],
        add: [],
      },
    },
    vanilla: {},
  },
};

const NavbarData = {
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

export { NavbarStyles, NavbarData };
