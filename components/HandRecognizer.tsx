import React, { useEffect, useRef } from 'react'

type Props = {
    setHandResults: () => void
}

const HandRecognizer = ({setHandResults}: Props) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    useEffect(() => {
        initVideoAndModel();
    }, [])

    const initVideoAndModel = async () => {
        const videoElement = videoRef.current;
        if(!videoElement) {
            return;
        }

        await initVideo(videoElement);
    }
  return (
    <div>
        <video ref={videoRef}></video>
    </div>
  )
}

export default HandRecognizer

async function initVideo(videoElement: HTMLVideoElement) {
    const stream = await navigator.mediaDevices.getUserMedia({
        video: true
    });
    videoElement.srcObject = stream;
    videoElement.addEventListener("loadeddata", () => {
        videoElement.play();
    })
}
