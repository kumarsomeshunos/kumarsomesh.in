export const defaultNavbarStyling = {
  main: {
    position: "sticky",
    top: "0",
    zIndex: "1",
    borderBottom: "1px solid black",
  },
  wrapper: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 0",
  },
  logo: {
    fontSize: "125%",
    fontWeight: "500",
  },
  version: {
    // color: var(--grayed-text-color),
    marginLeft: "0.5rem",
    fontSize: "50%",
  },
  ul: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-end",
  },
  li: {
    marginLeft: "2rem",
    listStyle: "none",
  },
  select: {
    marginLeft: "2rem",
    background: "none",
  },
  interactive: {
    "@media (max-width: 575px)": {
      ".iLogo": {
        display: "none !important",
      },

      ".iUl": {
        "overflow-x": "auto !important",
        "overflow-y": "hidden !important",
        "flex-wrap": "nowrap !important",
        "justify-content": "flex-start !important",
        width: "100% !important",
      },

      ".iLi": {
        "margin-left": "0rem !important",
        "margin-right": "2rem !important",
      },
    },
    "@media (min-width: 576px) and (max-width: 767px)": {
      ".iLogo": {
        display: "none !important",
      },
      ".iUl": {
        "overflow-x": "auto !important",
        "overflow-y": "hidden !important",
        "flex-wrap": "nowrap !important",
        "justify-content": "flex-start !important",
        width: "100% !important",
      },
      ".iLi": {
        "margin-left": "0rem !important",
        "margin-right": "2rem !important",
      },
    },
  },
};
