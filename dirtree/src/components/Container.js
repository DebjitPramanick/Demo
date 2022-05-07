import React from 'react'
import FILES from "../utils/files.json"
import Folder from './Folder'
import Search from './Search'

const Container = () => {

    return (
        <div className='container'>
            <h2>Tree Structure</h2>
            <br />
            <Search />
            {FILES.contents.map(f => (
                    <Folder
                        key={f.id}
                        folder={f}
                        contents={f.contents} />
                ))}
        </div>
    )
}

export default Container