import React, { useState } from 'react';
import interviewExperiences from '../../Data/data';
import './index.css'
export default function FilterSection({ onFilterChange }) {
    // Extract unique company names and roles from the data
    const uniqueCompanies = [...new Set(interviewExperiences.map(exp => exp.company))];
    const uniqueRoles = [...new Set(interviewExperiences.map(exp => exp.role))];

    // Handle filter selection
    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        onFilterChange(name, value);
    };

    return (
        <div className="filter-section">
            {/* Company Filter */}
            <div>
                <label htmlFor="company-filter">Company:</label>
                <select id="company-filter" name="company" onChange={handleFilterChange}>
                    <option value="all">All Companies</option>
                    {uniqueCompanies.map((company) => (
                        <option key={company} value={company}>{company}</option>
                    ))}
                </select>
            </div>
            <div>
                {/* Role Filter */}
                <label htmlFor="role-filter">Role:</label>
                <select id="role-filter" name="role" onChange={handleFilterChange}>
                    <option value="all">All Roles</option>
                    {uniqueRoles.map((role) => (
                        <option key={role} value={role}>{role}</option>
                    ))}
                </select>
            </div>
        </div>
    );
}
