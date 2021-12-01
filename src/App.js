import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Banner from './components/Banner/Banner'
import { GlobalStyle } from './components/styles/GlobalStyle.styles';
import ProjectDetails from './components/MyProjects/ProjectDetails';

function App() {
  return (
    <GlobalStyle>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Banner />} />
          <Route path="/home" element={<Banner />} />
          <Route path="/projects/:id" element={<ProjectDetails/>} />
        </Routes>
      </BrowserRouter>,
    </GlobalStyle>
  );
}

export default App;
