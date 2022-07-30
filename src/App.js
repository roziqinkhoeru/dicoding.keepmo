import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import "./styles/style.scss";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <main>
        <h1 className='title'>Title</h1>
      </main>
      <Footer />
    </div>
  );
}

export default App;
