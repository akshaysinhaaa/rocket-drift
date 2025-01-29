import { Divide, Loader, Loader2 } from 'lucide-react';
import React from 'react'

type Props = {
    info: any
}

const GameInfoOverlay = ({ info }: Props) => {
    const { isLoading, isDetected } = info;
  return (
    <div className='absolute z-30 h-screen w-screen flex items-center justify-center'>
        {isLoading && <Loader2 size={80} className='animate-spin' /> }
        {!isLoading && !isDetected && <div className='text-2xl animate-ping font-extrabold'>P A U S E D</div>}
    </div>
  )
}

export default GameInfoOverlay