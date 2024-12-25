import React from 'react'
import Main from './layout/Main'
import ItemContentProvider from './store/itemContent'

const App = () => {
  return (
   <>
    <ItemContentProvider>
        <Main />
    </ItemContentProvider>
   </>
  )
}

export default App