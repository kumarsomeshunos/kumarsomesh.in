import {
  navbar,
  hero,
  projectsSection,
  blogsSection,
  nowSection,
  footer,
} from "./user_data/contentData";

let baseData = {
  purewhite: {
    backgroundMain: undefined,
    colorMain: undefined, // Dark Blue-Grey for visibility
    backgroundWallpaper: undefined,
    filterWallpaper: undefined,
    linkBorderBottom: undefined,
    linkBackgroundColor: undefined,
  },
  alldark: {
    backgroundMain: "black",
    colorMain: "white", // Bright Yellow for contrast
    backgroundWallpaper: "#1b1b1b", // Solid dark grey
    filterWallpaper: "blur(0px)",
    linkBorderBottom: "1px solid rgba(241, 196, 15, 0.7)",
    linkBackgroundColor: "#f1c40f",
  },
};

let navbarData = {
  purewhite: {
    backgroundMain: "white",
    colorMain: undefined,
    backgroundWallpaper: "white",
    filterWallpaper: undefined,
    name: navbar.name,
    version: navbar.version,
    navbarLinks: navbar.navbarLinks,
  },
  alldark: {
    backgroundMain: "black",
    colorMain: "white",
    backgroundWallpaper: "black",
    filterWallpaper: undefined,
    name: navbar.name,
    version: navbar.version,
    navbarLinks: navbar.navbarLinks,
  },
};

let heroData = {
  purewhite: {
    backgroundMain: undefined,
    colorMain: undefined,
    backgroundWallpaper: undefined,
    filterWallpaper: undefined,
    greetings: hero.greetings,
    name: hero.name,
    backgroundImageName: hero.backgroundImageName,
    introductionMD: hero.introductionMD,
    heroButtons: hero.heroButtons.map((button) => ({
      key: button.key,
      value: button.value,
      background: button?.background,
      border: button?.border,
      boxShadow: button?.boxShadow,
      color: button?.color,
      padding: button?.padding,
      margin: button?.margin,
      borderRadius: button?.borderRadius,
      textDecoration: button?.textDecoration,
      transition: button?.transition,
      backgroundHover: button?.backgroundHover,
      borderHover: button?.borderHover,
      boxShadowHover: button?.boxShadowHover,
      colorHover: button?.colorHover,
      paddingHover: button?.paddingHover,
      marginHover: button?.marginHover,
      borderRadiusHover: button?.borderRadiusHover,
      textDecorationHover: button?.textDecorationHover,
      transitionHover: button?.transitionHover,
    })),
    displayProfile: hero.displayProfile,
    displayProfileAlt: hero.displayProfileAlt,
  },
  alldark: {
    backgroundMain: undefined,
    colorMain: undefined,
    backgroundWallpaper: undefined,
    filterWallpaper: undefined,
    greetings: hero.greetings,
    name: hero.name,
    backgroundImageName: hero.backgroundImageName,
    introductionMD: hero.introductionMD,
    heroButtons: hero.heroButtons.map((button) => ({
      key: button.key,
      value: button.value,
      background: button?.background || "white",
      border: button?.border || "1px solid white",
      boxShadow: button?.boxShadow,
      color: button?.color || "black",
      padding: button?.padding,
      margin: button?.margin,
      borderRadius: button?.borderRadius,
      textDecoration: button?.textDecoration,
      transition: button?.transition,
      backgroundHover: button?.backgroundHover,
      borderHover: button?.borderHover || "1px solid white",
      boxShadowHover: button?.boxShadowHover,
      colorHover: button?.colorHover,
      paddingHover: button?.paddingHover,
      marginHover: button?.marginHover,
      borderRadiusHover: button?.borderRadiusHover,
      textDecorationHover: button?.textDecorationHover,
      transitionHover: button?.transitionHover,
    })),
    displayProfile: hero.displayProfile,
    displayProfileAlt: hero.displayProfileAlt,
  },
};

let projectsSectionData = {
  purewhite: {
    backgroundMain: undefined,
    colorMain: undefined,
    backgroundWallpaper: undefined,
    filterWallpaper: undefined,
    heading: projectsSection.heading,
    subheading: projectsSection.subheading,
    backgroundImageName: projectsSection.backgroundImage,

    projects: projectsSection.projects.map((project) => ({
      title: project.title,
      postedOn: project.postedOn,
      status: project.status,
      subtitle: project.subtitle,
      description: project.description,
      links: project.links.map((link) => ({
        key: link.key,
        value: link.value,
        background: link?.background,
        border: link?.border,
        boxShadow: link?.boxShadow,
        color: link?.color,
        padding: link?.padding,
        margin: link?.margin,
        borderRadius: link?.borderRadius,
        textDecoration: link?.textDecoration,
        transition: link?.transition,
        backgroundHover: link?.backgroundHover,
        borderHover: link?.borderHover,
        boxShadowHover: link?.boxShadowHover,
        colorHover: link?.colorHover,
        paddingHover: link?.paddingHover,
        marginHover: link?.marginHover,
        borderRadiusHover: link?.borderRadiusHover,
        textDecorationHover: link?.textDecorationHover,
        transitionHover: link?.transitionHover,
      })),
      src: project.src,
      slug: project.slug,
      details: {
        key: project.details?.key,
        value: project.details?.value,
        background: project.details?.background,
        border: project.details?.border,
        boxShadow: project.details?.boxShadow,
        color: project.details?.color,
        padding: project.details?.padding,
        margin: project.details?.margin,
        borderRadius: project.details?.borderRadius,
        textDecoration: project.details?.textDecoration,
        transition: project.details?.transition,
        backgroundHover: project.details?.backgroundHover,
        borderHover: project.details?.borderHover,
        boxShadowHover: project.details?.boxShadowHover,
        colorHover: project.details?.colorHover,
        paddingHover: project.details?.paddingHover,
        marginHover: project.details?.marginHover,
        borderRadiusHover: project.details?.borderRadiusHover,
        textDecorationHover: project.details?.textDecorationHover,
        transitionHover: project.details?.transitionHover,
      },
      background: project.background,
      border: project.border,
      boxShadow: project.boxShadow,
      color: project.color,
      borderRadius: project.borderRadius,
      textDecoration: project.textDecoration,
      transition: project.transition,
      backgroundHover: project.backgroundHover,
      borderHover: project.borderHover,
      boxShadowHover: project.boxShadowHover,
      colorHover: project.colorHover,
      borderRadiusHover: project.borderRadiusHover,
      textDecorationHover: project.textDecorationHover,
      transitionHover: project.transitionHover,
    })),
  },
  alldark: {
    backgroundMain: undefined,
    colorMain: undefined,
    backgroundWallpaper: undefined,
    filterWallpaper: undefined,
    heading: projectsSection.heading,
    subheading: projectsSection.subheading,
    backgroundImageName: projectsSection.backgroundImage,
    projects: projectsSection.projects.map((project) => ({
      title: project.title,
      postedOn: project.postedOn,
      status: project.status,
      subtitle: project.subtitle,
      description: project.description,
      links: project.links.map((link) => ({
        key: link.key,
        value: link.value,
        background: link?.background,
        border: link?.border || "1px solid white",
        boxShadow: link?.boxShadow,
        color: link?.color,
        padding: link?.padding || "0.1rem 0.3rem",
        margin: link?.margin || "0.5rem 0.5rem 0 0",
        borderRadius: link?.borderRadius || "0.25rem",
        textDecoration: link?.textDecoration,
        transition: link?.transition,
        backgroundHover: link?.backgroundHover,
        borderHover: link?.borderHover || "1px solid white",
        boxShadowHover: link?.boxShadowHover,
        colorHover: link?.colorHover,
        paddingHover: link?.paddingHover || "0.1rem 0.3rem",
        marginHover: link?.marginHover || "0.5rem 0.5rem 0 0",
        borderRadiusHover: link?.borderRadiusHover || "0.25rem",
        textDecorationHover: link?.textDecorationHover,
        transitionHover: link?.transitionHover,
      })),
      src: project.src,
      slug: project.slug,
      details: {
        key: project.details?.key,
        value: project.details?.value,
        background: project.details?.background,
        border: project.details?.border || "1px solid white",
        boxShadow: project.details?.boxShadow,
        color: project.details?.color,
        padding: project.details?.padding || "0.1rem 0.3rem",
        margin: project.details?.margin || "0.5rem 0.5rem 0 0",
        borderRadius: project.details?.borderRadius || "0.25rem",
        textDecoration: project.details?.textDecoration,
        transition: project.details?.transition,
        backgroundHover: project.details?.backgroundHover,
        borderHover: project.details?.borderHover || "1px solid white",
        boxShadowHover: project.details?.boxShadowHover,
        colorHover: project.details?.colorHover,
        paddingHover: project.details?.paddingHover || "0.1rem 0.3rem",
        marginHover: project.details?.marginHover || "0.5rem 0.5rem 0 0",
        borderRadiusHover: project.details?.borderRadiusHover || "0.25rem",
        textDecorationHover: project.details?.textDecorationHover,
        transitionHover: project.details?.transitionHover,
      },
      background: project.background,
      border: project.border || "1px solid white",
      boxShadow: project.boxShadow,
      color: project.color,
      borderRadius: project.borderRadius,
      textDecoration: project.textDecoration,
      transition: project.transition,
      backgroundHover: project.backgroundHover,
      borderHover: project.borderHover,
      boxShadowHover: project.boxShadowHover,
      colorHover: project.colorHover,
      borderRadiusHover: project.borderRadiusHover,
      textDecorationHover: project.textDecorationHover,
      transitionHover: project.transitionHover,
    })),
  },
};

let blogsSectionData = {
  purewhite: {
    backgroundMain: undefined,
    colorMain: undefined,
    backgroundWallpaper: undefined,
    filterWallpaper: undefined,
    heading: blogsSection.heading,
    subheading: blogsSection.subheading,
    backgroundImageName: blogsSection.backgroundImage,

    blogs: blogsSection.blogs.map((blog) => ({
      title: blog.title,
      postedOn: blog.postedOn,
      tags: blog.tags.map((tag) => ({
        key: tag.key,
      })),
      description: blog.description,
      thumbnail: blog.thumbnail,
      slug: blog.slug,
      readMoreLink: {
        text: blog.readMoreLink?.text,
        background: blog?.readMoreLink?.background,
        border: blog?.readMoreLink?.border,
        boxShadow: blog?.readMoreLink?.boxShadow,
        color: blog?.readMoreLink?.color,
        padding: blog?.readMoreLink?.padding,
        margin: blog?.readMoreLink?.margin,
        borderRadius: blog?.readMoreLink?.borderRadius,
        textDecoration: blog?.readMoreLink?.textDecoration,
        transition: blog?.readMoreLink?.transition,
        backgroundHover: blog?.readMoreLink?.backgroundHover,
        borderHover: blog?.readMoreLink?.borderHover,
        boxShadowHover: blog?.readMoreLink?.boxShadowHover,
        colorHover: blog?.readMoreLink?.colorHover,
        paddingHover: blog?.readMoreLink?.paddingHover,
        marginHover: blog?.readMoreLink?.marginHover,
        borderRadiusHover: blog?.readMoreLink?.borderRadiusHover,
        textDecorationHover: blog?.readMoreLink?.textDecorationHover,
        transitionHover: blog?.readMoreLink?.transitionHover,
      },
      background: blog?.background,
      border: blog?.border,
      boxShadow: blog?.boxShadow,
      color: blog?.color,
      borderRadius: blog?.borderRadius,
      textDecoration: blog?.textDecoration,
      transition: blog?.transition,
      backgroundHover: blog?.backgroundHover,
      borderHover: blog?.borderHover,
      boxShadowHover: blog?.boxShadowHover,
      colorHover: blog?.colorHover,
      borderRadiusHover: blog?.borderRadiusHover,
      textDecorationHover: blog?.textDecorationHover,
      transitionHover: blog?.transitionHover,
    })),
  },
  alldark: {
    backgroundMain: undefined,
    colorMain: undefined,
    backgroundWallpaper: undefined,
    filterWallpaper: undefined,
    heading: blogsSection.heading,
    subheading: blogsSection.subheading,
    backgroundImageName: blogsSection.backgroundImage,

    blogs: blogsSection.blogs.map((blog) => ({
      title: blog.title,
      postedOn: blog.postedOn,
      tags: blog.tags.map((tag) => ({
        key: tag.key,
      })),
      description: blog.description,
      thumbnail: blog.thumbnail,
      slug: blog.slug,
      readMoreLink: {
        text: blog.readMoreLink?.text,
        background: blog?.readMoreLink?.background,
        border: blog?.readMoreLink?.border || "1px solid white",
        boxShadow: blog?.readMoreLink?.boxShadow,
        color: blog?.readMoreLink?.color,
        padding: blog?.readMoreLink?.padding || "0.1rem 0.3rem",
        margin: blog?.readMoreLink?.margin || "0.5rem 0.5rem 0 0",
        borderRadius: blog?.readMoreLink?.borderRadius || "0.25rem",
        textDecoration: blog?.readMoreLink?.textDecoration,
        transition: blog?.readMoreLink?.transition,
        backgroundHover: blog?.readMoreLink?.backgroundHover,
        borderHover: blog?.readMoreLink?.borderHover || "1px solid white",
        boxShadowHover: blog?.readMoreLink?.boxShadowHover,
        colorHover: blog?.readMoreLink?.colorHover,
        paddingHover: blog?.readMoreLink?.paddingHover || "0.1rem 0.3rem",
        marginHover: blog?.readMoreLink?.marginHover || "0.5rem 0.5rem 0 0",
        borderRadiusHover: blog?.readMoreLink?.borderRadiusHover || "0.25rem",
        textDecorationHover: blog?.readMoreLink?.textDecorationHover,
        transitionHover: blog?.readMoreLink?.transitionHover,
      },
      background: blog?.background,
      border: blog?.border || "1px solid white",
      boxShadow: blog?.boxShadow,
      color: blog?.color,
      borderRadius: blog?.borderRadius,
      textDecoration: blog?.textDecoration,
      transition: blog?.transition,
      backgroundHover: blog?.backgroundHover,
      borderHover: blog?.borderHover,
      boxShadowHover: blog?.boxShadowHover,
      colorHover: blog?.colorHover,
      borderRadiusHover: blog?.borderRadiusHover,
      textDecorationHover: blog?.textDecorationHover,
      transitionHover: blog?.transitionHover,
    })),
  },
};

let nowSectionData = {
  purewhite: {
    backgroundMain: undefined,
    colorMain: undefined,
    backgroundWallpaper:
      "center / cover no-repeat url('https://beta.kumarsomesh.in/_next/image?url=https%3A%2F%2Flastfm.freetls.fastly.net%2Fi%2Fu%2F300x300%2F175e679e8d615e8536cb92f4d479eac8.jpg&w=640&q=75')",
    filterWallpaper: "blur(1rem)",
    heading: nowSection.heading,
    subheading: nowSection.subheading,
    backgroundImageName: nowSection.backgroundImage,

    now: {
      posterImage:
        "https://beta.kumarsomesh.in/_next/image?url=https%3A%2F%2Flastfm.freetls.fastly.net%2Fi%2Fu%2F300x300%2F175e679e8d615e8536cb92f4d479eac8.jpg&w=640&q=75",
      posterImageAlt: "Song poster",
      posterImageWidth: 1200,
      posterImageHeight: 1200,
      nowTitle: nowSection.now.nowTitle,
      songTitle: "The Less I Know The Better",
      songArtist: "Tame Impala",
      songAlbum: "Currents",
      description: nowSection.now.description,
      buttons: {
        left: {
          key: nowSection.now.buttons.left.key,
          value: nowSection.now.buttons.left.value,
          background: nowSection.now.buttons.left?.background || "green",
          border: nowSection.now.buttons.left?.border || "1px solid black",
          boxShadow: nowSection.now.buttons.left?.boxShadow,
          color: nowSection.now.buttons.left?.color || "white",
          padding: nowSection.now.buttons.left?.padding || "0.1rem 0.3rem",
          margin: nowSection.now.buttons.left?.margin || "0.5rem 0.5rem 0 0",
          borderRadius: nowSection.now.buttons.left?.borderRadius || "0.25rem",
          textDecoration: nowSection.now.buttons.left?.textDecoration,
          transition: nowSection.now.buttons.left?.transition,
          backgroundHover: nowSection.now.buttons.left?.backgroundHover,
          borderHover:
            nowSection.now.buttons.left?.borderHover || "1px solid black",
          boxShadowHover: nowSection.now.buttons.left?.boxShadowHover,
          colorHover: nowSection.now.buttons.left?.colorHover,
          paddingHover:
            nowSection.now.buttons.left?.paddingHover || "0.1rem 0.3rem",
          marginHover:
            nowSection.now.buttons.left?.marginHover || "0.5rem 0.5rem 0 0",
          borderRadiusHover:
            nowSection.now.buttons.left?.borderRadiusHover || "0.25rem",
          textDecorationHover: nowSection.now.buttons.left?.textDecorationHover,
          transitionHover: nowSection.now.buttons.left?.transitionHover,
        },
        right: {
          key: nowSection.now.buttons.right.key,
          value: nowSection.now.buttons.right.value,
          background: nowSection.now.buttons.right?.background,
          border: nowSection.now.buttons.right?.border,
          boxShadow: nowSection.now.buttons.right?.boxShadow,
          color: nowSection.now.buttons.right?.color,
          padding: nowSection.now.buttons.right?.padding || "0.1rem 0.3rem",
          margin: nowSection.now.buttons.right?.margin,
          borderRadius: nowSection.now.buttons.right?.borderRadius,
          textDecoration: nowSection.now.buttons.right?.textDecoration,
          transition: nowSection.now.buttons.right?.transition,
          backgroundHover: nowSection.now.buttons.right?.backgroundHover,
          borderHover: nowSection.now.buttons.right?.borderHover,
          boxShadowHover: nowSection.now.buttons.right?.boxShadowHover,
          colorHover: nowSection.now.buttons.right?.colorHover,
          paddingHover:
            nowSection.now.buttons.right?.paddingHover || "0.1rem 0.3rem",
          marginHover: nowSection.now.buttons.right?.marginHover,
          borderRadiusHover: nowSection.now.buttons.right?.borderRadiusHover,
          textDecorationHover:
            nowSection.now.buttons.right?.textDecorationHover,
          transitionHover: nowSection.now.buttons.right?.transitionHover,
        },
      },
      rNowTitle: nowSection.now.rNowTitle,
      rNowDescription: nowSection.now.rNowDescription,
      cardsDesign: {
        left: {
          background: "rgba(255, 255, 255, 0.2)",
          border: "2px solid white",
        },
        right: {
          background: "rgba(255, 255, 255, 0.2)",
          border: "2px solid white",
        },
      },
    },
  },
  alldark: {
    backgroundMain: undefined,
    colorMain: undefined,
    backgroundWallpaper:
      "center / cover no-repeat url('https://beta.kumarsomesh.in/_next/image?url=https%3A%2F%2Flastfm.freetls.fastly.net%2Fi%2Fu%2F300x300%2F175e679e8d615e8536cb92f4d479eac8.jpg&w=640&q=75')",
    filterWallpaper: "blur(1rem)",
    heading: nowSection.heading,
    subheading: nowSection.subheading,
    backgroundImageName: nowSection.backgroundImage,

    now: {
      posterImage:
        "https://beta.kumarsomesh.in/_next/image?url=https%3A%2F%2Flastfm.freetls.fastly.net%2Fi%2Fu%2F300x300%2F175e679e8d615e8536cb92f4d479eac8.jpg&w=640&q=75",
      posterImageAlt: "Song poster",
      posterImageWidth: 1200,
      posterImageHeight: 1200,
      nowTitle: nowSection.now.nowTitle,
      songTitle: "The Less I Know The Better",
      songArtist: "Tame Impala",
      songAlbum: "Currents",
      description: nowSection.now.description,
      buttons: {
        left: {
          key: nowSection.now.buttons.left.key,
          value: nowSection.now.buttons.left.value,
          background: nowSection.now.buttons.left?.background || "green",
          border: nowSection.now.buttons.left?.border || "1px solid black",
          boxShadow: nowSection.now.buttons.left?.boxShadow,
          color: nowSection.now.buttons.left?.color || "white",
          padding: nowSection.now.buttons.left?.padding || "0.1rem 0.3rem",
          margin: nowSection.now.buttons.left?.margin || "0.5rem 0.5rem 0 0",
          borderRadius: nowSection.now.buttons.left?.borderRadius || "0.25rem",
          textDecoration: nowSection.now.buttons.left?.textDecoration,
          transition: nowSection.now.buttons.left?.transition,
          backgroundHover: nowSection.now.buttons.left?.backgroundHover,
          borderHover:
            nowSection.now.buttons.left?.borderHover || "1px solid black",
          boxShadowHover: nowSection.now.buttons.left?.boxShadowHover,
          colorHover: nowSection.now.buttons.left?.colorHover,
          paddingHover:
            nowSection.now.buttons.left?.paddingHover || "0.1rem 0.3rem",
          marginHover:
            nowSection.now.buttons.left?.marginHover || "0.5rem 0.5rem 0 0",
          borderRadiusHover:
            nowSection.now.buttons.left?.borderRadiusHover || "0.25rem",
          textDecorationHover: nowSection.now.buttons.left?.textDecorationHover,
          transitionHover: nowSection.now.buttons.left?.transitionHover,
        },
        right: {
          key: nowSection.now.buttons.right.key,
          value: nowSection.now.buttons.right.value,
          background: nowSection.now.buttons.right?.background,
          border: nowSection.now.buttons.right?.border,
          boxShadow: nowSection.now.buttons.right?.boxShadow,
          color: nowSection.now.buttons.right?.color,
          padding: nowSection.now.buttons.right?.padding || "0.1rem 0.3rem",
          margin: nowSection.now.buttons.right?.margin,
          borderRadius: nowSection.now.buttons.right?.borderRadius,
          textDecoration: nowSection.now.buttons.right?.textDecoration,
          transition: nowSection.now.buttons.right?.transition,
          backgroundHover: nowSection.now.buttons.right?.backgroundHover,
          borderHover: nowSection.now.buttons.right?.borderHover,
          boxShadowHover: nowSection.now.buttons.right?.boxShadowHover,
          colorHover: nowSection.now.buttons.right?.colorHover,
          paddingHover:
            nowSection.now.buttons.right?.paddingHover || "0.1rem 0.3rem",
          marginHover: nowSection.now.buttons.right?.marginHover,
          borderRadiusHover: nowSection.now.buttons.right?.borderRadiusHover,
          textDecorationHover:
            nowSection.now.buttons.right?.textDecorationHover,
          transitionHover: nowSection.now.buttons.right?.transitionHover,
        },
      },
      rNowTitle: nowSection.now.rNowTitle,
      rNowDescription: nowSection.now.rNowDescription,
      cardsDesign: {
        left: {
          background: "rgba(0, 0, 0, 0.2)",
          border: "2px solid white",
        },
        right: {
          background: "rgba(0, 0, 0, 0.2)",
          border: "2px solid white",
        },
      },
    },
  },
};

let footerData = {
  purewhite: {
    backgroundMain: undefined,
    colorMain: undefined,
    backgroundWallpaper: undefined,
    filterWallpaper: undefined,
    footerImageSrc: footer.footerImageSrc,
    footerImageAlt: footer.footerImageAlt,
    footerImageWidth: 1200,
    footerImageHeight: 600,
    footerLinksTitle: footer.footerLinksTitle,
    footerLinks: footer.footerLinks,
  },
  alldark: {
    backgroundMain: undefined,
    colorMain: undefined,
    backgroundWallpaper: undefined,
    filterWallpaper: undefined,
    footerImageSrc: footer.footerImageSrc,
    footerImageAlt: footer.footerImageAlt,
    footerImageWidth: 1200,
    footerImageHeight: 600,
    footerLinksTitle: footer.footerLinksTitle,
    footerLinks: footer.footerLinks,
  },
};

let endData = {
  purewhite: {
    backgroundMain: undefined,
    colorMain: undefined,
    backgroundWallpaper: undefined,
    filterWallpaper: undefined,
  },
  alldark: {
    backgroundMain: undefined,
    colorMain: undefined,
    backgroundWallpaper: undefined,
    filterWallpaper: undefined,
  },
};

let featuredProjectData = {
  purewhite: {
    backgroundMain: undefined,
    colorMain: undefined,
    backgroundWallpaper: undefined,
    filterWallpaper: undefined,
    heading: undefined,
    subheading: undefined,
    backgroundImageName: undefined,
    project: {
      imageSrc:
        "https://images.prismic.io/miscellaneous/008ccbfc-44b2-48f0-aeb3-0079712066bf_genesis.png",
      imageSrcMobile:
        "https://images.unsplash.com/photo-1593351799227-75df2026356b?q=80&w=2448&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      imageAlt: "Featured Project Image",
      imageWidth: 1200,
      imageHeight: 1200,
      layoutImage: undefined,
      objectFitImage: undefined,
      paddingSection: undefined,
      positionDiv: undefined,
      widthDiv: undefined,
      heightDiv: undefined,
      borderRadiusDiv: "1rem",
      overflowDiv: undefined,
      boxShadowDiv: undefined,
      hrefLink: undefined,
      textLink: undefined,
      textParagraph: undefined,
      title: "Project Genesis",
      buttons: [
        {
          key: "Description",
          value: "/",
        },
        {
          key: "Watch Video",
          value: "/",
        },
      ],
      border: undefined,
    },
  },
  alldark: {
    backgroundMain: undefined,
    colorMain: undefined,
    backgroundWallpaper: undefined,
    filterWallpaper: undefined,
    heading: undefined,
    subheading: undefined,
    backgroundImageName: undefined,
    project: {
      imageSrc:
        "https://images.prismic.io/miscellaneous/008ccbfc-44b2-48f0-aeb3-0079712066bf_genesis.png",
      imageSrcMobile:
        "https://images.unsplash.com/photo-1593351799227-75df2026356b?q=80&w=2448&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      imageAlt: "Featured Project Image",
      imageWidth: 1200,
      imageHeight: 1200,
      layoutImage: undefined,
      objectFitImage: undefined,
      paddingSection: undefined,
      positionDiv: undefined,
      widthDiv: undefined,
      heightDiv: undefined,
      borderRadiusDiv: "1rem",
      overflowDiv: undefined,
      boxShadowDiv: undefined,
      hrefLink: undefined,
      textLink: undefined,
      textParagraph: undefined,
      title: "Project Genesis",
      buttons: [
        {
          key: "Description",
          value: "/",
          border: "1px solid white",
          borderHover: "1px solid white",
        },
        {
          key: "Watch Video",
          value: "/",
          border: "1px solid white",
          borderHover: "1px solid white",
        },
      ],
      border: "1px solid white",
    },
  },
};

let featuredBlogData = {
  purewhite: {
    backgroundMain: undefined,
    colorMain: undefined,
    backgroundWallpaper: undefined,
    filterWallpaper: undefined,
    heading: undefined,
    subheading: undefined,
    backgroundImageName: undefined,
    blog: {
      imageSrc:
        "https://images.prismic.io/miscellaneous/ZvflQbVsGrYSwGdk_image.webp",
      imageSrcMobile:
        "https://images.unsplash.com/photo-1593351799227-75df2026356b?q=80&w=2448&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      imageAlt: "Featured Project Image",
      imageWidth: 1200,
      imageHeight: 1200,
      layoutImage: undefined,
      objectFitImage: undefined,
      paddingSection: undefined,
      positionDiv: undefined,
      widthDiv: undefined,
      heightDiv: undefined,
      borderRadiusDiv: "1rem",
      overflowDiv: undefined,
      boxShadowDiv: undefined,
      hrefLink: undefined,
      textLink: undefined,
      textParagraph: undefined,
      title: "FaceIDxManipal",
      buttons: [
        {
          key: "Read More",
          value: "/",
        },
        {
          key: "Watch Video",
          value: "/",
        },
      ],
      border: undefined,
    },
  },
  alldark: {
    backgroundMain: undefined,
    colorMain: undefined,
    backgroundWallpaper: undefined,
    filterWallpaper: undefined,
    heading: undefined,
    subheading: undefined,
    backgroundImageName: undefined,
    blog: {
      imageSrc:
        "https://images.prismic.io/miscellaneous/ZvflQbVsGrYSwGdk_image.webp",
      imageSrcMobile:
        "https://images.unsplash.com/photo-1593351799227-75df2026356b?q=80&w=2448&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      imageAlt: "Featured Project Image",
      imageWidth: 1200,
      imageHeight: 1200,
      layoutImage: undefined,
      objectFitImage: undefined,
      paddingSection: undefined,
      positionDiv: undefined,
      widthDiv: undefined,
      heightDiv: undefined,
      borderRadiusDiv: "1rem",
      overflowDiv: undefined,
      boxShadowDiv: undefined,
      hrefLink: undefined,
      textLink: undefined,
      textParagraph: undefined,
      title: "FaceIDxManipal",
      buttons: [
        {
          key: "Read More",
          value: "/",
          border: "1px solid white",
          borderHover: "1px solid white",
        },
        {
          key: "Watch Video",
          value: "/",
          border: "1px solid white",
          borderHover: "1px solid white",
        },
      ],
      border: "1px solid white",
    },
  },
};

let nowMovieData = {
  purewhite: {
    backgroundMain: undefined,
    colorMain: undefined,
    backgroundWallpaper:
      "center / cover no-repeat url('https://m.media-amazon.com/images/M/MV5BZDY0OTA2MDEtNDNlOS00ZWE4LTlkMGUtNmIxYjAwYzEyNTM3XkEyXkFqcGc@._V1_.jpg')",
    filterWallpaper: "blur(1rem)",
    heading: undefined,
    subheading: undefined,
    backgroundImageName: undefined,

    now: {
      posterImage:
        "https://m.media-amazon.com/images/M/MV5BZDY0OTA2MDEtNDNlOS00ZWE4LTlkMGUtNmIxYjAwYzEyNTM3XkEyXkFqcGc@._V1_.jpg",
      posterImageAlt: "Movie Poster",
      posterImageWidth: 1200,
      posterImageHeight: 1200,
      nowTitle: "Now Watching",
      songTitle: "Chemical Hearts",
      songArtist: "Tame Impala",
      songAlbum: "Currents",
      description: "I'm listening to this song on Spotify right now.",
      buttons: {
        left: {
          key: "Watch Together",
          value: "https://open.spotify.com/track/6K4t31amVTZDgR3sKmwUJJ",
        },
        right: {
          key: "Listen on Apple Music",
          value:
            "https://music.apple.com/in/album/the-less-i-know-the-better/1051385062?i=1051385063",
        },
      },
      rNowTitle: "About This Card",
      rNowDescription:
        "This shows what I’m jamming to right now, live from my Spotify. If you’re curious about my music taste or want to check out the playlist, just hit the link!",
        cardsDesign: {
          left: {
            background: "rgba(255, 255, 255, 0.2)",
            border: "2px solid white",
          },
          right: {
            background: "rgba(255, 255, 255, 0.2)",
            border: "2px solid white",
          },
        },
    },
  },
  alldark: {
    backgroundMain: undefined,
    colorMain: undefined,
    backgroundWallpaper:
      "center / cover no-repeat url('https://m.media-amazon.com/images/M/MV5BZDY0OTA2MDEtNDNlOS00ZWE4LTlkMGUtNmIxYjAwYzEyNTM3XkEyXkFqcGc@._V1_.jpg')",
    filterWallpaper: "blur(1rem)",
    heading: undefined,
    subheading: undefined,
    backgroundImageName: undefined,

    now: {
      posterImage:
        "https://m.media-amazon.com/images/M/MV5BZDY0OTA2MDEtNDNlOS00ZWE4LTlkMGUtNmIxYjAwYzEyNTM3XkEyXkFqcGc@._V1_.jpg",
      posterImageAlt: "Movie Poster",
      posterImageWidth: 1200,
      posterImageHeight: 1200,
      nowTitle: "Now Watching",
      songTitle: "Chemical Hearts",
      songArtist: "Tame Impala",
      songAlbum: "Currents",
      description: "I'm listening to this song on Spotify right now.",
      buttons: {
        left: {
          key: "Watch Together",
          value: "https://open.spotify.com/track/6K4t31amVTZDgR3sKmwUJJ",
        },
        right: {
          key: "Listen on Apple Music",
          value:
            "https://music.apple.com/in/album/the-less-i-know-the-better/1051385062?i=1051385063",
        },
      },
      rNowTitle: "About This Card",
      rNowDescription:
        "This shows what I’m jamming to right now, live from my Spotify. If you’re curious about my music taste or want to check out the playlist, just hit the link!",
        cardsDesign: {
          left: {
            background: "rgba(0, 0, 0, 0.2)",
            border: "2px solid white",
          },
          right: {
            background: "rgba(0, 0, 0, 0.2)",
            border: "2px solid white",
          },
        },
    },
  },
};

let nowBookData = {
  purewhite: {
    backgroundMain: undefined,
    colorMain: undefined,
    backgroundWallpaper:
      "center / cover no-repeat url('https://m.media-amazon.com/images/I/91lslnZ-btL._AC_UF1000,1000_QL80_.jpg')",
    filterWallpaper: "blur(1rem)",
    heading: undefined,
    subheading: undefined,
    backgroundImageName: undefined,

    now: {
      posterImage:
        "https://m.media-amazon.com/images/I/91lslnZ-btL._AC_UF1000,1000_QL80_.jpg",
      posterImageAlt: "Movie Poster",
      posterImageWidth: 1200,
      posterImageHeight: 1200,
      nowTitle: "Now Reading",
      songTitle: "The Silent Patient",
      songArtist: "Tame Impala",
      songAlbum: "Currents",
      description: "I'm listening to this song on Spotify right now.",
      buttons: {
        left: {
          key: "Read Together",
          value: "https://open.spotify.com/track/6K4t31amVTZDgR3sKmwUJJ",
        },
        right: {
          key: "Listen on Apple Music",
          value:
            "https://music.apple.com/in/album/the-less-i-know-the-better/1051385062?i=1051385063",
        },
      },
      rNowTitle: "About This Card",
      rNowDescription:
        "This shows what I’m jamming to right now, live from my Spotify. If you’re curious about my music taste or want to check out the playlist, just hit the link!",
        cardsDesign: {
          left: {
            background: "rgba(255, 255, 255, 0.2)",
            border: "2px solid white",
          },
          right: {
            background: "rgba(255, 255, 255, 0.2)",
            border: "2px solid white",
          },
        },
    },
  },
  alldark: {
    backgroundMain: undefined,
    colorMain: undefined,
    backgroundWallpaper:
      "center / cover no-repeat url('https://m.media-amazon.com/images/I/91lslnZ-btL._AC_UF1000,1000_QL80_.jpg')",
    filterWallpaper: "blur(1rem)",
    heading: undefined,
    subheading: undefined,
    backgroundImageName: undefined,

    now: {
      posterImage:
        "https://m.media-amazon.com/images/I/91lslnZ-btL._AC_UF1000,1000_QL80_.jpg",
      posterImageAlt: "Movie Poster",
      posterImageWidth: 1200,
      posterImageHeight: 1200,
      nowTitle: "Now Reading",
      songTitle: "The Silent Patient",
      songArtist: "Tame Impala",
      songAlbum: "Currents",
      description: "I'm listening to this song on Spotify right now.",
      buttons: {
        left: {
          key: "Read Together",
          value: "https://open.spotify.com/track/6K4t31amVTZDgR3sKmwUJJ",
        },
        right: {
          key: "Listen on Apple Music",
          value:
            "https://music.apple.com/in/album/the-less-i-know-the-better/1051385062?i=1051385063",
        },
      },
      rNowTitle: "About This Card",
      rNowDescription:
        "This shows what I’m jamming to right now, live from my Spotify. If you’re curious about my music taste or want to check out the playlist, just hit the link!",
        cardsDesign: {
          left: {
            background: "rgba(0, 0, 0, 0.2)",
            border: "2px solid white",
          },
          right: {
            background: "rgba(0, 0, 0, 0.2)",
            border: "2px solid white",
          },
        },
    },
  },
};

let heroContactData = {
  purewhite: {
    backgroundMain: undefined,
    colorMain: undefined,
    backgroundWallpaper: undefined,
    filterWallpaper: undefined,
    heading: undefined,
    subheading: "These are some snippets I've jotted down.",
    backgroundImageName: undefined,
    sendButton: {
      key: "Send Message",
      value: "/contact",
      borderRadius: "1rem",
      borderRadiusHover: "1rem",
    },
    socialLinks: [
      {
        href: "https://facebook.com/",
        imgSrc: "https://img.icons8.com/?size=512&id=Xy10Jcu1L2Su&format=png",
        alt: "Facebook",
        width: 48,
        height: 48,
      },
      {
        href: "https://twitter.com/",
        imgSrc: "https://img.icons8.com/?size=512&id=Xy10Jcu1L2Su&format=png",
        alt: "Twitter",
        width: 48,
        height: 48,
      },
      {
        href: "https://instagram.com/",
        imgSrc: "https://img.icons8.com/?size=512&id=Xy10Jcu1L2Su&format=png",
        alt: "Instagram",
        width: 48,
        height: 48,
      },
      {
        href: "https://linkedin.com/",
        imgSrc: "https://img.icons8.com/?size=512&id=Xy10Jcu1L2Su&format=png",
        alt: "LinkedIn",
        width: 48,
        height: 48,
      },
    ],
    contactInfo: `<p>
              You can contact me at my email address:
              <a href="mailto:contact@kumarsomesh.in">contact@kumarsomesh.in</a> and
              my phone number: <a href=+91 91424 28071>+91 91424 28071</a>. The
              username I use on most of the social media platforms is
              <a href="https://www.instagram.com/kumarsomesh_/">kumarsomesh_</a>. Below
              is the link of some of my social media profiles.
            </p>`,
  },
  alldark: {
    backgroundMain: undefined,
    colorMain: undefined,
    backgroundWallpaper: undefined,
    filterWallpaper: undefined,
    heading: undefined,
    subheading: "These are some snippets I've jotted down.",
    backgroundImageName: undefined,
    sendButton: {
      key: "Send Message",
      value: "/contact",
      borderRadius: "1rem",
      borderRadiusHover: "1rem",
    },
    socialLinks: [
      {
        href: "https://facebook.com/",
        imgSrc: "https://img.icons8.com/?size=512&id=Xy10Jcu1L2Su&format=png",
        alt: "Facebook",
        width: 48,
        height: 48,
      },
      {
        href: "https://twitter.com/",
        imgSrc: "https://img.icons8.com/?size=512&id=Xy10Jcu1L2Su&format=png",
        alt: "Twitter",
        width: 48,
        height: 48,
      },
      {
        href: "https://instagram.com/",
        imgSrc: "https://img.icons8.com/?size=512&id=Xy10Jcu1L2Su&format=png",
        alt: "Instagram",
        width: 48,
        height: 48,
      },
      {
        href: "https://linkedin.com/",
        imgSrc: "https://img.icons8.com/?size=512&id=Xy10Jcu1L2Su&format=png",
        alt: "LinkedIn",
        width: 48,
        height: 48,
      },
    ],
    contactInfo: `<p>
              You can contact me at my email address:
              <a href="mailto:contact@kumarsomesh.in">contact@kumarsomesh.in</a> and
              my phone number: <a href=+91 91424 28071>+91 91424 28071</a>. The
              username I use on most of the social media platforms is
              <a href="https://www.instagram.com/kumarsomesh_/">kumarsomesh_</a>. Below
              is the link of some of my social media profiles.
            </p>`,
  },
};

let updatesData = {
  purewhite: {
    backgroundMain: undefined,
    colorMain: undefined,
    backgroundWallpaper: undefined,
    filterWallpaper: undefined,
    heading: undefined,
    subheading: "These are some snippets I've jotted down.",
    backgroundImageName: undefined,
    updates: [
      {
        updateDetailsHtml: `<section id="introduction">
            <h2>Introduction</h2>
            <p>The Dummy Project is a sample project designed to showcase how to structure documentation for any project. This is the second update.  The Dummy Project is a sample project designed to showcase how to structure documentation for any project. This is the second update. The Dummy Project is a sample project designed to showcase how to structure documentation for any project. This is the second update. The Dummy Project is a sample project designed to showcase how to structure documentation for any project. This is the second update. The Dummy Project is a sample project designed to showcase how to structure documentation for any project. This is the second update. </p>
        </section>`,
        background: undefined,
        border: undefined,
        boxShadow: undefined,
        color: undefined,
        borderRadius: undefined,
        textDecoration: undefined,
        transition: undefined,
        backgroundHover: undefined,
        borderHover: undefined,
        boxShadowHover: undefined,
        colorHover: undefined,
        borderRadiusHover: undefined,
        textDecorationHover: undefined,
        transitionHover: undefined,
      },
      {
        updateDetailsHtml: `<section id="introduction">
            <h2>Introduction</h2>
            <p>The Dummy Project is a sample project designed to showcase how to structure documentation for any project.</p>
        </section>

        <section id="setup">
            <h2>Setup</h2>
            <p>Follow these steps to set up the Dummy Project on your local machine:</p>
            <ol>
                <li>Clone the repository:
                    <pre><code>git clone https://github.com/yourusername/dummy-project.git</code></pre>
                </li>
                <li>Navigate to the project directory:
                    <pre><code>cd dummy-project</code></pre>
                </li>
                <li>Install the dependencies:
                    <pre><code>npm install</code></pre>
                </li>
            </ol>
        </section>

        <section id="usage">
            <h2>Usage</h2>
            <p>To start using the Dummy Project, follow the steps below:</p>
            <ul>
                <li>Run the project with:
                    <pre><code>npm start</code></pre>
                </li>
                <li>Open your browser and go to <code>http://localhost:3000</code></li>
            </ul>

            <h3>Common Commands</h3>
            <p>Below is a table of common commands for interacting with the project:</p>

            <table>
                <thead>
                    <tr>
                        <th>Command</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>npm start</code></td>
                        <td>Start the development server on localhost.</td>
                    </tr>
                    <tr>
                        <td><code>npm run build</code></td>
                        <td>Build the project for production.</td>
                    </tr>
                    <tr>
                        <td><code>npm test</code></td>
                        <td>Run the project's test suite.</td>
                    </tr>
                    <tr>
                        <td><code>npm run lint</code></td>
                        <td>Check the code for linting issues.</td>
                    </tr>
                </tbody>
            </table>
        </section>

        <section id="contribution">
            <h2>Contribution</h2>
            <p>Contributions are welcome! To contribute to the Dummy Project, please follow these steps:</p>
            <ol>
                <li>Fork the repository.</li>
                <li>Create a new branch for your feature: <code>git checkout -b feature-name</code></li>
                <li>Commit your changes: <code>git commit -m "Add new feature"</code></li>
                <li>Push to the branch: <code>git push origin feature-name</code></li>
                <li>Submit a pull request for review.</li>
            </ol>
        </section>

        <section id="license">
            <h2>License</h2>
            <p>This project is licensed under the MIT License - see the <a href="LICENSE">LICENSE</a> file for details.</p>
        </section>`,
        background: undefined,
        border: undefined,
        boxShadow: undefined,
        color: undefined,
        borderRadius: undefined,
        textDecoration: undefined,
        transition: undefined,
        backgroundHover: undefined,
        borderHover: undefined,
        boxShadowHover: undefined,
        colorHover: undefined,
        borderRadiusHover: undefined,
        textDecorationHover: undefined,
        transitionHover: undefined,
      },
    ],
  },
  alldark: {
    backgroundMain: undefined,
    colorMain: undefined,
    backgroundWallpaper: undefined,
    filterWallpaper: undefined,
    heading: undefined,
    subheading: "These are some snippets I've jotted down.",
    backgroundImageName: undefined,
    updates: [
      {
        updateDetailsHtml: `<section id="introduction">
            <h2>Introduction</h2>
            <p>The Dummy Project is a sample project designed to showcase how to structure documentation for any project. This is the second update.  The Dummy Project is a sample project designed to showcase how to structure documentation for any project. This is the second update. The Dummy Project is a sample project designed to showcase how to structure documentation for any project. This is the second update. The Dummy Project is a sample project designed to showcase how to structure documentation for any project. This is the second update. The Dummy Project is a sample project designed to showcase how to structure documentation for any project. This is the second update. </p>
        </section>`,
        background: undefined,
        border: "1px solid white",
        boxShadow: undefined,
        color: undefined,
        borderRadius: undefined,
        textDecoration: undefined,
        transition: undefined,
        backgroundHover: undefined,
        borderHover: "1px solid white",
        boxShadowHover: undefined,
        colorHover: undefined,
        borderRadiusHover: undefined,
        textDecorationHover: undefined,
        transitionHover: undefined,
      },
      {
        updateDetailsHtml: `<section id="introduction">
            <h2>Introduction</h2>
            <p>The Dummy Project is a sample project designed to showcase how to structure documentation for any project.</p>
        </section>

        <section id="setup">
            <h2>Setup</h2>
            <p>Follow these steps to set up the Dummy Project on your local machine:</p>
            <ol>
                <li>Clone the repository:
                    <pre><code>git clone https://github.com/yourusername/dummy-project.git</code></pre>
                </li>
                <li>Navigate to the project directory:
                    <pre><code>cd dummy-project</code></pre>
                </li>
                <li>Install the dependencies:
                    <pre><code>npm install</code></pre>
                </li>
            </ol>
        </section>

        <section id="usage">
            <h2>Usage</h2>
            <p>To start using the Dummy Project, follow the steps below:</p>
            <ul>
                <li>Run the project with:
                    <pre><code>npm start</code></pre>
                </li>
                <li>Open your browser and go to <code>http://localhost:3000</code></li>
            </ul>

            <h3>Common Commands</h3>
            <p>Below is a table of common commands for interacting with the project:</p>

            <table>
                <thead>
                    <tr>
                        <th>Command</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>npm start</code></td>
                        <td>Start the development server on localhost.</td>
                    </tr>
                    <tr>
                        <td><code>npm run build</code></td>
                        <td>Build the project for production.</td>
                    </tr>
                    <tr>
                        <td><code>npm test</code></td>
                        <td>Run the project's test suite.</td>
                    </tr>
                    <tr>
                        <td><code>npm run lint</code></td>
                        <td>Check the code for linting issues.</td>
                    </tr>
                </tbody>
            </table>
        </section>

        <section id="contribution">
            <h2>Contribution</h2>
            <p>Contributions are welcome! To contribute to the Dummy Project, please follow these steps:</p>
            <ol>
                <li>Fork the repository.</li>
                <li>Create a new branch for your feature: <code>git checkout -b feature-name</code></li>
                <li>Commit your changes: <code>git commit -m "Add new feature"</code></li>
                <li>Push to the branch: <code>git push origin feature-name</code></li>
                <li>Submit a pull request for review.</li>
            </ol>
        </section>

        <section id="license">
            <h2>License</h2>
            <p>This project is licensed under the MIT License - see the <a href="LICENSE">LICENSE</a> file for details.</p>
        </section>`,
        background: undefined,
        border: "1px solid white",
        boxShadow: undefined,
        color: undefined,
        borderRadius: undefined,
        textDecoration: undefined,
        transition: undefined,
        backgroundHover: undefined,
        borderHover: "1px solid white",
        boxShadowHover: undefined,
        colorHover: undefined,
        borderRadiusHover: undefined,
        textDecorationHover: undefined,
        transitionHover: undefined,
      },
    ],
  },
};

let heroBlogData = {
  purewhite: {
    backgroundMain: undefined,
    colorMain: undefined,
    backgroundWallpaper: undefined,
    filterWallpaper: undefined,
    heading: "FaceID in Manipal University",
    subheading: "These are some snippets I've jotted down.",
    backgroundImageName: undefined,
    tags: [{ key: "CSS" }, { key: "Web Design" }, { key: "Frontend" }],
    postedOn: "28 October 2024",
    customImage: {
      srcImage:
        "https://beta.kumarsomesh.in/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Fmiscellaneous%2FZvflQbVsGrYSwGdk_image.webp%3Fauto%3Dformat%2Ccompress&w=2048&q=75",
      srcMobile:
        "https://www.ineedamobile.com/wp-content/uploads/2019/03/iphone-x-600x598.png",
      altImage: "Security Flaw in Our College’s FaceID System",
      widthImage: 1000,
      heightImage: 1000,
      layoutImage: undefined,
      objectFitImage: undefined,
      paddingSection: undefined,
      positionDiv: undefined,
      widthDiv: undefined,
      heightDiv: undefined,
      borderRadiusDiv: undefined,
      overflowDiv: undefined,
      boxShadowDiv: undefined,
      hrefLink: undefined,
      textLink: undefined,
      textParagraph: undefined,
    },
  },
  alldark: {
    backgroundMain: undefined,
    colorMain: undefined,
    backgroundWallpaper: undefined,
    filterWallpaper: undefined,
    heading: "FaceID in Manipal University",
    subheading: "These are some snippets I've jotted down.",
    backgroundImageName: undefined,
    tags: [{ key: "CSS" }, { key: "Web Design" }, { key: "Frontend" }],
    postedOn: "28 October 2024",
    customImage: {
      srcImage:
        "https://beta.kumarsomesh.in/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Fmiscellaneous%2FZvflQbVsGrYSwGdk_image.webp%3Fauto%3Dformat%2Ccompress&w=2048&q=75",
      srcMobile:
        "https://www.ineedamobile.com/wp-content/uploads/2019/03/iphone-x-600x598.png",
      altImage: "Security Flaw in Our College’s FaceID System",
      widthImage: 1000,
      heightImage: 1000,
      layoutImage: undefined,
      objectFitImage: undefined,
      paddingSection: undefined,
      positionDiv: undefined,
      widthDiv: undefined,
      heightDiv: undefined,
      borderRadiusDiv: undefined,
      overflowDiv: undefined,
      boxShadowDiv: undefined,
      hrefLink: undefined,
      textLink: undefined,
      textParagraph: undefined,
    },
  },
};

let heroProjectData = {
  purewhite: {
    backgroundMain: undefined,
    colorMain: undefined,
    backgroundWallpaper: undefined,
    filterWallpaper: undefined,
    heading: "Project Genesis",
    subheading: "These are some snippets I've jotted down.",
    backgroundImageName: undefined,
    projectInfo: {
      description:
        "The Dummy Project is a sample project designed to showcase how to structure documentation for any project. This is the second update. The Dummy Project is a sample project designed to showcase how to structure documentation for any project. This is the second update. The Dummy Project is a sample project designed to showcase how to structure documentation for any project. This is the second update.",
      time: "12 November 2024",
      status: "In Progress",
    },
    heroButtons: [
      { key: "Projects", value: "/projects" },
      { key: "Blogs", value: "/blogs" },
    ],
    customImage: {
      srcImage:
        "https://beta.kumarsomesh.in/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Fmiscellaneous%2F93609c16-ee87-4ba8-9377-fc1acd13dbc8_tedx.png&w=828&q=75",
      srcMobile:
        "https://www.ineedamobile.com/wp-content/uploads/2019/03/iphone-x-600x598.png",
      altImage: "Security Flaw in Our College’s FaceID System",
      widthImage: 1000,
      heightImage: 1000,
      layoutImage: undefined,
      objectFitImage: undefined,
      paddingSection: undefined,
      positionDiv: undefined,
      widthDiv: undefined,
      heightDiv: undefined,
      borderRadiusDiv: "1rem",
      overflowDiv: undefined,
      boxShadowDiv: undefined,
      hrefLink: undefined,
      textLink: undefined,
      textParagraph: undefined,
    },
  },
  alldark: {
    backgroundMain: undefined,
    colorMain: undefined,
    backgroundWallpaper: undefined,
    filterWallpaper: undefined,
    heading: "Project Genesis",
    subheading: "These are some snippets I've jotted down.",
    backgroundImageName: undefined,
    projectInfo: {
      description:
        "The Dummy Project is a sample project designed to showcase how to structure documentation for any project. This is the second update. The Dummy Project is a sample project designed to showcase how to structure documentation for any project. This is the second update. The Dummy Project is a sample project designed to showcase how to structure documentation for any project. This is the second update.",
      time: "12 November 2024",
      status: "In Progress",
    },
    heroButtons: [
      {
        key: "Projects",
        value: "/projects",
        border: "1px solid white",
        borderHover: "1px solid white",
      },
      {
        key: "Blogs",
        value: "/blogs",
        border: "1px solid white",
        borderHover: "1px solid white",
      },
    ],
    customImage: {
      srcImage:
        "https://beta.kumarsomesh.in/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Fmiscellaneous%2F93609c16-ee87-4ba8-9377-fc1acd13dbc8_tedx.png&w=828&q=75",
      srcMobile:
        "https://www.ineedamobile.com/wp-content/uploads/2019/03/iphone-x-600x598.png",
      altImage: "Security Flaw in Our College’s FaceID System",
      widthImage: 1000,
      heightImage: 1000,
      layoutImage: undefined,
      objectFitImage: undefined,
      paddingSection: undefined,
      positionDiv: undefined,
      widthDiv: undefined,
      heightDiv: undefined,
      borderRadiusDiv: "1rem",
      overflowDiv: undefined,
      boxShadowDiv: undefined,
      hrefLink: undefined,
      textLink: undefined,
      textParagraph: undefined,
    },
  },
};

export {
  baseData,
  navbarData,
  heroData,
  projectsSectionData,
  blogsSectionData,
  nowSectionData,
  footerData,
  endData,
  featuredProjectData,
  featuredBlogData,
  nowMovieData,
  nowBookData,
  heroContactData,
  updatesData,
  heroBlogData,
  heroProjectData,
};
