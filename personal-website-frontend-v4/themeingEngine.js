import { cookies } from "next/headers";
import {
  baseData,
  navbarData,
  heroData,
  featuredProjectData,
  projectsSectionData,
  blogsSectionData,
  featuredBlogData,
  heroProjectData,
  heroBlogData,
  nowSectionData,
  nowMovieData,
  nowBookData,
  heroContactData,
  updatesData,
  footerData,
  endData,
} from "./data";

function getThemeName(themeNameValue) {
  const cookeStore = cookies();
  const themeName = cookeStore.get(themeNameValue)?.value;
  return themeName;
}

function baseThemeingEngine() {
  let newBaseData = baseData["purewhite"];
  const themeName = getThemeName("themeName");

  if (themeName) {
    newBaseData = baseData[themeName] || newBaseData;
  }

  return newBaseData;
}

function navbarThemeingEngine() {
  let newNavbarData = navbarData["purewhite"];
  const themeName = getThemeName("themeName");

  if (themeName) {
    newNavbarData = navbarData[themeName] || newNavbarData;
  }

  return newNavbarData;
}

function footerThemeingEngine() {
  let newFooterDat = footerData["purewhite"];
  const themeName = getThemeName("themeName");

  if (themeName) {
    newFooterDat = footerData[themeName] || newFooterDat;
  }

  return newFooterDat;
}

function endThemeingEngine() {
  let newEndData = endData["purewhite"];
  const themeName = getThemeName("themeName");

  if (themeName) {
    newEndData = endData[themeName] || newEndData;
  }

  return newEndData;
}

function heroThemeingEngine() {
  let newHeroData = heroData["purewhite"];
  const themeName = getThemeName("themeName");

  if (themeName) {
    newHeroData = heroData[themeName] || newHeroData;
  }

  return newHeroData;
}

function projectSectionThemeingEngine() {
  let newProjectSectionData = projectsSectionData["purewhite"];
  const themeName = getThemeName("themeName");

  if (themeName) {
    newProjectSectionData =
      projectsSectionData[themeName] || newProjectSectionData;
  }

  return newProjectSectionData;
}

function blogSectionThemeingEngine() {
  let newBlogSectionData = blogsSectionData["purewhite"];
  const themeName = getThemeName("themeName");

  if (themeName) {
    newBlogSectionData = blogsSectionData[themeName] || newBlogSectionData;
  }

  return newBlogSectionData;
}

function featuredProjectThemeingEngine() {
  let newFeaturedProjectData = featuredProjectData["purewhite"];
  const themeName = getThemeName("themeName");

  if (themeName) {
    newFeaturedProjectData =
      featuredProjectData[themeName] || newFeaturedProjectData;
  }

  return newFeaturedProjectData;
}

function featuredBlogThemeingEngine() {
  let newFeaturedBlogData = featuredBlogData["purewhite"];
  const themeName = getThemeName("themeName");

  if (themeName) {
    newFeaturedBlogData = featuredBlogData[themeName] || newFeaturedBlogData;
  }

  return newFeaturedBlogData;
}

function heroBlogThemeingEngine() {
  let newHeroBlogData = heroBlogData["purewhite"];
  const themeName = getThemeName("themeName");

  if (themeName) {
    newHeroBlogData = heroBlogData[themeName] || newHeroBlogData;
  }

  return newHeroBlogData;
}

function heroProjectThemeingEngine() {
  let newHeroProjectData = heroProjectData["purewhite"];
  const themeName = getThemeName("themeName");

  if (themeName) {
    newHeroProjectData = heroProjectData[themeName] || newHeroProjectData;
  }

  return newHeroProjectData;
}

function heroContactThemeingEngine() {
  let newHeroContactData = heroContactData["purewhite"];
  const themeName = getThemeName("themeName");

  if (themeName) {
    newHeroContactData = heroContactData[themeName] || newHeroContactData;
  }

  return newHeroContactData;
}

function nowSectionThemeingEngine() {
  let newNowSectionData = nowSectionData["purewhite"];
  const themeName = getThemeName("themeName");

  if (themeName) {
    newNowSectionData = nowSectionData[themeName] || newNowSectionData;
  }

  return newNowSectionData;
}

function nowMovieThemeingEngine() {
  let newNowMovieData = nowMovieData["purewhite"];
  const themeName = getThemeName("themeName");

  if (themeName) {
    newNowMovieData = nowMovieData[themeName] || newNowMovieData;
  }

  return newNowMovieData;
}

function nowBookThemeingEngine() {
  let newNowBookData = nowBookData["purewhite"];
  const themeName = getThemeName("themeName");

  if (themeName) {
    newNowBookData = nowBookData[themeName] || newNowBookData;
  }

  return newNowBookData;
}

function updatesThemeingEngine() {
  let newUpdatesData = updatesData["purewhite"];
  const themeName = getThemeName("themeName");

  if (themeName) {
    newUpdatesData = updatesData[themeName] || newUpdatesData;
  }

  return newUpdatesData;
}

export {
  baseThemeingEngine,
  navbarThemeingEngine,
  footerThemeingEngine,
  endThemeingEngine,
  heroThemeingEngine,
  projectSectionThemeingEngine,
  blogSectionThemeingEngine,
  featuredProjectThemeingEngine,
  featuredBlogThemeingEngine,
  heroBlogThemeingEngine,
  heroProjectThemeingEngine,
  heroContactThemeingEngine,
  nowSectionThemeingEngine,
  nowMovieThemeingEngine,
  nowBookThemeingEngine,
  updatesThemeingEngine,
};
