import React, { useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ExperienceItem from '../ExperienceItem/ExperienceItem';
import FilterSection from '../Filters/Filter';
import interviewExperiences from '../../Data/experience';
import companies from '../../Data/companies';
import { usePaginationContext } from '../../context/PaginationContext';



import { AppContainer, Title, ExperienceList, Button, PaginationContainer, PageNumber, LeftArrow, RightArrow, Container, Heading, CompaniesList, Logo, CompanyCard, CompaniesWrapper } from './styleComponents';

export default function Home() {

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(interviewExperiences);
  const { pageNum, setPageNum, pageSize, setPageSize } = usePaginationContext();

  const handleFilterChange = (filterName, filterValue) => {
    let filtered = interviewExperiences;

    // Apply company filter
    if (filterName === 'company') {
      filtered = filterValue === 'all' ? interviewExperiences : filtered.filter((exp) => exp.company === filterValue);
    }

    // Apply role filter
    if (filterName === 'role') {
      filtered = filterValue === 'all' ? filtered : filtered.filter((exp) => exp.role === filterValue);
    }

    // Apply search term filter


    setFilteredData(filtered);
  };

  const handleSearch = (input) => {
    setSearchTerm(input);
  };


  const sidx = (pageNum - 1) * pageSize;
  const eidx = sidx + pageSize;
  const resultList = filteredData.slice(sidx, eidx);
  const totalPages = Math.ceil(filteredData.length / pageSize);
  let result = resultList;
  if (searchTerm) {
    result = result.filter((exp) => exp.company.toLowerCase().includes(searchTerm.toLowerCase()));
  }
  return (
    <div>
      <Header handleSearch={handleSearch} />
      <AppContainer>
        <Title>Interview Experiences</Title>
        <Container>
          <Heading>Popular companies</Heading>
          <CompaniesList>
            <CompaniesWrapper>
              {[...companies, ...companies, ...companies].map((company, index) => (
                <CompanyCard key={index}>
                  <Logo src={company.logo} alt={`${company.name} logo`} />
                </CompanyCard>
              ))}
            </CompaniesWrapper>
          </CompaniesList>

        </Container>
        <FilterSection onFilterChange={handleFilterChange} />
        <ExperienceList>
          {result.map((experience) => (
            <ExperienceItem key={experience.id} experience={experience} />
          ))}
        </ExperienceList>
        <PaginationContainer>
          <Button disabled={pageNum <= 1} onClick={() => setPageNum(pageNum - 1)}>
            <LeftArrow />
          </Button>
          <PageNumber>{pageNum}</PageNumber>
          <Button disabled={totalPages === pageNum} onClick={() => setPageNum(pageNum + 1)}>
            <RightArrow />
          </Button>
        </PaginationContainer>
      </AppContainer>
      <Footer />
    </div>
  );
}