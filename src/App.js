import './App.css';
import Carousel from './components/carousel/carousel';

function App() {
  return (
    <div className="App">
      <div className="project-title">
        <h2>Sample Carousel for <span className="org-name">PayPal</span></h2>
      </div>
      <Carousel></Carousel>
    </div>
  );
}

export default App;
