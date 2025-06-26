import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { fetchProductById } from '../../utils/api';
import styles from '../../styles/Home.module.css';

export default function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      const loadProduct = async () => {
        const productData = await fetchProductById(id);
        setProduct(productData);
        setLoading(false);
      };

      loadProduct();
    }
  }, [id]);

  useEffect(() => {
    if (product) {
      const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
      setIsFavorite(favorites.includes(product.id));
    }
  }, [product]);

  const toggleFavorite = () => {
    if (!product) return;
    
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    let newFavorites;
    
    if (isFavorite) {
      newFavorites = favorites.filter(favId => favId !== product.id);
    } else {
      newFavorites = [...favorites, product.id];
    }
    
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
    setIsFavorite(!isFavorite);
  };

  if (loading) {
    return (
      <div className={styles.container}>
        <div className={styles.loading}>Loading product details...</div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className={styles.container}>
        <div className={styles.error}>Product not found</div>
        <Link href="/" className={styles.backLink}>
          ← Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.backLink}>
        ← Back to Home
      </Link>
      
      <div className={styles.productDetail}>
        <div className={styles.productDetailImage}>
          <img src={product.image} alt={product.title} />
        </div>
        
        <div className={styles.productDetailInfo}>
          <h1 className={styles.productDetailTitle}>{product.title}</h1>
          <p className={styles.productDetailCategory}>
            Category: {product.category}
          </p>
          <div className={styles.productDetailRating}>
            ⭐ {product.rating?.rate} ({product.rating?.count} reviews)
          </div>
          <p className={styles.productDetailPrice}>${product.price}</p>
          <p className={styles.productDetailDescription}>
            {product.description}
          </p>
          
          <div className={styles.productDetailActions}>
            <button 
              onClick={toggleFavorite}
              className={`${styles.favoriteBtn} ${styles.favoriteDetailBtn} ${isFavorite ? styles.favoriteActive : ''}`}
            >
              {isFavorite ? '❤️' : '🤍'} {isFavorite ? 'Remove from' : 'Add to'} Favorites
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}