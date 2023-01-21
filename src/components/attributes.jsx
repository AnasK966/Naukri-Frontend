import { React, useState } from "react";
import styled from "styled-components";

const JobAttributes = () => {
  const [userEmployer, setEmployer] = useState({
    education: "",
    skills: [],
    work_exp: {},
    certificates: [],
  });

  const handleEmployerSubmit = () => {
    console.log(".");
  };
  const handleEmployerChange = () => {
    console.log(".");
  };

  const employerErrors = {
    fname: userEmployer.firstName.length === 0,
    lname: userEmployer.lastName.length === 0,
    email: userEmployer.email.length === 0,
    password: userEmployer.hash_password.length === 0,
    phone: userEmployer.ph_no.length === 0,
    country: userEmployer.country.length === 0,
    city: userEmployer.city.length === 0,
  };

  return (
    <DetailsDiv>
      <EmployerDetails onSubmit={handleEmployerSubmit}>
        <div>
          <h1>Provide Details...</h1>
        </div>
        <div>
          <Label>
            <b>Education</b>
          </Label>
          <Input
            type="text"
            name="education"
            value={userEmployer.education}
            onChange={handleEmployerChange}
            invalid={employerErrors["cmpname"]}
          />
        </div>
        <div>
          <Label>
            <b>Email</b>
          </Label>
          <Input
            type="email"
            name="email"
            value={userEmployer.email}
            onChange={handleEmployerChange}
            invalid={employerErrors["email"]}
          />
        </div>
        <div>
          <Label>
            <b>Password</b>
          </Label>
          <Input
            type="password"
            name="hash_password"
            value={userEmployer.hash_password}
            onChange={handleEmployerChange}
            invalid={employerErrors["password"]}
          />
        </div>
        <div>
          <Label>
            <b>Phone Number</b>
          </Label>
          <Input
            type="number"
            name="ph_no"
            value={userEmployer.ph_no}
            onChange={handleEmployerChange}
            invalid={employerErrors["phone"]}
          />
        </div>
        <div>
          <Label>
            <b>Country</b>
          </Label>
          <Input
            type="text"
            name="country"
            value={userEmployer.country}
            onChange={handleEmployerChange}
            invalid={employerErrors["country"]}
          />
        </div>
        <div>
          <Label>
            <b>City</b>
          </Label>
          <Input
            type="text"
            name="city"
            value={userEmployer.city}
            onChange={handleEmployerChange}
            invalid={employerErrors["city"]}
          />
        </div>
        <SubmitButton>Submit</SubmitButton>
      </EmployerDetails>
    </DetailsDiv>
  );
};

export default JobAttributes;

// STYLED CSS
const DetailsDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const EmployerDetails = styled.form`
  display: grid;
  grid-template-rows: repeat(8, 70px) 50px;
  width: 45%;
  margin-top: 40px;
  margin-bottom: 40px;
  padding: 60px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;
const Input = styled.input`
  width: 100%;
  height: 24px;
  font-size: 15px;
  outline: none;
  border: none;
  border-bottom: 1px solid ${(props) => (props.invalid ? "red" : "grey")};
  &:focus {
    outline: none;
    border: none;
    border-bottom: 1px solid rgb(71, 71, 242);
    transition: 800ms;
  }
`;

const SubmitButton = styled.button`
  font-size: 16px;
  color: white;
  background-color: ${(props) => (props.disabled ? "grey" : "blue")};
  border-radius: 10px;
  border: none;
  width: 180px;
  height: 50px;
  cursor: ${(props) => (props.disabled ? "" : "pointer")};
  &:hover {
    box-shadow: ${(props) =>
      props.disabled
        ? ""
        : "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"};
    transition: 300ms;
  }
`;
