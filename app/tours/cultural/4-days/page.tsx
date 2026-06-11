import Link from "next/link";

export default function FourDayCultureTour() {

  const days = [

    {
      day: "DAY 1",
      title: "ARRIVAL IN PARO | THIMPHU",
      img: "/buddha.png",
      text:
        "Arrive at Paro International Airport and receive a warm Bhutanese welcome from your guide. Drive to Thimphu and enjoy your first taste of Bhutanese cuisine. Visit National Memorial Chorten, Tashichho Dzong, Centenary Farmers' Market (weekend), Buddha Dordenma and enjoy an evening walk through Thimphu town.",
    },


    {
      day: "DAY 2",
      title: "THIMPHU TO PARO | CULTURAL DISCOVERY",
      img: "/paro.png",
      text:
        "Journey back to beautiful Paro Valley, surrounded by sacred temples and Himalayan landscapes. Explore Rinpung Dzong, known as the Fortress of the Heap of Jewels, and visit the historic Drukgyal Dzong ruins built in the 17th century. Experience Paro's peaceful culture and heritage.",
    },


    {
      day: "DAY 3",
      title: "TIGER'S NEST MONASTERY HIKE",
      img: "/tiger.png",
      text:
        "Experience Bhutan's most iconic journey with a hike to Taktsang Monastery, the legendary Tiger's Nest. Walk through pine forests, prayer flags and mountain trails before reaching this sacred monastery dramatically located on a cliff above Paro Valley.",
    },


    {
      day: "DAY 4",
      title: "DEPARTURE FROM PARO",
      img: "/airport.png",
      text:
        "Enjoy your final morning in Bhutan before transferring to Paro International Airport. Depart with unforgettable memories, new friendships and the peaceful spirit of the Land of the Thunder Dragon.",
    },

  ];


  return (

    <main

      className="min-h-screen bg-cover bg-center p-10"

      style={{

        backgroundImage: "url('/monk.png')",

      }}

    >



      {/* TITLE */}

      <h1 className="text-center text-6xl font-bold text-red-950">

        A Taste of Bhutan

      </h1>



      <p className="text-center text-3xl mt-3 italic">

        4 Days | Journey to the Land of Happiness

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

            <li>🌾 Farmers Market</li>

            <li>🏰 Rinpung Dzong</li>

            <li>🏯 Drukgyal Dzong</li>

            <li>🥾 Tiger's Nest Monastery</li>


          </ul>







          {/* EXPERIENCE */}

          <div className="mt-10 bg-white/70 rounded-xl p-5">


            <h3 className="font-bold text-blue-950 text-center">

              EXPERIENCE BHUTAN

            </h3>


            <div className="grid grid-cols-2 gap-3 mt-5 text-center">


              <p>🏔️ Himalayas</p>

              <p>🙏 Spirituality</p>

              <p>🏯 Culture</p>

              <p>😊 Happiness</p>


            </div>


          </div>







          {/* PRICE */}

          <div className="mt-10 bg-green-950 text-white rounded-3xl p-8 text-center">



            <p>

              STARTING FROM

            </p>



            <p>

              USD

            </p>



            <h2 className="text-5xl font-bold text-yellow-500">

              1050

            </h2>



          </div>









          {/* BUTTON */}

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