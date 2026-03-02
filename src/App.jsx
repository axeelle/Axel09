import Navigationbar from './components/navigationbar';
import blackbackground from '../src/assets/blackbg.jpg';
import Home from './routes/home';
import Service from './routes/service';
import AboutMe from './routes/aboutme';
import Portfolio from './routes/portfolio';
import ContactMe from './routes/contactme';

import { Routes, Route } from 'react-router';

function App() {
  return ( 
    <>    
      <div className="flex flex-col h-screen bg-cover w-full" style={{ backgroundImage: `url(${blackbackground})` }}>
        <Navigationbar/>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/Service' element={<Service />}/>
          <Route path='/AboutMe' element={<AboutMe />}/>
          <Route path='/Portfolio' element={<Portfolio />}/>
          <Route path='/ContactMe' element={<ContactMe />}/>
        </Routes>
      </div>
    </>

  );
}

export default App;
