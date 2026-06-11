import Link from "next/link";

export default function FifteenDayCultureTour() {

  const days = [

    {
      day: "DAY 1",
      title: "ARRIVAL IN PARO | THIMPHU",
      img: "/buddha.png",
      text:
        "Arrive in Bhutan and meet your personal guide. Drive to Thimphu, enjoy traditional Bhutanese cuisine and visit Buddha Dordenma, Motithang Takin Preserve and explore the peaceful streets of Bhutan’s capital.",
    },

    {
      day: "DAY 2",
      title: "FLIGHT TO YONPHULA | TRASHIGANG",
      img: "/yonphula.png",
      text:
        "Take a scenic domestic flight to eastern Bhutan. Visit Sherubtse College, Zangtokpelri Monastery, National Handloom Centre in Khaling and discover the historic Trashigang Dzong.",
    },

    {
      day: "DAY 3",
      title: "TRASHI YANGTSE EXPLORATION",
      img: "/kora.png",
      text:
        "Explore the culturally rich eastern region of Trashi Yangtse. Visit sacred Gom Kora, beautiful Chorten Kora and discover traditional weaving villages surrounded by untouched landscapes.",
    },

    {
      day: "DAY 4",
      title: "TRASHIGANG TO MONGAR",
      img: "/trashigang.png",
      text:
        "Travel through the lush Kuri Chhu Valley with rice terraces and tropical landscapes. Visit Mongar Dzong, a wonderful example of traditional Bhutanese craftsmanship.",
    },

    {
      day: "DAY 5",
      title: "MONGAR TO BUMTHANG",
      img: "/bumthang.png",
      text:
        "Experience one of Bhutan’s most scenic drives through Thrumshing La Pass at 3,800m. Visit the ancient village of Ura before reaching the spiritual valley of Bumthang.",
    },

    {
      day: "DAY 6",
      title: "BUMTHANG SPIRITUAL DISCOVERY",
      img: "/bumthang.png",
      text:
        "Explore Bhutan’s spiritual heartland including Tamshing Goemba, Kurjey Lhakhang, Jambay Lhakhang, Jakar Dzong and the peaceful Thangbi Valley.",
    },

    {
      day: "DAY 7",
      title: "BUMTHANG | BURNING LAKE",
      img: "/lake.png",
      text:
        "Visit the sacred Mebar Tsho, known as Burning Lake, where the great treasure discoverer Pema Lingpa revealed hidden spiritual treasures.",
    },

    {
      day: "DAY 8",
      title: "BUMTHANG TO GANGTEY",
      img: "/gangtey.png",
      text:
        "Journey through Trongsa and visit Trongsa Dzong and Taa Dzong Museum before arriving at the beautiful Phobjikha Valley, home of black-necked cranes.",
    },

    {
      day: "DAY 9",
      title: "GANGTEY TO PUNAKHA",
      img: "/punakha.png",
      text:
        "Travel towards Punakha through beautiful landscapes. Explore Wangdue region and traditional villages before relaxing in the peaceful Punakha Valley.",
    },

    {
      day: "DAY 10",
      title: "PUNAKHA DISCOVERY",
      img: "/punakha.png",
      text:
        "Visit Chimi Lhakhang Fertility Temple, magnificent Punakha Dzong and walk across Bhutan’s longest suspension bridge above the Pho Chhu River.",
    },

    {
      day: "DAY 11",
      title: "DOCHULA PASS | KHAMSUM CHORTEN",
      img: "/dochula.png",
      text:
        "Enjoy Himalayan views from Dochula Pass with 108 chortens. Hike to Khamsum Yulley Namgyal Chorten, built to bring peace and harmony.",
    },

    {
      day: "DAY 12",
      title: "THIMPHU CULTURAL EXPERIENCE",
      img: "/thimphu.png",
      text:
        "Discover Bhutanese lifestyle through Folk Heritage Museum, Textile Museum, paper making factory, Farmers’ Market, Simtokha Dzong, Memorial Chorten and Changangkha Lhakhang.",
    },

    {
      day: "DAY 13",
      title: "HAA VALLEY EXCURSION",
      img: "/haa.png",
      text:
        "Drive across Chele La Pass, Bhutan’s highest motorable road. Explore hidden Haa Valley, Katsho village and peaceful traditional temples before returning to Paro.",
    },

    {
      day: "DAY 14",
      title: "TIGER'S NEST MONASTERY",
      img: "/tiger.png",
      text:
        "Hike to the legendary Taktsang Monastery, Bhutan’s most sacred landmark. Visit Drukgyal Dzong ruins and Kyichu Lhakhang, one of Bhutan’s oldest temples.",
    },

    {
      day: "DAY 15",
      title: "DEPARTURE FROM PARO",
      img: "/airport.png",
      text:
        "Say farewell to Bhutan with unforgettable memories of sacred monasteries, Himalayan valleys, rich culture and warm Bhutanese hospitality. Tashi Delek!",
    },

  ];


  return (

    <main

      className="min-h-screen bg-cover bg-center p-10"

      style={{

        backgroundImage: "url('/monk.png')",

      }}

    >


      <h1 className="text-center text-6xl font-bold text-red-950">

        Ultimate Bhutan Adventure

      </h1>


      <p className="text-center text-3xl mt-3 italic">

        15 Days | Soul of the Thunder Dragon

      </p>




      <div className="grid lg:grid-cols-3 gap-8 mt-12">


        {/* ITINERARY */}

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





        {/* RIGHT */}

        <div className="bg-white/80 rounded-2xl p-8 shadow">


          <h2 className="text-2xl font-bold text-center text-blue-950">

            TOUR HIGHLIGHTS

          </h2>


          <ul className="mt-8 space-y-5 text-lg">

            <li>🙏 Buddha Dordenma</li>

            <li>🏰 Punakha Dzong</li>

            <li>🛕 Bumthang Temples</li>

            <li>🏯 Trongsa Dzong</li>

            <li>🦢 Phobjikha Valley</li>

            <li>🏔️ Haa Valley</li>

            <li>🥾 Tiger's Nest</li>

          </ul>





          <div className="mt-10 bg-white/70 rounded-xl p-5">


            <h3 className="font-bold text-blue-950 text-center">

              EXPERIENCE BHUTAN

            </h3>


            <div className="grid grid-cols-2 gap-3 mt-5 text-center">


              <p>🏯 Culture</p>

              <p>🏔️ Himalayas</p>

              <p>😊 Hospitality</p>

              <p>🙏 Spirituality</p>


            </div>


          </div>





          <div className="mt-10 bg-green-950 text-white rounded-3xl p-8 text-center">


            <p>STARTING FROM</p>

            <p>USD</p>


            <h2 className="text-5xl font-bold text-yellow-500">

              4,900

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