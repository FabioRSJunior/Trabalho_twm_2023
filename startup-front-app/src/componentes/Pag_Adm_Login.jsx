import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // realizar login
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Senha:', password);
  };

  return (
    <Container fluid className="vh-100 d-flex align-items-center justify-content-center">
      <div className="p-4 border rounded shadow-sm" style={{ maxWidth: '400px', width: '100%' }}>
        <div className="text-center mb-4">
          <img src="./images_estaticas/4.png"
            alt="Logo da Startup view login"
            className="img-fluid mx-auto d-block max-img-size"
          ></img>
        </div>
        

        <h1 className="text-center mb-4">Login</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail" className="mb-3">
            <Form.Label>E-mail:</Form.Label>
            <Form.Control
              type="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={handleEmailChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword" className="mb-3">
            <Form.Label>Senha:</Form.Label>
            <Form.Control
              type="password"
              placeholder="Digite sua senha"
              value={password}
              onChange={handlePasswordChange}
            />
          </Form.Group>

          <div className="text-center">
            <a href="http://localhost:3000/pagadm" className="btn btn-primary">
              Login
            </a>
          </div>
        </Form>
      </div>
    </Container>
  );
};

//   return (
//     <Container>
//       <h1 className="mt-5">Login</h1>
//       <Form onSubmit={handleSubmit}>
//         <Form.Group controlId="formBasicEmail" className="mb-3">
//           <Form.Label>E-mail:</Form.Label>
//           <Form.Control
//             type="email"
//             placeholder="Digite seu e-mail"
//             value={email}
//             onChange={handleEmailChange}
//           />
//         </Form.Group>

//         <Form.Group controlId="formBasicPassword" className="mb-3">
//           <Form.Label>Senha:</Form.Label>
//           <Form.Control
//             type="password"
//             placeholder="Digite sua senha"
//             value={password}
//             onChange={handlePasswordChange}
//           />
//         </Form.Group>

//         <a href="http://localhost:3000/pagadm" className="btn btn-primary">
//   Login
// </a>
//       </Form>
//     </Container>
//   );
// };

export default Login;
