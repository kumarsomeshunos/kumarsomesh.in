import MainButton from "@/components/core/Buttons/MainButton/MainButton";
import InsertHtml from "@/components/core/InsertHtml/InsertHtml";
import TwoPaneLayout from "@/components/core/TwoPaneLayout/TwoPaneLayout";
import SectionWrapper from "@/components/core/Wrappers/SectionWrapper";
import { HeroData } from "@/data/HeroData";
import ModifyClassNames from "@/utils/styling/ModifyClassNames";

import Image from "next/image";

const defaultClassNames = {
  main: [],
  left: [],
  right: [],
};

const defaultClassNamesLeft = {
  mainLeft: [],
  greetings: [],
  name: [
  ],
  description: [],
};

const defaultClassNamesRight = {
  mainRight: [],
  image: [],
};

function Left({ data, styling, ...extraProps }) {
  return (
    <section
      className={ModifyClassNames(
        defaultClassNamesLeft.mainLeft,
        styling?.tailwind?.mainLeft
      )}
      style={styling?.vanilla?.mainLeft}
      {...extraProps}
    >
      <p
        className={ModifyClassNames(
          defaultClassNamesLeft.greetings,
          styling?.tailwind?.greetings
        )}
        style={styling?.vanilla?.greetings}
      >
        {data.greetings}
      </p>
      <h1
        className={ModifyClassNames(
          defaultClassNamesLeft.name,
          styling?.tailwind?.name
        )}
        style={styling?.vanilla?.name}
      >
        {data.name}
      </h1>
      {/* <p
        className={ModifyClassNames(
          defaultClassNamesLeft.description,
          styling?.tailwind?.description
        )}
        style={styling?.vanilla?.description}
      >
        {data.description}
      </p> */}
      <InsertHtml externalHtml={data.description} />
      {data.button.map((button, index) => {
        return (
          <MainButton key={index} data={button} styling={styling?.MainButton} />
        );
      })}
    </section>
  );
}

function Right({ data, styling, ...extraProps }) {
  return (
    <section
      className={ModifyClassNames(
        defaultClassNamesRight.mainRight,
        styling?.tailwind?.mainRight
      )}
      style={styling?.vanilla?.mainRight}
      {...extraProps}
    >
      <Image width={500} height={500} src={data.image} alt={data.alt} />
    </section>
  );
}

export default function Hero({ left, right, styling, ...extraProps }) {
  return (
    <header
      className={ModifyClassNames(
        defaultClassNames.main,
        styling?.tailwind?.main
      )}
      style={styling?.vanilla?.main}
      {...extraProps}
    >
      <SectionWrapper styling={styling?.sectionWrapper}>
        <TwoPaneLayout
          left={<Left data={HeroData.left} styling={styling?.left} />}
          right={<Right data={HeroData.right} styling={styling?.right} />}
          styling={styling?.twoPaneLayout}
        />
      </SectionWrapper>
    </header>
  );
}
