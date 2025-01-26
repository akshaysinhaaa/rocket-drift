"use client"

import Image from "next/image";
import HandRecognizer from '@/components/HandRecognizer';
import RocketComponent from "@/components/RocketComponent";
import { useState } from "react";

export default function Home() {
  const [rocketLeft, setRocketLeft] = useState(0);
  const setHandResults = () => {

  }

  return (
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        {/* //Making a webcam space for the user to see himself while playing the game */}
        <div className="absolute left-3 top-3 z-30 w-24">
          <HandRecognizer setHandResults = {setHandResults}/> 
        </div>
        <div id="rocket-container" style={{
          position: 'absolute',
          left: 10,
        }}>
          <RocketComponent />
        </div>
      </main>
  );
}


