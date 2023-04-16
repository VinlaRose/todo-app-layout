
import './others/App.css';
import { NavLink, Route, Routes} from 'react-router-dom';
import {Home} from './Home'
import { Done } from './Done';
import { NotDone } from './notDone';


function App() {
  return (
    <div className="App">
     <h1>To do app</h1>
     <nav >
      <NavLink style={{ margin: '20px' }}  to = "/">Summary</NavLink>
      <NavLink style={{ margin: '20px' }}  to = "/done">Done</NavLink>
      <NavLink style={{ margin: '20px' }}  to = "/notdone">Not Done</NavLink>
      {/* <NavLink to = "/details">Details</NavLink> */}
     </nav>

     <Routes>
      <Route path = "/" element = {<Home/>}/>
      <Route path = "/done" element = {<Done/>}/>
      <Route path = "/notdone" element = {<NotDone/>}/>
      {/* <Route path = "/" element = {<Home/>}/> */}
     </Routes>
    </div>
  );
}

export default App;
