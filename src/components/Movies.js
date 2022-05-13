import React from 'react'
import InputBox from './InputBox'
import MoviesTable from './MoviesTable'
import Pagenation from './Pagenation'
function Movies() {
  return (
      <div>
     <InputBox></InputBox>
     <MoviesTable></MoviesTable>
     <Pagenation></Pagenation>
    
      </div>
  )
}

export default Movies