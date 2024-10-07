import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ProjectList from './components/ProjectList';
import About from './components/About';
import ProjectDetails from './components/ProjectDetails';

const App = () => {
  return (
    <div className="App">
        <Router>
            <Routes>
                <Route path="/" element={
                    <>
                        <Home />
                        <ProjectList />
                        <About />
                    </>
                } />
                <Route path="/project/:id" element={<ProjectDetails />} />
            </Routes>
        </Router>
    </div>
  );
};

export default App;