import React from "react";
import { Helmet } from "react-helmet";
import Inicio from "./screens/Inicio";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Serviços from "./pages/Serviços";
import Projetos from "./pages/Projetos";
import Tecnologias from "./pages/Tecnologias";

function App() {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Maven+Pro:wght@400;600;800&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Inicio />
    </>
    /*<BrowserRouter>
              <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/serviços" element={<Serviços />} />
                <Route path="/projetos" element={<Projetos />} />
                <Route path="/tecnologias" element={<Tecnologias />} />
              </Routes>
    </BrowserRouter>*/
  );
}

export default App;
