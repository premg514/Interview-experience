import React from 'react';
import interviewExperiences from '../../Data/data';

import {
    FilterSectionContainer,
    FilterLabel,
    FilterSelect,
    Searcher,
    SearcherDiv,
    SearchIcon
} from './styleComponents';

export default function FilterSection({ onFilterChange, handleSearch }) {
    const uniqueCompanies = [...new Set(interviewExperiences.map((exp) => exp.company))];
    const uniqueRoles = [...new Set(interviewExperiences.map((exp) => exp.role))];

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        onFilterChange(name, value);
    };

    const handleSearchF = (e) => {
        handleSearch(e.target.value);
    };

    return (
        <FilterSectionContainer>
            <SearcherDiv>
                <SearchIcon />
                <Searcher 
                    type='search' 
                    placeholder="Search by company..." 
                    onChange={handleSearchF} 
                />
            </SearcherDiv>

            <div>
                <FilterLabel htmlFor="company-filter">Company:</FilterLabel>
                <FilterSelect id="company-filter" name="company" onChange={handleFilterChange}>
                    <option value="all">All Companies</option>
                    {uniqueCompanies.map((company) => (
                        <option key={company} value={company}>{company}</option>
                    ))}
                </FilterSelect>
            </div>

            <div>
                <FilterLabel htmlFor="role-filter">Role:</FilterLabel>
                <FilterSelect id="role-filter" name="role" onChange={handleFilterChange}>
                    <option value="all">All Roles</option>
                    {uniqueRoles.map((role) => (
                        <option key={role} value={role}>{role}</option>
                    ))}
                </FilterSelect>
            </div>
        </FilterSectionContainer>
    );
}
