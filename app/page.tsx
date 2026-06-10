"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      
cd
      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">

  <video
    autoPlay
    muted
    loop
    playsInline
    className="absolute top-0 left-0 w-full h-full object-cover object-center"
  >
    <source src="/background.video mp4" type="video/mp4" />
  </video>

  <div className="absolute inset-0 bg-black/50"></div>

  <div className="relative z-10">
    <h1 className="text-6xl font-bold text-yellow-400">
      Discover Bhutan
    </h1>

    <p className="text-white text-xl mt-4">
      Explore the Last Himalayan Kingdom
    </p>
    <a
  href="/contact"
  className="inline-block mt-8 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition"
>
  Book Your Tour
</a>
  </div>
</section>
  

      {/* TOUR PACKAGES */}
      <section className="py-20 px-10 bg-white text-black">

        <div className="text-center mb-14">

          <h2 className="text-5xl font-bold mb-4">
            Discover Bhutan With Dragon Vista Tour
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore handcrafted Bhutan journeys designed for your travel style, comfort, and adventure.
          </p>

        </div>

        <div className="grid md:grid-cols-4 gap-8">

          {/* FESTIVAL */}
          <Link href="/tours/festival">

            <div className="rounded-3xl overflow-hidden shadow-xl hover:scale-105 duration-300 cursor-pointer">

              <img
                src="/Festival.png"
                className="h-96 w-full object-cover"
              />

              <div className="p-6 bg-black text-white">

                <p className="text-orange-400 font-bold mb-2">
                  MOST POPULAR
                </p>

                <h3 className="text-3xl font-bold mb-3">
                  Festival Tours
                </h3>

                <p className="text-lg">
                  From USD 1850
                </p>

              </div>

            </div>

          </Link>

          {/* TREKKING */}
          <Link href="/tours/trekking">

            <div className="rounded-3xl overflow-hidden shadow-xl hover:scale-105 duration-300 cursor-pointer">

              <img
                src="/trekking.png"
                className="h-96 w-full object-cover"
              />

              <div className="p-6 bg-black text-white">

                <p className="text-orange-400 font-bold mb-2">
                  ADVENTURE
                </p>

                <h3 className="text-3xl font-bold mb-3">
                  Trekking Tours
                </h3>

                <p className="text-lg">
                  From USD 2000
                </p>

              </div>

            </div>

          </Link>

          {/* CULTURAL */}
          <Link href="/tours/cultural">

            <div className="rounded-3xl overflow-hidden shadow-xl hover:scale-105 duration-300 cursor-pointer">

              <img
                src="Cultural.png"
                className="h-96 w-full object-cover"
              />

              <div className="p-6 bg-black text-white">

                <p className="text-orange-400 font-bold mb-2">
                  IMMERSIVE
                </p>

                <h3 className="text-3xl font-bold mb-3">
                  Cultural Tours
                </h3>

                <p className="text-lg">
                  From USD 1250
                </p>

              </div>

            </div>

          </Link>

          {/* Crafted */}
          <Link href="/tours/crafted">

            <div className="rounded-3xl overflow-hidden shadow-xl hover:scale-105 duration-300 cursor-pointer">

              <img
                src="crafted.png"
                className="h-96 w-full object-cover"
              />

              <div className="p-6 bg-black text-white">

                <p className="text-orange-400 font-bold mb-2">
                  PREMIUM
                </p>

                <h3 className="text-3xl font-bold mb-3">
                  Crafted Journeys
                </h3>

                <p className="text-lg">
                  From USD 4500
                </p>

              </div>

            </div>

          </Link>

        </div>
      </section>
<section id="about" className="py-16">
  <h2 className="text-4xl font-bold text-center mb-6">
    About Dragon Vista Tours
  </h2>

  <p className="text-lg text-gray-700 max-w-4xl mx-auto text-center">
    Dragon Vista Tours is a Bhutan-based travel company dedicated to creating
    authentic and unforgettable travel experiences. From cultural journeys and
    luxury holidays to trekking adventures and vibrant festivals, we help
    travellers discover the true beauty, heritage and hospitality of Bhutan.
  </p>
</section>

<section id="gallery" className="py-16">
  <h2 className="text-4xl font-bold text-center mb-8">
    Gallery
  </h2>

  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    <img src="/Cultural.png" alt="Culture" className="rounded-xl" />
    <img src="/crafted.png" alt="Luxury" className="rounded-xl" />
    <img src="/Festival.png" alt="Festival" className="rounded-xl" />
    <img src="/background.png" alt="Bhutan" className="rounded-xl" />
    <img src="/dochula-festival.png" alt="Bhutan" className="rounded-xl" />
    <img src="/adventure.png" alt="Bhutan" className="rounded-xl" />
    <img src="/bumthang.png" alt="Bhutan" className="rounded-xl" />
    <img src="/dochula.png" alt="Bhutan" className="rounded-xl" />
  </div>
</section>
      {/* WHY TRAVEL WITH US */}
      <section className="py-20 px-10 bg-black text-white">
<section id="contact" className="py-16">
  <h2 className="text-4xl font-bold text-center mb-6">
    Contact Us
  </h2>

  <div className="text-center text-lg">
    <p>Email: info@dragonvistatours.com</p>
    <p>Phone: +975 17457487</p>
    <p>WhatsApp: +975 XXXXXXXX</p>
  </div>
</section>
        <h2 className="text-5xl font-bold text-center mb-14">
          Why Travel With Us
        </h2>

        <div className="grid md:grid-cols-4 gap-8">

          <Link href="/about">

            <div className="bg-gray-900 p-8 rounded-3xl hover:scale-105 duration-300 cursor-pointer">

              <h3 className="text-2xl font-bold mb-4 text-orange-400">
                Expert Guides
              </h3>

              <p className="text-gray-300">
                1800+ happy custome, 35+ Friendly local guides with deep knowledge of Bhutanese culture.
              </p>

            </div>

          </Link>

          <Link href="/tours/luxury">

            <div className="bg-gray-900 p-8 rounded-3xl hover:scale-105 duration-300 cursor-pointer">

              <h3 className="text-2xl font-bold mb-4 text-orange-400">
                Luxury Experience
              </h3>

              <p className="text-gray-300">
                Premium hotels, comfort travel, and unforgettable experiences.
              </p>

            </div>

          </Link>

          <Link href="/tours/cultural">

            <div className="bg-gray-900 p-8 rounded-3xl hover:scale-105 duration-300 cursor-pointer">

              <h3 className="text-2xl font-bold mb-4 text-orange-400">
                Cultural Discovery
              </h3>

              <p className="text-gray-300">
                Explore Bhutanese traditions, monasteries, and local life.
              </p>

            </div>

          </Link>

          <Link href="/tours/trekking">

            <div className="bg-gray-900 p-8 rounded-3xl hover:scale-105 duration-300 cursor-pointer">

              <h3 className="text-2xl font-bold mb-4 text-orange-400">
                Adventure Trekking
              </h3>

              <p className="text-gray-300">
                Discover breathtaking mountain trails and hidden valleys.
              </p>

            </div>

          </Link>

        </div>

      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 px-10 bg-white text-black">

  <h2 className="text-5xl font-bold text-center mb-14">
    What Our Guests Say
  </h2>

  <div className="grid md:grid-cols-3 gap-8">

    {/* REVIEW 1 */}
    <div className="bg-gray-100 p-8 rounded-3xl shadow-lg">

      <div className="flex items-center gap-4 mb-5">

        <img
          src="/guest1.jpg"
          className="w-16 h-16 rounded-full object-cover"
        />

        <div>

          <h3 className="font-bold text-xl">
            Chiew Mei
          </h3>

          <p className="text-gray-600">
            Singapore • Apr 2026
          </p>

          <p className="text-orange-400">
            ★★★★★
          </p>

        </div>

      </div>

      <p className="italic">
        “Dragon Vista Tours made our Bhutan trip unforgettable.”
      </p>

    </div>

    {/* REVIEW 2 */}
    <div className="bg-gray-100 p-8 rounded-3xl shadow-lg">

      <div className="flex items-center gap-4 mb-5">

        <img
          src="/guest2.jpg"
          className="w-16 h-16 rounded-full object-cover"
        />

        <div>

          <h3 className="font-bold text-xl">
            Lynn Yong
          </h3>

          <p className="text-gray-600">
            United States • Apr 2026
          </p>

          <p className="text-orange-400">
            ★★★★★
          </p>

        </div>

      </div>

      <p className="italic">
        “Amazing cultural experience and excellent service.”
      </p>

    </div>

    {/* REVIEW 3 */}
    <div className="bg-gray-100 p-8 rounded-3xl shadow-lg">

      <div className="flex items-center gap-4 mb-5">

        <img
          src="/guest3.jpg"
          className="w-16 h-16 rounded-full object-cover"
        />

        <div>

          <h3 className="font-bold text-xl">
            Chawtip Mcgiffin
          </h3>

          <p className="text-gray-600">
            United States • Apr 2026
          </p>

          <p className="text-orange-400">
            ★★★★★
          </p>

        </div>

      </div>

      <p className="italic">
        “Best trekking adventure ever. Highly recommended!”
      </p>

    </div>

  </div>

</section>

      {/* FOOTER */}
      <footer className="bg-black text-center py-8 border-t border-gray-800">

        <h3 className="text-2xl font-bold text-orange-400 mb-3">
          Dragon Vista Tours
        </h3>

        <p className="text-gray-400">
          Where Happiness Meets Adventure
        </p>
{/* SOCIAL MEDIA FOOTER */}
<section className="bg-black text-white py-14 text-center">

  <h2 className="text-4xl font-bold mb-3">
    Follow Dragon Vista Tours
  </h2>

  <p className="text-gray-300 mb-10 text-lg">
    Dragon Vista Tours | Where the Thunder Dragon Guides Your Journey
  </p>


  <div className="flex justify-center gap-8">


    {/* INSTAGRAM */}
    <a
      href="https://www.instagram.com/dragonvistatours"
      target="_blank"
    >
      <img
        src="/instagram.png"
        className="
        w-16 h-16
        rounded-full
        object-cover
        hover:scale-125
        transition
        shadow-lg
        "
      />
    </a>


    {/* FACEBOOK */}
    <a
      href="https://www.facebook.com/dragonvistatours"
      target="_blank"
    >
      <img
        src="/facebook.png"
        className="
        w-16 h-16
        rounded-full
        object-cover
        hover:scale-125
        transition
        shadow-lg
        "
      />
    </a>


    {/* TIKTOK */}
    <a
      href="https://www.tiktok.com/@dragonvistatours"
      target="_blank"
    >
      <img
        src="/tiktok.png"
        className="
        w-16 h-16
        rounded-full
        object-cover
        hover:scale-125
        transition
        shadow-lg
        "
      />
    </a>


    {/* WHATSAPP */}
    <a
      href="https://wa.me/975XXXXXXXX"
      target="_blank"
    >
      <img
        src="/whatsapp.png"
        className="
        w-16 h-16
        rounded-full
        object-cover
        hover:scale-125
        transition
        shadow-lg
        "
      />
    </a>


  </div>


  <p className="mt-12 text-gray-400">
    © 2026 Dragon Vista Tours | Creating Authentic Bhutan Experiences
  </p>

</section>
      </footer>

    </main>
  );
}