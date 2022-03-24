import { useState } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { Container, GlobalStyle } from './components/styles/StyleGeral';
import { theme } from './constants/theme';
import RouteComponent from './routes/RouteComponent';
import Header from './components/Header';
import { BrowserRouter } from 'react-router-dom';

function App() {
  const token = localStorage.getItem("token")
  const [textButton, setTextButton] = useState(token?"Logout":"Login")
  const [infoPost, setInfoPost] = useState({})
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <GlobalStyle />
        <BrowserRouter>
          <Header textButton={textButton} setTextButton={setTextButton} />
          <RouteComponent infoPost={infoPost} setInfoPost={setInfoPost} setTextButton={setTextButton} />
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}

export default App;
