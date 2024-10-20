"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { SignIn, SignOut, useSession, getProviders } from 'next-auth/react';

export const Nav = () => {
    const isUserLoggedIn = true;

    const [providers, setProviders] = useState(null);

    useEffect(() =>{
        const setProviders = async () => {
            const response = await getProviders();
            setProviders(response)


        }
        setProviders();
    }, [])

  return (
    <nav className="flex-between w-full mb-16 pt-3">
        <Link href="/" className="flex gap-2 flex-center">
        <Image
        src="/assets/images/logo.svg"
        alt="Promptopia Logo"
        width={30}
        height={30}
        className="object-contain"
        />
        <p className="sm:flex hidden logo-text"> Propmty</p>
                  
        </Link>
        {/* mobile application */}
        <div className="sm:flex hidden">
        {isUserLoggedIn ? (
            <div className="flex gap-3 md:gap-5">
            <Link href="/create-prompt"
            className="black_btn">
                Create Post
            </Link>
            <button type="button" onClick={SignOut} className="outline_btn">
                Sign Out
            </button>

            <Link href="/profile">
            <Image
                src="/assets/images/profilepicture.png"
                width={37}
                height={37}
                className="rounded-full"
                alt="profile"
                />
            </Link>
         </div> ):(
            <>
                {providers && 
                Object.values(providers).map((provider)
                (
                    <button
                    type="button"
                    key={provider.name}
                    onClick={() => signIn(provider.id)}
                    className="black_btn"
                    >
                    Sign In
                         
                    </button>
                ))}
            </>
        )}

        </div>

    </nav>
  )
}

export default Nav