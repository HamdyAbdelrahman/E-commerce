import { useState } from "react"
import './style.css'

const SearchForm = ({handleSearch})=>{
    const [searchTerm, setSearchTerm] = useState('');
    const handleSubmit=(e) => {
        e.preventDefault();
        handleSearch(searchTerm)

    }
    return(
        <>
        <form onSubmit={handleSubmit}>
        <input 
        type="text" 
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search..." />
        <button type="submit">Search</button>
        </form>
        </>
    )
}

export default SearchForm;