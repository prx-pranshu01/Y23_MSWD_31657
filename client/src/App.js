import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Courses from './Components/Courses';
import Student from './Components/Student';
import Faculty from './Components/Faculty';

function App() {
  return (
    <div className="App">
      
      <Header/>
      <Courses/>
      <Student/>
      <Faculty/>

    </div>
  );
}

export default App;
