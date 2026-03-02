import modifyClassNames from "@/utils/styling/modifyClassNames";
import Link from "next/link";

const defaultClassNames = {
  main: [
    "bg-gray-900",
    "border",
    "border-gray-800",
    "px-4",
    "py-2",
    "mt-4",
    "mr-4",
    "transition-all",
    "duration-500",
    "ease-in-out",
    "hover:bg-black",
    "hover:text-white",
    "hover:px-4",
    "hover:py-2",
    "hover:mt-4",
    "hover:mr-4",
    "hover:transition-all",
    "hover:duration-500",
    "hover:ease-in-out",
  ],
};

export default function MainButton({ styling, data, ...extraProps }) {
  return (
    <Link
      href={data.value}
      className={`${
        modifyClassNames(defaultClassNames.main, styling?.tailwind?.main) ||
        defaultClassNames.main.join(" ")
      }`}
      style={styling?.vanilla?.main}
      {...extraProps}
    >
      {data.text}
    </Link>
  );
}
