import React from 'react'
import { Input } from 'antd'
import '../../styles/navbar.css'

const SearchEateries = ({searchQuery, setSearchQuery}) => {
  return (
    <>
    {/* <Divider>Search</Divider> */}
    <Input
      className='searchBar'
      value={searchQuery}
      placeholder="search by cuisine"
      type="text"
      onChange={(e) => setSearchQuery(e.target.value.toLocaleLowerCase())}
    />
  </>
  )
}

export default SearchEateries