import React, { useEffect, useState } from 'react'
import Image from 'next/image';

type Props = {}

const BoulderComponent = (props: Props) => {
    const [xState, setXState] = useState(0);
    const [yState, setYState] = useState(0);
    const [rotation, setRotation] = useState(0);

    useEffect(() => {
      setXState(Math.random() * (window.innerWidth - 80));
      setYState(Math.random() * 100);
      setRotation(Math.random() * 360);
    }, [])
    

  return (
    <div style={{
        position: 'absolute',
        left: xState,
        top: yState,
        animation: 'moveDown 2s linear forwards'
    }}>
        <Image src={'/met.png'} width={80} height={80} alt={''} style={{
          rotate: `${rotation}deg`
        }}/>
    </div>
  )
}

export default BoulderComponent