import Home from './routes/home/home.component';

import { Routes, Route, Outlet } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      <div>
        <h1>I am the nav bar</h1>
      </div>
      <Outlet/>
    </div>
  )
}

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
