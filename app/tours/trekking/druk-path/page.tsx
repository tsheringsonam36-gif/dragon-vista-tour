import Link from "next/link";
export default function DrukPathTrek() {

  const itinerary = [
    {
      day: "Day 1",
      title: "Arrival in Paro",
      description:
        "Welcome to Bhutan, the Land of the Thunder Dragon. Arrive at Paro International Airport and meet your guide. Transfer to your hotel, relax and acclimatise while enjoying the beautiful Paro Valley."
    },

    {
      day: "Day 2",
      title: "Tiger's Nest Monastery & Paro Sightseeing",
      description:
        "Visit historic Drukgyal Dzong before hiking to the legendary Taktsang Monastery (Tiger's Nest). Walk through pine forests decorated with prayer flags and enjoy incredible views. Later visit Kyichu Lhakhang, one of Bhutan's oldest temples."
    },

    {
      day: "Day 3",
      title: "Start Trek – Paro to Jele Dzong",
      description:
        "Begin the Druk Path Trek from the National Museum. Walk through blue pine forests, apple orchards and mountain trails before reaching Jele Dzong, an ancient fortress overlooking Paro Valley."
    },

    {
      day: "Day 4",
      title: "Jele Dzong to Tsokam",
      description:
        "Follow beautiful mountain ridges through rhododendron and conifer forests. Enjoy peaceful wilderness and scenic valley views before camping at Tsokam."
    },

    {
      day: "Day 5",
      title: "Tsokam to Jimilang Tsho Lake",
      description:
        "Experience one of the most beautiful sections of the trek with panoramic Himalayan views. Reach the sacred alpine lake Jimilang Tsho and camp beside its crystal waters."
    },

    {
      day: "Day 6",
      title: "Jimilang Tsho to Simkotra Tsho",
      description:
        "Walk across high ridges and untouched landscapes, passing smaller mountain lakes before arriving at Simkotra Tsho surrounded by spectacular Himalayan scenery."
    },

    {
      day: "Day 7",
      title: "Simkotra Tsho to Phajoding – Thimphu",
      description:
        "Enjoy views of Bhutan's highest peaks including Gangkar Puensum on clear days. Descend through forests to Phajoding Monastery before driving to Thimphu."
    },

    {
      day: "Day 8",
      title: "Explore Thimphu",
      description:
        "Discover Bhutan's capital city. Visit Tashichhoe Dzong, National Memorial Chorten, traditional arts centres and local craft markets."
    },

    {
      day: "Day 9",
      title: "Departure from Bhutan",
      description:
        "Transfer to Paro International Airport. Depart with unforgettable memories of Bhutan's mountains, culture and the magical Druk Path Trek."
    },
  ];


  return (

    <main className="bg-slate-950 text-white min-h-screen">


      {/* HERO */}

      <section

        className="h-[75vh] bg-cover bg-center flex items-center justify-center"

        style={{
          backgroundImage: "url('/druk-path.jpg')",
        }}

      >


        <div className="bg-black/60 p-10 rounded-xl text-center">

          <h1 className="text-5xl font-bold">
            Druk Path Trek
          </h1>


          <p className="text-2xl mt-4">
            9 Days Bhutan Himalayan Journey
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

          The Druk Path Trek is one of Bhutan's most famous trekking routes,
          connecting Paro and Thimphu through pristine forests,
          mountain ridges, ancient monasteries and beautiful alpine lakes.

        </p>



        <div className="grid md:grid-cols-3 gap-6 mt-8">


          <div className="bg-slate-900 p-5 rounded-xl">

            <h3 className="text-orange-400 font-bold">
              Distance
            </h3>

            <p>49 KM</p>

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
            ✓ Jimilang Tsho Alpine Lake
          </div>


          <div className="bg-slate-900 p-6 rounded-xl">
            ✓ Ancient Monasteries & Dzongs
          </div>


          <div className="bg-slate-900 p-6 rounded-xl">
            ✓ Himalayan Mountain Views
          </div>


          <div className="bg-slate-900 p-6 rounded-xl">
            ✓ Paro to Thimphu Classic Trek Route
          </div>


        </div>


      </section>





      {/* BOOK */}

      <section className="text-center py-16">


        <h2 className="text-3xl font-bold mb-5">
          Experience The Druk Path Adventure
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