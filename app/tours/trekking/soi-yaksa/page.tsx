import Link from "next/link";
export default function SoiYaksaTrek() {
  const itinerary = [
    {
      day: "Day 1",
      title: "Arrival in Paro – Transfer to Thimphu",
      description:
        "Arrive at Paro International Airport and meet your guide. Enjoy your first views of Paro Valley before driving to Thimphu. Check into your hotel, enjoy Bhutanese cuisine and explore the capital at a relaxed pace."
    },
    {
      day: "Day 2",
      title: "Haa Valley Excursion",
      description:
        "Drive via Chele La Pass, one of Bhutan's highest motorable passes. Visit Katsho Village and Katsho Lhakhang in the beautiful Haa Valley before returning to Paro."
    },
    {
      day: "Day 3",
      title: "Shana to Thanthangka",
      description:
        "Begin the trek from Shana. Follow riverside trails through forests and remote settlements. Camp at Thanthangka with possible views of Mount Jomolhari."
    },
    {
      day: "Day 4",
      title: "Thanthangka to Jangothang",
      description:
        "Trek through alpine landscapes and yak herder camps. Arrive at spectacular Jangothang, surrounded by the towering peaks of Jomolhari and Jichu Drakye."
    },
    {
      day: "Day 5",
      title: "Acclimatisation Day",
      description:
        "A rest day in Jangothang. Enjoy a short acclimatisation hike while taking in the magnificent mountain scenery."
    },
    {
      day: "Day 6",
      title: "Jangothang to First Lake Camp",
      description:
        "Cross river bridges and climb steadily to high meadows with panoramic views of Jomolhari, Jomolhari II and Jichu Drakye. Camp beside a beautiful alpine lake."
    },
    {
      day: "Day 7",
      title: "Cross Bonte La Pass",
      description:
        "Trek over Bonte La, the highest pass of the journey. Enjoy breathtaking Himalayan panoramas before descending into the dramatic Soi Yaksa Valley."
    },
    {
      day: "Day 8",
      title: "Soi Yaksa to Thombu Camp",
      description:
        "A spectacular day of trekking through high ridges, prayer flag-covered passes and incredible mountain landscapes before reaching Thombu Camp."
    },
    {
      day: "Day 9",
      title: "Thombu La to Thimphu",
      description:
        "Cross Thombu La and enjoy one of the most scenic ridge walks in Bhutan. Descend to the army camp where your vehicle transfers you back to your hotel."
    },
    {
      day: "Day 10",
      title: "Explore Thimphu",
      description:
        "Relax and explore Bhutan's capital city. Visit cultural landmarks, local markets and traditional handicraft shops."
    },
    {
      day: "Day 11",
      title: "Forest Trails and Dodina",
      description:
        "Walk through bamboo forests and scenic mountain trails before reaching Dodina. Drive back to Thimphu."
    },
    {
      day: "Day 12",
      title: "Departure",
      description:
        "Transfer to Paro International Airport for your onward flight. Depart Bhutan with unforgettable memories of the Himalayas."
    }
  ];

  return (
    <main className="bg-slate-950 text-white min-h-screen">
      
      {/* Hero Section */}
      <section
        className="h-[70vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('/background.png')",
        }}
      >
        <div className="bg-black/60 p-8 rounded-xl text-center">
          <h1 className="text-5xl font-bold mb-4">
            Soi Yaksa Trek
          </h1>

          <p className="text-xl">
            12 Days Jomolhari Loop Adventure
          </p>

          <p className="mt-4 text-orange-400">
            Dragon Vista Tours
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="max-w-6xl mx-auto p-8">
        <h2 className="text-3xl font-bold mb-4">
          Trek Overview
        </h2>

        <p className="text-gray-300 leading-8">
          The Soi Yaksa Trek is one of Bhutan's most rewarding high-altitude
          adventures. Traverse remote valleys, alpine meadows, yak pastures,
          glacial lakes and dramatic Himalayan passes while enjoying
          magnificent views of Mount Jomolhari and Jichu Drakye.
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
              <h3 className="text-orange-400 font-bold text-xl">
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

      {/* CTA */}
      <section className="text-center py-16">
        <h2 className="text-3xl font-bold mb-4">
          Ready for the Adventure?
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