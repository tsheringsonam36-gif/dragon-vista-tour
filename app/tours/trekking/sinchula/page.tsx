import Link from "next/link";
export default function SinchulaTrek() {

  const itinerary = [

    {
      day: "Day 1",
      title: "Arrival in Paro – Transfer to Thimphu",
      description:
        "Begin your journey with a breathtaking Himalayan flight into Paro Valley. Meet your guide and drive to Thimphu, Bhutan's peaceful capital. Visit National Memorial Chorten, Buddha Dordenma, Zilukha Nunnery and Tashichho Dzong before enjoying an evening walk around town."
    },

    {
      day: "Day 2",
      title: "Thimphu – Sinchula Pass Trek",
      description:
        "Visit the Institute of Zorig Chusum to discover Bhutan's traditional arts. Later drive north and begin trekking through peaceful pine forests towards Sinchula Pass (3,200m). Enjoy mountain views before descending to your forest campsite."
    },

    {
      day: "Day 3",
      title: "Sinchula Camp to Punakha",
      description:
        "Continue downhill through beautiful forests to Chorten Ningpo Monastery. After lunch, complete your trek and drive to Punakha. Visit the magnificent Punakha Dzong located between the Pho Chhu and Mo Chhu rivers."
    },

    {
      day: "Day 4",
      title: "Punakha – Dochula Pass – Paro",
      description:
        "Visit Chimi Lhakhang, the famous fertility temple. Journey across Dochula Pass with its 108 chortens and Himalayan views. Continue to Paro and explore Ta Dzong National Museum, Rinpung Dzong and Paro town."
    },

    {
      day: "Day 5",
      title: "Departure from Bhutan",
      description:
        "Transfer to Paro International Airport. Leave Bhutan with memories of peaceful forests, Himalayan landscapes, cultural experiences and warm Bhutanese hospitality."
    },

  ];


  return (

    <main className="bg-slate-950 text-white min-h-screen">


      {/* HERO */}

      <section

        className="h-[75vh] bg-cover bg-center flex items-center justify-center"

        style={{
          backgroundImage: "url('/sinchula.jpg')",
        }}

      >


        <div className="bg-black/60 p-10 rounded-xl text-center">


          <h1 className="text-5xl font-bold">
            Sinchula Trek
          </h1>


          <p className="text-2xl mt-4">
            5 Days Gentle Himalayan Escape
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

          The Sinchula Trek is a peaceful short Himalayan adventure
          following ancient trails between Thimphu and Punakha.
          Walk through pine forests, quiet ridgelines, hidden monasteries
          and beautiful valleys while experiencing Bhutan's natural beauty
          at a comfortable pace.

        </p>




        <div className="grid md:grid-cols-3 gap-6 mt-8">


          <div className="bg-slate-900 p-5 rounded-xl">

            <h3 className="text-orange-400 font-bold">
              Distance
            </h3>

            <p>35 KM</p>

          </div>




          <div className="bg-slate-900 p-5 rounded-xl">

            <h3 className="text-orange-400 font-bold">
              Difficulty
            </h3>

            <p>Easy – Moderate</p>

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
            ✓ Ancient Trading Trails
          </div>


          <div className="bg-slate-900 p-6 rounded-xl">
            ✓ Sinchula Pass 3,200m
          </div>


          <div className="bg-slate-900 p-6 rounded-xl">
            ✓ Punakha Dzong Experience
          </div>


          <div className="bg-slate-900 p-6 rounded-xl">
            ✓ Peaceful Himalayan Forest Walks
          </div>


        </div>


      </section>







      {/* BOOK */}

      <section className="text-center py-16">


        <h2 className="text-3xl font-bold mb-5">
          Experience Bhutan's Peaceful Trails
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