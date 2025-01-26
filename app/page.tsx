"use client"

import Image from "next/image";
import HandRecognizer from '@/components/HandRecognizer';
import RocketComponent from "@/components/RocketComponent";
import { useEffect, useState } from "react";

export default function Home() {
  const [rocketLeft, setRocketLeft] = useState(0);
  const [isDetected, setIsDetected] = useState(false);
  const [degrees, setDegrees] = useState(0);

  useEffect(() => {
    setRocketLeft(window.innerWidth / 2);
    
  }, [])
  



  const setHandResults = (result: any) => {

    setIsDetected(result.isDetected);
    setDegrees(result.degrees);

    if(result.degrees && result.degrees !== 0){
      setRocketLeft(prev => {
        const ret =  prev - result.degrees/6;
        if(ret < 20){
          return prev;
        }
        if(ret > window.innerWidth - 52){
          return prev;
        }

        return ret;
      })
    }
  }

  return (
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        {/* //Making a webcam space for the user to see himself while playing the game */}
        <div className="absolute left-3 top-3 z-30 w-24">
          <HandRecognizer setHandResults = {setHandResults}/> 
        </div>
        <div id="rocket-container" style={{
          position: 'absolute',
          left: rocketLeft
        }}>
          <RocketComponent />
        </div>
      </main>
  );
}


