import axios from "axios";
import { Header } from "./Header";
import { ArtistsPage } from "./ArtistsPage";
import { Footer } from "./Footer";

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <div>
      <Header />
      <ArtistsPage />
      <Footer />
    </div>
  );
}

export default App;
