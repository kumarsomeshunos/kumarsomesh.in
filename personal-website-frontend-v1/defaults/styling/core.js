export const defaultGlobalWrapperStyling = {
  main: {
    background: "var(--default-global-wrapper-main-background)",
    color: "var(--default-global-wrapper-main-color)",
  },
  wallpaper: {
    background: "var(--default-global-wrapper-wallpaper-background)",
    filter: "var(--default-global-wrapper-wallpaper-filter)",
  },
  container: {},
  interactive: {
    a: {
      "border-bottom":
        "var(--default-global-wrapper-interactive-a-bottom-border)",
    },
    "a::after": {
      "background-color":
        "var(--default-global-wrapper-interactive-a-after-background-color)",
    },
  },
};

export const defaultSectionWrapperStyling = {
  main: {
    background: "var(--default-section-wrapper-main-background)",
    color: "var(--default-section-wrapper-main-color)",
  },
  wallpaper: {
    background: "var(--default-section-wrapper-wallpaper-background)",
    filter: "var(--default-section-wrapper-wallpaper-filter)",
  },
  container: {},
  interactive: {},
};

export const defaultHeroStyling = {
  main: {},
  interactive: {},
};

export const defaultTwoPaneLayoutStyling = {
  main: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1.5rem 0",
    minHeight: "90vh",
  },
  leftPane: {
    width: "65%",
    marginRight: "1.5rem",
  },
  rightPane: {
    width: "35%",
  },
  interactive: {
    "@media (max-width: 330px)": {
      ".iLeftPane": {
        margin: "0 !important",
        width: "100% !important",
      },
      ".iRightPane": {
        display: "none !important",
        width: "0 !important",
      },
    },
    "@media (min-width: 331px) and (max-width: 575px)": {
      ".iLeftPane": {
        margin: "0 !important",
        width: "100% !important",
      },
      ".iRightPane": {
        display: "none !important",
        width: "0 !important",
      },
    },
    "@media (min-width: 576px) and (max-width: 767px)": {
      ".iLeftPane": {
        margin: "0 !important",
        width: "100% !important",
      },
      ".iRightPane": {
        display: "none !important",
        width: "0 !important",
      },
    },
    "@media (min-width: 768px) and (max-width: 991px)": {
      ".iLeftPane": {
        margin: "0 !important",
        width: "100% !important",
      },
      ".iRightPane": {
        display: "none !important",
        width: "0 !important",
      },
    },
    "@media (min-width: 992px) and (max-width: 1199px)": {
      ".iLeftPane": {
        margin: "0 1.5rem 0 0 !important",
      },
      ".iRightPane": {
        display: "block !important",
      },
    },
  },
};

export const defaultMainButtonStyling = {
  interactive: {
    "a": {
      background: "white !important",
      border: "1px solid white !important",
      padding: "0.5rem 1rem !important",
      margin: "1rem 1rem 0 0 !important",
      transition: "all 0.5s ease-in-out !important",
    },
    "a:hover": {
      background: "black !important",
      color: "white !important",
      padding: "0.5rem 1rem !important",
      margin: "1rem 1rem 0 0 !important",
      transition: "all 0.5s ease-in-out !important",
    },
  },
};
