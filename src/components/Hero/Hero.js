import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
        Im kotbi Mohamed Im a Full stack developer with 5 years working experience.

Ive developed PWAs and high performance web pages, also have experience with website optimizations.

For back-end Im using Nodejs with Mongodb, GraphQL APIs,Java,PHP.

Im good at algorithms and data structures.
        </SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;