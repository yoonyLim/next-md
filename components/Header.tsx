import fs from 'fs';
import Link from "next/link";
import DarkmodeSwitch from "./DarkmodeSwitch";

export default function Header() {
    const root = "mdposts/";
    const subjects = fs.readdirSync(root);

    const subLinks = [];

    for (let i = 0; i < subjects.length; i++) {
        subLinks.push(
            <Link 
                href={`/${subjects[i]}`} 
                className='hover:text-gray-500 transition-colors duration-200 ease-in-out'
            >{subjects[i].charAt(0).toUpperCase() + subjects[i].slice(1)}</Link>
        )
    }

    return (
        <header className="sticky top-0 w-full bg-white dark:bg-[#181818]">
            <div className="h-20 px-20 flex items-center justify-between shadow-[0_2px_5px_-1px_rgba(0,0,0,0.16)] dark:shadow-[0_2px_5px_-1px_rgba(0,0,0,1.0)]">
                <div className="flex items-center">
                    <Link 
                        href="/" 
                        className="font-black text-2xl hover:text-gray-500 transition-colors duration-200 ease-in-out"
                    >YOONY'S DEV</Link>
                    <span className="hidden md:inline mx-8 font-light text-2xl select-none">|</span>
                    <div className="hidden md:flex items-center text-xl font-bold">
                        <Link 
                            href="/About"
                            className="hover:text-gray-500 transition-colors duration-200 ease-in-out"
                        >About</Link>
                        <span className="mx-8 text-2xl font-light select-none">|</span>
                        <div className='space-x-4'>{ subLinks }</div>
                    </div>
                </div>
                <DarkmodeSwitch />
            </div>
        </header>
    );
}