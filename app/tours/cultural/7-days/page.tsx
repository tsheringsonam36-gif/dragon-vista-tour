import Link from "next/link";

export default function SevenDayTour() {
  const days = [
    {
      day: "DAY 1",
      title: "ARRIVAL IN PARO | THIMPHU",
      img: "/chorten.png",
      text: "Arrive in Paro and drive to Thimphu. Visit Buddha Point and enjoy your first Himalayan views.",
    },
    {
      day: "DAY 2",
      title: "THIMPHU EXPLORATION",
      img: "/buddha.png",
      text: "Explore museums, markets, temples, Memorial Chorten and Tashichho Dzong.",
    },
    {
      day: "DAY 3",
      title: "THIMPHU TO PUNAKHA",
      img: "/punakha.png",
      text: "Travel through Dochula Pass and visit Punakha Dzong and Suspension Bridge.",
    },
    {
      day: "DAY 4",
      title: "PUNAKHA EXPLORATION",
      img: "/punakha.png",
      text: "Visit Khamsum Yulley Namgyal Chorten and experience Bhutanese village life.",
    },
    {
      day: "DAY 5",
      title: "PUNAKHA TO PARO",
      img: "/paro.png",
      text: "Return to Paro and discover ancient temples and local culture.",
    },
    {
      day: "DAY 6",
      title: "TIGER'S NEST HIKE",
      img: "/tiger.png",
      text: "Hike to the iconic Tiger's Nest Monastery overlooking Paro Valley.",
    },
    {
      day: "DAY 7",
      title: "DEPART PARO",
      img: "/airport.png",
      text: "Farewell Bhutan with unforgettable memories.",
    },
  ];

  return (
    <main
      className="min-h-screen bg-cover bg-center p-10"
      style={{
        backgroundImage: "url('/golden.png')",
      }}
    >

      <h1 className="text-center text-6xl font-bold text-red-950">
        Golden Kingdom Journey
      </h1>

      <p className="text-center text-3xl mt-3 italic">
        7 Days | The Dragon Kingdom Discovery
      </p>


      <div className="grid lg:grid-cols-3 gap-8 mt-12">


        {/* LEFT ITINERARY */}
        <div className="lg:col-span-2 space-y-4">

          {days.map((item) => (
            <div
              key={item.day}
              className="flex bg-white/80 rounded-xl overflow-hidden shadow"
            >

              <img
                src={item.img}
                className="w-52 object-cover"
              />

              <div className="p-5">

                <h2 className="text-xl font-bold text-blue-950">
                  {item.day} - {item.title}
                </h2>

                <p className="mt-3">
                  {item.text}
                </p>

              </div>

            </div>
          ))}

        </div>



        {/* RIGHT SIDE */}
        <div className="bg-white/80 rounded-2xl p-8 shadow">


          <h2 className="text-2xl font-bold text-center text-blue-950">
            TOUR HIGHLIGHTS
          </h2>

          <ul className="mt-8 space-y-5 text-lg">
            <li>🏯 Tashichho Dzong</li>
            <li>🙏 Buddha Dordenma</li>
            <li>🏔️ Dochula Pass</li>
            <li>🏰 Punakha Dzong</li>
            <li>🥾 Tiger's Nest Monastery</li>
          </ul>


          {/* PRICE BOX */}
          <div className="mt-10 bg-green-950 text-white rounded-3xl p-8 text-center">

            <p>STARTING FROM</p>

            <p>USD</p>

            <h2 className="text-5xl font-bold text-yellow-500">
              2,450
            </h2>

          </div>


          {/* TALK BUTTON */}
          <Link
            href="/contact"
            className="block mt-6 bg-yellow-500 text-white rounded-full py-5 text-center text-xl font-bold hover:bg-yellow-600 transition"
          >
            Talk to Us →
          </Link>


        </div>


      </div>

    </main>
  );
}