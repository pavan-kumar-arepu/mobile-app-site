// src/components/Home.js
import React from "react";
import ProfileSummary from "./ProfileSummary";
import Awards from "./Awards";
import Education from "./Education";
import Experience from "./Experience";
import CoreCompetencies from "./CoreCompetencies";
import Section from "../../Section";

const Home = () => {
  return (
    <div>
      <Section id="profile-summary" title="Profile Summary">
        <ProfileSummary />
      </Section>
      <Section id="awards" title="Awards">
        <Awards />
      </Section>
      <Section id="core-competencies" title="Core Competencies">
        <CoreCompetencies />
      </Section>
      <Section id="education" title="Education">
        <Education />
      </Section>
      <Section id="experience" title="Experience">
        <Experience />
      </Section>
    </div>
  );
};

export default Home;
