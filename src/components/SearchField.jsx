import { useState } from 'react'
import { searchMovies } from '../api/MovieApi'

export default function SearchField({ onResults}) {
    const [title, setTitle] = useState('')
    const [year, setYear] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!title) return
        const results = await searchMovies(title, year)
        onResults(results)
    }

    return (
        <form onSubmit={handleSubmit} className="search-form">
            <input type="text" 
                value={title} 
                onChange={e => setTitle(e.target.value)} 
                placeholder="Sök titel..." 
                aria-label="title" 
            />
            <input 
                type="text" 
                value={year} 
                onChange={e => setYear(e.target.value)} 
                placeholder="År (valfritt)" 
                aria-label="year" 
            />
            <button type="submit">Sök</button>
        </form>
    )
}