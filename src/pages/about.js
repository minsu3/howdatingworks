import * as React from "react";
import Header from "../components/header";
import styles from "../styles/about.module.css";
import banner from "../images/banner.svg";

const About = () => {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <div className={styles.app}>
          <div className={styles.content}>
            <img src={banner} />
            <h1>About Blair</h1>
            <div className={styles.fakeimg}>image</div>
            <p>
              Blair is a dating and relationship coach from San Francisco, CA
              who teaches men how to meet, date, and keep the kinds of women
              they truly want to be with. Wherever you are on your journey –
              learning to date, looking for love, recovering from a breakup,
              stuck in an unhappy relationship – his dating solutions will get
              you where you want to be. Through his free Dating Bootcamp video
              series, YouTube channel, blog, podcast, social media, and private
              coaching services, Blair helps men create peace, passion, and
              abundance in their intimate relationships.
            </p>
            <p>
              The Dating Bootcamp is the intended starting point for any man to
              learn how dating works. Blair shows how to get dates, how to get a
              girlfriend, and how to foster a healthy, loving relationship by
              understanding what women want and how to find and keep the right
              one for you. He teaches men how to become their best, most
              attractive selves – how to build their confidence, take care of
              their bodies, and fearlessly pursue what they want in life. He
              details how to meet women and make dates, how a successful
              courtship turns into a relationship, and how to keep the magic
              alive long after the honeymoon period has worn off. Mastering
              these basic skills is the first step in attracting your dream girl
              and achieving dating success and happiness.
            </p>

            <p>
              Blair provides additional guidance on his blog, podcast, social
              media, and Youtube channel to help men refine their approach once
              they’ve learned the baseline dating knowledge. He sheds light on
              specific dating situations, answers viewer questions, and
              discusses optimal health, fitness, and self-help strategies for
              continued success in relationships and in life. Subscribe to his
              Youtube channel, follow him on social media, or sign up for the
              mailing list to receive updates and advice on the topics you need
              to know about. If you would like to get one-on-one on help with
              dating solutions tailored to your needs, click here to book a
              coaching session.
            </p>
            <p>
              This advice is not just for men seeking a traditional relationship
              with a girlfriend or wife. This is for any man looking to create
              his ideal relationship in life, whatever form that takes. Whether
              it is serious or casual, exclusive or open, with one or multiple
              partners, is all up to your heart’s deepest desire. This is for
              you to figure out what you want and stop at nothing to get it. So
              what are you waiting for? Get on track to meet the woman of your
              dreams! – Click here to book a private coaching session with
              Blair, or click here to submit a question you would like answered
              in a future video, article, or podcast.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
