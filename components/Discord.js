
import { GrFormClose } from 'react-icons/gr'
import React, { useEffect, useRef } from "react";

import Link from 'next/link'

export default function Discord() {
	const videoEl = useRef(null);
	const attemptPlay = () => {
		videoEl &&
		  videoEl.current &&
		  videoEl.current.play().catch(error => {
			console.error("Error attempting to play", error);
		  });
	  };
	  useEffect(() => {
		attemptPlay();
	  }, []);
    return (
        <div className="max-w-screen-xl mx-auto px-4 py-2 sm:py-6 sm:px-6 lg:py-8 lg:px-8">
			      <div>
				<video
				style={{ maxWidth: "100%", width: "800px", margin: "0 auto" }}
				playsInline
				muted				
				loop
				controls
				alt="All the devices"
				src="/CyberLife.mp4"
				ref={videoEl}
				/>
			</div>
        </div>
    )
}

