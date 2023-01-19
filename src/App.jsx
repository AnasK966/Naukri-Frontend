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
          <Route path='cmp/dashboard' element={<Jobs />} />
          <Route path='emp/jobDetail/:id' element={<JobDetail />} />
          <Route path='jobapply/:jobId' element={<JobApplication />} />
          <Route path='emp/apply/:id/:id' element={<Submitted />} />
          <Route path='postCV' element={<PostCV />} />
          <Route path='postJob' element={<PostJob />} />
          <Route path='signUp' element={<SignUp />} />
          <Route path='emp/signin' element={<Login />} />
          <Route path='emp/search' element={<SearchResults />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
