import React from 'react';
import {
    ExperienceCard,
    Company,
    Role,
    Description,
    Para,
    Date,
    ReadMoreLink
} from './styleComponents';

export default function ExperienceItem({ experience }) {
    return (
        <ExperienceCard>
            <Company>{experience.company}</Company>
            <Role>{experience.role}</Role>
            <Description>{experience.experience}</Description>
            <Para><strong>Rounds:</strong> {experience.rounds}</Para>
            <Para color={experience.status=='Accepted'?'green':'red'} ><strong>Status:</strong> {experience.status}</Para>
            <Date>Date: {experience.date}</Date>
            <ReadMoreLink to={`/experience/${experience.id}`}>
                Read More
            </ReadMoreLink>
        </ExperienceCard>
    );
}
