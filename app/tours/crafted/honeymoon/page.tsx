import Link from "next/link";

export default function HoneymoonJourney() {
  const itinerary = [
    {
      day: "Day 1",
      title: "Arrival in Bhutan – Welcome to the Land of Happiness",
      location: "Paro → Thimphu",
      image: "/paro.png",
      text: `Your journey begins as you arrive at Paro International Airport surrounded by the breathtaking Himalayan mountains.

Your personal Bhutanese guide welcomes you before your scenic drive to Thimphu.

Explore Bhutan’s cultural treasures including National Memorial Chorten, Tashichho Dzong and Buddha Dordenma overlooking the valley.

Spend your evening enjoying cafés, local shops and the peaceful mountain atmosphere together.`
    },

    {
      day: "Day 2",
      title: "Culture, Traditions & Hidden Stories of Thimphu",
      location: "Thimphu Valley",
      image: "/thimphu.png",
      text: `Start your morning with beautiful Himalayan views from Sangaygang Viewpoint.

Visit Takin Preserve, Dechen Phodrang Monastery, Simply Bhutan Museum and Simtokha Dzong.

Experience Bhutanese traditions, local lifestyle and timeless culture together.`
    },

    {
      day: "Day 3",
      title: "Himalayan Roads, Royal History & Punakha Romance",
      location: "Thimphu → Punakha",
      image: "/punakha.png",
      text: `Journey across the breathtaking Dochula Pass surrounded by prayer flags and Himalayan views.

Visit the famous Punakha Dzong, known as the Palace of Great Happiness.

Enjoy romantic walks across suspension bridges and peaceful valley landscapes.`
    },

    {
      day: "Day 4",
      title: "Love, Blessings & The Soul of Punakha",
      location: "Couple Blessing Experience",
      image: "/couple-blessing.png",
      text: `Begin with a beautiful hike through rice terraces and forests to Khamsum Yulley Namgyal Chorten.

Upon reaching the temple, experience a special romantic blessing ceremony.

🪔 Light traditional butter lamps together
🙏 Receive prayers from monks
✨ Blessings for lifelong happiness, harmony and love

Enjoy a private riverside picnic followed by an authentic Bhutanese family dinner experience.`
    },

    {
      day: "Day 5",
      title: "Ancient Temples & Timeless Paro Valley",
      location: "Punakha → Paro",
      image: "/paro-valley.png",
      text: `Return to beautiful Paro Valley surrounded by mountains and legends.

Visit Kyichu Lhakhang, one of Bhutan’s oldest temples, and Dumtse Lhakhang.

A journey through Bhutan’s ancient stories and spiritual traditions.`
    },

    {
      day: "Day 6",
      title: "Tiger’s Nest – Sacred Journey of Love & Blessings",
      location: "Taktsang Monastery",
      image: "/tigernest.png",
      text: `Experience Bhutan’s most unforgettable landmark — Tiger’s Nest Monastery.

Walk through peaceful forests and prayer flags before reaching this sacred temple.

🪔 Offer butter lamps together
🙏 Receive traditional blessing ceremony
✨ Prayers for happiness, protection and a beautiful life together

A once-in-a-lifetime honeymoon memory above the clouds.`
    },

    {
      day: "Day 7",
      title: "Farewell Bhutan – Until We Meet Again",
      location: "Departure",
      image: "/airport.png",
      text: `Your Bhutan honeymoon ends, but the memories continue forever.

From sacred temples and mountain valleys to blessings and shared moments — Bhutan leaves something special in every heart.`
    }
  ];


  return (

    <main className="bg-[#f7f1e5] min-h-screen">

      {/* HERO */}

      <section className="
      h-screen bg-[url('/honeymoon.png')]
      bg-cover bg-center
      flex items-center justify-center
      text-center relative">

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative text-white px-6">

          <h1 className="text-5xl font-bold mb-5">
            💍 The Ultimate Honeymoon Journey
          </h1>

          <p className="text-2xl">
            Where Love Meets the Himalayas
          </p>

        </div>

      </section>



      {/* INTRO */}

      <section className="max-w-4xl mx-auto text-center py-16 px-6">

        <h2 className="text-4xl font-bold mb-6">
          Escape To A World Built Just For Two
        </h2>

        <p className="text-gray-700 text-lg leading-8">

          Celebrate your new beginning in Bhutan where breathtaking
          landscapes, ancient traditions, spiritual blessings and
          unforgettable experiences create memories that last forever.

        </p>

      </section>




      {/* ITINERARY */}

      <section className="max-w-6xl mx-auto px-6">

        {itinerary.map((item,index)=>(


        <div 
        key={index}
        className="
        bg-white rounded-3xl shadow-xl overflow-hidden
        mb-14 grid md:grid-cols-2">

          
          <img
          src={item.image}
          className="h-96 w-full object-cover"
          />


          <div className="p-10">

            <p className="text-orange-500 font-bold text-xl">
              {item.day}
            </p>


            <h2 className="text-3xl font-bold mt-3">
              {item.title}
            </h2>


            <p className="text-yellow-600 mt-2">
              📍 {item.location}
            </p>


            <p className="
            whitespace-pre-line
            text-gray-700
            leading-8
            mt-6">

              {item.text}

            </p>


          </div>


        </div>

        ))}

      </section>



      {/* INCLUDED */}

      <section className="
      bg-gray-900 text-white
      py-16 px-6 text-center">


      <h2 className="text-4xl font-bold mb-8">
        What's Included ✓
      </h2>


      <div className="
      grid md:grid-cols-3 gap-5
      max-w-5xl mx-auto text-lg">


        <p>✓ Private guided journey</p>
        <p>✓ Bhutan Visa Arrangement</p>
        <p>✓ Airport Transfers</p>
        <p>✓ 3 star Accommodation</p>
        <p>✓ Daily Meals</p>
        <p>✓ Private Vehicle</p>
        <p>✓ Licensed Guide</p>
        <p>✓ Entry Fees</p>
        <p>✓ Full Support</p>


      </div>


      <Link
      href="/contact"
      className="
      inline-block mt-12
      bg-yellow-500
      text-black
      px-12 py-5
      rounded-full
      text-xl
      font-bold
      hover:bg-yellow-400">

      Enquire Now →

      </Link>


      </section>


    </main>

  );
}