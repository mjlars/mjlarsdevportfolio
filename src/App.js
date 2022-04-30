import './App.css';
import {ReactComponent as ReactLogo} from './KG.svg';
import './mvbkg.scss';
import Projects from './components/Projects';
import About from './components/About';

function App() {
  return (
    <div className="App">

      <div class="animation-wrapper">
        <div class="particle particle-1"></div>
        <div class="particle particle-2"></div>
        <div class="particle particle-3"></div>
        <div class="particle particle-4"></div>
        <div class="particle particle-11"></div>
        <div class="particle particle-21"></div>
        <div class="particle particle-31"></div>
        <div class="particle particle-41"></div>
      </div>

      <header className="header">

        <nav>
          <p>
            Matt Larson
          </p>
          <div className='a-tag-wrapper'>
          <a href='#Home'>Home</a>
          <a href='#About'>About</a>
          <a href='#Projects'>Projects</a>
          <a href='#Contact'>Contact</a>
          </div>
        </nav>
        
      </header>

      <div id='Home'>
        <div className='logoContainer'>
          <ReactLogo/>
        </div>

        <nav>
          <a href='#About'>About Me<div id='down-pointer'>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div></a>
        </nav>

        
      </div>
      <About/>
      <Projects/>
    </div>
  );
}

export default App;
