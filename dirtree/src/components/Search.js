import React, { useState } from 'react'
import FILES from "../utils/files.json"
import File from './File'

const files = []
const getFiles = (contents) => {
    contents.forEach(f => {
        if (f.type === 'file') files.push(f)
        else getFiles(f.contents)
    })
}
getFiles(FILES.contents)

const Search = () => {

    const [query, setQuery] = useState('')

    const handleFilter = (content) => {
        return content.name.toLowerCase().includes(query.toLocaleLowerCase())
    }

    const allFiles = files.filter(handleFilter)

    return (
        <div className='search'>
            <input
                type="search"
                className='search-bar'
                placeholder='Search files'
                onChange={(e) => setQuery(e.target.value)}
                value={query}>
            </input>
            {query !== '' ?
                <>
                    {allFiles.length > 0 ? allFiles.map(file => (
                    <div className='pop-up'>
                        <File key={file.name} file={file} /></div>
                    )) : null}
                </>

                : null
            }
        </div>
    )
}

export default Search