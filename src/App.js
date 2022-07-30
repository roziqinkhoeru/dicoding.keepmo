import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import FormNote from "./components/FormNote";
import Note from "./components/Note";
import Archive from "./components/Archive";

import "./styles/base/_global.scss";
import "./styles/style.scss";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <main>
        <FormNote />
        <Note />
        <Archive />
      </main>
      <Footer />
    </div>
  );
}

export default App;
