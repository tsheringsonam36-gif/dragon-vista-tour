import Link from "next/link";

const treks = [
  {
    name: "Bumdra Trek",
    duration: "7 Days",
    link: "/tours/trekking/bumdra",
  },
  {
    name: "Jomolhari Trek",
    duration: "11 Days",
    link: "/tours/trekking/jomolhari",
  },
  {
    name: "Soi Yaksa Trek",
    duration: "12 Days",
    link: "/tours/trekking/soi-yaksa",
  },
  {
    name: "Druk Path Trek",
    duration: "9 Days",
    link: "/tours/trekking/druk-path",
  },
  {
    name: "Dagala Thousand Lakes Trek",
    duration: "9 Days",
    link: "/tours/trekking/dagala",
  },
  {
    name: "Sagala Trek",
    duration: "7 Days",
    link: "/tours/trekking/sagala",
  },
  {
    name: "Merak Sakteng Trek",
    duration: "18 Days",
    link: "/tours/trekking/merak-sakteng",
  },
  {
    name: "Laya Gasa Trek",
    duration: "21 Days",
    link: "/tours/trekking/laya-gasa",
  },
  {
    name: "Sinchula Trek",
    duration: "5 Days",
    link: "/tours/trekking/sinchula",
  },
];

export default function TrekkingPage() {
  return (
  <main className="relative min-h-screen overflow-hidden">

    {/* Background Video */}
    <video
      autoPlay
      loop
      muted
      playsInline
      className="absolute inset-0 w-full h-full object-cover"
    >
      <source src="/trekking-video.mp4" type="video/mp4" />
    </video>

    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-black/50"></div>

    {/* Content */}
    <div className="relative z-10 p-10 text-white">
      <h1 className="text-5xl font-bold mb-4">
        Bhutan Trekking Tours
      </h1>

      <p className="text-xl mb-8">
        Explore the untouched Himalayas with Dragon Vista Tours.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {treks.map((trek) => (
          <Link
            key={trek.name}
            href={trek.link}
            className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 hover:bg-white/20"
          >
            <h2 className="text-2xl font-bold">{trek.name}</h2>
            <p>{trek.duration}</p>
          </Link>
        ))}
      </div>
    </div>

  </main>
);
}