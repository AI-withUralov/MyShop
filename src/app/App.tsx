import React from 'react';
import '../css/app.css';
import { Link, Route, Switch, useLocation } from 'react-router-dom';
import { ProductsPage } from './screens/productsPage';
import { OrdersPage } from './screens/ordersPage';
import { UserPage } from './screens/userPage';
import { HomePage } from './screens/homePage';
import { OtherNavbar } from './components/headers/OtherNavbar';
import { HomeNavbar } from './components/headers/HomeNavbar';
import { Footer } from './components/footers';

function App() {
    const location = useLocation();

    return (
      <>

      {location.pathname === "/" ? <HomeNavbar/> : <OtherNavbar/>}
      <Switch>
        <Route path="/products">
          <ProductsPage />
        </Route>
        <Route path="/orders">
          <OrdersPage />
        </Route>
        <Route path="/member-page">
          <UserPage/>
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
      <Footer/>
    </>
    
    );
    

}

export default App;
