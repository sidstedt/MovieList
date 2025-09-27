import { useState } from 'react'

export default function SearchField({ onSearch}) {
const [title, setTitle] = useState('')
const [year, setYear] = useState('')

function submit(e) {
e.preventDefault()
onSearch({ title: title.trim(), year: year.trim() })
}

return (
<form onSubmit={submit} style={{ display: 'flex', gap: 8, margin: '16px 0' }}>
<input value={title} onChange={e => setTitle(e.target.value)} placeholder="Sök titel..." aria-label="title" />
<input value={year} onChange={e => setYear(e.target.value)} placeholder="År (valfritt)" aria-label="year" style={{ width: 120 }} />
<button type="submit">Sök</button>
</form>
)
}