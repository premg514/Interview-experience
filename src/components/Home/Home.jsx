import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ExperienceItem from '../ExperienceItem/ExperienceItem';
import FilterSection from '../Filters/Filter';
import interviewExperiences from '../../Data/experience';
import companies from '../../Data/companies';
import { usePaginationContext } from '../../context/PaginationContext';
import { FaArrowCircleUp } from "react-icons/fa";
import { Div,AppContainer, Title, ExperienceList, Button, PaginationContainer, PageNumber, LeftArrow, RightArrow, Container, Heading, CompaniesList, Logo, CompanyCard, ScrollToTopButton, Para, NotFoundDiv } from './styleComponents';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(interviewExperiences);
  const [isFilterFound, setIsFilterFound] = useState(true);
  const [filters, setFilters] = useState({
    company: 'all',
    role: 'all',
  });
  const [availableRoles, setAvailableRoles] = useState([...new Set(interviewExperiences.map((exp) => exp.role))]);

  const { pageNum, setPageNum, pageSize, setPageSize } = usePaginationContext();
  const [isTop, setIsTop] = useState(false);
  const [isTopText, setIsTopText] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const checkScrollPosition = () => {
    if (window.scrollY > 200) {
      setIsTop(true);
    } else {
      setIsTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollPosition);
    return () => {
      window.removeEventListener('scroll', checkScrollPosition);
    };
  }, []);

  const handleFilterChange = (filterName, filterValue) => {
    let filteredData = interviewExperiences;

    if (filterName === 'company') {
      filteredData = filterValue === 'all' ? interviewExperiences : filteredData.filter(exp => exp.company === filterValue);

      setFilters(prevFilters => ({
        ...prevFilters,
        role: 'all', // Reset role filter when company changes
      }));
    }

    if (filterName === 'role') {
      filteredData = filters.company === 'all'
        ? interviewExperiences
        : interviewExperiences.filter(exp => exp.company === filters.company);

      filteredData = filterValue === 'all' ? filteredData : filteredData.filter(exp => exp.role === filterValue);
    }

    setFilters(prevFilters => ({
      ...prevFilters,
      [filterName]: filterValue,
    }));

    setFilteredData(filteredData);
    setIsFilterFound(filteredData.length > 0); // Check if results exist
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
    <Div>
      <Header handleSearch={handleSearch} />
      <AppContainer>
        <Title>Interview Experiences</Title>
        <Container>
          <Heading>Popular companies</Heading>
          <CompaniesList>
            <div className="scroll-content">
              {[...companies, ...companies].map((company, index) => (
                <CompanyCard key={index}>
                  <Logo src={company.logo} alt={`${company.name} logo`} />
                </CompanyCard>
              ))}
            </div>
          </CompaniesList>

        </Container>

        <FilterSection
          onFilterChange={handleFilterChange}
          selectedFilters={filters}

        />
        {result.length > 0 ? (<div> <ExperienceList>
          {
            result.map((experience) => (
              <ExperienceItem key={experience.id} experience={experience} />
            )
            )}
        </ExperienceList>

          <PaginationContainer>
            <Button disabled={pageNum <= 1} onClick={() => setPageNum(pageNum - 1)}>
              <LeftArrow />
            </Button>
            <PageNumber>{pageNum}</PageNumber>
            <Button disabled={totalPages === pageNum} onClick={() => setPageNum(pageNum + 1)}>
              <RightArrow />
            </Button>
          </PaginationContainer></div>) : (
          <NotFoundDiv>
            <Para>No data found for the selected filters. Please adjust your selection.</Para>
            <Button onClick={() => {
              setFilteredData(interviewExperiences)
              setFilters({ company: 'all', role: 'all' })
            }} >Reset filters</Button>
          </NotFoundDiv>
        )}


        {isTop && (
          <ScrollToTopButton onMouseEnter={() => setIsTopText(true)} onMouseLeave={() => setIsTopText(false)} onClick={scrollToTop}>
            <FaArrowCircleUp />
            {isTopText && <p>Move to top</p>}
          </ScrollToTopButton>
        )}
      </AppContainer>
      <Footer />
    </Div>
  );
}
