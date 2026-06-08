import Link from "next/link";

export default function FamilyJourney() {

const itinerary = [

{
day:"Day 1",
title:"Arrival in Bhutan – Your Family Story Begins",
location:"Paro → Thimphu",
image:"/paro.png",
text:`Your family adventure begins with one of the world’s most unforgettable arrivals as your flight descends through the Himalayan mountains into Paro Valley.

The moment you step into Bhutan, life slows down. Fresh mountain air, peaceful valleys and warm smiles welcome every generation of your family.

Meet your private Bhutanese guide before a scenic journey to Thimphu, Bhutan’s charming capital.

Begin creating memories together with visits to the National Memorial Chorten, where families gather for prayers and blessings.

Explore Bhutan’s living traditions through museums, local crafts and colourful streets filled with Himalayan character.

As evening arrives, enjoy peaceful family time surrounded by mountains, culture and the gentle rhythm of Bhutanese life.`
},


{
day:"Day 2",
title:"Generations, Traditions & Bhutanese Culture",
location:"Thimphu Valley",
image:"/thimphu.png",
text:`Today is designed for families to discover Bhutan together.

Visit the majestic Tashichho Dzong, a symbol of Bhutan’s heritage and harmony.

Explore ancient monasteries where generations of wisdom and spiritual traditions continue to thrive.

Experience traditional Bhutanese crafts including handmade paper, incense making and local arts passed from parents to children for centuries.

Children discover new cultures, parents create meaningful moments, and grandparents reconnect with timeless traditions.

A beautiful day celebrating family connections across generations.`
},


{
day:"Day 3",
title:"Paro Valley – Stories Across Generations",
location:"Thimphu → Paro",
image:"/paro-valley.png",
text:`Travel together into the beautiful Paro Valley, a place where legends, history and nature come alive.

Visit the National Museum and discover Bhutan’s fascinating stories through ancient treasures, royal history and cultural displays.

Explore Paro Dzong, one of Bhutan’s most impressive fortresses, and walk across traditional bridges surrounded by mountain views.

Visit sacred temples and peaceful villages where families can experience the simple happiness of Bhutanese life.

Today is about sharing stories, laughter and unforgettable moments together.`
},


{
day:"Day 4",
title:"Family Discovery – Nature, Villages & Hidden Bhutan",
location:"Paro Experience",
image:"/punakha.png",
text:`Enjoy a slower day created around family connection.

Visit ancient temples filled with centuries of blessings and explore peaceful countryside landscapes.

Walk through traditional villages, meet local families and experience Bhutanese hospitality.

For families who love nature, enjoy gentle trails along rivers, farms and forest paths surrounded by Himalayan beauty.

This is a day to disconnect from busy life and reconnect with the people who matter most.`
},


{
day:"Day 5",
title:"Tiger’s Nest – A Family Achievement Together",
location:"Taktsang Monastery",
image:"/tigernest.png",
text:`Today becomes one of your family’s greatest shared memories.

Begin the legendary hike to Tiger’s Nest Monastery, Bhutan’s most iconic landmark.

Walk together through forests decorated with prayer flags while encouraging and supporting each other along the journey.

Reaching the monastery becomes more than a destination — it becomes a family achievement.

At this sacred place:

🪔 Offer butter lamps together
🙏 Receive blessings for family happiness and protection
✨ Create a memory that will be shared for generations

A priceless chapter in your family story.`
},


{
day:"Day 6",
title:"Farewell Bhutan – Memories Passed Through Generations",
location:"Departure",
image:"/airport.png",
text:`Today your Bhutan family journey comes to an end.

But the stories continue — the laughter shared, mountains explored, blessings received and quiet moments together become treasures your family carries home.

Because the greatest journeys are not measured by places visited, but by memories created together.

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
"linear-gradient(rgba(0,0,0,.55),rgba(0,0,0,.65)), url('/family.png')"
}}

>

<div className="text-white px-6">

<h1 className="text-6xl font-bold mb-5">
👨‍👩‍👧 Multi-Generation Family Legacy
</h1>

<p className="text-2xl">
Create Family Stories That Last For Generations
</p>

</div>

</section>



{/* INTRO */}

<section className="max-w-4xl mx-auto text-center py-16 px-6">

<h2 className="text-4xl font-bold mb-6">
Because The Best Memories Are Shared Together
</h2>

<p className="text-gray-700 text-lg leading-8">

A meaningful Bhutan journey created for families —
where grandparents, parents and children discover culture,
nature and happiness together.

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

<p>✓ Private family journey</p>
<p>✓ Bhutan Visa Arrangement</p>
<p>✓ Airport Transfers</p>
<p>✓ Accommodation</p>
<p>✓ Daily Meals</p>
<p>✓ Private Vehicle</p>
<p>✓ Licensed Guide</p>
<p>✓ Entry Fees</p>
<p>✓ Complete Assistance</p>

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

Plan My Family Journey →

</Link>


</section>


</main>

);

}