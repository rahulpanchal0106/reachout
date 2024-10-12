import Image from 'next/image';
import logo from '../assets/logo-nobg-blue.png';
import pointer from "../assets/pointer-blue.png"
import { useEffect, useState } from 'react';

const Nav = () =>{
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isWide, setIsWide] = useState(false);
    useEffect(() => {
        if((window) && window.innerWidth>=950){
            setIsWide(true);
        }
    }, []);
    return(
        <header className="flex w-full flex-row row-start-0 items-center justify-between">
            <div>
                <Image src={logo} alt="Reachout logo" width={isWide?130:100}/>
            </div>

            {
                isWide?
                <div className="flex flex-row w-2/3 items-center justify-evenly z-10">
                    <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                        <Image
                            // aria-hidden
                            src={pointer} className="pointer"
                            alt="Window icon"
                            width={16}
                            height={16}
                        />
                        Jobs Database
                    </a>
                    <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                        <Image
                            // aria-hidden
                            src={pointer} className="pointer"
                            alt="Window icon"
                            width={16}
                            height={16}
                        />
                        Your Resume
                    </a>
                    <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                        <Image
                            // aria-hidden
                            src={pointer} className="pointer"
                            alt=""
                            width={16}
                            height={16}
                        />
                        Log Out
                    </a>
                    <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                        <Image
                            // aria-hidden
                            src={pointer} className="pointer"
                            alt="Window icon"
                            width={16}
                            height={16}
                        />
                        Dashboard
                    </a>
                </div>
                :
                <div className="flex flex-row w-1/3 items-center justify-end z-10">
                    <button onClick={() => setMenuOpen(!isMenuOpen)}>
                        <Image
                            // aria-hidden
                            src={pointer} className="pointer"
                            alt="Menu icon"
                            width={16}
                            height={16}
                        />
                    </button>
                </div>
            }
            {isMenuOpen && (
                <div className="flex flex-col w-full items-center justify-center z-10">
                    <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                        <Image
                            // aria-hidden
                            src={pointer} className="pointer"
                            alt="Window icon"
                            width={16}
                            height={16}
                        />
                        Jobs Database
                    </a>
                    <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                        <Image
                            // aria-hidden
                            src={pointer} className="pointer"
                            alt="Window icon"
                            width={16}
                            height={16}
                        />
                        Your Resume
                    </a>
                    <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                        <Image
                            // aria-hidden
                            src={pointer} className="pointer"
                            alt=""
                            width={16}
                            height={16}
                        />
                        Log Out
                    </a>
                    <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                        <Image
                            // aria-hidden
                            src={pointer} className="pointer"
                            alt="Window icon"
                            width={16}
                            height={16}
                        />
                        Dashboard
                    </a>
                </div>
            )}
        </header>
    )
}

export default Nav