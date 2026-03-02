import styles from "./Updates.module.css";
import UpdateCard from "../core/Cards/UpdateCard/UpdateCard";
import Heading from "../core/Heading/Heading";
import SectionWrapper from "../core/Wrappers/SectionWrapper";

let updateDetailsHtml = `<section id="introduction">
            <h2>Introduction</h2>
            <p>The Dummy Project is a sample project designed to showcase how to structure documentation for any project.</p>
        </section>

        <section id="setup">
            <h2>Setup</h2>
            <p>Follow these steps to set up the Dummy Project on your local machine:</p>
            <ol>
                <li>Clone the repository:
                    <pre><code>git clone https://github.com/yourusername/dummy-project.git</code></pre>
                </li>
                <li>Navigate to the project directory:
                    <pre><code>cd dummy-project</code></pre>
                </li>
                <li>Install the dependencies:
                    <pre><code>npm install</code></pre>
                </li>
            </ol>
        </section>

        <section id="usage">
            <h2>Usage</h2>
            <p>To start using the Dummy Project, follow the steps below:</p>
            <ul>
                <li>Run the project with:
                    <pre><code>npm start</code></pre>
                </li>
                <li>Open your browser and go to <code>http://localhost:3000</code></li>
            </ul>

            <h3>Common Commands</h3>
            <p>Below is a table of common commands for interacting with the project:</p>

            <table>
                <thead>
                    <tr>
                        <th>Command</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>npm start</code></td>
                        <td>Start the development server on localhost.</td>
                    </tr>
                    <tr>
                        <td><code>npm run build</code></td>
                        <td>Build the project for production.</td>
                    </tr>
                    <tr>
                        <td><code>npm test</code></td>
                        <td>Run the project's test suite.</td>
                    </tr>
                    <tr>
                        <td><code>npm run lint</code></td>
                        <td>Check the code for linting issues.</td>
                    </tr>
                </tbody>
            </table>
        </section>

        <section id="contribution">
            <h2>Contribution</h2>
            <p>Contributions are welcome! To contribute to the Dummy Project, please follow these steps:</p>
            <ol>
                <li>Fork the repository.</li>
                <li>Create a new branch for your feature: <code>git checkout -b feature-name</code></li>
                <li>Commit your changes: <code>git commit -m "Add new feature"</code></li>
                <li>Push to the branch: <code>git push origin feature-name</code></li>
                <li>Submit a pull request for review.</li>
            </ol>
        </section>

        <section id="license">
            <h2>License</h2>
            <p>This project is licensed under the MIT License - see the <a href="LICENSE">LICENSE</a> file for details.</p>
        </section>`;

let updateDetailsHtml2 = `<section id="introduction">
            <h2>Introduction</h2>
            <p>The Dummy Project is a sample project designed to showcase how to structure documentation for any project. This is the second update.  The Dummy Project is a sample project designed to showcase how to structure documentation for any project. This is the second update. The Dummy Project is a sample project designed to showcase how to structure documentation for any project. This is the second update. The Dummy Project is a sample project designed to showcase how to structure documentation for any project. This is the second update. The Dummy Project is a sample project designed to showcase how to structure documentation for any project. This is the second update. </p>
        </section>`;

export default function Updates({
  backgroundMain,
  colorMain,
  backgroundWallpaper,
  filterWallpaper,
  heading = "Updates",
  subheading,
  backgroundImageName,
  updates,
}) {
  return (
    <section className={styles.main}>
      <SectionWrapper
        backgroundMain={backgroundMain}
        colorMain={colorMain}
        backgroundWallpaper={backgroundWallpaper}
        filterWallpaper={filterWallpaper}
      >
        <Heading
          heading={heading}
          subheading={subheading}
          backgroundImageName={backgroundImageName}
        />
        {updates.map((update, index) => {
          return (
            <UpdateCard
              key={index}
              updateDetailsHtml={update.updateDetailsHtml}
              background={update.background}
              border={update.border}
              boxShadow={update.boxShadow}
              color={update.color}
              borderRadius={update.borderRadius}
              textDecoration={update.textDecoration}
              transition={update.transition}
              backgroundHover={update.backgroundHover}
              borderHover={update.borderHover}
              boxShadowHover={update.boxShadowHover}
              colorHover={update.colorHover}
              borderRadiusHover={update.borderRadiusHover}
              textDecorationHover={update.textDecorationHover}
              transitionHover={update.transitionHover}
            />
          );
        })}
      </SectionWrapper>
    </section>
  );
}
