import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';

const ProductCard = ({ product }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setIsFavorite(favorites.includes(product.id));
  }, [product.id]);

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    let newFavorites;
    
    if (isFavorite) {
      newFavorites = favorites.filter(id => id !== product.id);
    } else {
      newFavorites = [...favorites, product.id];
    }
    
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.productCard}>
      <div className={styles.imageContainer}>
        <img 
          src={product.image} 
          alt={product.title}
          className={styles.productImage}
        />
      </div>
      <div className={styles.productInfo}>
        <h3 className={styles.productTitle}>
          {product.title.length > 50 
            ? `${product.title.substring(0, 50)}...` 
            : product.title
          }
        </h3>
        <p className={styles.productPrice}>${product.price}</p>
        <div className={styles.productActions}>
          <Link href={`/products/${product.id}`} className={styles.viewDetailsBtn}>
            View Details
          </Link>
          <button 
            onClick={toggleFavorite}
            className={`${styles.favoriteBtn} ${isFavorite ? styles.favoriteActive : ''}`}
          >
            {isFavorite ? '❤️' : '🤍'} Favorite
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;