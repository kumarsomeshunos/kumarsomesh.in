const NowStyles = {
  sectionWrapper: {
    tailwind: {
      wallpaper: {
        add: [
          "bg-[url('https://beta.kumarsomesh.in/_next/image?url=https%3A%2F%2Flastfm.freetls.fastly.net%2Fi%2Fu%2F300x300%2Fd212a1d0483d9ce934d9d3a160004e3d.jpg&w=640&q=75')]",
          "bg-cover",
          "bg-center",
          "bg-no-repeat",
          "blur-3xl",
        ],
      },
    },
  },
  musicCard: {
    tailwind: {
      main: {
        add: ["flex", "py-8"],
      },
      left: {
        add: [
          "flex",
          "items-center",
          "border",
          "rounded-xl",
          "mr-4",
          "p-4",
          "w-[60%]",
          "bg-white/50",
        ],
      },
      image: {
        add: ["shadow-2xl"],
      },
      content: {
        add: ["ml-4"],
      },
      right: {
        add: ["border", "rounded-xl", "p-4", "bg-white/50"],
      },
      rightText: {
        add: ["mb-4"],
      },
    },
    mainButtonListen: {
      tailwind: {
        main: {
          add: ["px-2", "text-sm", "rounded-full"],
        },
      },
    },
    mainButtonSpotify: {
      tailwind: {
        main: {
          add: ["px-2", "text-sm", "rounded-full"],
        },
      },
    },
    mainButtonNowPage: {
      tailwind: {
        main: {
          add: ["px-2", "text-sm", "rounded-full"],
        },
      },
    },
  },
};

const NowData = {
  statusText: "Currently Listening",
  name: "Die For You",
  artist: "The Weeknd",
  album: "After Hours",
  rightTitle: "Now Playing",
  rightText:
    "This is a music card that displays the current song being played on Spotify",
};

export { NowStyles, NowData };
