import { styled } from '@mui/system';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MoviePage from './pages/MoviePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/Navbar';
import LoginPage from './pages/LoginPage';
import UserDetailsPage from './pages/UserDetailsPage';
import LogoutPage from './pages/LogoutPage';

const MainContainer = styled('div')({
  height: "100%"
})

function App() {
  return (
    <MainContainer>
      <NavigationBar />
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/logout" element={<LogoutPage />} />
        <Route path="/movie/:id" element={<MoviePage />} />
        <Route path="/userDetails" element={<UserDetailsPage />} />
      </Routes>
    </MainContainer>
  );
}

export default App;
