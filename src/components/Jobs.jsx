import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import JobShortDetail from './jobShortDetail';
import { getJobs } from '../fetcher';
import Search from './search';
const Jobs = () => {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState();

  useEffect(() => {
    async function getJobs() {
      const res = await fetch('http://localhost:3000/jobs');
      if (!res.ok) {
        throw new Error(`HTTP Error ${res.status} not found`);
      }
      const resData = await res.json();
      const data = await resData;
      setJobs(data);
    }
    getJobs();
  }, []);

  const renderJobs = () => {
    return jobs.map((j) => {
      return (
        <JobShortDetail
          key={j._id}
          id={j._id}
          title={j.title}
          // cmpname={j.cmpname}
          // cmplocation={j.cmplocation}
          // postdate={j.postdate}
          jobType={j.jobType}
          jobDesc={j.jobDesc}
          // skillReq={j.skillReq}
          maxSal={j.salRange.maxSal}
          minSal={j.salRange.minSal}
        />
      );
    });
  };

  return (
    <div id='overflow'>
      <BodySubDiv>
        <Search />
        <OptionDiv>
          <Option>
            <b>
              <OptionLink href='' onClick={() => navigate('/postCV')}>
                Post your CV
              </OptionLink>
            </b>{' '}
            - It only takes a few seconds
          </Option>
          <Option>
            <b>
              <OptionLink href='' onClick={() => navigate('/postJob')}>
                Employers-Post a job
              </OptionLink>
            </b>{' '}
            - Your next hire might be here
          </Option>
        </OptionDiv>
      </BodySubDiv>
      <JobHeadingDiv>
        <JobHeadingSubDiv>
          <h2>Job Feed</h2>
        </JobHeadingSubDiv>
      </JobHeadingDiv>
      <JobBody>
        <JobBodySubDiv id='job-div'>{jobs && renderJobs()}</JobBodySubDiv>
      </JobBody>
    </div>
  );
};

export default Jobs;

// STYLED CSS

const BodySubDiv = styled.div`
  margin-bottom: 60px;
  @media (max-width: 400px) {
    top: 4%;
  }

  @media (min-width: 400px) and (max-width: 600px) {
    top: 7%;
  }

  @media (min-width: 600px) and (max-width: 900px) {
    top: 15%;
  }

  @media (min-width: 900px) and (max-width: 1100px) {
    left: 17%;
  }
`;

// const InputDiv = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   margin-top: 100px;
//   padding: 5px;
//   width: 100%;

//   @media (max-width: 400px) {
//     flex-direction: column;
//     margin-top: 0px;
//   }

//   @media (min-width: 400px) and (max-width: 600px) {
//     flex-direction: column;
//     margin-top: 0px;
//   }
//   @media (min-width: 600px) and (max-width: 900px) {
//     flex-direction: column;
//     text-align: center;
//     margin-top: 10px;
//   }

//   @media (min-width: 900px) {
//     margin-top: 50px;
//   }
// `;

// const InputField = styled.input`
//   margin-left: 10px;
//   margin-right: 10px;
//   height: 26px;
//   width: 300px;
//   border-radius: 8px;
//   padding: 4px 20px 5px;
//   font-size: 15px;

//   @media (max-width: 400px) {
//     width: 150px;
//     margin-top: 10px;
//   }

//   @media (min-width: 400px) and (max-width: 600px) {
//     width: 250px;
//     margin-top: 10px;
//   }

//   @media (min-width: 600px) and (max-width: 900px) {
//     margin-top: 10px;
//     width: 340px;
//   }
//   @media (min-width: 900px) and (max-width: 1100px) {
//     width: 200px;
//   }
//   &:focus {
//     outline: none;
//     border: 1px solid rgb(71, 71, 242);
//     transition: 800ms;
//     box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
//   }
// `;

// const FindButton = styled.button`
//   border: 1px solid black;
//   color: white;
//   background-color: blue;
//   padding: 7px 12px 8px;
//   width: 100px;
//   border-radius: 10px;
//   border-color: blue;
//   font-size: 15px;
//   &: hover {
//     box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
//     transition: 500ms;
//     cursor: pointer;
//   }

//   @media (max-width: 400px) {
//     width: 200px;
//     margin-top: 10px;
//     margin-left: 10px;
//   }

//   @media (min-width: 400px) and (max-width: 600px) {
//     width: 290px;
//     margin-top: 10px;
//     margin-left: 10px;
//   }

//   @media (min-width: 600px) and (max-width: 900px) {
//     margin-top: 10px;
//     width: 380px;
//   }
// `;

const OptionDiv = styled.div`
  text-align: center;
  color: black;
  margin-top: 20px;
`;

const Option = styled.p`
  padding: 10px;
`;

const OptionLink = styled.a`
  color: blue;
`;

const JobHeadingDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #f0eded;
  border-bottom: 1px solid grey;
`;

const JobHeadingSubDiv = styled.div`
  font-size: 25px;
  padding: 40px;
`;

const JobBody = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const JobBodySubDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  overflow-y: scroll;
  height: 810px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset;
  width: 50%;
`;
