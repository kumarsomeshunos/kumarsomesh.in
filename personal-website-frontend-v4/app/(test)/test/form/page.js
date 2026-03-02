"use client";

import styles from "./page.module.css";
import { useState } from "react";
import { baseData } from "@/data";
import SectionWrapper from "@/components/core/Wrappers/SectionWrapper";

const DynamicForm = ({ section, sectionData }) => {
  const [formData, setFormData] = useState(baseData);

  const handleChange = (e, key) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [key]: {
        ...prev[key],
        [name]: value,
      },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("/api/update-section", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ section, data: formData }),
    });
  };

  return (
    <section className={styles.main}>
      <SectionWrapper>
        <form onSubmit={handleSubmit}>
          {Object.keys(formData).map((key) => (
            <div key={key}>
              <h3 className={styles.heading}>{key}</h3>
              {Object.keys(formData[key]).map((field) => (
                <div key={field}>
                  <label>{field}</label>
                  <br />
                  <input
                    type="text"
                    name={field}
                    value={formData[key][field]}
                    onChange={(e) => handleChange(e, key)}
                  />
                </div>
              ))}
            </div>
          ))}
          <button type="submit">Save Changes</button>
        </form>
      </SectionWrapper>
    </section>
  );
};

export default DynamicForm;
