
import { BrowserRouter } from 'react-router-dom';
import Navbar from './NavbarCompo/Navbar';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        {/* <Header/> */}
      
      </BrowserRouter>
    </div>
  );
}

export default App;
