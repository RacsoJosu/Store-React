import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import React from 'react'

function Search() {
  const context = useContext(ShoppingCartContext)

  const handleSearch = () => {
    context?.onSearch()
  }
  return (
    <div className="flex ">
      <input
        type="text"
        value={context?.searchValue}
        onChange={e => {
          context?.setSearchValue(e.target.value)
        }}
        placeholder="Search product"
        className=" outline-none text-center border-[2px] border-slate-300 text-1rem rounded-s-lg h-[2.5rem]  w-[25rem]"
      />
      <button
        onClick={handleSearch}
        className=" flex flex-col items-center justify-center rounded-e-lg transition duration-500 ease-in-out bg-blue-500 hover:bg-blue-800 px-[0.8rem] "
      >
        <MagnifyingGlassIcon height={'1rem'} color="#fff" />
      </button>
    </div>
  )
}

export default Search
