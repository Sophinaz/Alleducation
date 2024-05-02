import React from 'react'

const Title = ({title, subtitle}) => {
  return (
    <div className=' flex flex-col text-center mt-5 mb-4'>
        <p className=' font-semibold'>{subtitle}</p>
        <h2 className=' text-3xl font-bold'>{title}</h2>
    </div>
  )
}

export default Title