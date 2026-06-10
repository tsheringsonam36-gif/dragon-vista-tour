import Link from "next/link";
export default function DagalaTrek() {

  const itinerary = [
    {
      day: "Day 1",
      title: "Arrival in Paro – Transfer to Thimphu",
      description:
        "Welcome to Bhutan, the Land of the Thunder Dragon. Meet your guide at Paro International Airport and enjoy a scenic drive to Thimphu. Relax, acclimatise and explore highlights including the Takin Preserve, Textile Museum, Memorial Chorten, traditional paper factory and historic dzongs."
    },

    {
      day: "Day 2",
      title: "Thimphu to Geynikha – Begin Trek",
      description:
        "Drive to Geynikha where the trek begins. Walk through peaceful forests, waterfalls and traditional villages before reaching your first campsite near the beautiful mountain landscape."
    },

    {
      day: "Day 3",
      title: "Geynikha to Gur",
      description:
        "Climb through oak forests, hillside trails and beautiful birch forests before reaching Gur. This peaceful campsite provides important acclimatisation before entering higher alpine landscapes."
    },

    {
      day: "Day 4",
      title: "Gur to Dagala Lakes",
      description:
        "Enter breathtaking high-altitude scenery filled with alpine flowers, yak herder camps and mountain views. Camp near a beautiful Himalayan lake surrounded by peaceful wilderness."
    },

    {
      day: "Day 5",
      title: "Explore Thousand Lakes Region",
      description:
        "Choose between scenic trekking routes across high mountain passes. Enjoy panoramic views of Jomolhari, Kanchenjunga and surrounding Himalayan peaks before reaching Kiwi Chowa camp."
    },

    {
      day: "Day 6",
      title: "Kiwi Chowa to Talakha – Return Thimphu",
      description:
        "Descend through forests of fir, juniper and rhododendron before reaching Talakha Monastery with stunning views over Thimphu Valley. Transfer back to Thimphu."
    },

    {
      day: "Day 7",
      title: "Thimphu to Paro Cultural Exploration",
      description:
        "Return to Paro Valley and explore its cultural treasures including Rinpung Dzong and the National Museum while enjoying views of the beautiful valley."
    },

    {
      day: "Day 8",
      title: "Tiger's Nest Monastery Hike",
      description:
        "Visit Drukgyal Dzong before hiking to the legendary Taktsang Monastery. Experience Bhutan's most iconic spiritual site before visiting Kyichu Lhakhang."
    },

    {
      day: "Day 9",
      title: "Departure from Bhutan",
      description:
        "Transfer to Paro International Airport and depart with unforgettable memories of Bhutan's mountains, lakes, culture and hospitality."
    },
  ];


  return (

    <main className="bg-slate-950 text-white min-h-screen">


      {/* HERO */}

      <section

        className="h-[75vh] bg-cover bg-center flex items-center justify-center"

        style={{
          backgroundImage: "url('/mystery.png')",
        }}

      >


        <div className="bg-black/60 p-10 rounded-xl text-center">

          <h1 className="text-5xl font-bold">
            Dagala Thousand Lakes Trek
          </h1>


          <p className="text-2xl mt-4">
            9 Days Alpine Lake Adventure
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

          The Dagala Thousand Lakes Trek is a peaceful Himalayan journey
          through alpine lakes, yak pastures, mountain ridges and untouched
          wilderness. Experience breathtaking views of Jomolhari,
          Kanchenjunga and Bhutan's beautiful highlands.

        </p>



        <div className="grid md:grid-cols-3 gap-6 mt-8">


          <div className="bg-slate-900 p-5 rounded-xl">

            <h3 className="text-orange-400 font-bold">
              Distance
            </h3>

            <p>35–40 KM</p>

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

            <p>April–June / September–November</p>

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
            ✓ Sacred Himalayan Alpine Lakes
          </div>


          <div className="bg-slate-900 p-6 rounded-xl">
            ✓ Views of Jomolhari & Kanchenjunga
          </div>


          <div className="bg-slate-900 p-6 rounded-xl">
            ✓ Yak Herder Camps
          </div>


          <div className="bg-slate-900 p-6 rounded-xl">
            ✓ Tiger's Nest Monastery Experience
          </div>


        </div>


      </section>






      {/* BOOK */}

      <section className="text-center py-16">


        <h2 className="text-3xl font-bold mb-5">
          Discover Bhutan's Hidden Lakes
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