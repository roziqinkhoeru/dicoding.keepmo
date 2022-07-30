import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import FormNote from "./components/FormNote";
import PublicNote from "./components/PublicNote";
import ArchiveNote from "./components/ArchiveNote";

import "./styles/base/_global.scss";
import "./styles/style.scss";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <main>
        <FormNote />
        <PublicNote />
        <ArchiveNote />
      </main>
      <Footer />
    </div>
  );
}

export default App;
