import './App.css';
import { NavLink, useRoutes } from 'react-router-dom'; 
import routes from './routes';

function App() {
  const element = useRoutes(routes);
  return (
    <div className='App'>
      <div className="header">
        <h1>React-Router Demo</h1>
      </div>
      <div className="choice">
        <NavLink className="normal" to='/about'>About</NavLink>
        <br/>
        <NavLink className="normal" to='/home'>Home</NavLink>
      </div>
      <div className="context">
        {element}
      </div>
    </div>
  );
}

export default App;

