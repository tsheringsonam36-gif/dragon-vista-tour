import Link from "next/link";
export default function Jomolhari() {
  const itinerary = [
    {
      day: "Day 1",
      title: "Arrival in Paro  Transfer to Thimphu",
      description:
        "Arrive at Paro International Airport and meet your guide. Enjoy a scenic drive to Thimphu, Bhutan's capital. Relax, acclimatise and enjoy your first Bhutanese cultural experience."
    },
    {
      day: "Day 2",
      title: "Tiger's Nest & Paro Cultural Discovery",
      description:
        "Visit Drukgyal Dzong before hiking to the legendary Taktsang Monastery (Tiger's Nest), Bhutan's most iconic landmark. Later visit Kyichu Lhakhang, one of Bhutan's oldest temples."
    },
    {
      day: "Day 3",
      title: "Haa Valley via Chele La Pass",
      description:
        "Travel across Chele La Pass with incredible Himalayan views. Explore peaceful Haa Valley, Katsho Village and experience one of Bhutan's most untouched regions."
    },
    {
      day: "Day 4",
      title: "Shana to Thanthangka",
      description:
        "Begin the Jomolhari Trek. Follow the Paro Chhu through forests, traditional villages and mountain valleys before reaching Thanthangka campsite with possible views of Mount Jomolhari."
    },
    {
      day: "Day 5",
      title: "Thanthangka to Jangothang Base Camp",
      description:
        "Continue into alpine landscapes with yak pastures and mountain scenery. Reach the spectacular Jangothang Base Camp beneath Mount Jomolhari and Jichu Drake."
    },
    {
      day: "Day 6",
      title: "Jangothang to Lingshi via Nyele La Pass",
      description:
        "Cross Nyele La Pass (4,700m) with breathtaking views of Jomolhari, Jichu Drake and Himalayan peaks before descending to Lingshi Valley."
    },
    {
      day: "Day 7",
      title: "Lingshi to Shodu via Yale La Pass",
      description:
        "Challenge yourself crossing Yale La Pass (4,950m), the highest point of the trek. Enjoy unforgettable Himalayan panoramas before camping near Shodu."
    },
    {
      day: "Day 8",
      title: "Shodu to Barshong",
      description:
        "Follow the Thimphu Chhu through dramatic valleys, waterfalls, meditation caves and untouched forests before arriving at Barshong."
    },
    {
      day: "Day 9",
      title: "Barshong to Dolam Kencho",
      description:
        "Trek through rhododendron forests, bamboo groves and peaceful wilderness before reaching the remote Dolam Kencho campsite."
    },
    {
      day: "Day 10",
      title: "Dolam Kencho to Dodina – Thimphu",
      description:
        "Complete the final trekking section through bamboo forests and ancient trails. Drive back to Thimphu and celebrate your Himalayan achievement."
    },
    {
      day: "Day 11",
      title: "Departure from Bhutan",
      description:
        "Transfer to Paro International Airport. Leave Bhutan with unforgettable memories of mountains, culture and adventure."
    }
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
            Jomolhari Trek
          </h1>

          <p className="text-2xl mt-4">
            11 Days Himalayan Adventure
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

          The Jomolhari Trek is one of Bhutan's most iconic
          Himalayan journeys. Experience alpine wilderness,
          remote valleys, yak herder settlements and breathtaking
          views of Mount Jomolhari rising above the landscape.

        </p>


        <div className="grid md:grid-cols-3 gap-6 mt-8">

          <div className="bg-slate-900 p-5 rounded-xl">
            <h3 className="text-orange-400 font-bold">
              Distance
            </h3>
            <p>120 KM</p>
          </div>


          <div className="bg-slate-900 p-5 rounded-xl">
            <h3 className="text-orange-400 font-bold">
              Difficulty
            </h3>
            <p>Moderate to Hard</p>
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
            ✓ Mount Jomolhari Base Camp
          </div>

          <div className="bg-slate-900 p-6 rounded-xl">
            ✓ High Himalayan Passes
          </div>

          <div className="bg-slate-900 p-6 rounded-xl">
            ✓ Remote Yak Herder Villages
          </div>

          <div className="bg-slate-900 p-6 rounded-xl">
            ✓ Tiger's Nest Monastery
          </div>

        </div>

      </section>


      {/* BOOKING */}

      <section className="text-center py-16">

        <h2 className="text-3xl font-bold mb-5">
          Begin Your Himalayan Journey
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