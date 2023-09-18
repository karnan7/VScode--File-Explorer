import React, { useState } from 'react';
import useFileTree from '../hooks/useFileTree';

const Folder = ({explorer}) => {
  const[expand, setExpand] = useState(false);
  const[showInput, setShowInput] = useState({
    visible: false,
    folder: null
  });

  const handleAdd = (e,isFolder) => {
    e.stopPropagation();
    setExpand(true);
    setShowInput({
      visible: true,
      folder:isFolder
    })
  }

  const handleInput = (e) => {
    if(e.keyCode ===13 && e.target.value){
      setShowInput({...showInput, visible:false})
    }
  }

  if(explorer.isFolder){
    return (
      <div>
        <div 
        className='folder'
        onClick={() => setExpand(!expand)}>
          <span>📁 {explorer.name}</span>
          <div>
            <button onClick={(e) => handleAdd(e, true)}>📁➕</button>
            <button onClick={(e) => handleAdd(e, false)}>📄➕</button>
          </div>
        </div>

        {showInput.visible && (
          <div className='nested'>
            <span>{showInput.folder ? "📁" : "📄"}</span>
            <input
            type='text'
            autoFocus
            className='input'
            onKeyDown={handleInput}
            onBlur={(e) => setShowInput({...showInput, visible:false})}/>
          </div>
        )}
        {expand && (
          <div className="nested" >
            {explorer.items.map((exp) => {
              return <Folder key={exp.id} explorer={exp}/>
            })}
          </div>
        )}
      </div>
    )
  }else{
    return(
      <div className='file'>
        <span>📄{explorer.name}</span>
      </div>
    )
  }

}

export default Folder;