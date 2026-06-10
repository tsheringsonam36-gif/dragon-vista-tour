import Link from "next/link";
export default function SagalaTrek() {

  const itinerary = [

    {
      day: "Day 1",
      title: "Arrival in Paro – Transfer to Thimphu",
      description:
        "Welcome to Bhutan, the Land of the Thunder Dragon. Meet your guide at Paro International Airport and drive to Thimphu. Visit Buddha Dordenma, National Memorial Chorten, Motithang Takin Preserve and enjoy a relaxing walk through Thimphu town."
    },

    {
      day: "Day 2",
      title: "Tiger's Nest Monastery & Paro Exploration",
      description:
        "Hike to Bhutan's legendary Taktsang Monastery (Tiger's Nest), a sacred cliffside temple blessed by Guru Rinpoche. Later explore Kaja Throm Market and enjoy a peaceful walk through Paro town."
    },

    {
      day: "Day 3",
      title: "Begin Sagala Trek – Haa Valley to Sagala Camp",
      description:
        "Start your Himalayan adventure following the Halung Chhu River through pine and fir forests, highland meadows and scenic landscapes. Reach Sagala Camp with stunning views of Mount Jomolhari, Paro Valley and surrounding mountains."
    },

    {
      day: "Day 4",
      title: "Sagala Camp to Ningula",
      description:
        "Walk along beautiful alpine ridgelines covered with rhododendrons, wildflowers and mountain scenery. Spot Himalayan wildlife and enjoy peaceful views of Jomolhari before camping at Ningula."
    },

    {
      day: "Day 5",
      title: "Ningula to Chele La Pass – Return Paro",
      description:
        "Complete the final trekking section through forests, open meadows and the spectacular Gung Karpo Ridge. Enjoy Himalayan views before reaching Chele La Pass and driving back to Paro."
    },

    {
      day: "Day 6",
      title: "Chumphu Nye Spiritual Hike",
      description:
        "Enjoy a full-day hike to the hidden pilgrimage site of Chumphu Nye. Follow peaceful riverside trails to the sacred floating statue of Dorje Phamo and experience Bhutan's spiritual heritage."
    },

    {
      day: "Day 7",
      title: "Departure from Bhutan",
      description:
        "Transfer to Paro International Airport. Depart with beautiful memories of Bhutan's mountains, culture, peaceful landscapes and warm hospitality."
    }

  ];


  return (

    <main className="bg-slate-950 text-white min-h-screen">


      {/* HERO */}

      <section

        className="h-[75vh] bg-cover bg-center flex items-center justify-center"

        style={{
          backgroundImage: "url('/sagala.png')",
        }}

      >

        <div className="bg-black/60 p-10 rounded-xl text-center">


          <h1 className="text-5xl font-bold">
            Sagala Trek
          </h1>


          <p className="text-2xl mt-4">
            7 Days Haa Valley Adventure
          </p>


          <p className="text-orange-400 mt-4 font-semibold">
            Dragon Vista Tours
          </p>


        </div>

      </section>





      {/* OVERVIEW */}

      <section className="max-w-6xl mx-auto p-8">


        <h2 className="text-3xl font-bold mb-6">
          Trek Overview
        </h2>


        <p className="text-gray-300 leading-8">

          The Sagala Trek is one of Haa Valley's hidden gems,
          offering peaceful trails, alpine forests, yak pastures
          and unforgettable Himalayan views. A perfect short trek
          combining nature, culture and Bhutanese tranquillity.

        </p>




        <div className="grid md:grid-cols-3 gap-6 mt-8">


          <div className="bg-slate-900 p-5 rounded-xl">

            <h3 className="text-orange-400 font-bold">
              Distance
            </h3>

            <p>20 KM</p>

          </div>



          <div className="bg-slate-900 p-5 rounded-xl">

            <h3 className="text-orange-400 font-bold">
              Difficulty
            </h3>

            <p>Moderate</p>

          </div>



          <div className="bg-slate-900 p-5 rounded-xl">

            <h3 className="text-orange-400 font-bold">
              Best Season
            </h3>

            <p>March–May / September–November</p>

          </div>


        </div>


      </section>







      {/* ITINERARY */}

      <section className="max-w-6xl mx-auto p-8">


        <h2 className="text-3xl font-bold mb-8">
          Detailed Itinerary
        </h2>


        <div className="space-y-6">


          {itinerary.map((item, index) => (

            <div

              key={index}

              className="bg-slate-900 border border-slate-700 rounded-xl p-6"

            >


              <h3 className="text-orange-400 text-xl font-bold">
                {item.day}
              </h3>


              <h4 className="text-2xl font-semibold my-3">
                {item.title}
              </h4>


              <p className="text-gray-300 leading-7">
                {item.description}
              </p>


            </div>

          ))}


        </div>


      </section>







      {/* HIGHLIGHTS */}

      <section className="max-w-6xl mx-auto p-8">


        <h2 className="text-3xl font-bold mb-8">
          Trek Highlights
        </h2>


        <div className="grid md:grid-cols-2 gap-6">


          <div className="bg-slate-900 p-6 rounded-xl">
            ✓ Hidden Haa Valley Trails
          </div>


          <div className="bg-slate-900 p-6 rounded-xl">
            ✓ Views of Mount Jomolhari
          </div>


          <div className="bg-slate-900 p-6 rounded-xl">
            ✓ Chele La High Mountain Pass
          </div>


          <div className="bg-slate-900 p-6 rounded-xl">
            ✓ Tiger's Nest Monastery
          </div>


        </div>


      </section>






      {/* BOOKING */}

      <section className="text-center py-16">


        <h2 className="text-3xl font-bold mb-5">
          Explore Bhutan's Hidden Himalayan Trail
        </h2>


        <Link
  href="/contact"
  className="block bg-yellow-500 text-white rounded-full py-5 text-center text-xl font-bold hover:bg-yellow-600 transition"
>
  Book This Trek →
</Link>

      </section>



    </main>

  );
}