import React, { useEffect, useState } from 'react'

type Props = {}

const BoulderComponent = (props: Props) => {
    const [xState, setXState] = useState(0);
    const [yState, setYState] = useState(0);

    useEffect(() => {
      setXState(Math.random() * window.innerWidth);
      setYState(Math.random() * 100);
    }, [])
    

  return (
    <div className='bg-red-600 h-24 w-24 border-black' style={{
        position: 'absolute',
        left: xState,
        top: yState
    }}></div>
  )
}

export default BoulderComponent