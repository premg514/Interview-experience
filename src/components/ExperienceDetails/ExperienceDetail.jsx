import React from 'react';
import { useParams } from 'react-router-dom';
import interviewExperiences from '../../Data/data';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './index.css'
export default function ExperienceDetail() {
    const { id } = useParams(); // Extract the id from the URL
    const experience = interviewExperiences.find((exp) => exp.id === parseInt(id)); // Find the matching experience

    if (!experience) {
        return <h2>Experience not found!</h2>;
    }

    return (
        <div>
            <Header />
            <div className="experience-detail">
                <h1>{experience.company}</h1>
                <h3>{experience.role}</h3>
                <p>{experience.experience}</p>
                <p><strong>Date:</strong> {experience.date}</p>
            </div>
            <Footer />
        </div>

    );
}
