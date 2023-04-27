import './App.css';

import Header from './components/Header/Header'
import Carousel from './components/section-1/Carousel';
import Card from './components/section-1/Card'

function App() {
  return (
    <div className="App">
      <Header/>
      <Carousel/>
      <Card/>
    </div>
  );
}

export default App;
