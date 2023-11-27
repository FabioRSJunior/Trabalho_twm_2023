import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import Login from './Pag_Adm_Login';
import Homepage from './Pag_HomePage';
import Pag_CadastraStartup from './Ṕag_Cadastrastartup';
import Pag_ExibeStartup from './Pag_ExibeStartup';

import Pag_Admin from './Pag_Admin';

// corretas OK 
const Home = () => <Homepage />;
const Cadastro_startup = () => <Pag_CadastraStartup />
const Exibe_startup = () => <Pag_ExibeStartup />

// ADM 
const Login_adm = () => <Login />
const Pag_Admini = () => <Pag_Admin />

const AppNavbar = () => {
  return (
    <Router>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand as={Link} to="/">Start View</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/cadastrostartup">Cadastrar Startups</Nav.Link>
          <Nav.Link as={Link} to="/exibestartup">Exibir Startups</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link as={Link} to="/loginadm" className="ml-auto">Login ADM</Nav.Link>
        </Nav>
      </Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastrostartup" element={<Cadastro_startup />} />
        <Route path="/exibestartup" element={<Exibe_startup />} />
        <Route path="/loginadm" element={<Login_adm />} />
        <Route path="/pagadm" element={<Pag_Admini />} />

      </Routes>
    </Router>
  );
};

export default AppNavbar;
