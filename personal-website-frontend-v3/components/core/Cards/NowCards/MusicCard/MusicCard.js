import Image from "next/image";

import MainButton from "@/components/core/Buttons/MainButton/MainButton";
import ModifyClassNames from "@/utils/styling/ModifyClassNames";

const defaultClassNames = {
  main: ["flex", "flex-col", "md:flex-row"],
  left: ["flex", "flex-col", "w-full", "mb-4", "md:flex-row", "md:mb-0"],
  content: [],
  status: ["flex", "my-2"],
  statusText: [],
  name: ["my-2", "text-xl", "font-semibold"],
  artist: ["my-2", "text-lg", "text-gray-600"],
  album: ["my-2", "mb-4"],
  image: ["rounded-lg"],
};

export default function MusicCard({ data, styling, ...extraProps }) {
  return (
    <div
      className={ModifyClassNames(
        defaultClassNames.main,
        styling?.tailwind?.main
      )}
      style={styling?.vanilla?.main}
      {...extraProps}
    >
      <div
        className={ModifyClassNames(
          defaultClassNames.left,
          styling?.tailwind?.left
        )}
        style={styling?.vanilla?.left}
      >
        <Image
                className={ModifyClassNames(
                  defaultClassNames.image,
                  styling?.tailwind?.image
                )}
                style={styling?.vanilla?.image}
                src={
                  "https://beta.kumarsomesh.in/_next/image?url=https%3A%2F%2Flastfm.freetls.fastly.net%2Fi%2Fu%2F300x300%2Fd212a1d0483d9ce934d9d3a160004e3d.jpg&w=640&q=75"
                }
                width={200}
                height={200}
                alt="Blog Image"
              />

        <div
          className={ModifyClassNames(
            defaultClassNames.content,
            styling?.tailwind?.content
          )}
          style={styling?.vanilla?.content}
        >
          <div
            className={ModifyClassNames(
              defaultClassNames.status,
              styling?.tailwind?.status
            )}
            style={styling?.vanilla?.status}
          >
            <svg
              className="w-5 h-5 mr-2 text-green-500"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.345 17.345c-.24-.4-1.2-.55-1.93-.32-1.3.4-2.8.3-4.1-.1-1.3-.4-2.5-.9-3.6-1.5-.7-.4-1.2-.5-1.5-.3-.3.2-.2.8.2 1.2.6.4 1.3.7 2.1 1.1 1.5.8 3.2 1.3 5 1.4.7.1 1.4.2 2.1.2.9 0 1.5-.3 1.7-.6.2-.3.1-.9-.2-1.2zM19.14 14.2c-.3-.5-1.5-.7-2.4-.4-1.6.5-3.4.5-5 .1-1.6-.4-3.1-1.1-4.5-2-.9-.5-1.5-.7-1.8-.4-.3.3-.2.9.2 1.3.8.5 1.7.9 2.6 1.3 1.8.9 3.8 1.5 5.9 1.7.9.1 1.8.2 2.7.2 1.2 0 2.1-.4 2.4-.8.3-.5.2-1.1-.2-1.6zM19.985 9.1c-.3-.6-1.8-.8-2.9-.5-1.9.6-4 .6-6 .1-2-.5-3.8-1.3-5.4-2.3-1.1-.7-1.8-.9-2.1-.6-.3.3-.2 1 .2 1.5.9.6 1.9 1.1 3 1.6 2.2 1.1 4.6 1.8 7.1 2.1 1.1.1 2.2.2 3.3.2 1.5 0 2.6-.5 3-1 .4-.5.3-1.2-.2-1.8z" />
            </svg>
            <p
              className={ModifyClassNames(
                defaultClassNames.statusText,
                styling?.tailwind?.statusText
              )}
              style={styling?.vanilla?.statusText}
            >
              {data.statusText}
            </p>
          </div>

          <h2
            className={ModifyClassNames(
              defaultClassNames.name,
              styling?.tailwind?.name
            )}
            style={styling?.vanilla?.name}
          >
            {data.name}
          </h2>
          <h3
            className={ModifyClassNames(
              defaultClassNames.artist,
              styling?.tailwind?.artist
            )}
            style={styling?.vanilla?.artist}
          >
            {data.artist}
          </h3>
          <p
            className={ModifyClassNames(
              defaultClassNames.album,
              styling?.tailwind?.album
            )}
            style={styling?.vanilla?.album}
          >
            {data.album}
          </p>

          <div>
            <MainButton
              styling={styling?.mainButtonListen}
              data={{
                text: "Listen on Spotify",
                link: "https://open.spotify.com/track/0VjIjW4GlUZAMYd2vXMi3b",
              }}
            />
            <MainButton
              styling={styling?.mainButtonSpotify}
              data={{ text: "Spotify Profile", link: "/" }}
            />
          </div>
        </div>
      </div>
      <div
        className={ModifyClassNames(
          defaultClassNames.right,
          styling?.tailwind?.right
        )}
        style={styling?.vanilla?.right}
      >
        <h3
          className={ModifyClassNames(
            defaultClassNames.rightTitle,
            styling?.tailwind?.rightTitle
          )}
          style={styling?.vanilla?.rightTitle}
        >
          {data.rightTitle}
        </h3>
        <p
          className={ModifyClassNames(
            defaultClassNames.rightText,
            styling?.tailwind?.rightText
          )}
          style={styling?.vanilla?.rightText}
        >
          {data.rightText}
        </p>
        <MainButton
          styling={styling?.mainButtonNowPage}
          data={{
            text: "Now Page",
            link: "https://open.spotify.com/track/0VjIjW4GlUZAMYd2vXMi3b",
          }}
        />
      </div>
    </div>
  );
}
