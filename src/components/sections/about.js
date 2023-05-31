import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      outline: 0;

      &:after {
        top: 15px;
        left: 15px;
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);

      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
    }

    &:after {
      border: 2px solid var(--green);
      top: 20px;
      left: 20px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = [
    'JavaScript (ES6+)',
    'Python',
    'React',
    'Redux',
    'Node.js',
    'SQL',
    'Flask',
    'Sequelize',
    'Sequelize',
    'Socket.IO',
    'Amazon AWS',
    'Express.js',
  ];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>Hello there! Thanks for taking the time to visit.</p>

            <p>
              17+ years of being a professional jazz saxophonist and composer found me playing
              everything from the smallest coffee shop to the largest arenas and festivals. I have
              taught music to everyone from elementary school children, to the undergraduate and
              graduate level as well as working professionals. I love{' '}
              <span className="green-text">solving problems</span> from not just a technical
              perspective, but with an emphasis on <span className="green-text">creativity</span>{' '}
              and <span className="green-text">diversity of opinion</span>. I have taken the{' '}
              <span className="green-text">dedication</span>,{' '}
              <span className="green-text">consistent devotion</span>, and{' '}
              <span className="green-text">love of practice</span> that I have for music, and
              applied it to software development. I love watching the hours melt away while working
              on a project, and, contrary to popular belief, am a software developer who loves to
              work with others.
            </p>

            <p>
              I received both my Bachelor and Master in Music from{' '}
              <a href="https://www.berklee.edu/">Berklee College of Music</a> and during my time
              there, I did a lot of teaching, performing, and social work all around the world
              through the{' '}
              <a href="https://college.berklee.edu/focused/global-jazz">
                Berklee Global Jazz Institute
              </a>
              .{' '}
            </p>

            <p>Here are a few technologies I’ve been working with recently:</p>
          </div>

          <ul className="skills-list">
            {skills &&
              skills.map((skill, i) => (
                <li className="green-text" key={i}>
                  {skill}
                </li>
              ))}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="./me.jpg"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
