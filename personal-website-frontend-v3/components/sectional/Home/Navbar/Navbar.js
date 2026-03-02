import Link from "next/link";

import SectionWrapper from "@/components/core/Wrappers/SectionWrapper";
import ModifyClassNames from "@/utils/styling/ModifyClassNames";
import StyledLink from "@/components/core/StyledLink/StyledLink";

const defaultClassNames = {
  main: [],
  wrapper: [],
  logo: [],
  name: [],
  version: [],
  ul: [],
  li: [],
};

export default function Navbar({ data, styling, ...extraProps }) {
  return (
    <nav
      className={ModifyClassNames(
        defaultClassNames.main,
        styling?.tailwind?.main
      )}
      style={styling?.vanilla?.main}
      {...extraProps}
    >
      <SectionWrapper styling={styling?.sectionWrapper}>
        <section
          className={ModifyClassNames(
            defaultClassNames.wrapper,
            styling?.tailwind?.wrapper
          )}
          style={styling?.vanilla?.wrapper}
        >
          <span
            className={ModifyClassNames(
              defaultClassNames.logo,
              styling?.tailwind?.logo
            )}
            style={styling?.vanilla?.logo}
          >
            <StyledLink href="/" styling={styling?.styledLinkName}>
              {data.name}
            </StyledLink>
            <span
              className={ModifyClassNames(
                defaultClassNames.version,
                styling?.tailwind?.version
              )}
              style={styling?.vanilla?.version}
            >
              {data.version}
            </span>
          </span>
          <ul
            className={ModifyClassNames(
              defaultClassNames.ul,
              styling?.tailwind?.ul
            )}
            style={styling?.vanilla?.ul}
          >
            {data.navbarLinks.map((navbarLink, index) => {
              return (
                <li
                  key={index}
                  className={ModifyClassNames(
                    defaultClassNames.li,
                    styling?.tailwind?.li
                  )}
                  style={styling?.vanilla?.li}
                >
                  <StyledLink
                    href={navbarLink.value}
                    styling={styling?.styledLinkLi}
                  >
                    {navbarLink.key}
                  </StyledLink>
                </li>
              );
            })}
          </ul>
        </section>
      </SectionWrapper>
    </nav>
  );
}
