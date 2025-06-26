import { useState, useEffect } from 'react';
import { fetchProducts } from '../utils/api';
import ProductCard from '../components/ProductCard';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      const productsData = await fetchProducts(20);
      setProducts(productsData);
      setFilteredProducts(productsData.slice(0, 5)); // Show first 5 products
      setLoading(false);
    };

    loadProducts();
  }, []);

  useEffect(() => {
    if (searchTerm === '') {
      setFilteredProducts(products.slice(0, 5));
    } else {
      const filtered = products
        .filter(product => 
          product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.category.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .slice(0, 5);
      setFilteredProducts(filtered);
    }
  }, [searchTerm, products]);

  if (loading) {
    return (
      <div className={styles.container}>
        <div className={styles.loading}>Loading products...</div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <h1 className={styles.title}>Product Showcase</h1>
        <p className={styles.description}>
          Discover amazing products from our curated collection
        </p>
        
        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={styles.searchInput}
          />
        </div>
      </div>

      <div className={styles.productsGrid}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <div className={styles.noProducts}>
            No products found matching your search.
          </div>
        )}
      </div>
    </div>
  );
}