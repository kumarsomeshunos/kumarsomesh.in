import ModifyClassNames from "@/utils/styling/ModifyClassNames";
import Link from "next/link";

const defaultClassNames = {
  main: [
    "link-unstyled",
    "text-white",
    "bg-blue-900",
    "border",
    "border-gray-800",
    "px-4", 
    "py-2",
    "mt-4",
    "mr-4",
    "transition-all",
    "duration-500",
    "ease-in-out",
    "hover:bg-white",
    "hover:text-black",
    "hover:px-4",
    "hover:py-2",
    "hover:mt-4",
    "hover:mr-4",
    "hover:transition-all",
    "hover:duration-500",
    "hover:ease-in-out",
  ],
};

export default function MainButton({ data, styling, ...extraProps }) {
  return (
    <Link
      href={data.link}
      className={ModifyClassNames(
        defaultClassNames.main,
        styling?.tailwind?.main
      )}
      style={styling?.vanilla?.main}
      {...extraProps}
    >
      {data.text}
    </Link>
  );
}
