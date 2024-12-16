import axios from "axios";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import { Header } from "./Header";
import { HomePage } from "./HomePage";
import { ArtistsIndexPage } from "./ArtistsIndexPage";
import { ArtistsNewPage } from "./ArtistNewPage";
import { ArtistsShowPage } from "./ArtistsShowPage";
import { Footer } from "./Footer";

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.withCredentials = true;

const router = createBrowserRouter([
  {
    element: (
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    ),
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/artists",
        element: <ArtistsIndexPage />,
        loader: () => axios.get("/artists.json").then((response) => response.data),
      },
      {
        path: "/artists/new",
        element: <ArtistsNewPage />,
      },
      {
        path: "/artists/:id",
        element: <ArtistsShowPage />,
        loader: ({ params }) => axios.get(`/artists/${params.id}.json`).then((response) => response.data),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

// function App() {
//   return (
//     <div>
//       <Header />
//       <ArtistsPage />
//       <Footer />
//     </div>
//   );
// }
