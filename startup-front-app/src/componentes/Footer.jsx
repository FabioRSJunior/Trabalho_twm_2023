import React from 'react';
import Footer, { Container } from 'react-bootstrap';
import { Navbar, Nav, NavDropdown} from 'react-bootstrap'

const Footere = () => {
    return (
      <footer className="bg-dark text-light text-center p-2">
        <p>
          Desenvolvido por Fabio Romero
          <a
            href="https://github.com/FabioRSJunior/TecnologiasWebMobile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light mx-2"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
              alt="GitHub"
              width="24"
              height="24"
              className="d-inline-block align-text-top"
            />
            GitHub
          </a>
        </p>
      </footer>
    );
  };
  
  export default Footere;



// import React from 'react';
// import Footer, { Container } from 'react-bootstrap';
// import { Navbar, Nav, NavDropdown} from 'react-bootstrap'

// const Footere = () => {
//     return (
//         <>
//         {/* <Container> */}
//                 <nav className="navbar navbar-dark bg-dark" >
//                 <div className="container-fluid">
//                     <a className="navbar-brand" 
//                     href="https://github.com/FabioRSJunior/TecnologiasWebMobile">
//                     <img src="data:image/png;base64,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
//                     " alt="" width="30" height="24" class="d-inline-block align-text-top"></img>                  
//                     .                    Desenvolvido por Fabio Romero
//                     </a>
//                 </div>
//                 </nav>
//         {/* </Container>  */}
//         </>
//      );
// };

// export default Footere; 








