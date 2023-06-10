import {ThemeProvider} from "styled-components";
import GlobalStyle from "../styleGlobal/globalStyles";
import defaultTheme from "../styleGlobal/default";

import Header from "../Components/Header";

import { Container,ContainerContPrincipal } from "./style";

import Routers from "../Routers/routers";

import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <ThemeProvider  theme={defaultTheme}>
            <GlobalStyle/>
                <Container>
                  <ContainerContPrincipal>
                    <Header/>
                    <Routers />
                  </ContainerContPrincipal>
                </Container>
          </ThemeProvider>      
      </BrowserRouter>
    </div>
  );
}

export default App;
