import Link from "next/link";
export default function BumdraTrek() {
  const itinerary = [
    {
      day: "Day 1",
      title: "Arrival in Paro – Transfer to Thimphu",
      description:
        "Arrive in Bhutan and meet your guide. Transfer to Thimphu, enjoy your first Bhutanese meal and explore the capital city. Visit the Motithang Takin Preserve, National Memorial Chorten and Thimphu Town."
    },
    {
      day: "Day 2",
      title: "Explore Thimphu",
      description:
        "Discover Bhutan's capital through cultural attractions including Simply Bhutan, Royal Textile Museum, Tashichho Dzong, the Traditional Paper Factory and Simtokha Dzong."
    },
    {
      day: "Day 3",
      title: "Thimphu to Punakha",
      description:
        "Drive across the spectacular Dochula Pass and enjoy panoramic Himalayan views. Visit Punakha Dzong and Khamsum Yulley Namgyal Chorten."
    },
    {
      day: "Day 4",
      title: "Punakha to Paro",
      description:
        "Return to Paro and explore Rinpung Dzong and the National Museum. Enjoy the peaceful atmosphere of Bhutan's most beautiful valley."
    },
    {
      day: "Day 5",
      title: "Trek to Bumdra Camp",
      description:
        "Begin your trek from Sang Choekor Buddhist College. Walk through pine forests, prayer flag-lined ridges and alpine meadows before arriving at Bumdra Monastery, the famous Cave of a Thousand Prayers."
    },
    {
      day: "Day 6",
      title: "Bumdra to Tiger's Nest",
      description:
        "Descend through ancient forests and mountain trails to Bhutan's most iconic landmark, Taktsang Monastery (Tiger's Nest), dramatically perched on a cliffside above Paro Valley."
    },
    {
      day: "Day 7",
      title: "Departure",
      description:
        "Transfer to Paro International Airport for your onward journey and depart with unforgettable memories of Bhutan."
    }
  ];

  return (
    <main className="bg-slate-950 text-white min-h-screen">

      {/* Hero Section */}
      <section
        className="h-[70vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('/bumdra.jpg')",
        }}
      >
        <div className="bg-black/60 p-10 rounded-xl text-center">
          <h1 className="text-5xl font-bold mb-4">
            Bumdra Trek
          </h1>

          <p className="text-2xl">
            7 Days Himalayan Adventure
          </p>

          <p className="mt-4 text-orange-400 font-semibold">
            Dragon Vista Tours
          </p>
        </div>
      </section>

      {/* Trek Overview */}
      <section className="max-w-6xl mx-auto p-8">
        <h2 className="text-3xl font-bold mb-4">
          Trek Overview
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <div className="bg-slate-900 p-5 rounded-xl">
            <h3 className="font-bold text-orange-400">Distance</h3>
            <p>14 KM</p>
          </div>

          <div className="bg-slate-900 p-5 rounded-xl">
            <h3 className="font-bold text-orange-400">Difficulty</h3>
            <p>Easy to Moderate</p>
          </div>

          <div className="bg-slate-900 p-5 rounded-xl">
            <h3 className="font-bold text-orange-400">Best Season</h3>
            <p>March–May & September–November</p>
          </div>
        </div>

        <p className="mt-8 text-gray-300 leading-8">
          The Bumdra Trek is one of Bhutan's most rewarding short treks,
          combining stunning Himalayan scenery, sacred monasteries,
          high alpine camps and the legendary Tiger's Nest Monastery.
        </p>
      </section>

      {/* Itinerary */}
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

              <h4 className="text-2xl font-semibold mt-2 mb-3">
                {item.title}
              </h4>

              <p className="text-gray-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Highlights */}
      <section className="max-w-6xl mx-auto p-8">
        <h2 className="text-3xl font-bold mb-8">
          Trek Highlights
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-slate-900 p-6 rounded-xl">
            ✓ Bumdra Monastery – Cave of a Thousand Prayers
          </div>

          <div className="bg-slate-900 p-6 rounded-xl">
            ✓ Spectacular Himalayan Mountain Views
          </div>

          <div className="bg-slate-900 p-6 rounded-xl">
            ✓ Overnight Camping Above Paro Valley
          </div>

          <div className="bg-slate-900 p-6 rounded-xl">
            ✓ Tiger's Nest Monastery Trek
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-16">
        <h2 className="text-3xl font-bold mb-4">
          Ready for Your Bhutan Adventure?
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