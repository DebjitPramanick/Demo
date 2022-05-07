import React, { useEffect, useRef, useState } from 'react'
import File from './File'

const Folder = ({ folder, contents }) => {

    const contentRef = useRef()
    const [expand, setExpand] = useState(false)

    useEffect(() => {
        if(contentRef){
            contentRef.current.style.display = 'none'
        }
    }, [contentRef])

    const toggleFolder = () => {
        if(expand === true){
            contentRef.current.style.display = 'none' 
            setExpand(false)
        } else {
            contentRef.current.style.display = 'block' 
            setExpand(true)
        }
    }

    return (
        <div className='folder'>
            <div className='main' onClick={toggleFolder}>
                <img src="https://img.icons8.com/ios-glyphs/24/000000/folder-invoices--v1.png" alt=""/>
                <p className='folder-name'>{folder.name}</p>
            </div>
            <div className='content' ref={contentRef}>
                {contents.map(content => {
                    if (content.type === 'file') {
                        return <File key={content.name} file={content} />
                    }
                    return (
                        <div className='sub-folder'>
                            <Folder
                                key={content.id}
                                folder={content}
                                contents={content.contents} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Folder