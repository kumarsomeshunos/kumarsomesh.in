import styles from "./HeroBlog.module.css";
import SectionWrapper from "@/components/core/Wrappers/SectionWrapper";
import Heading from "@/components/core/Heading/Heading";
import CustomImage from "@/components/core/CustomImage/CustomImage";
import InsertHtml from "@/components/core/InsertHtml/InsertHtml";

export default function HeroBlog({
  backgroundMain,
  colorMain,
  backgroundWallpaper,
  filterWallpaper,
  heading,
  subheading,
  backgroundImageName,
  postedOn,
  tags,
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
        <Heading
          heading={heading}
          subheading={subheading}
          backgroundImageName={backgroundImageName}
        />
        {postedOn && (
          <div className={styles.divTime}>
            <time className={styles.time} dateTime={postedOn}>
              {postedOn}
            </time>
          </div>
        )}
        <div className={styles.thumbnail}>
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
        </div>
        <InsertHtml
          externalHtml={`<p class="has-line-data" data-line-start="3" data-line-end="4">So, our college recently decided to upgrade its entry system. Instead of the usual ID cards, we’re now entering the futuristic world of <strong>FaceID</strong>. Pretty cool, right? Well, to make this work, they needed our lovely faces stored in their system. No big deal. They sent us a link where we were supposed to log in, show off our best angle, and upload our facial images.</p>
<p class="has-line-data" data-line-start="5" data-line-end="6">The process seemed simple enough: you log in with your college email, get an OTP, enter it, and voilà—you’re in! At least, that’s how it was supposed to go. But, me being the curious person I am, I found out that things weren’t so straightforward.</p>
<h2 class="code-line" data-line-start=7 data-line-end=8 ><a id="The_NotSoSecure_Security_Flaw_7"></a>The Not-So-Secure Security Flaw</h2>
<p class="has-line-data" data-line-start="8" data-line-end="9">Here’s where things get interesting. While I was going through the motions, I decided to take a peek under the hood. I opened up the browser developer tools (because why not?), and lo and behold, I stumbled upon a gaping security flaw.</p>
<h3 class="code-line" data-line-start=10 data-line-end=11 ><a id="1_API_Keys_Everywhere_10"></a>1. API Keys Everywhere!</h3>
<p class="has-line-data" data-line-start="11" data-line-end="12">Now, the system was sending a <code>GET</code> request to generate that shiny OTP, but I noticed something: they were using an API key in the request headers. Okay, that’s normal… until I realized that this API key was as generic as it gets. It wasn’t tied to me specifically.</p>
<h3 class="code-line" data-line-start=13 data-line-end=14 ><a id="2_Wait_I_Can_Do_What_Now_13"></a>2. Wait, I Can Do What Now?</h3>
<p class="has-line-data" data-line-start="14" data-line-end="15">Here’s the fun part (and by fun, I mean concerning). I logged into my account, got the API key, and then swapped out my email address with someone else’s. And guess what? I was able to log in with their email <em>without even needing the OTP</em>. Yup, no email invasion needed—I could skip the whole “let me send you a code” step. It was like getting VIP access to someone else’s email ID party.</p>
<h3 class="code-line" data-line-start=16 data-line-end=17 ><a id="3_And_About_That_Image_16"></a>3. And About That Image…</h3>
<p class="has-line-data" data-line-start="17" data-line-end="18">Once I was in, I could access their account and—get this—upload my image in place of theirs. So imagine the implications: I could upload a picture of someone else, and the next time the system checked for FaceID, <em>boom</em>, the wrong person gets in.</p>
<p class="has-line-data" data-line-start="19" data-line-end="20">Now, before anyone panics, I didn’t go around uploading images to everyone’s account (I’m not a villain, I promise!). But theoretically, someone with less noble intentions could. The API key was used heavily throughout the system, so it’s safe to say that anyone with this key could wreak havoc. <em>Fun times</em>, right?</p>
<h2 class="code-line" data-line-start=21 data-line-end=22 ><a id="So_Whats_the_Big_Deal_21"></a>So, What’s the Big Deal?</h2>
<p class="has-line-data" data-line-start="22" data-line-end="23">Well, in case it isn’t obvious, this flaw could let anyone:</p>
<ul>
<li class="has-line-data" data-line-start="23" data-line-end="24">Log in to other accounts without needing to send an OTP.</li>
<li class="has-line-data" data-line-start="24" data-line-end="26">Upload a different person’s image, meaning the person in the image could waltz into campus without the system knowing they’re not the original student. A serious face-swap scenario.</li>
</ul>
<h2 class="code-line" data-line-start=26 data-line-end=27 ><a id="The_Takeaway_26"></a>The Takeaway</h2>
<p class="has-line-data" data-line-start="27" data-line-end="28">Here’s what we learned: <em>Don’t reuse API keys everywhere</em>! They should be unique and tied to specific actions. Otherwise, you might accidentally give people access to other accounts—like, well, what happened here.</p>
<p class="has-line-data" data-line-start="29" data-line-end="30">So yeah, that’s the story of how I unintentionally found a pretty significant security issue. Fun times, but hopefully, a lesson learned in proper security practices!</p>`}
        />
      </SectionWrapper>
    </section>
  );
}
