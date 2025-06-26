import { useState } from 'react'

export default function SearchBar({ onSearch, searchTerm }) {
  const [localSearchTerm, setLocalSearchTerm] = useState(searchTerm)

  const handleSubmit = (e) => {
    e.preventDefault()
    onSearch(localSearchTerm)
  }

  const handleClear = () => {
    setLocalSearchTerm('')
    onSearch('')
  }

  return (
    <div className="mb-8">
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          placeholder="Search products..."
          value={localSearchTerm}
          onChange={(e) => setLocalSearchTerm(e.target.value)}
          className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button type="submit" className="btn-primary">
          Search
        </button>
        {searchTerm && (
          <button type="button" onClick={handleClear} className="btn-secondary">
            Clear
          </button>
        )}
      </form>
    </div>
  )
}
