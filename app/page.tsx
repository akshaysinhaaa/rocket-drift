import Image from "next/image";
import HandRecognizer from '@/components/HandRecognizer';

export default function Home() {
  const setHandResults = () => {

  }

  return (
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        {/* //Making a webcam space for the user to see himself while playing the game */}
        <div className="absolute left-3 top-3 z-30">
          <HandRecognizer setHandResults = {setHandResults}/> 
        </div>
      </main>
  );
}


