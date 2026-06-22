import Link from "next/link";


export default function TravelTips() {
  return (

    <main className="min-h-screen bg-black text-white px-10 py-20">


      <h1 className="text-5xl font-bold text-orange-400 text-center mb-5">
        Bhutan Travel Tips
      </h1>


      <p className="text-center text-gray-300 mb-16 text-xl">
        Helpful information before travelling with Dragon Vista Tours
      </p>



      <div className="max-w-4xl mx-auto grid gap-8">


        <Link
          href="/travel-tips/visa"
          className="bg-white text-black p-8 rounded-xl hover:scale-105 transition"
        >
          🌏 Visa & Travel Guide
        </Link>



        <Link
          href="/travel-tips/terms"
          className="bg-white text-black p-8 rounded-xl hover:scale-105 transition"
        >
          📄 Booking Terms & Conditions
        </Link>



        <Link
          href="/travel-tips/dos-donts"
          className="bg-white text-black p-8 rounded-xl hover:scale-105 transition"
        >
          🙏 Do's and Don'ts
        </Link>



        <Link
          href="/travel-tips/best-time"
          className="bg-white text-black p-8 rounded-xl hover:scale-105 transition"
        >
          🍂 Best Time to Visit Bhutan
        </Link>


      </div>


    </main>

  );
}