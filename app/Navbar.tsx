"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [tourOpen, setTourOpen] = useState(false);

  return (
    <nav className="bg-black text-white px-6 py-4 flex items-center justify-between relative z-50">

      {/* LOGO */}
      <Link href="/">
        <img
          src="/logo.png"
          alt="Dragon Vista Tours"
          className="h-40 md:h-30"
        />
      </Link>

      {/* MENU */}
      <div className="hidden md:flex items-center gap-6 lg:gap-14 text-base lg:text-xl">

        <Link href="/">Home</Link>

        <div className="relative">
          <button
            onClick={() => setTourOpen(!tourOpen)}
          >
            Tours ▼
          </button>

          {tourOpen && (
            <div className="absolute bg-slate-900 mt-4 p-6 rounded-xl w-60 space-y-5">
              
              <Link
  href="/tours/cultural"
  onClick={() => setTourOpen(false)}
  className="block"
>
  Cultural Tours
</Link>

              <Link
  href="/tours/crafted"
  onClick={() => setTourOpen(false)}
  className="block"
>
  Crafted Journey
</Link>

              <Link
  href="/tours/trekking"
  onClick={() => setTourOpen(false)}
  className="block"
>
  Trekking Tours
</Link>

              <Link
  href="/tours/festival"
  onClick={() => setTourOpen(false)}
  className="block"
>
  Festival Tours
</Link>

            </div>
          )}

        </div>

        <Link href="/#gallery">Gallery</Link>
        <Link href="/#about">About</Link>
        <Link href="/contact">Contact</Link>

      </div>


      {/* MOBILE BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden text-3xl"
      >
        ☰
      </button>


      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden absolute top-full left-0 bg-black w-full flex flex-col text-center gap-5 py-6">

          <Link 
href="/" 
onClick={() => setOpen(false)}
>
Home
</Link>

          <Link 
href="/tours/cultural"
onClick={() => setOpen(false)}
>
Cultural Tours
</Link>

          <Link 
href="/tours/crafted"
onClick={() => setOpen(false)}
>
Crafted Journey
</Link>

          <Link 
href="/tours/trekking"
onClick={() => setOpen(false)}
>
Trekking Tours
</Link>

          <Link 
href="/tours/festival"
onClick={() => setOpen(false)}
>
Festival Tours
</Link>

          <Link
href="/#gallery"
onClick={() => setOpen(false)}
>
Gallery
</Link>
          <Link
href="/#about"
onClick={() => setOpen(false)}
>
About
</Link>
          <Link 
href="/contact"
onClick={() => setOpen(false)}
>
Contact
</Link>

        </div>
      )}

    </nav>
  );
}