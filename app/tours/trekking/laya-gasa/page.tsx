import Link from "next/link";
export default function LayaGasaTrek() {

  const itinerary = [

    {
      day: "Day 1",
      title: "Arrival in Paro – Transfer to Thimphu",
      description:
        "Welcome to Bhutan. Meet your guide and drive to Thimphu. Visit Sangaygang viewpoint, Buddha Dordenma and enjoy your first experience of Bhutanese culture."
    },

    {
      day: "Day 2",
      title: "Explore Thimphu",
      description:
        "Visit the Textile Museum, Tashichho Dzong, National Memorial Chorten, traditional paper-making factory and historic Simtokha Dzong."
    },

    {
      day: "Day 3",
      title: "Thimphu to Punakha",
      description:
        "Travel across Dochula Pass with its 108 chortens and Himalayan views. Visit Punakha Dzong and hike to Khamsum Yulley Namgyal Chorten."
    },

    {
      day: "Day 4",
      title: "Begin Trek – Tashithang to Damji",
      description:
        "Start your Himalayan adventure following the Mo Chhu River through deep forests, wooden bridges and peaceful wilderness before camping at Damji."
    },

    {
      day: "Day 5",
      title: "Damji to Gasa Hot Springs",
      description:
        "Walk through lush forests filled with orchids before reaching Gasa's famous natural hot springs, perfect for relaxing after trekking."
    },

    {
      day: "Day 6",
      title: "Explore Gasa",
      description:
        "Experience Gasa's mountain culture, dzong and peaceful surroundings. During festival season, witness traditional mask dances and celebrations."
    },

    {
      day: "Day 7",
      title: "Gasa to Koena",
      description:
        "Ascend towards Bale La Pass and enter beautiful alpine landscapes with yak pastures, mountain views and peaceful highland camps."
    },

    {
      day: "Day 8",
      title: "Koena to Laya Village",
      description:
        "Follow scenic mountain trails into Laya, home of the unique Layap people known for their traditions, dress and Himalayan lifestyle."
    },

    {
      day: "Day 9",
      title: "Explore Laya",
      description:
        "Spend a day discovering one of Bhutan's most remote villages. Meet Layap communities and experience their preserved mountain culture."
    },

    {
      day: "Day 10",
      title: "Laya to Limithang",
      description:
        "Trek through rhododendron, cedar and fir forests before reaching the spectacular valley of Limithang surrounded by high peaks."
    },

    {
      day: "Day 11",
      title: "Limithang to Robluthang",
      description:
        "Cross a high Himalayan pass around 5,000m with incredible mountain views before descending into open yak grazing pastures."
    },

    {
      day: "Day 12",
      title: "Robluthang High Pass Crossing",
      description:
        "A challenging trekking day crossing remote valleys, glacial streams and high passes with breathtaking Himalayan scenery."
    },

    {
      day: "Day 13",
      title: "Towards Chebisa Village",
      description:
        "Cross Gombu La Pass and descend into beautiful Chebisa village surrounded by cliffs, waterfalls and traditional stone houses."
    },

    {
      day: "Day 14",
      title: "Chebisa to Lingshi Region",
      description:
        "Walk scenic mountain trails with views of Lingshi Dzong and Bhutan's untouched highland landscapes."
    },

    {
      day: "Day 15",
      title: "High Himalayan Trails",
      description:
        "Continue across dramatic valleys, rivers and viewpoints offering spectacular views of snow-covered peaks."
    },

    {
      day: "Day 16",
      title: "Rest Day at Jangothang",
      description:
        "Enjoy an acclimatisation day at one of Bhutan's most beautiful campsites beneath towering Himalayan mountains."
    },

    {
      day: "Day 17",
      title: "Jangothang to Thangthangka",
      description:
        "Descend gradually through peaceful valleys with beautiful mountain scenery."
    },

    {
      day: "Day 18",
      title: "Thangthangka Valley Trek",
      description:
        "Follow rivers, forests and ancient trails once used by traders between Bhutan and Tibet."
    },

    {
      day: "Day 19",
      title: "Complete Trek – Return Towards Paro",
      description:
        "Follow the Paro River towards Drukgyal Dzong and enjoy final views of Mount Jomolhari."
    },

    {
      day: "Day 20",
      title: "Tiger's Nest Monastery",
      description:
        "Visit Drukgyal Dzong, hike to Bhutan's iconic Taktsang Monastery and explore sacred Kyichu Lhakhang."
    },

    {
      day: "Day 21",
      title: "Departure",
      description:
        "Transfer to Paro International Airport. Depart Bhutan with unforgettable memories of the Himalayas."
    }

  ];


  return (

    <main className="bg-slate-950 text-white min-h-screen">


      {/* HERO */}

      <section

        className="h-[75vh] bg-cover bg-center flex items-center justify-center"

        style={{
          backgroundImage: "url('/laya-gasa.jpg')",
        }}

      >

        <div className="bg-black/60 p-10 rounded-xl text-center">

          <h1 className="text-5xl font-bold">
            Laya Gasa Trek
          </h1>

          <p className="text-2xl mt-4">
            21 Days Ultimate Himalayan Expedition
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

          The Laya Gasa Trek is one of Bhutan's greatest Himalayan
          adventures, crossing remote valleys, high mountain passes,
          yak pastures and traditional Layap villages while experiencing
          some of the country's most spectacular landscapes.

        </p>


        <div className="grid md:grid-cols-3 gap-6 mt-8">

          <div className="bg-slate-900 p-5 rounded-xl">
            <h3 className="text-orange-400 font-bold">Distance</h3>
            <p>200–220 KM</p>
          </div>

          <div className="bg-slate-900 p-5 rounded-xl">
            <h3 className="text-orange-400 font-bold">Difficulty</h3>
            <p>Hard</p>
          </div>

          <div className="bg-slate-900 p-5 rounded-xl">
            <h3 className="text-orange-400 font-bold">Best Season</h3>
            <p>April–May / Late September–October</p>
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
            ✓ Layap Highland Culture
          </div>

          <div className="bg-slate-900 p-6 rounded-xl">
            ✓ Mount Jomolhari Views
          </div>

          <div className="bg-slate-900 p-6 rounded-xl">
            ✓ 5000m Himalayan Passes
          </div>

          <div className="bg-slate-900 p-6 rounded-xl">
            ✓ Gasa Natural Hot Springs
          </div>

        </div>


      </section>



      {/* BOOK */}

      <section className="text-center py-16">

        <h2 className="text-3xl font-bold mb-5">
          Begin Bhutan's Ultimate Trek
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