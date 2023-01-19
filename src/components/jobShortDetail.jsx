import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const JobShortDetail = ({
  id,
  title,
  // cmpname,
  // cmplocation,
  // postdate,
  jobType,
  jobDesc,
  // skillReq,
  maxSal,
  minSal,
}) => {
  return (
    <JobDiv>

      <JobSubDiv>
        <div>
          {' '}
          <p id='job-new'>new</p>
          <Link id='job-card-title-link' to={`/emp/jobDetail/${id}`}>
            {' '}
            <h3>{title}</h3>
          </Link>
          <p>yoiunus</p>
          <p>karachi</p>
        </div>
      </JobSubDiv>
      <JobProperty>
        <div id='job-property'>{jobType}</div>
        <div id='job-property'>
          {minSal} - {maxSal} Rs
        </div>
      </JobProperty>
      <ShortDesc>
        <ShortDescLi key={id}>
          <b>Job Description : </b> {jobDesc}
        </ShortDescLi>
      </ShortDesc>
      <JobDate>Post Date</JobDate>
    </JobDiv>
  );
};

export default JobShortDetail;

// SYTLED CSS

const JobDiv = styled.div`
  cursor: pointer;
  border: 1px solid grey;
  width: 90%;
  padding: 10px;
  border-radius: 20px;
  height: 400px;
  margin-bottom: 15px;
  @media (min-width: 900px) and (max-width: 1020px) {
    width: 350px;
  }

  @media (min-width: 750px) and (max-width: 900px) {
    width: 300px;
    height: 320px;
  }
  @media (min-width: 500px) and (max-width: 750px) {
    width: 250px;
    height: 320px;
  }
`;

const JobSubDiv = styled.div`
  display: grid;
  grid-template-columns: 90% auto;

  @media (min-width: 500px) and (max-width: 900px) {
    grid-template-columns: 80% auto;
  }
`;
const JobProperty = styled.div`
  display: grid;
  grid-template-columns: 110px 130px;
  column-gap: 10px;
  margin-top: 20px;
  @media (min-width: 500px) and (max-width: 900px) {
    grid-template-rows: 40px 30px;
  }
`;

const ShortDesc = styled.ul`
  margin-left: 0px;
  margin-top: 20px;
  word-break: break-word;
`;

const ShortDescLi = styled.li`
  display: flex;
  word-wrap: break-word;
  flex-wrap: wrap;
  overflow: hidden;
`;

const JobDate = styled.div`
  margin-top: 10px;
`;
