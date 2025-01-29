import { Divide, Loader, Loader2, RocketIcon } from 'lucide-react';
import React from 'react'

type Props = {
    info: any
}

const GameInfoOverlay = ({ info }: Props) => {
    const { isLoading, isDetected, isColliding, distance, livesRemainingState, isGameOver } = info;
    const lives = [];
    for(let i=0; i<livesRemainingState; i++){
        lives.push(<RocketIcon key={i} size={20} className='fill-red-600' />)
    }
  return (
    <div className={`absolute z-30 h-screen w-screen flex items-center justify-center ${isColliding && 'border-[20px] border-red-600'}`}>
        {isLoading && <Loader2 size={80} className='animate-spin' /> }
        {!isLoading && !isDetected && <div className='text-2xl animate-ping font-extrabold'>P A U S E D</div>}
        <div className='fixed top-6 right-6'>{`Distance ${distance}`}</div>
        <div className='fixed top-12 right-6'>{lives}</div>
    </div>
  )
}

export default GameInfoOverlay