import React from 'react';
import {
    ExperienceCard,
    Company,
    Role,
    Description,
    Date,
    ReadMoreLink
} from './styleComponents';

export default function ExperienceItem({ experience }) {
    return (
        <ExperienceCard>
            <Company>{experience.company}</Company>
            <Role>{experience.role}</Role>
            <Description>{experience.experience}</Description>
            <Date>Date: {experience.date}</Date>
            <ReadMoreLink to={`/experience/${experience.id}`}>
                Read More
            </ReadMoreLink>
        </ExperienceCard>
    );
}
