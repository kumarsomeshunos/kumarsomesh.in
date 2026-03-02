"use client";

import SectionWrapper from "@/components/core/Wrappers/SectionWrapper";
import { useState } from "react";

const baseData = {
  purewhite: {
    backgroundMain: "white",
    colorMain: "#2c3e50",
    backgroundWallpaper:
      "linear-gradient(90deg, rgba(240,240,240,1) 0%, rgba(200,200,200,1) 100%)",
    filterWallpaper: "blur(0px)",
    linkBorderBottom: "1px solid rgba(44, 62, 80, 0.6)",
    linkBackgroundColor: "#2c3e50",
  },
  alldark: {
    backgroundMain: "black",
    colorMain: "#f1c40f",
    backgroundWallpaper: "#1b1b1b",
    filterWallpaper: "blur(0px)",
    linkBorderBottom: "1px solid rgba(241, 196, 15, 0.7)",
    linkBackgroundColor: "#f1c40f",
  },
};

const fieldDescriptions = {
  backgroundMain: "Choose the main background color (e.g., white or black).",
  colorMain: "Choose the main text color for readability.",
  backgroundWallpaper:
    "Pick a wallpaper style, can be a solid color or gradient.",
  filterWallpaper: "Select a filter effect for the wallpaper, like blur.",
  linkBorderBottom: "Choose the bottom border style for links.",
  linkBackgroundColor: "Pick the background color for links.",
};

const filterOptions = ["none", "blur(2px)", "blur(4px)", "brightness(0.8)"];
const borderOptions = [
  "none",
  "1px solid rgba(44, 62, 80, 0.6)",
  "1px solid rgba(241, 196, 15, 0.7)",
];

const ThemeEditor = () => {
  const [themes, setThemes] = useState(baseData);

  const handleChange = (theme, field, value) => {
    setThemes((prevThemes) => ({
      ...prevThemes,
      [theme]: {
        ...prevThemes[theme],
        [field]: value,
      },
    }));
  };

  return (
    <div>
      <SectionWrapper>
        <h1>Theme Editor</h1>
        <p>Select colors and styles to create a theme you love!</p>

        {Object.keys(themes).map((themeKey) => (
          <div key={themeKey} style={{ marginBottom: "2rem" }}>
            <h2>
              {themeKey.charAt(0).toUpperCase() + themeKey.slice(1)} Theme
            </h2>
            {Object.keys(themes[themeKey]).map((field) => (
              <div key={field} style={{ marginBottom: "1rem" }}>
                <label
                  style={{ fontWeight: "bold" }}
                  title={fieldDescriptions[field]}
                >
                  {fieldDescriptions[field]}
                </label>

                {[
                  "backgroundMain",
                  "colorMain",
                  "linkBackgroundColor",
                ].includes(field) ? (
                  <input
                    type="color"
                    value={themes[themeKey][field]}
                    onChange={(e) =>
                      handleChange(themeKey, field, e.target.value)
                    }
                    style={{
                      display: "block",
                      width: "100%",
                      padding: "0.5rem",
                      marginTop: "0.5rem",
                    }}
                  />
                ) : field === "filterWallpaper" ? (
                  <select
                    value={themes[themeKey][field]}
                    onChange={(e) =>
                      handleChange(themeKey, field, e.target.value)
                    }
                    style={{
                      display: "block",
                      width: "100%",
                      padding: "0.5rem",
                      marginTop: "0.5rem",
                    }}
                  >
                    {filterOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                ) : field === "linkBorderBottom" ? (
                  <select
                    value={themes[themeKey][field]}
                    onChange={(e) =>
                      handleChange(themeKey, field, e.target.value)
                    }
                    style={{
                      display: "block",
                      width: "100%",
                      padding: "0.5rem",
                      marginTop: "0.5rem",
                    }}
                  >
                    {borderOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    type="text"
                    value={themes[themeKey][field]}
                    onChange={(e) =>
                      handleChange(themeKey, field, e.target.value)
                    }
                    style={{
                      display: "block",
                      width: "100%",
                      padding: "0.5rem",
                      marginTop: "0.5rem",
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        ))}

        <pre style={{ background: "#f4f4f4", padding: "1rem" }}>
          {JSON.stringify(themes, null, 2)}
        </pre>
      </SectionWrapper>
    </div>
  );
};

export default ThemeEditor;
