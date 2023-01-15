import React, { useState } from 'react';
import styled from 'styled-components';

const PostJob = () => {
  const [JobAttributes, setJobAttributes] = useState({
    title: '',
    advertise: '',
    jobType: '',
    no_of_candidates: '',
    min: '',
    max: '',
    rate: '',
    jobDesc: '',
  });

  let name, value;
  const handleChange = (e) => {
    name = e.target.name;
    value = e.target.value;

    setJobAttributes({ ...JobAttributes, [name]: value });
  };
  return (
    <Main>
      <JobDiv>
        <BasicInfo>
          <div>
            <h1>Provide basic information</h1>
          </div>
          <div>
            <p>
              <b>Country:</b> Pakistan
            </p>
            <p>
              <b>Language:</b> English
            </p>
            <p>
              <b>Company Name:</b> Younus Textile
            </p>
          </div>
          <div>
            <Label>
              <b>Job Title</b>
            </Label>
            <Input
              type='text'
              name='title'
              value={JobAttributes.title}
              onChange={handleChange}
            />
          </div>
          <div>
            <Label>
              <b>Where would you like to advertise this job?</b>
            </Label>
            <Input
              type='text'
              name='advertise'
              value={JobAttributes.advertise}
              onChange={handleChange}
            />
          </div>
        </BasicInfo>
        <Details>
          <div>
            <h1>Include Details</h1>
          </div>
          <div>
            <Label>
              <b>What is the job type?</b>
            </Label>
            <Input
              type='text'
              name='jobType'
              value={JobAttributes.jobType}
              onChange={handleChange}
            />
          </div>
          <div>
            <Label>
              <b>How many people you want to hire for this opening?</b>
            </Label>
            <Input
              type='number'
              name='no_of_candidates'
              value={JobAttributes.no_of_candidates}
              onChange={handleChange}
            />
          </div>
        </Details>
        <Compensation>
          <div>
            <h1>Add compensation</h1>
          </div>
          <Label>
            <b>What is the pay?</b>
          </Label>
          <CompenstaionSubDiv>
            <div>
              <Label>
                <b>Minimum</b>
              </Label>
              <Input
                type='number'
                name='min'
                placeholder='PKR'
                value={JobAttributes.min}
                onChange={handleChange}
              />
            </div>
            <div id='range'>to</div>
            <div>
              <Label>
                <b>Maximum</b>
              </Label>
              <Input
                type='number'
                name='max'
                placeholder='PKR'
                value={JobAttributes.max}
                onChange={handleChange}
              />
            </div>
            <div>
              <Label>
                <b>Rate</b>
              </Label>
              <Select
                name='rate'
                value={JobAttributes.rate}
                onChange={handleChange}
              >
                <option>Per month</option>
                <option>Per year</option>
              </Select>
            </div>
          </CompenstaionSubDiv>
        </Compensation>
        <div>
          <Label>
            <b>Job Description</b>
          </Label>
          <Form action='/'>
            <LabelResume for='upload'>
              <UploadImg src='./assets/upload.png'></UploadImg>
              <b>Upload a PDF or DOCX</b>
            </LabelResume>
            <input
              name='jobDesc'
              id='upload'
              type='file'
              hidden
              value={JobAttributes.jobDesc}
              onChange={handleChange}
            />
            <SubmitButton onClick={() => navigate('/home')}>
              Submit
            </SubmitButton>
          </Form>
        </div>
      </JobDiv>
    </Main>
  );
};

export default PostJob;

// STYLED CSS
const Main = styled.div`
  display: flex;
  justify-content: center;
`;

const JobDiv = styled.div`
  padding: 20px;
  display: grid;
  grid-template-rows: 300px 250px 200px;
  margin-top: 30px;
  width: 80%;
  height: 1000px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 8px;
  margin-bottom: 20px;
`;
const BasicInfo = styled.form`
  display: grid;
  grid-template-rows: 80px repeat(3, 70px);
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;
const Input = styled.input`
  width: 60%;
  height: 24px;
  font-size: 15px;
  padding: 3px;
  outline: none;
  border: none;
  border-bottom: 1px solid grey;
  &:focus {
    outline: none;
    border: none;
    border-bottom: 1px solid rgb(71, 71, 242);
    transition: 800ms;
  }
`;

const Details = styled.form`
  display: grid;
  grid-template-rows: 80px repeat(2, 70px);
`;

const Compensation = styled.div`
  display: grid;
  grid-template-rows: 70px 30px 80px;
`;

const CompenstaionSubDiv = styled.form`
  display: grid;
  grid-template-columns: 250px 25px 250px 200px;
`;

const Select = styled.select`
  height: 30px;
  border-radius: 7px;
  &:focus {
    outline: none;
    border: 1px solid rgb(71, 71, 242);
    transition: 800ms;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;

const Form = styled.form`
  display: grid;
  grid-template-rows: 60px 40px;
  row-gap: 30px;
`;

const LabelResume = styled.label`
  color: blue;
  border: 1px solid grey;
  padding: 0.5rem;
  font-family: sans-serif;
  border-radius: 0.3rem;
  cursor: pointer;
  margin-top: 1rem;
  width: 60%;
`;

const UploadImg = styled.img`
  margin-right: 20px;
  height: 25px;
`;

const SubmitButton = styled.button`
  font-size: 16px;
  color: white;
  background-color: blue;
  border-radius: 10px;
  border: none;
  width: 200px;
  cursor: pointer;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
      rgba(0, 0, 0, 0.23) 0px 6px 6px;
    transition: 300ms;
  }
`;
