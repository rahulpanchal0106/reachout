"use client"
import Image from "next/image";
import Nav from "../components/Nav";
// import logo from '../assets/logo-nobg.png';
import bg from "../assets/bg-grid-77.svg"
import blob from '../assets/bbblurry(1).svg'
// import { ArrowRightAlt, ForkRight, NextPlan, RampRight } from "@mui/icons-material"
import pointer from '../assets/pointer-blue.png'
import { LinkedIn } from "@mui/icons-material";


export default function Home() {
  return (
    <div style={{
      backgroundImage: `url(${bg.src})`,
      backgroundSize: 'fit',
      backgroundPosition: 'center',
    }} className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* <img src={bg.src} alt="" className="fixed top-0  z-10" /> */}
      <Nav/>
      <main className="flex flex-col row-start-2 items-center sm:items-start w-full relative">
        {/* <img src={logo.src} alt="Next.js logo" width={180} height={38} priority/> */}

        <div className="flex flex-col sm:text-8xl text-6xl text-center w-full justify-center items-center">
          <Image src={blob} alt="" id="spotlight-blue" className="absolute z-10" />
          <h1 className="flex flex-row  mb-4">Focus on Prepping, </h1>
          <h1 className="flex flex-row  mb-4">We do the Applying. </h1>
          
          
          {/* <h3 className="text-6xl">You get a Job!</h3> */}
          <h6 className="text-xl sm:text-2xl text-gray-500">You get ready for interviews, while we take care of the rest.</h6>
          <div className="flex flex-row items-right justify-center text-xl pt-10 w-full px-5">
            <a id="nextButton" style={{
              borderColor:"#666666",
              cursor:'pointer'
            }} className="flex flex-row z-10 border gap-2 hover:gap-4 hover:drop-shadow-glow px-5 border-solid py-1 rounded-full justify-between items-center ">
              
              {/* <ArrowRightAlt id="rightArrow"/> */}
              <Image
                // aria-hidden
                src={pointer}
                className="pointer"
                alt="Window icon"
                width={16}
                height={16}
              />
              Initiate Free Service
            </a>
          </div>
        </div>
        <div className="flex flex-col text-center w-full">
          {/* <h1 className="" >
            We provide an AI powered automation tool, that Finds and then Applies to the latest jobs aligning with your profile and skill-set.
          </h1> */}
        </div>

      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center z-10">
        <a
          className="flex items-center gap-2 hover:gap-3 hover:underline hover:underline-offset-4"
          href="https://drive.google.com/file/d/1ZJt3KyRYeWOfHS6U2_9oD-sdJUCIgvEv/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Privacy Policy
        </a>
        <a
          className="flex items-center gap-2 hover:gap-3 hover:underline hover:underline-offset-4"
          href="https://www.linkedin.com/in/rahul-panchal-05610824a/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          /> */}
          <LinkedIn className="text-gray-500"/>
          Contact Developer
        </a>
        {/* <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Get Started
        </a> */}
      </footer>
    </div>
  );
}
