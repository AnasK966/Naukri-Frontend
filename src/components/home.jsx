import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Search from './search';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <BodyDiv>
        <div>
          <LandingImg src='./assets/office-image.jpg' alt=''></LandingImg>
        </div>
        <BodySubDiv>
          <MotoDiv>
            <p>Hire or get hired...</p>
          </MotoDiv>
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
      </BodyDiv>
    </div>
  );
};

export default Home;

// STYLED CSS
const LandingImg = styled.img`
  height: 80vh;
  width: 100%;
  padding: 0px;
  margin: 0px;
  opacity: 0.75;
`;

const BodyDiv = styled.div`
  position: relative;
`;

const BodySubDiv = styled.div`
  position: absolute;
  top: 20%;
  left: 20%;

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

const MotoDiv = styled.div`
  font-size: 50px;
  color: white;
  border-radius: 25px;
  padding: 5px;
  text-align: center;
`;

const InputDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 200px;
  padding: 5px;
  width: 100%;

  @media (max-width: 400px) {
    flex-direction: column;
    margin-top: 0px;
  }

  @media (min-width: 400px) and (max-width: 600px) {
    flex-direction: column;
    margin-top: 0px;
  }
  @media (min-width: 600px) and (max-width: 900px) {
    flex-direction: column;
    text-align: center;
    margin-top: 10px;
  }

  @media (min-width: 900px) {
    margin-top: 50px;
  }
`;

const InputField = styled.input`
  margin-left: 10px;
  margin-right: 10px;
  height: 26px;
  width: 300px;
  border-radius: 8px;
  border: none;
  padding: 4px 20px 5px;
  font-size: 15px;

  @media (max-width: 400px) {
    width: 150px;
    margin-top: 10px;
  }

  @media (min-width: 400px) and (max-width: 600px) {
    width: 250px;
    margin-top: 10px;
  }

  @media (min-width: 600px) and (max-width: 900px) {
    margin-top: 10px;
    width: 340px;
  }
  @media (min-width: 900px) and (max-width: 1100px) {
    width: 200px;
  }
  &:focus {
    outline: none;
    border: 1px solid rgb(71, 71, 242);
    transition: 800ms;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px; /* oranges! yey */
  }
`;

const FindButton = styled.button`
  border: 1px solid black;
  color: white;
  background-color: blue;
  padding: 7px 12px 8px;
  width: 100px;
  border-radius: 10px;
  border-color: blue;
  font-size: 15px;
  &: hover {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    transition: 500ms;
    cursor: pointer;
  }

  @media (max-width: 400px) {
    width: 200px;
    margin-top: 10px;
    margin-left: 10px;
  }

  @media (min-width: 400px) and (max-width: 600px) {
    width: 290px;
    margin-top: 10px;
    margin-left: 10px;
  }

  @media (min-width: 600px) and (max-width: 900px) {
    margin-top: 10px;
    width: 380px;
  }
`;

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
