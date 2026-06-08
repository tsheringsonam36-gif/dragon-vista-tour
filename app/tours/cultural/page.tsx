import Link from "next/link";

export default function CulturalTours() {
  return (
    
  <main className="relative min-h-screen p-10 overflow-hidden">

  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover -z-10"
  >
    <source src="/bhutan-video.mp4" type="video/mp4" />
  </video>

  <div className="absolute inset-0 bg-black/30 -z-10"></div>

      <h1 className="text-5xl font-bold text-center mb-10 text-yellow-200 drop-shadow-lg">
        Bhutan Cultural Tours
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        <Link href="/tours/cultural/4-days">
          <div className="bg-black/70 text-white p-6 rounded-xl shadow-lg hover:shadow-xl cursor-pointer backdrop-blur-sm">
            <h2 className="text-2xl font-bold">4 Days</h2>
            <p>A Taste of Bhutan Tour.</p>
          </div>
        </Link>

        <Link href="/tours/cultural/5-days">
  <div className="bg-black/70 text-white p-6 rounded-xl shadow-lg hover:shadow-xl cursor-pointer backdrop-blur-sm">
    <h2 className="text-2xl font-bold">5 Days</h2>
    <p>Mystical Bhutan Experience Tour.</p>
  </div>
</Link>

        <Link href="/tours/cultural/7-days">
  <div className="bg-black/70 text-white p-6 rounded-xl shadow-lg hover:shadow-xl cursor-pointer backdrop-blur-sm">
    <h2 className="text-2xl font-bold">7 Days</h2>
    <p>Explore Bhutan Golden Journey Tour.</p>
  </div>
</Link>

        <Link href="/tours/cultural/10-days">
  <div className="bg-black/70 text-white p-6 rounded-xl shadow-lg hover:shadow-xl cursor-pointer backdrop-blur-sm">
    <h2 className="text-2xl font-bold">10 Days</h2>
    <p>Bhutan Grand Discovery Tour.</p>
  </div>
</Link>

        <Link href="/tours/cultural/15-days">
  <div className="bg-black/70 text-white p-6 rounded-xl shadow-lg hover:shadow-xl cursor-pointer backdrop-blur-sm">
    <h2 className="text-2xl font-bold">15 Days</h2>
    <p>The ultimate Bhutan cultural Adventure.</p>
  </div>
</Link>
        </div>

    </main>
  );
}