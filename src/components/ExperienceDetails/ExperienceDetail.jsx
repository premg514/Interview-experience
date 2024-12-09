import React from 'react';
import { useParams } from 'react-router-dom';
import interviewExperiences from '../../Data/data';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import {
  ExperienceDetailContainer,
  ExperienceTitle,
  ExperienceRole,
  ExperienceText,
  Highlight
} from './styleComponents';

export default function ExperienceDetail() {
  const { id } = useParams();
  const experience = interviewExperiences.find((exp) => exp.id === parseInt(id));

  if (!experience) {
    return <h2>Experience not found!</h2>;
  }

  return (
    <div>
      <Header />
      <ExperienceDetailContainer>
        <ExperienceTitle>{experience.company}</ExperienceTitle>
        <ExperienceRole>{experience.role}</ExperienceRole>
        <ExperienceText>{experience.experience}</ExperienceText>
        <ExperienceText>
          <Highlight>Date:</Highlight> {experience.date}
        </ExperienceText>
      </ExperienceDetailContainer>
      <Footer />
    </div>
  );
}
