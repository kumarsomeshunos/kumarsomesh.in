"use client";

import { useState } from "react";
import Navbar from "@/components/core/Navbar/Navbar";
import SectionWrapper from "@/components/core/Wrappers/SectionWrapper";
import { navbarLinks } from "@/user_data/navbarLinks";

export default function NavbarEditor() {
  const [navbarData, setNavbarData] = useState({
    backgroundMain: "inherit",
    colorMain: "inherit",
    backgroundWallpaper: "inherit",
    filterWallpaper: "inherit",
    name: "Somesh Kumar",
    version: "MK-VII",
    navbarLinks: navbarLinks,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNavbarData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <Navbar {...navbarData} />
      <SectionWrapper>
        <div>
          <h3>Edit Navbar Properties</h3>
          <label>
            Background Main:
            <input
              type="color"
              name="backgroundMain"
              value={navbarData.backgroundMain}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label>
            Color Main:
            <input
              type="color"
              name="colorMain"
              value={navbarData.colorMain}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label>
            Background Wallpaper:
            <input
              type="text"
              name="backgroundWallpaper"
              value={navbarData.backgroundWallpaper}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label>
            Filter Wallpaper:
            <input
              type="text"
              name="filterWallpaper"
              value={navbarData.filterWallpaper}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={navbarData.name}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <label>
            Version:
            <input
              type="text"
              name="version"
              value={navbarData.version}
              onChange={handleInputChange}
            />
          </label>
        </div>
      </SectionWrapper>
    </div>
  );
}
