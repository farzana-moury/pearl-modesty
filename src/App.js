import './App.css';
import Font from './components/extras/Font';
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';

function App(props) {
  const subject = props.subject;
  return (
    <div>
      <Navbar />
      <Header />
    </div>
  );
}

export default App;
