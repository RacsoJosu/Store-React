import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { useContext, useState } from 'react'
import { ShoppingCartContext } from '../../Context'

function Search() {
    const context = useContext(ShoppingCartContext);
    const [searchValue, setSearchValue ] = useState("")
    const handleSearch = ()=>{
        const searchedData = context.items.filter((item)=> item.title.toLowerCase().includes(searchValue.toLocaleLowerCase()) || item.category.name.toLowerCase().includes(searchValue.toLocaleLowerCase())   )
        context.setItems([...searchedData])
     

    }
  return (
    <div className="flex ">
        <input type="text" value={searchValue} onChange={(e)=> {
            setSearchValue(e.target.value) 
    
            
            } } placeholder='Search product' className=' outline-none text-center border-[2px] border-slate-300 text-1rem rounded-s-lg h-[2.5rem]  w-[25rem]' />
        <button onClick={handleSearch} className=' flex flex-col items-center justify-center rounded-e-lg transition duration-500 ease-in-out bg-blue-500 hover:bg-blue-800 px-[0.8rem] '><MagnifyingGlassIcon height={"1rem"} color='#fff'/></button>

    </div>
  )
}

export default Search