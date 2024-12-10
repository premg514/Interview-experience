import React from 'react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa'; 
import {
    ExperienceCard,
    Company,
    Role,
    Description,
    Para,
    Date,
    ReadMoreLink,
    StatusIcon
} from './styleComponents';

export default function ExperienceItem({ experience }) {
    const isSelected = experience.status === 'SELECTED';

    return (
        <ExperienceCard>
            <Company>{experience.company}</Company>
            <Role>{experience.role}</Role>
            <Description>{experience.experience}</Description>
            <Para><strong>Rounds:</strong> {experience.rounds}</Para>
            <Para><strong>Experience in interview:</strong>{experience.details.description}</Para>
            <Para color={isSelected ? 'green' : 'red'}>
                <strong>Status:</strong> {experience.status}
                <StatusIcon>
                    {isSelected ? <FaCheckCircle color="green" /> : <FaTimesCircle color="red" />}
                </StatusIcon>
            </Para>
            <Date>Date: {experience.experienceDate}</Date>
            <ReadMoreLink to={`/experience/${experience.id}`}>
                Read More
            </ReadMoreLink>
        </ExperienceCard>
    );
}
