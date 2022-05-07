import React from 'react'

const File = ({ file }) => {
    return (
        <div className='file'>
            <img src="https://img.icons8.com/material-sharp/24/000000/file.png" alt=""/>
            <p className='file-name'>{file.name}</p>
        </div>
    )
}

export default File