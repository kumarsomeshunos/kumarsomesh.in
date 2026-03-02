import CustomImage from "@/components/core/CustomImage/CustomImage";
import styles from "./HeroProject.module.css";
import SectionWrapper from "@/components/core/Wrappers/SectionWrapper";
import Heading from "@/components/core/Heading/Heading";
import MainButton from "@/components/core/Buttons/MainButton/MainButton";
import InsertHtml from "@/components/core/InsertHtml/InsertHtml";

export default function HeroProject({
  backgroundMain,
  colorMain,
  backgroundWallpaper,
  filterWallpaper,
  heading,
  subheading,
  backgroundImageName,
  projectInfo,
  heroButtons,
  customImage,
}) {
  return (
    <section className={styles.main}>
      <SectionWrapper
        backgroundMain={backgroundMain}
        colorMain={colorMain}
        backgroundWallpaper={backgroundWallpaper}
        filterWallpaper={filterWallpaper}
      >
        <section className={styles.wrapper}>
          <section className={styles.leftPortion}>
            <Heading
              heading={heading}
              subheading={subheading}
              backgroundImageName={backgroundImageName}
            />
            <div className={styles.information}>
              <p>{projectInfo.time}</p>
              <p>{projectInfo.status}</p>
            </div>
            <div className={styles.information}>
              <p>MIT License</p>
              <p>project-genesis</p>
            </div>

            <p className={styles.description}>{projectInfo.description}</p>
            {heroButtons && (
              <div className={styles.buttons}>
                {heroButtons.map((heroButton, index) => {
                  return (
                    <MainButton
                      key={index}
                      text={heroButton.key}
                      href={heroButton.value}
                      background={heroButton.background}
                      border={heroButton.border}
                      boxShadow={heroButton.boxShadow}
                      color={heroButton.color}
                      padding={heroButton.padding}
                      margin={heroButton.margin}
                      borderRadius={heroButton.borderRadius}
                      textDecoration={heroButton.textDecoration}
                      transition={heroButton.transition}
                      backgroundHover={heroButton.backgroundHover}
                      borderHover={heroButton.borderHover}
                      boxShadowHover={heroButton.boxShadowHover}
                      colorHover={heroButton.colorHover}
                      paddingHover={heroButton.paddingHover}
                      marginHover={heroButton.marginHover}
                      borderRadiusHover={heroButton.borderRadiusHover}
                      textDecorationHover={heroButton.textDecorationHover}
                      transitionHover={heroButton.transitionHover}
                    />
                  );
                })}
              </div>
            )}
          </section>
          <section className={styles.rightPortion}>
            <CustomImage
              srcImage={customImage.srcImage}
              srcMobile={customImage.srcMobile}
              altImage={customImage.altImage}
              widthImage={customImage.widthImage}
              heightImage={customImage.heightImage}
              layoutImage={customImage.layoutImage}
              objectFitImage={customImage.objectFitImage}
              paddingSection={customImage.paddingSection}
              positionDiv={customImage.positionDiv}
              widthDiv={customImage.widthDiv}
              heightDiv={customImage.heightDiv}
              borderRadiusDiv={customImage.borderRadiusDiv}
              overflowDiv={customImage.overflowDiv}
              boxShadowDiv={customImage.boxShadowDiv}
              hrefLink={customImage.hrefLink}
              textLink={customImage.textLink}
              textParagraph={customImage.textParagraph}
            />
          </section>
        </section>
        <InsertHtml
          externalHtml={`<h1>Dummy Project Documentation</h1>

    <!-- Table of Contents -->
    <h2>Table of Contents</h2>
    <ul>
        <li><a href="#introduction">Introduction</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#usage">Usage</a></li>
        <li><a href="#api">API Reference</a></li>
        <li><a href="#examples">Examples</a></li>
        <li><a href="#contribution">Contribution Guidelines</a></li>
        <li><a href="#license">License</a></li>
    </ul>

    <!-- Introduction -->
    <section id="introduction">
        <h2>Introduction</h2>
    </section>

    <!-- Installation -->
    <section id="installation">
        <h2>Installation</h2>
        <p>To install the Dummy Project, you need to follow these steps:</p>
        <ol>
            <li>Clone the repository:
                <pre><code>git clone https://github.com/yourusername/dummy-project.git</code></pre>
            </li>
            <li>Navigate to the project directory:
                <pre><code>cd dummy-project</code></pre>
            </li>
            <li>Install the dependencies using npm:
                <pre><code>npm install</code></pre>
            </li>
        </ol>
        <p>For detailed setup instructions, please refer to the <a href="#usage">Usage</a> section.</p>
    </section>

    <!-- Usage -->
    <section id="usage">
        <h2>Usage</h2>
        <p>To start using the Dummy Project, run the following command:</p>
        <pre><code>npm start</code></pre>
        <p>After running the above command, the project will be available at <code>http://localhost:3000</code>.</p>

        <h3>Configuration</h3>
        <p>The project can be configured using the <code>config.json</code> file. Here’s an example:</p>
        <pre><code>{
    "port": 3000,
    "env": "development",
    "db": {
        "host": "localhost",
        "port": 27017,
        "name": "dummydb"
    }
}</code></pre>
    </section>

    <!-- API Reference -->
    <section id="api">
        <h2>API Reference</h2>
        <p>This project provides the following API endpoints:</p>
        <table>
            <thead>
                <tr>
                    <th>Method</th>
                    <th>Endpoint</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>GET</td>
                    <td>/api/items</td>
                    <td>Retrieves a list of items</td>
                </tr>
                <tr>
                    <td>POST</td>
                    <td>/api/items</td>
                    <td>Creates a new item</td>
                </tr>
                <tr>
                    <td>PUT</td>
                    <td>/api/items/:id</td>
                    <td>Updates an existing item</td>
                </tr>
                <tr>
                    <td>DELETE</td>
                    <td>/api/items/:id</td>
                    <td>Deletes an item</td>
                </tr>
            </tbody>
        </table>
    </section>

    <!-- Examples -->
    <section id="examples">
        <h2>Examples</h2>
        <p>Here are some usage examples:</p>

        <h3>Fetching Items</h3>
        <pre><code>fetch('http://localhost:3000/api/items')
    .then(response => response.json())
    .then(data => console.log(data));</code></pre>

        <h3>Creating a New Item</h3>
        <pre><code>fetch('http://localhost:3000/api/items', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name: 'New Item' })
}).then(response => response.json())
    .then(data => console.log(data));</code></pre>
    </section>

    <!-- Contribution Guidelines -->
    <section id="contribution">
        <h2>Contribution Guidelines</h2>
        <p>We welcome contributions from the community! Please follow these steps to contribute:</p>
        <ol>
            <li>Fork the repository.</li>
            <li>Create a new branch for your feature: <code>git checkout -b feature-name</code></li>
            <li>Commit your changes: <code>git commit -m "Add new feature"</code></li>
            <li>Push to the branch: <code>git push origin feature-name</code></li>
            <li>Create a pull request for review.</li>
        </ol>
        <p>Ensure that your code follows the style guide and passes all tests.</p>
    </section>

    <!-- License -->
    <section id="license">
        <h2>License</h2>
        <p>This project is licensed under the MIT License. See the <a href="LICENSE">LICENSE</a> file for more details.</p>
    </section>`}
        />
      </SectionWrapper>
    </section>
  );
}
