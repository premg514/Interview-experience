import React from 'react'
import { Link } from 'react-router-dom';
import './index.css'
export default function ExperienceItem({ experience }) {
    return (
        <div className="experience-card">
            <h2 className="company">{experience.company}</h2>
            <h4 className="role">{experience.role}</h4>
            <p className="description">{experience.experience}</p>
            <p className="date">Date: {experience.date}</p>
            <Link to={`/experience/${experience.id}`} className="read-more">
                Read More
            </Link>
        </div>
    )
}
