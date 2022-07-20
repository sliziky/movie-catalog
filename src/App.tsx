import { styled } from '@mui/system';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import MoviePage from './pages/MoviePage';

const MainContainer = styled('div')({
  height: "100%"
})

function App() {
  return (
    <MainContainer>
      <Navbar/>
      <Routes>
        <Route path="" element={<HomePage/>}/>
        <Route path="/movie/:id" element={<MoviePage/>}/>
        {/* <span>Hey</span> */}
      </Routes>
    </MainContainer>
  );
}

export default App;
