import {ThemeProvider} from "styled-components";
import GlobalStyle from "../styleGlobal/globalStyles";
import defaultTheme from "../styleGlobal/default";

import Header from "../Components/Header";
import Routers from "../Routers/routers";
import Footer from "../Components/Footer";

import { Container,ContainerContPrincipal } from "./style";


import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <ThemeProvider  theme={defaultTheme}>
            <GlobalStyle/>
                <Container>
                    <Header/>
                  <ContainerContPrincipal>
                    <Routers />
                  </ContainerContPrincipal>
                    <Footer />
                </Container>
          </ThemeProvider>      
      </BrowserRouter>
    </div>
  );
}

export default App;
