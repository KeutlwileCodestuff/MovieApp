import React from 'react'

function Search({searchTerm , setSearchTerm} ){
  return (
    <div className='search'>
      <div>
        <img src="/src/images/searchicon.png" alt="" />
        <input type='text'
        placeholder='Search for a movie'
        value = {searchTerm}
        onChange={(event => {setSearchTerm(event.target.value)})}/>
      </div>
    </div>
  )
}

export default Search;
