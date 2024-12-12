import React from 'react';
import interviewExperiences from '../../Data/experience';
import { FilterSectionContainer, FilterLabel, FilterSelect } from './styleComponents';

export default function FilterSection({ onFilterChange, selectedFilters }) {
    const uniqueCompanies = [...new Set(interviewExperiences.map((exp) => exp.company))];
    const uniqueRoles = [...new Set(interviewExperiences.map((exp) => exp.role))];

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        onFilterChange(name, value);
    };

    // Determine if roles exist for the selected company
    const filteredRoles =
        selectedFilters.company === 'all'
            ? uniqueRoles
            : interviewExperiences
                  .filter((exp) => exp.company === selectedFilters.company)
                  .map((exp) => exp.role);

    const isRolesAvailable = filteredRoles.length > 0;

    return (
        <FilterSectionContainer>
            {/* Company Filter */}
            <div>
                <FilterLabel htmlFor="company-filter">Company:</FilterLabel>
                <FilterSelect
                    id="company-filter"
                    name="company"
                    value={selectedFilters.company} // Controlled value
                    onChange={handleFilterChange}
                >
                    <option value="all">All Companies</option>
                    {uniqueCompanies.map((company) => (
                        <option key={company} value={company}>
                            {company}
                        </option>
                    ))}
                </FilterSelect>
            </div>

            {/* Role Filter */}
            <div>
                <FilterLabel htmlFor="role-filter">Role:</FilterLabel>
                <FilterSelect
                    id="role-filter"
                    name="role"
                    value={selectedFilters.role} // Controlled value
                    onChange={handleFilterChange}
                    disabled={!isRolesAvailable} // Disable dropdown if no roles available
                >
                    <option value="all">All Roles</option>
                    {uniqueRoles.map((role) => (
                            <option key={role} value={role}>
                                {role}
                            </option>
                        ))
                    }
                </FilterSelect>
            </div>
        </FilterSectionContainer>
    );
}
