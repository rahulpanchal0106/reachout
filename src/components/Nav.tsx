import Image from 'next/image';
import logo from '../assets/logo-nobg-blue.png';
import pointer from "../assets/pointer-blue.png"
const Nav = () =>{
    return(
        <header className="flex w-full flex-row row-start-0 items-center justify-between">
            <div>
            <img src={logo.src} alt="Reachout logo" width={130} height={28} priority/>
            </div>
            <div className="flex flex-row w-2/3 items-center justify-evenly z-10">
                <a
                className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
                >
                    <Image
                        // aria-hidden
                        src={pointer}
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
                        src={pointer}
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
                        src={pointer}
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
                        src={pointer}
                        alt="Window icon"
                        width={16}
                        height={16}
                    />
                    Dashboard
                </a>
            </div>
        </header>
    )
}

export default Nav