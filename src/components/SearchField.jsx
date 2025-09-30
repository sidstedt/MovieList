import { useState } from 'react'
import { searchMovies } from '../api/MovieApi'

export default function SearchField({ onSearch}) {
    const [title, setTitle] = useState('')
    const [year, setYear] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!title) return
        const results = await searchMovies(title, year)
        onResults(results)
    }

    return (
        <form onSubmit={handleSubmit} style={{ display: 'flex', gap: 8, margin: '16px 0' }}>
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
            style={{ width: 120 }}
        />
        <button type="submit">Sök</button>
        </form>
    )
}