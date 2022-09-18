import React, { useState } from 'react'

const Header = ({ Func }) => {

    const [searchValue, setSearchValue] = useState("")

    return (
        <div className='Header'>
            <form onSubmit={(e) => {
                e.preventDefault();
                Func(searchValue)
            }}>
                <input type="text"
                    placeholder='Search here....'
                    value={searchValue}
                    name="search"
                    onChange={(e) =>
                        setSearchValue(e.target.value)
                    }
                />
                <button>Search</button>
            </form>
        </div>
    )
}

export default Header