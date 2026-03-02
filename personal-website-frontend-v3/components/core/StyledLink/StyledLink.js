import Link from "next/link";

import ModifyClassNames from "@/utils/styling/ModifyClassNames";

const defaultClassNames = {
  main: [
    "group",
    "relative",
    "inline-block",
    "transition-all",
    "duration-300",
    "ease-in-out",
  ],
  thinSpan: [
    "absolute",
    "left-0",
    "bottom-0",
    "w-full",
    "h-px",
    "bg-black",
    "rounded-full",
  ],
  thickSpan: [
    "absolute",
    "left-0",
    "bottom-0",
    "w-full",
    "h-1",
    "bg-black",
    "origin-left",
    "transform",
    "scale-x-0",
    "group-hover:scale-x-100",
    "transition-transform",
    "duration-500",
    "ease-in-out",
    "z-10",
    "rounded-full",
  ],
};

export default function StyledLink({ children, href, styling, ...extraProps }) {
  return (
    <Link
      href={href}
      className={ModifyClassNames(
        defaultClassNames.main,
        styling?.tailwind?.main
      )}
      style={styling?.vanilla?.main}
      {...extraProps}
    >
      {children}
      <span
        className={ModifyClassNames(
          defaultClassNames.thinSpan,
          styling?.tailwind?.thinSpan
        )}
        style={styling?.vanilla?.thinSpan}
      ></span>
      <span
        className={ModifyClassNames(
          defaultClassNames.thickSpan,
          styling?.tailwind?.thickSpan
        )}
        style={styling?.vanilla?.thickSpan}
      ></span>
    </Link>
  );
}
