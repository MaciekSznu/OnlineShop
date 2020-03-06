import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainLayout from './components/layouts/MainLayout/MainLayout';
import HomePage from './components/pages/Home/HomePage';
import BasketPage from './components/pages/Basket/BasketPage';
import ContactPage from './components/pages/Contact/ContactPage';
import FaqPage from './components/pages/Faq/FaqPage';
import ProductPage from './components/pages/Product/ProductPage';
import RegulaminPage from './components/pages/Regulamin/RegulaminPage';



class App extends React.Component {

  // state = {
  //   products: [],
  // }

  // componentDidMount() {
  //   fetch('http://localhost:8000/api/products')
  //     .then(res => res.json())
  //     .then(res => {
  //       this.setState({ products: res });
  //     });
  // }

  render() {
    return (
      <MainLayout>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/faq" exact component={FaqPage} />
          <Route path="/regulamin" exact component={RegulaminPage} />
          <Route path="/contact" exact component={ContactPage} />
          <Route path="/basket" exact component={BasketPage} />
          <Route path="/products/:id" exact component={ProductPage} />
          {/* <Route component={NotFound} /> */}
        </Switch>


      {/* <div>
        <ul>
          {this.state.products.map(product => <li key={product.id}>{product.name}</li>)}
        </ul>
      </div> */}
      </MainLayout>
    );
  }

};

export default App;
