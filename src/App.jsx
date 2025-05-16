import CorreoEnviadoExitosamente from "./pages/CorreoEnviadoExitosamente/CorreoEnviadoExitosamente";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "./components/Spinner";
import { Suspense, lazy } from "react";

const LayoutEmpresasLazy = lazy(() => import("./pages/LayoutEmpresas"));

const AtlantidaCasaValoresInicioLazy = lazy(() =>
  import(
    "./pages/LayoutEmpresas/AtlantidaCasaValores/AtlantidaCasaValoresInicio/AtlantidaCasaValoresInicio"
  )
);

const AtlantidaCasaValoresServiciosLazy = lazy(() =>
  import(
    "./pages/LayoutEmpresas/AtlantidaCasaValores/AtlantidaCasaValoresServicios/AtlantidaCasaValoresServicios"
  )
);

const AtlantidaCasaValoresFinanciamientoLazy = lazy(() =>
  import(
    "./pages/LayoutEmpresas/AtlantidaCasaValores/AtlantidaCasaValoresFinanciamiento/AtlantidaCasaValoresFinanciamiento"
  )
);

const AtlantidaCasaValoresBursatilesLazy = lazy(() =>
  import(
    "./pages/LayoutEmpresas/AtlantidaCasaValores/AtlantidaCasaValoresBursatiles/AtlantidaCasaValoresBursatiles"
  )
);

const AtlantidaCasaValoresIntermediacionLazy = lazy(() =>
  import(
    "./pages/LayoutEmpresas/AtlantidaCasaValores/AtlantidaCasaValoresIntermediacion/AtlantidaCasaValoresIntermediacion"
  )
);

const AtlantidaCasaValoresContactoLazy = lazy(() =>
  import(
    "./pages/LayoutEmpresas/AtlantidaCasaValores/AtlantidaCasaValoresContacto/AtlantidaCasaValoresContacto"
  )
);

const AtlantidaCasaValoresPublicacionesLazy = lazy(() =>
  import(
    "./pages/LayoutEmpresas/AtlantidaCasaValores/AtlantidaCasaValoresPublicaciones/AtlantidaCasaValoresPublicaciones"
  )
);

const router = createBrowserRouter([
  {
    element: <LayoutEmpresasLazy />,
    children: [
      {
        path: "/",
        element: <AtlantidaCasaValoresInicioLazy />,
      },

      {
        path: "/casa-valores-administracion-portafolios",
        element: <AtlantidaCasaValoresServiciosLazy />,
      },

      {
        path: "/casa-valores-financiamiento",
        element: <AtlantidaCasaValoresFinanciamientoLazy />,
      },

      {
        path: "/casa-valores-bursatiles",
        element: <AtlantidaCasaValoresBursatilesLazy />,
      },

      {
        path: "/casa-valores-transparencia",
        element: <AtlantidaCasaValoresIntermediacionLazy />,
      },

      {
        path: "/casa-valores-publicaciones",
        element: <AtlantidaCasaValoresPublicacionesLazy />,
      },

      {
        path: "/casa-valores-contacto",
        element: <AtlantidaCasaValoresContactoLazy />,
      },

      {
        element: <CorreoEnviadoExitosamente />,
        path: `/correo-enviado-exitosamente`,
      },
    ],
  },
]);

const App = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <ToastContainer
        pauseOnFocusLoss={false}
        hideProgressBar={true}
        position="bottom-center"
        autoClose={1500}
        theme="colored"
        draggable
        stacked
      />
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default App;
