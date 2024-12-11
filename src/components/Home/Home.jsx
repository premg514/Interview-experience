import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ExperienceItem from '../ExperienceItem/ExperienceItem';
import FilterSection from '../Filters/Filter';
import interviewExperiences from '../../Data/experience';
import companies from '../../Data/companies';
import { usePaginationContext } from '../../context/PaginationContext';
import { FaArrowCircleUp } from "react-icons/fa";


import { AppContainer, Title, ExperienceList, Button, PaginationContainer, PageNumber, LeftArrow, RightArrow, Container, Heading, CompaniesList, Logo, CompanyCard, CompaniesWrapper, ScrollToTopButton } from './styleComponents';

export default function Home() {

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(interviewExperiences);
  const { pageNum, setPageNum, pageSize, setPageSize } = usePaginationContext();
  const [isTop, setIsTop] = useState(false);
  const [isTopText, setIsTopText] = useState(false)
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
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
    let filtered = interviewExperiences;

    if (filterName === 'company') {
      filtered = filterValue === 'all' ? interviewExperiences : filtered.filter((exp) => exp.company === filterValue);
    }

    if (filterName === 'role') {
      filtered = filterValue === 'all' ? filtered : filtered.filter((exp) => exp.role === filterValue);
    }
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
        {isTop && <ScrollToTopButton onMouseEnter={()=>setIsTopText(true)} onMouseLeave={()=>setIsTopText(false)} onClick={scrollToTop}>
          <FaArrowCircleUp />
          {isTopText&&<p>Move to top</p>}
        </ScrollToTopButton>}

      </AppContainer>
      <Footer />
    </div>
  );
}