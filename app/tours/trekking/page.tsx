import Link from "next/link";

export default function TrekkingTour() {
  const treks = [
    {
      name: "Dagala Trek",
      link: "/tours/trekking/dagala-trek",
    },
    {
      name: "Druk Path Trek",
      link: "/tours/trekking/druk-path-trek",
    },
    {
      name: "Jhomolhari Trek",
      link: "/tours/trekking/jhomolhari-trek",
    },
    {
      name: "Laya Lingshi Trek",
      link: "/tours/trekking/laya-lingshi-trek",
    },
  ];

  return (
    <main
      className="min-h-screen bg-cover bg-center p-10"
      style={{
        backgroundImage: "url('/trekking.png')",
      }}
    >

      {/* dark overlay */}
      <div className="bg-black/50 min-h-screen p-10 rounded-xl">

        <h1 className="text-5xl font-bold text-white">
          Bhutan Trekking Tours
        </h1>

        <p className="mt-4 text-lg text-white">
          Explore Bhutan’s most beautiful Himalayan trekking routes,
          from ancient trails to high mountain adventures.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-10">

          {treks.map((trek) => (
            <Link
              key={trek.name}
              href={trek.link}
              className="bg-white/80 rounded-xl p-6 hover:scale-105 transition"
            >

              <h2 className="text-2xl font-bold">
                {trek.name}
              </h2>

              <p className="mt-2">
                View itinerary →
              </p>

            </Link>
          ))}

        </div>

      </div>

    </main>
  );
}