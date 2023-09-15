import './App.css';
import Profile from './components/Profile';
import Title from './components/Header';
import Linkset from './components/Links';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title />
        <Profile />
        <p>
          This website is a professional portfolio in progress, built using React. My LinkedIn and resources for learning React are available below. 
        </p>
        <Linkset />
      </header>
    </div>
  );
}

export default App;
