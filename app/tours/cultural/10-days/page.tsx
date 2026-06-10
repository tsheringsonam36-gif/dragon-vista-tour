import Link from "next/link";

export default function TenDayCultureTour() {

  const days = [

    {
      day: "DAY 1",
      title: "ARRIVAL IN PARO | THIMPHU",
      img: "/buddha.png",
      text:
        "Welcome to Bhutan, the Land of the Thunder Dragon. Drive to Thimphu and visit Motithang Takin Preserve, Buddha Dordenma viewpoint and enjoy your first experience of Bhutanese culture and cuisine.",
    },

    {
      day: "DAY 2",
      title: "THIMPHU CULTURAL DISCOVERY",
      img: "/chorten.png",
      text:
        "Explore Centenary Farmers’ Market, Folk Heritage Museum, Textile Museum, Memorial Chorten, traditional handmade paper factory, Simtokha Dzong and the magnificent Tashichho Dzong.",
    },

    {
      day: "DAY 3",
      title: "THIMPHU TO PUNAKHA",
      img: "/punakha.png",
      text:
        "Travel across Dochula Pass with Himalayan views and 108 chortens. Visit Punakha Dzong, Chimi Lhakhang Fertility Temple and hike to Khamsum Yulley Namgyal Chorten.",
    },

    {
      day: "DAY 4",
      title: "PUNAKHA TO BUMTHANG VIA TRONGSA",
      img: "/trongsa.png",
      text:
        "Enjoy a scenic journey through central Bhutan. Visit Chendebji Chorten and explore Trongsa Dzong, the historic ancestral home connected with Bhutan’s royal family.",
    },

    {
      day: "DAY 5",
      title: "BUMTHANG SPIRITUAL VALLEY",
      img: "/bumthang.png",
      text:
        "Discover Bhutan’s spiritual heartland. Visit Kurjey Lhakhang, Jambay Lhakhang, Tamshing Monastery, Thangbi Valley, Kenchosum Lhakhang, Jakar Dzong and Swiss Farm.",
    },

    {
      day: "DAY 6",
      title: "BUMTHANG TO GANGTEY",
      img: "/gangtey.png",
      text:
        "Travel through Trongsa and visit Taa Dzong Royal Heritage Museum. Experience Bhutanese history, royal collections and beautiful mountain landscapes.",
    },

    {
      day: "DAY 7",
      title: "PHOBJIKHA VALLEY EXPLORATION",
      img: "/phobjikha.png",
      text:
        "Explore peaceful Gangtey Valley, winter home of the rare black-necked cranes. Visit Gangtey Monastery and experience traditional Bhutanese countryside life.",
    },

    {
      day: "DAY 8",
      title: "GANGTEY TO PARO",
      img: "/paro.png",
      text:
        "Return to beautiful Paro Valley surrounded by sacred sites and Himalayan scenery. Visit Rinpung Dzong and Ta Dzong National Museum.",
    },

    {
      day: "DAY 9",
      title: "TIGER'S NEST MONASTERY HIKE",
      img: "/tiger.png",
      text:
        "Hike to the legendary Taktsang Monastery, Bhutan’s most iconic landmark. Later visit Drukgyal Dzong ruins and the ancient Kyichu Lhakhang temple.",
    },

    {
      day: "DAY 10",
      title: "DEPARTURE FROM PARO",
      img: "/airport.png",
      text:
        "Say farewell to Bhutan with unforgettable memories of Himalayan landscapes, ancient monasteries, culture and the peaceful spirit of the Thunder Dragon.",
    },

  ];


  return (

    <main

      className="min-h-screen bg-cover bg-center p-10"

      style={{

        backgroundImage: "url('/background.png')",

      }}

    >



      <h1 className="text-center text-6xl font-bold text-red-950">

        BHUTAN CULTURAL ITINERARY

      </h1>



      <p className="text-center text-3xl mt-3 italic">

        10 Days Journey Through Bhutan

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








        {/* RIGHT PANEL */}

        <div className="bg-white/80 rounded-2xl p-8 shadow">



          <h2 className="text-2xl font-bold text-center text-blue-950">

            TOUR HIGHLIGHTS

          </h2>



          <ul className="mt-8 space-y-5 text-lg">


            <li>🙏 Buddha Dordenma</li>

            <li>🏯 Tashichho Dzong</li>

            <li>🏔️ Dochula Pass</li>

            <li>🏰 Punakha Dzong</li>

            <li>🛕 Bumthang Temples</li>

            <li>🏯 Trongsa Dzong</li>

            <li>🦢 Phobjikha Valley</li>

            <li>🥾 Tiger's Nest Monastery</li>


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







          {/* PRICE */}

          <div className="mt-10 bg-green-950 text-white rounded-3xl p-8 text-center">



            <p>STARTING FROM</p>


            <p>USD</p>



            <h2 className="text-5xl font-bold text-yellow-500">

              3,150

            </h2>


          </div>






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