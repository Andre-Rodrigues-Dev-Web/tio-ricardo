import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from './shared/providers/style';
import { Error, Home, Layout, TioRicardo, GaleriaDeFotos } from "./routes";


function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="sobre-nos" element={<TioRicardo />} />
          <Route path="galeria-de-fotos" element={<GaleriaDeFotos />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
