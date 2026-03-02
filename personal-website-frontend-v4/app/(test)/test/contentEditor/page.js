// pages/editContent.js
"use client";

import { useState } from "react";
import {
  navbar,
  hero,
  projectsSection,
  blogsSection,
} from "@/user_data/contentData";
import SectionWrapper from "@/components/core/Wrappers/SectionWrapper";

const EditContent = () => {
  const [navbarData, setNavbarData] = useState(navbar);
  const [heroData, setHeroData] = useState(hero);
  const [projectsData, setProjectsData] = useState(projectsSection);
  const [blogsData, setBlogsData] = useState(blogsSection);

  const handleInputChange = (section, key, value) => {
    if (section === "navbar") setNavbarData({ ...navbarData, [key]: value });
    if (section === "hero") setHeroData({ ...heroData, [key]: value });
    if (section === "projects")
      setProjectsData({ ...projectsData, [key]: value });
    if (section === "blogs") setBlogsData({ ...blogsData, [key]: value });
  };

  const handleArrayChange = (section, index, key, value) => {
    if (section === "navbarLinks") {
      const updatedLinks = navbarData.navbarLinks.map((link, i) =>
        i === index ? { ...link, [key]: value } : link
      );
      setNavbarData({ ...navbarData, navbarLinks: updatedLinks });
    } else if (section === "projects") {
      const updatedProjects = projectsData.projects.map((project, i) =>
        i === index ? { ...project, [key]: value } : project
      );
      setProjectsData({ ...projectsData, projects: updatedProjects });
    } else if (section === "blogs") {
      const updatedBlogs = blogsData.blogs.map((blog, i) =>
        i === index ? { ...blog, [key]: value } : blog
      );
      setBlogsData({ ...blogsData, blogs: updatedBlogs });
    }
  };

  const addItem = (section) => {
    if (section === "navbarLinks") {
      setNavbarData({
        ...navbarData,
        navbarLinks: [...navbarData.navbarLinks, { key: "", value: "" }],
      });
    } else if (section === "projects") {
      setProjectsData({
        ...projectsData,
        projects: [
          ...projectsData.projects,
          { title: "", postedOn: "", status: "", description: "", links: [] },
        ],
      });
    } else if (section === "blogs") {
      setBlogsData({
        ...blogsData,
        blogs: [
          ...blogsData.blogs,
          { title: "", postedOn: "", description: "", tags: [], thumbnail: "" },
        ],
      });
    }
  };

  const removeItem = (section, index) => {
    if (section === "navbarLinks") {
      const updatedLinks = navbarData.navbarLinks.filter((_, i) => i !== index);
      setNavbarData({ ...navbarData, navbarLinks: updatedLinks });
    } else if (section === "projects") {
      const updatedProjects = projectsData.projects.filter(
        (_, i) => i !== index
      );
      setProjectsData({ ...projectsData, projects: updatedProjects });
    } else if (section === "blogs") {
      const updatedBlogs = blogsData.blogs.filter((_, i) => i !== index);
      setBlogsData({ ...blogsData, blogs: updatedBlogs });
    }
  };

  const combinedData = {
    navbar: navbarData,
    hero: heroData,
    projects: projectsData,
    blogs: blogsData,
  };

  return (
    <div style={styles.container}>
      {/* Left Pane: Form */}
      <div style={styles.formPane}>
        <SectionWrapper>
          <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
            Edit Website Content
          </h1>

          {/* Navbar Section */}
          <section style={styles.section}>
            <h2>Navbar</h2>
            <div style={styles.fieldGroup}>
              <label style={styles.label}>Name:</label>
              <input
                type="text"
                style={styles.input}
                value={navbarData.name || ""}
                onChange={(e) =>
                  handleInputChange("navbar", "name", e.target.value)
                }
              />
            </div>
            <h3>Navbar Links</h3>
            {navbarData.navbarLinks.map((link, index) => (
              <div key={index} style={styles.fieldGroup}>
                <label style={styles.label}>Key:</label>
                <input
                  type="text"
                  style={styles.input}
                  value={link.key}
                  onChange={(e) =>
                    handleArrayChange(
                      "navbarLinks",
                      index,
                      "key",
                      e.target.value
                    )
                  }
                />
                <label style={styles.label}>Value:</label>
                <input
                  type="text"
                  style={styles.input}
                  value={link.value}
                  onChange={(e) =>
                    handleArrayChange(
                      "navbarLinks",
                      index,
                      "value",
                      e.target.value
                    )
                  }
                />
                <button
                  style={styles.removeButton}
                  onClick={() => removeItem("navbarLinks", index)}
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              style={styles.addButton}
              onClick={() => addItem("navbarLinks")}
            >
              Add Navbar Link
            </button>
          </section>

          {/* Projects Section */}
          <section style={styles.section}>
            <h2>Projects Section</h2>
            {projectsData.projects.map((project, index) => (
              <div key={index} style={styles.projectCard}>
                <h3>Project {index + 1}</h3>
                <div style={styles.fieldGroup}>
                  <label style={styles.label}>Title:</label>
                  <input
                    type="text"
                    style={styles.input}
                    value={project.title}
                    onChange={(e) =>
                      handleArrayChange(
                        "projects",
                        index,
                        "title",
                        e.target.value
                      )
                    }
                  />
                </div>
                <button
                  style={styles.removeButton}
                  onClick={() => removeItem("projects", index)}
                >
                  Remove Project
                </button>
              </div>
            ))}
            <button
              style={styles.addButton}
              onClick={() => addItem("projects")}
            >
              Add Project
            </button>
          </section>

          {/* Blogs Section */}
          <section style={styles.section}>
            <h2>Blogs Section</h2>
            {blogsData.blogs.map((blog, index) => (
              <div key={index} style={styles.projectCard}>
                <h3>Blog {index + 1}</h3>
                <div style={styles.fieldGroup}>
                  <label style={styles.label}>Title:</label>
                  <input
                    type="text"
                    style={styles.input}
                    value={blog.title}
                    onChange={(e) =>
                      handleArrayChange("blogs", index, "title", e.target.value)
                    }
                  />
                </div>
                <button
                  style={styles.removeButton}
                  onClick={() => removeItem("blogs", index)}
                >
                  Remove Blog
                </button>
              </div>
            ))}
            <button style={styles.addButton} onClick={() => addItem("blogs")}>
              Add Blog
            </button>
          </section>
        </SectionWrapper>
      </div>

      {/* Right Pane: JSON Viewer */}
      <div style={styles.jsonPane}>
        <h2 style={{ textAlign: "center" }}>JSON Preview</h2>
        <pre style={styles.jsonViewer}>
          {JSON.stringify(combinedData, null, 2)}
        </pre>
      </div>
    </div>
  );
};

// Styles
const styles = {
  container: {
    display: "flex",
    height: "100vh",
    overflow: "hidden",
  },
  formPane: {
    flex: "1",
    padding: "20px",
    overflowY: "scroll",
    backgroundColor: "#f9f9f9",
  },
  jsonPane: {
    flex: "1",
    padding: "20px",
    backgroundColor: "#2e2e2e",
    color: "#fff",
    overflowY: "scroll",
  },
  jsonViewer: {
    whiteSpace: "pre-wrap",
    fontSize: "14px",
    fontFamily: "monospace",
    color: "#fff",
  },
  section: {
    backgroundColor: "#fff",
    padding: "15px",
    marginBottom: "20px",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  },
  fieldGroup: {
    marginBottom: "10px",
    display: "flex",
    alignItems: "center",
  },
  label: {
    width: "100px",
    fontWeight: "bold",
  },
  input: {
    flex: "1",
    padding: "8px",
    borderRadius: "4px",
    border: "1px solid #ddd",
  },
  projectCard: {
    backgroundColor: "#f1f1f1",
    padding: "10px",
    borderRadius: "8px",
    marginBottom: "15px",
  },
  addButton: {
    padding: "10px",
    margin: "10px 0",
    backgroundColor: "#4CAF50",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  removeButton: {
    padding: "5px",
    marginLeft: "10px",
    backgroundColor: "#f44336",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default EditContent;
