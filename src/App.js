import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Technologies } from './components/Technologies';
import { Projects2 } from './components/Projects2';
import { Footer } from './components/Footer';
import { About2 } from './components/About2';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Projects2 />
      <About2 />
      <Technologies />
      <Footer />
    </div>
  );
}

export default App;
