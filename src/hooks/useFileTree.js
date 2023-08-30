import React from 'react'

const useFileTree = () => {

  const insertNode = (folderId, tree, item, isFolder) => {
    if(tree.id === folderId && isFolder) {
      tree.items.unshift({
        name: item,
        isFolder,
        items: [],
      })
    }
  };

  return (
    <div>useFileTree</div>
  )
}

export default useFileTree;