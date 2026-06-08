import Link from "next/link";

export default function AnniversaryJourney() {

  const itinerary = [

    {
      day: "Day 1",
      title: "Arrival in Bhutan – Begin Your Anniversary Escape",
      location: "Paro → Thimphu",
      image: "/paro.png",
      text: `Your journey begins as you arrive at Paro International Airport surrounded by breathtaking Himalayan mountains.

Your personal Bhutanese guide welcomes you before a scenic drive to Thimphu.

Celebrate the beginning of your special journey while discovering Bhutan’s peaceful culture, traditional architecture, sacred monuments and warm hospitality.

Visit National Memorial Chorten, Tashichho Dzong and Buddha Dordenma overlooking the beautiful valley.

Spend your evening enjoying Bhutan’s peaceful atmosphere together.`
    },


    {
      day: "Day 2",
      title: "Culture, Traditions & Beautiful Memories",
      location: "Thimphu Valley",
      image: "/thimphu.png",
      text: `Begin your day surrounded by mountain views and Bhutanese traditions.

Visit Sangaygang Viewpoint, Takin Preserve, ancient monasteries and cultural attractions.

Experience Bhutan’s living traditions, dress in traditional Bhutanese attire and create beautiful anniversary memories together.`
    },


    {
      day: "Day 3",
      title: "Journey to Punakha – Valley of Happiness",
      location: "Thimphu → Punakha",
      image: "/punakha.png",
      text: `Travel through the breathtaking Dochula Pass surrounded by Himalayan peaks and colourful prayer flags.

Explore the magnificent Punakha Dzong, one of Bhutan’s most romantic and historic landmarks.

Walk across the suspension bridge and enjoy peaceful moments surrounded by rivers and mountains.`
    },


    {
      day: "Day 4",
      title: "Sacred Anniversary Blessing & Renewal of Love",
      location: "Punakha Spiritual Experience",
      image: "/couple-blessing.png",
      text: `Today is dedicated to celebrating your journey together.

Hike through beautiful rice terraces and peaceful landscapes to Khamsum Yulley Namgyal Chorten, a sacred temple overlooking Punakha Valley.

Upon reaching the temple, experience a meaningful anniversary blessing ceremony.

🪔 Light traditional butter lamps together
🙏 Receive prayers from Buddhist monks
✨ Blessings for happiness, harmony, long life and continued love

Take a quiet moment together overlooking the valley — celebrating not only the years behind you, but the beautiful journey still ahead.

Afterwards enjoy a private riverside picnic and experience authentic Bhutanese hospitality with a local family visit.`
    },


    {
      day: "Day 5",
      title: "Romantic Paro Valley Discovery",
      location: "Punakha → Paro",
      image: "/paro-valley.png",
      text: `Return to the magical Paro Valley surrounded by mountains, rivers and timeless legends.

Visit Kyichu Lhakhang, one of Bhutan’s oldest temples filled with centuries of blessings.

Explore sacred sites and enjoy quiet romantic moments together in the Himalayan kingdom.`
    },


    {
      day: "Day 6",
      title: "Tiger’s Nest – Eternal Love Blessing Journey",
      location: "Taktsang Monastery",
      image: "/tigernest.png",
      text: `Today is the unforgettable highlight of your anniversary journey.

Walk together through peaceful forests and prayer flags toward the legendary Tiger’s Nest Monastery.

Reaching this sacred monastery represents strength, commitment and devotion.

At the temple:

🪔 Offer butter lamps together
🙏 Receive a special couple blessing ceremony
✨ Prayers for protection, happiness and many more beautiful years together

Celebrate your love story among the clouds of the Himalayas — a memory that stays forever.`
    },


    {
      day: "Day 7",
      title: "Farewell Bhutan – Memories Forever",
      location: "Departure",
      image: "/airport.png",
      text: `Your anniversary journey comes to an end, but Bhutan’s blessings remain with you.

Leave with unforgettable memories, renewed connection and the peaceful spirit of the Land of Happiness.

Tashi Delek.`
    }

  ];


return (

<main className="bg-[#f7f1e5] min-h-screen">


{/* HERO */}

<section
className="
h-screen
bg-cover
bg-center
flex
items-center
justify-center
text-center
relative
"

style={{
backgroundImage:
"linear-gradient(rgba(0,0,0,.55),rgba(0,0,0,.65)), url('/anniversary.png')"
}}

>

<div className="text-white px-6">

<h1 className="text-6xl font-bold mb-5">
💛 Milestone Anniversary Journey
</h1>

<p className="text-2xl">
Reignite the Spark in the Land of Happiness
</p>

</div>

</section>



{/* INTRO */}

<section className="max-w-4xl mx-auto text-center py-16 px-6">

<h2 className="text-4xl font-bold mb-6">
Celebrate Your Beautiful Journey Together
</h2>

<p className="text-gray-700 text-lg leading-8">

A romantic Bhutan experience created for couples celebrating years of love,
memories and new beginnings. Discover sacred blessings, peaceful landscapes
and unforgettable Himalayan moments.

</p>

</section>



{/* ITINERARY */}

<section className="max-w-6xl mx-auto px-6">

{itinerary.map((item,index)=>(

<div
key={index}
className="
bg-white
rounded-3xl
shadow-xl
overflow-hidden
mb-14
grid
md:grid-cols-2
"
>

<img
src={item.image}
className="
h-96
w-full
object-cover
"
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
mt-6
">

{item.text}

</p>


</div>


</div>


))}

</section>



{/* INCLUDED */}

<section className="
bg-gray-900
text-white
py-16
text-center
">


<h2 className="text-4xl font-bold mb-8">
What's Included ✓
</h2>


<div className="
grid
md:grid-cols-3
gap-5
max-w-5xl
mx-auto
text-lg
">


<p>✓ Private guided journey</p>
<p>✓ Bhutan Visa Arrangement</p>
<p>✓ Airport Transfers</p>
<p>✓ Accommodation</p>
<p>✓ Daily Meals</p>
<p>✓ Private Vehicle</p>
<p>✓ Licensed Guide</p>
<p>✓ Entry Fees</p>
<p>✓ Full Assistance</p>


</div>



<Link
href="/contact"
className="
inline-block
mt-12
bg-yellow-500
text-black
px-12
py-5
rounded-full
text-xl
font-bold
hover:bg-yellow-400
"
>

Plan My Anniversary Journey →

</Link>


</section>


</main>

);

}