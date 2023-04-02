import styles from './App.module.scss';
import Advantages from './components/advantages/Advantages';
import { Comments } from './components/comments/Comments';
import { Home } from './components/home/Home';
import Properties from './components/properties/Properties';
import {Footer} from './components/footer/Footer'

function App() {
  return (
    <>
      <Home/>
      <Advantages/>
      <Properties/>
      <Comments/>
      <Footer/>
    </>
  );
}

export default App;
