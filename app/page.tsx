"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      

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
                  From USD 2100
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
                  From USD 2800
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
                  Contact us for pricing
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
  
Dragon Vista Tours was born from a deep love and passion for sharing the true spirit of Bhutan — the Land of Happiness.

With many years of experience welcoming travellers from different corners of the world, we understand that every journey is more than just visiting places — it is about creating memories, meaningful connections and once-in-a-lifetime experiences.

Over the years, we have proudly crafted unforgettable journeys for countless happy travellers, from cultural discoveries and breathtaking Himalayan treks to colourful festival experiences, luxury escapes and personally designed private tours.

At Dragon Vista Tours, every detail of your journey is carefully handled. From visa arrangements, comfortable accommodation, reliable transportation, delicious meals, experienced guides and professional drivers — we make sure your Bhutan experience is smooth, safe and truly memorable.

Our local knowledge, personal care and attention to detail allow travellers to experience the real Bhutan — ancient monasteries, peaceful valleys, warm hospitality, living traditions and the happiness that makes our kingdom unique.

Whether you dream of standing beneath Himalayan peaks, witnessing sacred festivals, exploring hidden villages or creating your own special journey, Dragon Vista Tours is here to turn your Bhutan dream into reality.

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
    <img src="/golden.png" alt="Bhutan" className="rounded-xl" />
    <img src="/adventure.png" alt="Bhutan" className="rounded-xl" />
    <img src="/dagalla.png" alt="Bhutan" className="rounded-xl" />
    <img src="/bumthang.png" alt="Bhutan" className="rounded-xl" />
    <img src="/bumdrala.png" alt="Bhutan" className="rounded-xl" />
    <img src="/jomolhari.png" alt="Bhutan" className="rounded-xl" />
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
    <p>WhatsApp: +61 431469379</p>
  </div>
</section>
        <h2 className="text-5xl font-bold text-center mb-14">
          Travel With Purpose
          
        </h2>

        <div className="grid md:grid-cols-4 gap-8">

          <Link href="/blog/living-springs">

            <div className="bg-gray-900 p-8 rounded-3xl hover:scale-105 duration-300 cursor-pointer">

              <h3 className="text-2xl font-bold mb-4 text-orange-400">
                🌿 Living Springs Project
              </h3>

              <p className="text-gray-300">
                Travel with purpose by helping protect Bhutan's precious spring water sources, supporting rural communities, preserving wildlife habitates, and planting one native tree during your journey.
              </p>
<div className="mt-6">
  <span className="inline-flex items-center text-orange-400 font-semibold hover:text-orange-300 transition">
    Read the Story →
  </span>
</div>
            </div>

          </Link>

          <Link href="/blog/every-step-matters">

            <div className="bg-gray-900 p-8 rounded-3xl hover:scale-105 duration-300 cursor-pointer">

              <h3 className="text-2xl font-bold mb-4 text-orange-400">
                Every steps Matters
              </h3>

              <p className="text-gray-300">
                Every traveller helps restore Bhutan's forests by planting a native tree, helping recharge mountain springs and protecting nature for future generations.
              </p>
<div className="mt-6">
  <span className="inline-flex items-center text-orange-400 font-semibold hover:text-orange-300 transition">
    Read the Story →
  </span>
</div>
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
            Oliver
          </h3>

          <p className="text-gray-600">
            Australia • Apr 2026
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
            Amelia
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
<footer className="bg-black text-white py-16 border-t border-gray-800">

  <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-2 gap-12">


    {/* LEFT SIDE - BRAND & SOCIAL */}
    <div>

      <h3 className="text-4xl font-bold text-orange-500 mb-3">
        Dragon Vista Tours
      </h3>

      <p className="text-blue-300 text-xl mb-8">
        Where Happiness Meets Adventure
      </p>


      <div className="w-16 h-1 bg-orange-500 mb-8"></div>


      <p className="text-gray-300 text-lg mb-10 leading-relaxed">

        Stay connected with the Kingdom of Happiness.
        Follow our Bhutan stories, hidden Himalayan treasures,
        travel inspiration & unforgettable journeys.

      </p>


      {/* SOCIAL ICONS */}
      <div className="flex gap-8">


        {/* INSTAGRAM */}
        <a
          href="https://www.instagram.com/dragonvistatour"
          target="_blank"
        >

          <img
            src="/instagram.png"
            className="
            w-12 h-12 rounded-full
            hover:scale-125 transition
            "
          />

        </a>



        {/* FACEBOOK */}
        <a
          href="https://www.facebook.com/dragonvistatour"
          target="_blank"
        rel="noopener noreferrer"
>
          <img
            src="/facebook.png"
            className="
            w-12 h-12 rounded-full
            hover:scale-125 transition
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
            w-12 h-12 rounded-full
            hover:scale-125 transition
            "
          />

        </a>



        {/* WHATSAPP */}
        <a
          href="https://wa.me/61431469378"
          target="_blank"
        >

          <img
            src="/whatsapp.png"
            className="
            w-12 h-12 rounded-full
            hover:scale-125 transition
            "
          />

        </a>


      </div>


    </div>





    {/* RIGHT SIDE - TRAVEL TIPS */}

    <div>

      <h3 className="text-3xl font-bold mb-3">
        Travel Tips
      </h3>


      <div className="w-16 h-1 bg-orange-500 mb-8"></div>


      <div className="space-y-6 text-lg">


        <Link
          href="/travel-tips/visa"
          className="
          flex justify-between border-b border-gray-700 pb-4
          hover:text-orange-400 transition
          "
        >

          <span>🌏 Visa & Travel Guide</span>
          <span>›</span>

        </Link>



        <Link
          href="/travel-tips/terms"
          className="
          flex justify-between border-b border-gray-700 pb-4
          hover:text-orange-400 transition
          "
        >

          <span>📄 Terms & Conditions</span>
          <span>›</span>

        </Link>




        <Link
          href="/travel-tips/dos-donts"
          className="
          flex justify-between border-b border-gray-700 pb-4
          hover:text-orange-400 transition
          "
        >

          <span>🙏 Do’s and Don’ts</span>
          <span>›</span>

        </Link>




        <Link
          href="/travel-tips/best-time"
          className="
          flex justify-between border-b border-gray-700 pb-4
          hover:text-orange-400 transition
          "
        >

          <span>🍂 Best Time to Visit Bhutan</span>
          <span>›</span>

        </Link>


      </div>


    </div>


  </div>



  {/* COPYRIGHT */}

  <div className="text-center text-gray-400 mt-14 border-t border-gray-800 pt-8">

    © 2026 Dragon Vista Tours | Creating Authentic Bhutan Experiences 

  </div>

</footer>
</main>
  ) ;
}