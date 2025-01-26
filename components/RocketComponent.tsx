import { RocketIcon } from 'lucide-react'
import React from 'react'

type Props = {}

const RocketComponent = (props: Props) => {
  return (
    <div>
        <RocketIcon size={32} className='fill-red-600' style={{
            transform: 'rotate(-45deg)',
        }} />
    </div>
  )
}

export default RocketComponent