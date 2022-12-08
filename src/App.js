import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Technologies } from './components/Technologies';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';
import { About } from './components/About';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Projects />
      <About />
      <Technologies />
      <Footer />
    </div>
  );
}

export default App;
