import React, { useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import interviewExperiences from '../../Data/data';
import ExperienceItem from '../ExperienceItem/ExperienceItem';
import FilterSection from '../Filters/Filter';
import './index.css';

export default function Home() {
  const [filteredData, setFilteredData] = useState(interviewExperiences);

  // Function to handle filter changes
  const handleFilterChange = (filterName, filterValue) => {
    let filtered = interviewExperiences;

    if (filterName === 'company' && filterValue !== 'all') {
      filtered = filtered.filter((exp) => exp.company === filterValue);
    }

    if (filterName === 'role' && filterValue !== 'all') {
      filtered = filtered.filter((exp) => exp.role === filterValue);
    }

    setFilteredData(filtered);
  };

  return (
    <div>
      <Header />
      <div className="app">
        <h1 className="title">Interview Experiences</h1>
        {/* Pass handleFilterChange as a prop */}
        <FilterSection onFilterChange={handleFilterChange} />
        <div className="experience-list">
          {/* Use filteredData instead of original data */}
          {filteredData.map((experience) => (
            <ExperienceItem key={experience.id} experience={experience} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
