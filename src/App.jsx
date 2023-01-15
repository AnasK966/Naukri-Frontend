import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout.jsx';
import Home from './components/home.jsx';
import Jobs from './components/Jobs.jsx';
import JobDetail from './components/jobDetail.jsx';
import JobApplication from './components/jobApplication.jsx';
import Submitted from './components/submitted.jsx';
import PostCV from './components/postCV.jsx';
import PostJob from './components/postJob.jsx';
import SignUp from './components/SignUp.jsx';
import Login from './components/Login.jsx';
import React, { useEffect } from 'react';
import axios from 'axios';
import SearchResults from './components/searchResults.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='jobs' element={<Jobs />} />
          <Route path='jobDetails/:jobId' element={<JobDetail />} />
          <Route path='jobapply/:jobId' element={<JobApplication />} />
          <Route path='submitted' element={<Submitted />} />
          <Route path='postCV' element={<PostCV />} />
          <Route path='postJob' element={<PostJob />} />
          <Route path='signUp' element={<SignUp />} />
          <Route path='logIn' element={<Login />} />
          <Route path='search' element={<SearchResults />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
