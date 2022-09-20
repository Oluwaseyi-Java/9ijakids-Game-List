import React, { useState } from 'react'

const Header = ({ filter, Func, filterFunc }) => {

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

            <div className='Filter'>
                {
                    filter.map((item, index) => {
                        return <p
                            key={index}
                            onClick={() => {
                                filterFunc(item)
                            }}
                        >{item}</p>
                    })
                }            </div>
        </div>
    )
}

export default Header