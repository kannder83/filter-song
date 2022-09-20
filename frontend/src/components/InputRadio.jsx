import React from 'react'


const InputRadio = ({ searchOption, setSearchOption }) => {

    const selectOptionSearch = (event) => {
        setSearchOption(event.target.value)
    }

    return (
        <div className='space-x-2 flex justify-center items-center'>
            <input className='cursor-pointer' type="radio" value="title" name="one" id="one" onChange={selectOptionSearch} checked={searchOption == "title" ? true : false} />
            <label htmlFor="one" className='cursor-pointer hover:text-gray-600'>Title</label>
            <input className='cursor-pointer' type="radio" value="artist" name="two" id="two" onChange={selectOptionSearch} checked={searchOption == "artist" ? true : false} />
            <label htmlFor="two" className='cursor-pointer hover:text-gray-600'>Artist</label>
            <input className='cursor-pointer' type="radio" value="genre" name="three" id="three" onChange={selectOptionSearch} checked={searchOption == "genre" ? true : false} />
            <label htmlFor="three" className='cursor-pointer hover:text-gray-600'>Genre</label>
        </div>
    )
}

export { InputRadio }