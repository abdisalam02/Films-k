import React from "react"
import Icon from '../components/search-icon-white-20.jpg';

export default function SearchBar({searchTerm, onSearchChange, onSearchSubmit }){
    return(
//         <div className="search">
//    <input placeholder="search for movies"/>
//    </div>
<div className="search">
<form onSubmit={onSearchSubmit}>
      <input type="text" placeholder="search for a movie..." value={searchTerm} onChange={onSearchChange}  />
      {/* <img src={Icon} alt="search-icon"/> */}
      <button type="submit" className="button"><img src={Icon} alt="search-icon"/></button>
    </form>
</div>
    )
}