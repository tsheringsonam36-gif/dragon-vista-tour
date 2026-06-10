import Link from "next/link";
export default function MerakSaktengTrek() {

  const itinerary = [

    {
      day: "Day 1",
      title: "Arrival in Paro – Transfer to Thimphu",
      description:
        "Arrive in Bhutan and meet your guide. Drive to Thimphu, acclimatise and visit highlights including National Memorial Chorten and Buddha Dordenma overlooking the valley."
    },

    {
      day: "Day 2",
      title: "Explore Thimphu",
      description:
        "Discover Bhutanese culture through the Textile Museum, Tashichho Dzong, traditional paper-making factory, Simtokha Dzong and the local farmers market."
    },

    {
      day: "Day 3",
      title: "Thimphu to Punakha / Wangdue",
      description:
        "Cross the scenic Dochula Pass with its 108 chortens and Himalayan views. Continue towards Wangdue Valley and enjoy Bhutan's traditional landscapes."
    },

    {
      day: "Day 4",
      title: "Explore Phobjikha Valley",
      description:
        "Visit the beautiful glacial valley of Phobjikha, winter home of the endangered black-necked cranes, and explore Gangtey Monastery."
    },

    {
      day: "Day 5",
      title: "Journey to Trongsa",
      description:
        "Travel to the historic home of Bhutan's royal family. Visit Trongsa Dzong, one of the kingdom's most impressive fortresses."
    },

    {
      day: "Day 6",
      title: "Discover Bumthang Valley",
      description:
        "Explore Bhutan's spiritual heartland including Kurjey Lhakhang, Jambay Lhakhang, Tamshing Monastery, Jakar Dzong and Thangbi Valley."
    },

    {
      day: "Day 7",
      title: "Bumthang to Eastern Bhutan",
      description:
        "Travel through Thrumshingla National Park with untouched forests, waterfalls and spectacular eastern Himalayan landscapes."
    },

    {
      day: "Day 8",
      title: "Begin Trek – Radi to Charbaling",
      description:
        "Start trekking from Radi and Khardung villages. Follow forest trails and the Murbi Chhu before reaching Charbaling grazing grounds."
    },

    {
      day: "Day 9",
      title: "Charbaling to Merak Village",
      description:
        "Cross Thumburtsa La Pass and walk through yak pastures before arriving in Merak, home of Bhutan's unique Brokpa highland community."
    },

    {
      day: "Day 10",
      title: "Merak to Sakteng",
      description:
        "Cross Nyuksang La Pass with dramatic mountain scenery before descending into the remote and culturally rich village of Sakteng."
    },

    {
      day: "Day 11",
      title: "Explore Sakteng Village",
      description:
        "Spend the day experiencing Brokpa traditions, highland culture, local lifestyles and the unique heritage of eastern Bhutan."
    },

    {
      day: "Day 12",
      title: "Sakteng to Jyonkhar",
      description:
        "Trek across Munde La through peaceful forests, yak grazing areas and traditional mountain landscapes before reaching Jyonkhar."
    },

    {
      day: "Day 13",
      title: "Jyonkhar to Phongmey",
      description:
        "Enjoy a shorter trekking day through beautiful valleys and traditional villages before arriving at peaceful Phongmey."
    },

    {
      day: "Day 14",
      title: "Return Journey to Bumthang",
      description:
        "Enjoy a scenic drive back towards central Bhutan through changing landscapes."
    },

    {
      day: "Day 15",
      title: "Bumthang to Punakha",
      description:
        "Travel west to Punakha Valley, famous for its warmer climate, history and beautiful scenery."
    },

    {
      day: "Day 16",
      title: "Explore Punakha",
      description:
        "Visit Punakha Dzong, Chimi Lhakhang and Khamsum Yulley Namgyal Chorten while exploring one of Bhutan's most beautiful valleys."
    },

    {
      day: "Day 17",
      title: "Punakha to Paro & Tiger's Nest",
      description:
        "Return to Paro. Visit Rinpung Dzong, hike towards the legendary Tiger's Nest Monastery and explore Kyichu Lhakhang."
    },

    {
      day: "Day 18",
      title: "Departure from Bhutan",
      description:
        "Transfer to Paro International Airport and depart with unforgettable memories of Bhutan's mountains, culture and people."
    },

  ];


  return (

    <main className="bg-slate-950 text-white min-h-screen">


      {/* HERO */}

      <section

        className="h-[75vh] bg-cover bg-center flex items-center justify-center"

        style={{
          backgroundImage: "url('/yak.png')",
        }}

      >


        <div className="bg-black/60 p-10 rounded-xl text-center">


          <h1 className="text-5xl font-bold">
            Merak Sakteng Trek
          </h1>


          <p className="text-2xl mt-4">
            18 Days Eastern Bhutan Adventure
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

          Journey into one of Bhutan's most remote regions.
          The Merak Sakteng Trek combines untouched Himalayan wilderness,
          rare wildlife, sacred landscapes and the fascinating culture of
          the Brokpa semi-nomadic communities.

        </p>




        <div className="grid md:grid-cols-3 gap-6 mt-8">


          <div className="bg-slate-900 p-5 rounded-xl">

            <h3 className="text-orange-400 font-bold">
              Distance
            </h3>

            <p>14 KM+</p>

          </div>



          <div className="bg-slate-900 p-5 rounded-xl">

            <h3 className="text-orange-400 font-bold">
              Difficulty
            </h3>

            <p>Moderate</p>

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
            ✓ Brokpa Nomadic Culture
          </div>


          <div className="bg-slate-900 p-6 rounded-xl">
            ✓ Sakteng Wildlife Sanctuary
          </div>


          <div className="bg-slate-900 p-6 rounded-xl">
            ✓ Remote Eastern Himalayas
          </div>


          <div className="bg-slate-900 p-6 rounded-xl">
            ✓ Traditional Highland Villages
          </div>


        </div>


      </section>





      {/* BOOK */}

      <section className="text-center py-16">


        <h2 className="text-3xl font-bold mb-5">
          Explore Bhutan's Last Hidden Frontier
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