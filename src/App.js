
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Skills from './components/Skills';

function App() {
  return (
    <main className=' gap-2 p-2  bg-gray-800 text-blue-100'>
      <Navbar />
      <About />
      <Skills />
      <Contact />
    </main>
  );
}

export default App;
