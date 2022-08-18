import React from 'react'
import"./Lenguage.css"

const Language = ({languages}) => {
  return (
    <div className='language'>        
        <p>{languages.language}-{languages.splevel}</p>

    </div>
  )
}

export default Language