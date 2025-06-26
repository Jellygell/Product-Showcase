import { useState, useEffect } from 'react'

export default function FavoriteButton({ productId }) {
  const [isFavorite, setIsFavorite] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const favorites = JSON.parse(localStorage.getItem('favorites') || '[]')
      setIsFavorite(favorites.includes(productId))
    }
  }, [productId])

  const toggleFavorite = () => {
    if (typeof window !== 'undefined') {
      const favorites = JSON.parse(localStorage.getItem('favorites') || '[]')
      let updatedFavorites

      if (favorites.includes(productId)) {
        updatedFavorites = favorites.filter(id => id !== productId)
      } else {
        updatedFavorites = [...favorites, productId]
      }

      localStorage.setItem('favorites', JSON.stringify(updatedFavorites))
      setIsFavorite(!isFavorite)
    }
  }

  return (
    <button
      onClick={toggleFavorite}
      className={`btn-favorite ${isFavorite ? 'active' : ''}`}
    >
      {isFavorite ? '❤️ Remove from Favorites' : '🤍 Add to Favorites'}
    </button>
  )
}