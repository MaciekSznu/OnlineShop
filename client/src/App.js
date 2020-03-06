import React from 'react';
import MainLayout from './components/layouts/MainLayout/MainLayout';

class App extends React.Component {

  state = {
    products: [],
  }

  componentDidMount() {
    fetch('http://localhost:8000/api/products')
      .then(res => res.json())
      .then(res => {
        this.setState({ products: res });
      });
  }

  render() {
    return (
      <MainLayout>
      <div>
        <ul>
          {this.state.products.map(product => <li key={product.id}>{product.name}</li>)}
        </ul>
      </div>
      </MainLayout>
    );
  }

};

export default App;
