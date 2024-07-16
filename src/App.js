import { useEffect, useState } from 'react';
import Layout from './layout.jsx';
import Navbar from './navbar/index.jsx';
import ProductList from './productList';
import SearchForm from './searchForm/index.jsx';
import './App.css';

const App = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://api.example.com/products');
        const data = await response.json();
        setProducts(data.products);
        setFilteredProducts(data.products);
      } catch (error) {
        console.error('Error fetching products:', error);
        setProducts([]);
        setFilteredProducts([]);
      }
    };

    fetchProducts();
  }, []);

  const handleSearch = (searchTerm) => {
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <Layout>
      <Navbar />
      <SearchForm handleSearch={handleSearch} />
      <ProductList products={filteredProducts} />
    </Layout>
  );
};

export default App;
