import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

const JobDetail = () => {
  const [job, setJob] = useState();
  const [jobInfo, setJobInfo] = useState({ jobId: '' });
  const navigate = useNavigate();
  const { jobId } = useParams();

  useEffect(() => {
    async function getJobDetail() {
      const res = await fetch('http://localhost:3000/jobs?_id=' + jobId);
      if (!res.ok) {
        throw new Error(`HTTP Error ${res.status} not found`);
      }
      const resData = await res.json();
      const data = await resData;
      console.log(data);
      setJob(data);
    }
    getJobDetail();
  }, []);

  // const operation () => {
  //   navigate('/jobapply')
  //   return job.map((j) => {
  //     console.log(j)
  //     setJob(j._id)
  //   })
  // }

  const renderJobDetail = () => {
    return job.map((j) => {
      return (
        <JobDetailDiv>
          <JobAttributes>
            <div>
              <h3>{j.title}</h3>
            </div>
            <div>
              {' '}
              <p className='font-colror'>{j.cmpname}</p>
              <p>{j.cmplocation}</p>
            </div>
            <div>
              <Link to={`/jobapply/${jobId}`}>
                <ApplyButton>Apply Now</ApplyButton>
              </Link>
            </div>
          </JobAttributes>
          <br />
          <JobDetails>
            <div>
              <h3>Job Details</h3>
            </div>
            <div>
              <b>
                <p>Salary</p>
              </b>
              <p>
                {' '}
                {j.salRange.minSal} - {j.salRange.maxSal} Rs
              </p>
            </div>
            <div>
              <b>
                <p>Job Type</p>
              </b>
              <p>{j.jobType}</p>
            </div>
          </JobDetails>
          <br />
          <FullJobDesc>
            <h3>Full Job Description</h3>
            <FullJobDescSubDiv>
              <div id='job-desc'>{j.jobDesc}</div>
            </FullJobDescSubDiv>
          </FullJobDesc>
        </JobDetailDiv>
      );
    });
  };

  return (
    <div id='job-detail'>
      <BackButtonDiv>
        <div>
          <img
            src='/assets/back arrow.png'
            onClick={() => navigate('/jobs')}
          ></img>
        </div>
        <div id='go-back'>Go Back To Job Searching</div>
      </BackButtonDiv>
      {job && renderJobDetail()}
    </div>
  );
};

export default JobDetail;

// STYLED CSS

const JobDetailDiv = styled.div`
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 10px;
  margin-bottom: 40px;
  width: 80%;
  padding: 10px;
`;

const JobAttributes = styled.div`
  display: grid;
  grid-template-rows: 20px 60px 30px;
  row-gap: 5px;
  border-bottom: 1px solid grey;
  padding: 10px;
`;

const ApplyButton = styled.button`
  background-color: blue;
  color: white;
  padding: 8px;
  width: 140px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
`;

const JobDetails = styled.div`
  display: grid;
  grid-template-rows: 30px 50px 50px;
  rows-gap: 10px;
  border-bottom: 1px solid grey;
  padding: 10px;
`;

const FullJobDesc = styled.div`
  display: grid;
  grid-template-rows: 30px auto;
  padding: 10px;
  text-align: justify;
`;

const FullJobDescSubDiv = styled.div`
  height: 500px;
  word-break: break-word;
  box-shadow: rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset;
`;

const BackButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 8px;
  cursor: pointer;
`;
