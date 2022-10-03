import Home from './routes/home/home.component';

import { Routes, Route } from 'react-router-dom'

import NavBar from './routes/navbar/navbar.component';



const Booking = () => {
  return <h1>I am the booking page</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<NavBar />} >
        <Route index element={<Home/> } />
        <Route path='booking' element={<Booking/> } />
      </Route>
    </Routes>
    );
};

export default App;
