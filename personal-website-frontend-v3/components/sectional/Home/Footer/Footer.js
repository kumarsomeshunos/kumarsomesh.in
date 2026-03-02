import Link from "next/link";

import SectionWrapper from "@/components/core/Wrappers/SectionWrapper";
import ModifyClassNames from "@/utils/styling/ModifyClassNames";
import StyledLink from "@/components/core/StyledLink/StyledLink";
import QuoteCard from "@/components/core/Cards/QuoteCard/QuoteCard";

const defaultClassNames = {
  main: [],
  wrapper: ["flex", "flex-wrap", "py-4"],
  left: ["w-[500px]"],
  ul: ["flex", "flex-wrap"],
  li: ["list-none", "mr-8"],
  footerTitle: ["text-2xl", "font-bold"],
};

export default function Footer({ data, styling, ...extraProps }) {
  return (
    <footer
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
          <QuoteCard data={data.quote} styling={styling?.quoteCard} />
          <div>
            <h4
              className={ModifyClassNames(
                defaultClassNames.footerTitle,
                styling?.tailwind?.footerTitle
              )}
              style={styling?.vanilla?.footerTitle}
            >
              More of me
            </h4>
            <ul
              className={ModifyClassNames(
                defaultClassNames.ul,
                styling?.tailwind?.ul
              )}
              style={styling?.vanilla?.ul}
            >
              {data.footerLinks.map((footerLink, index) => {
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
                      href={footerLink.value}
                      styling={styling?.styledLinkLi}
                    >
                      {footerLink.key}
                    </StyledLink>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      </SectionWrapper>
    </footer>
  );
}
