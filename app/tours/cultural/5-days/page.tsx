import Link from "next/link";

export default function FiveDayCultureTour() {

  const days = [

    {
      day: "DAY 1",
      title: "ARRIVAL IN PARO | THIMPHU",
      img: "/buddha.png",
      text:
        "Arrive at Paro International Airport and receive a warm welcome from your Bhutanese guide. Enjoy a scenic drive to Thimphu and your first taste of traditional Bhutanese cuisine. Visit National Memorial Chorten, Tashichho Dzong, Centenary Farmers' Market (weekend) and the magnificent Buddha Dordenma overlooking Thimphu Valley. End your evening exploring Thimphu town.",
    },


    {
      day: "DAY 2",
      title: "THIMPHU TO PUNAKHA",
      img: "/punakha.png",
      text:
        "Travel across the breathtaking Dochula Pass decorated with 108 chortens and enjoy panoramic Himalayan views. Continue to Punakha Valley and explore the magnificent Punakha Dzong located between Pho Chhu and Mo Chhu rivers. Later hike to Khamsum Yulley Namgyal Chorten, one of Bhutan's most beautiful spiritual monuments.",
    },


    {
      day: "DAY 3",
      title: "PUNAKHA TO PARO | HERITAGE DISCOVERY",
      img: "/paro.png",
      text:
        "Begin with a peaceful walk through rice fields to Chimi Lhakhang, the famous Fertility Temple blessed by Drukpa Kunley. Continue your journey to Paro Valley, home to ancient monasteries and beautiful landscapes. Visit Rinpung Dzong and explore the historic Drukgyal Dzong ruins built to celebrate Bhutan's victory over Tibetan forces.",
    },


    {
      day: "DAY 4",
      title: "TIGER'S NEST MONASTERY HIKE",
      img: "/tiger.png",
      text:
        "Experience the unforgettable hike to Taktsang Monastery, famously known as Tiger's Nest. Located dramatically on a cliff 900 metres above Paro Valley, this sacred monastery is Bhutan's most iconic landmark. After the hike, visit Kyichu Lhakhang, one of Bhutan's oldest and most peaceful temples dating back to the 7th century.",
    },


    {
      day: "DAY 5",
      title: "DEPARTURE FROM PARO",
      img: "/airport.png",
      text:
        "After breakfast, transfer to Paro International Airport for departure. Leave Bhutan carrying unforgettable memories of ancient monasteries, Himalayan landscapes, warm hospitality and the peaceful spirit of the Land of the Thunder Dragon. Tashi Delek!",
    },

  ];



  return (

    <main

      className="min-h-screen bg-cover bg-center p-10"

      style={{

        backgroundImage: "url('/7 days.png')",

      }}

    >



      {/* TITLE */}

      <h1 className="text-center text-6xl font-bold text-red-950">

        BHUTAN CULTURAL ITINERARY

      </h1>



      <p className="text-center text-3xl mt-3 italic">

        5 Days Journey to the Land of Happiness

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


                <p className="mt-3 leading-7">

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


            <li>🙏 Buddha Dordenma</li>

            <li>🏯 Tashichho Dzong</li>

            <li>🏔️ Dochula Pass</li>

            <li>🏰 Punakha Dzong</li>

            <li>🌾 Chimi Lhakhang</li>

            <li>🏯 Rinpung Dzong</li>

            <li>🥾 Tiger's Nest Monastery</li>

            <li>🛕 Kyichu Lhakhang</li>


          </ul>







          {/* EXPERIENCE */}

          <div className="mt-10 bg-white/70 rounded-xl p-5">


            <h3 className="font-bold text-blue-950 text-center">

              EXPERIENCE BHUTAN

            </h3>


            <div className="grid grid-cols-2 gap-3 mt-5 text-center">


              <p>🏯 Ancient Culture</p>

              <p>🏔️ Himalayas</p>

              <p>😊 Hospitality</p>

              <p>🙏 Spiritual Journey</p>


            </div>


          </div>








          {/* PRICE BOX */}

          <div className="mt-10 bg-green-950 text-white rounded-3xl p-8 text-center">


            <p>

              STARTING FROM

            </p>


            <p>

              USD

            </p>


            <h2 className="text-5xl font-bold text-yellow-500">

              1,250

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