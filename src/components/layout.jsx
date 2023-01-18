import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import './layout.css';

function Layout() {
  const [userStatus, setUserStatus] = useState(false);
  const navigate = useNavigate();

  function NotSignedIn() {
    return (
      <HeaderSubCont2>
        <HeaderSubDiv className='header-sub-div'>
          <HeaderSubDivLink href='' onClick={() => navigate('/postCV')}>
            Submit your CV
          </HeaderSubDivLink>
        </HeaderSubDiv>
        <HeaderSubDiv className='header-sub-div'>
          <HeaderSubDivLink
            id='login-signup'
            href=''
            onClick={() => navigate('/signUp')}
          >
            Sign In
          </HeaderSubDivLink>
          <div>/</div>
          <HeaderSubDivLink
            id='login-signup'
            href=''
            onClick={() => navigate('/logIn')}
          >
            Log In
          </HeaderSubDivLink>
        </HeaderSubDiv>
        <HeaderSubDiv className='header-sub-div'>
          <HeaderSubDivLink href='' onClick={() => navigate('/postJob')}>
            Employer/Post Job
          </HeaderSubDivLink>
        </HeaderSubDiv>
      </HeaderSubCont2>
    );
  }

  function SignedIn() {
    return (
      <HeaderSubCont2>
        <HeaderSubDiv className='header-sub-div'>
          <HeaderSubDivLink className='header-sub-div'>
            <ProfileImg src='./assets/account.png'></ProfileImg>
          </HeaderSubDivLink>
        </HeaderSubDiv>
        <HeaderSubDiv className='header-sub-div'>
          <HeaderSubDivLink href='' onClick={() => navigate('/postCV')}>
            Submit your CV
          </HeaderSubDivLink>
        </HeaderSubDiv>
      </HeaderSubCont2>
    );
  }

  return (
    <div>
      <HeaderContainer>
        <HeaderSubCont1>
          <LogoCont>
            <LogoName>Naukri</LogoName>
            <span>
              <img src='' alt=''></img>
            </span>
          </LogoCont>
          <HeaderSubDiv className='header-sub-div'>
            <HeaderSubDivLink onClick={() => navigate('/')} href=''>
              Home
            </HeaderSubDivLink>
          </HeaderSubDiv>
          <HeaderSubDiv className='header-sub-div'>
            <HeaderSubDivLink href=''>
              Find Jobs
            </HeaderSubDivLink>
          </HeaderSubDiv>
          <HeaderSubDiv className='header-sub-div'>
            <HeaderSubDivLink href=''>Company Reviews</HeaderSubDivLink>
          </HeaderSubDiv>
        </HeaderSubCont1>
        {userStatus ? SignedIn() : NotSignedIn()}
      </HeaderContainer>
      <Main>
        <Outlet />
      </Main>
      <FooterDiv>
        <div>
          <FooterItem>
            <FooterItemSubDiv>
              {' '}
              <FooterImg src='/assets/browse.png'></FooterImg>
            </FooterItemSubDiv>
            <FooterItemSubDiv>
              {' '}
              <FooterLink href=''>Browse Jobs</FooterLink>
            </FooterItemSubDiv>
          </FooterItem>
          <FooterItem>
            <FooterItemSubDiv>
              {' '}
              <FooterImg src='/assets/browse.png'></FooterImg>
            </FooterItemSubDiv>
            <FooterItemSubDiv>
              {' '}
              <FooterLink>Browse Companies</FooterLink>
            </FooterItemSubDiv>
          </FooterItem>
        </div>
        <div>
          <FooterItem>
            <FooterItemSubDiv>
              {' '}
              <FooterImg src='/assets/about.png'></FooterImg>
            </FooterItemSubDiv>
            <FooterItemSubDiv>
              {' '}
              <FooterLink href=''>About</FooterLink>
            </FooterItemSubDiv>
          </FooterItem>
          <FooterItem>
            <FooterItemSubDiv>
              {' '}
              <FooterImg src='/assets/contact.png'></FooterImg>
            </FooterItemSubDiv>
            <FooterItemSubDiv>
              {' '}
              <FooterLink href=''>Contact</FooterLink>
            </FooterItemSubDiv>
          </FooterItem>
        </div>
      </FooterDiv>
    </div>
  );
}

export default Layout;

// Styled CSS
const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid grey;
  background-color: #f0eded;
  @media (max-width: 900px) {
    flex-direction: column;
    text-align: center;
    background-color: #f0eded;
  }
`;

const HeaderSubCont1 = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 900px) {
    flex-direction: column;
    font-size: 20px;
  }
`;
const HeaderSubCont2 = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 900px) {
    flex-direction: column;
    font-size: 20px;
  }
`;

const LogoCont = styled.div`
  padding-top: 18px;
  padding-left: 20px;
  padding-right: 20px;
  width: 150px;
  @media (max-width: 900px) {
    width: 100%;
    text-align: center;
    padding-left: 0;
  }
`;

const LogoName = styled.div`
  font-size: 40px;
`;

const HeaderSubDiv = styled.div`
  display: flex;
  flex-direction: row;
  padding: 40px 12px 20px;
  &: hover {
    background-color: #e0dddd;
    transition: 300ms;
    border-radius: 10px;
  }
`;

const HeaderSubDivLink = styled.a`
  text-decoration: none;
  color: black;
`;

const ProfileImg = styled.img`
  height: 25px;
`;

const Main = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 80vh;
`;

const FooterDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #f0eded;
  margin-top: auto;
  width: 100%;
`;

const FooterItem = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px 100px;
`;

const FooterItemSubDiv = styled.div`
  padding: 3px;
`;

const FooterImg = styled.img`
  height: 20px;
  background-color: white;
`;

const FooterLink = styled.a`
  text-decoration: none;
  margin-top: 5px;
  color: black;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   background-color: #f0eded;
// `;

// const JobHeadingSubDiv = styled.div`
//   padding: 40px;
//   &:hover {
//     border-bottom: 3px solid blue;
//   }
// `;

// const JobBody = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
// `;

// const JobBodySubDiv = styled.div`
//   display: flex;
//   flex-direction: column;
//   padding: 10px;
//   overflow-y: scroll;
//   height: 850px;
//   box-shadow: rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset;
// `;

// const JobDiv = styled.div`
//   cursor: pointer;
//   border: 1px solid grey;
//   width: 450px;
//   padding: 10px;
//   border-radius: 20px;
//   height: 250px;
//   margin-bottom: 15px;
//   @media (min-width: 900px) and (max-width: 1020px) {
//     width: 350px;
//   }

//   @media (min-width: 750px) and (max-width: 900px) {
//     width: 300px;
//     height: 320px;
//   }
//   @media (min-width: 500px) and (max-width: 750px) {
//     width: 250px;
//     height: 320px;
//   }
// `;
// const RecentJobDiv = styled.div`
//   border: 1px solid grey;
//   width: 500px;
//   padding: 10px;
//   border-radius: 20px;
//   @media (min-width: 900px) and (max-width: 1020px) {
//     width: 400px;
//   }
//   @media (min-width: 750px) and (max-width: 900px) {
//     width: 350px;
//   }
//   @media (min-width: 500px) and (max-width: 750px) {
//     width: 300px;
//   }
// `;

// const JobSubDiv = styled.div`
//   display: grid;
//   grid-template-columns: 90% auto;

//   @media (min-width: 500px) and (max-width: 900px) {
//     grid-template-columns: 80% auto;
//   }
// `;
// const JobProperty = styled.div`
//   display: grid;
//   grid-template-columns: 110px 110px;
//   column-gap: 10px;
//   margin-top: 20px;
//   @media (min-width: 500px) and (max-width: 900px) {
//     grid-template-rows: 40px 30px;
//   }
// `;

// const ShortDesc = styled.ul`
//   margin-left: 20px;
// `;

// const JobDate = styled.div`
//   margin-top: 10px;
// `;

// const JobAttributes = styled.div`
//   display: grid;
//   grid-template-rows: 20px 60px 30px;
//   row-gap: 5px;
//   border-bottom: 1px solid grey;
//   padding: 10px;
// `;

// const ApplyButton = styled.button`
//   background-color: blue;
//   color: white;
//   padding: 8px;
//   width: 140px;
//   border-radius: 8px;
//   border: none;
// `;

// const JobDetails = styled.div`
//   display: grid;
//   grid-template-rows: 30px 50px 50px;
//   rows-gap: 10px;
//   border-bottom: 1px solid grey;
//   padding: 10px;
// `;

// const FullJobDesc = styled.div`
//   display: grid;
//   grid-template-rows: 30px auto;
//   padding: 10px;
//   text-align: justify;
// `;

// const FullJobDescSubDiv = styled.div`
//   height: 500px;
//   overflow-y: scroll;
//   box-shadow: rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset;
// `;
