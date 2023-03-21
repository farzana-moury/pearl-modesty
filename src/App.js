import './App.css';
import Font from './components/extras/Font';
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import Home from './components/home/Home';

function App(props) {
  const subject = props.subject;
  return(
    <Home />
  );
}

export default App;
