"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {

  const [open, setOpen] = useState(false);
  const [tourOpen, setTourOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);


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



      {/* DESKTOP MENU */}
      <div className="hidden md:flex items-center gap-14 text-xl">


        <Link href="/">
          Home
        </Link>



        {/* TOURS DROPDOWN */}
        <div className="relative">

          <button
            onClick={() => setTourOpen(!tourOpen)}
          >
            Tours ▼
          </button>


          {tourOpen && (

            <div className="absolute bg-slate-900 mt-4 rounded-xl w-72 overflow-hidden shadow-xl z-50">


              <Link
                href="/tours/cultural"
                onClick={() => setTourOpen(false)}
                className="block px-8 py-5 hover:bg-blue-800"
              >
                Cultural Tours
              </Link>


              <Link
                href="/tours/crafted"
                onClick={() => setTourOpen(false)}
                className="block px-8 py-5 hover:bg-blue-800"
              >
                Crafted Journey
              </Link>


              <Link
                href="/tours/trekking"
                onClick={() => setTourOpen(false)}
                className="block px-8 py-5 hover:bg-blue-800"
              >
                Trekking Tours
              </Link>


              <Link
                href="/tours/festival"
                onClick={() => setTourOpen(false)}
                className="block px-8 py-5 hover:bg-blue-800"
              >
                Festival Tours
              </Link>


            </div>

          )}


        </div>





        {/* ABOUT DROPDOWN */}
        <div className="relative">

          <button
            onClick={() => setAboutOpen(!aboutOpen)}
          >
            About ▼
          </button>


          {aboutOpen && (

            <div className="absolute bg-slate-900 mt-4 rounded-xl w-80 overflow-hidden shadow-xl z-50">


              <Link
                href="/about/bhutan"
                onClick={() => setAboutOpen(false)}
                className="block px-8 py-5 hover:bg-blue-800"
              >
                About Bhutan
              </Link>


              <Link
                href="/about/tourism"
                onClick={() => setAboutOpen(false)}
                className="block px-8 py-5 hover:bg-blue-800"
              >
                About Bhutan Tourism
              </Link>


              <Link
                href="/about/dragon-vista"
                onClick={() => setAboutOpen(false)}
                className="block px-8 py-5 hover:bg-blue-800"
              >
                
              </Link>


            </div>

          )}


        </div>





        <Link href="/#gallery">
          Gallery
        </Link>



        <Link href="/contact">
          Contact
        </Link>


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

        <div className="md:hidden absolute top-full left-0 bg-black w-full flex flex-col text-center gap-5 py-6 z-50">


          <Link href="/" onClick={() => setOpen(false)}>
            Home
          </Link>


          <Link href="/tours/cultural" onClick={() => setOpen(false)}>
            Cultural Tours
          </Link>


          <Link href="/tours/crafted" onClick={() => setOpen(false)}>
            Crafted Journey
          </Link>


          <Link href="/tours/trekking" onClick={() => setOpen(false)}>
            Trekking Tours
          </Link>


          <Link href="/tours/festival" onClick={() => setOpen(false)}>
            Festival Tours
          </Link>


          <Link href="/about/bhutan" onClick={() => setOpen(false)}>
            About Bhutan
          </Link>


          <Link href="/about/tourism" onClick={() => setOpen(false)}>
            About Bhutan Tourism
          </Link>


          <Link href="/about/dragon-vista" onClick={() => setOpen(false)}>
            About Dragon Vista Tours
          </Link>


          <Link href="/#gallery" onClick={() => setOpen(false)}>
            Gallery
          </Link>


          <Link href="/contact" onClick={() => setOpen(false)}>
            Contact
          </Link>


        </div>

      )}


    </nav>

  );

}