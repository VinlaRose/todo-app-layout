
import './others/App.css';
import { NavLink, Route, Routes} from 'react-router-dom';
import {Home} from './pages/Home'
import { Done } from './pages/Done';

import { NotDoneYet } from './pages/NotDoneYet';
import { Details } from './pages/Details';


function App() {
  return (
    <div className="App">
     <h1>To do app</h1>
     <nav >
      <NavLink style={{ margin: '20px' }}  to = "/">Summary</NavLink>
      <NavLink style={{ margin: '20px' }}  to = "/done">Done</NavLink>
      <NavLink style={{ margin: '20px' }}  to = "/notdoneyet">Not Done</NavLink>

      {/* <NavLink to = "/details">Details</NavLink> */}
     </nav>

     <Routes>
      <Route path = "/" element = {<Home/>}/>
      <Route path = "/done" element = {<Done/>}/>
      <Route path = "/notdoneyet" element = {<NotDoneYet/>}/>

      <Route path = "/todos/:todosID" element = {<Details/>}/>
     </Routes>
    </div>
  );
}

export default App;
