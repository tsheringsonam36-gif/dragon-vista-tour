import Link from "next/link";

export default function ElementAdventure() {

const itinerary=[

{
day:"Day 1",
title:"The Adventure Begins – Into The Himalayas",
location:"Paro → Thimphu",
image:"/paro.png",

text:`Your adventure begins the moment you descend between the mighty Himalayan peaks into Bhutan.

Step into a kingdom where mountains, forests and ancient traditions still shape everyday life.

Meet your private Bhutanese guide and begin your scenic journey towards Thimphu.

Today is about awakening your explorer spirit.

Visit Buddha Dordenma overlooking the valley, experience Bhutanese culture and discover peaceful corners of the capital.

Slow down, breathe deeply and prepare yourself.

The mountains are calling.`
},


{
day:"Day 2",
title:"Culture, Trails & Hidden Discoveries",
location:"Thimphu Exploration",

image:"/thimphu.png",

text:`Today blends adventure with discovery.

Walk through peaceful forest trails overlooking Thimphu Valley.

Meet Bhutan’s national animal at the Takin Preserve and explore places where ancient traditions remain alive.

Visit traditional craft centres, monasteries and cultural landmarks.

Discover the skills, stories and wisdom that have survived in the Himalayas for centuries.

Adventure is not only about climbing higher.

It is about seeing deeper.`
},


{
day:"Day 3",
title:"Across Mountain Passes To Ancient Valleys",
location:"Thimphu → Punakha",

image:"/punakha.png",

text:`Journey across Dochula Pass at 3,100 metres, where prayer flags dance with mountain winds.

On clear days, witness breathtaking Himalayan peaks stretching across the horizon.

Descend into Punakha Valley and explore one of Bhutan’s greatest architectural wonders — Punakha Dzong.

Hike towards peaceful viewpoints, cross rivers and experience landscapes shaped by nature and history.

Every road reveals another adventure.`
},


{
day:"Day 4",
title:"Into Paro – Gateway To The Wild",
location:"Punakha → Paro",

image:"/paro-valley.png",

text:`Return towards Paro, a valley surrounded by sacred mountains and ancient legends.

Explore historic fortresses, traditional villages and hidden corners of Bhutan.

Tonight, prepare yourself.

Tomorrow you leave ordinary paths behind.

The real adventure begins.`
},


{
day:"Day 5",
title:"Element Adventure – Above The Clouds Expedition",
location:"Bumdra High Mountain Trek",

image:"/tigernest.png",

text:`Today is created for the modern explorer.

Begin your high-altitude adventure from Sang Choekor Buddhist College and climb into Bhutan’s untouched wilderness.

The trail rises through ancient forests, mountain ridges and landscapes few travellers experience.

With every step:

🌲 forests become quieter
🏔 mountains become closer
🙏 prayer flags guide your path

Reach Bumdra — the legendary Cave of a Thousand Prayers.

Standing high above the valleys, surrounded by Himalayan peaks, you understand why adventure changes people.

Push further towards higher viewpoints if you wish.

Feel the wind.

Feel the silence.

Feel alive.`
},


{
day:"Day 6",
title:"Legendary Descent Through Tiger’s Nest",
location:"Taktsang Monastery",

image:"/couple-blessing.png",

text:`Wake up surrounded by pure mountain energy.

Begin your descent through untouched forests and hidden trails used by monks for generations.

Then suddenly —

Tiger’s Nest appears.

Hanging impossibly from a cliff above Paro Valley.

Explore Bhutan’s most iconic monastery and celebrate completing one of the kingdom’s most unforgettable routes.

This is more than a hike.

It is your Himalayan achievement.`
},


{
day:"Day 7",
title:"The Journey Continues",
location:"Departure",

image:"/airport.png",

text:`Your Bhutan adventure comes to an end, but the experience stays with you.

The mountains climbed.

The trails walked.

The moments where you challenged yourself.

Return home carrying not just memories — but a new story.

Tashi Delek.`
}

];

return(

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
"

style={{
backgroundImage:
"linear-gradient(rgba(0,0,0,.55),rgba(0,0,0,.75)), url('/adventure.png')"
}}
>

<div className="text-center text-white px-6">

<h1 className="text-6xl font-bold">
🏔 Element Adventure
</h1>

<p className="text-2xl mt-5">
Epic Expeditions Designed For The Modern Explorer
</p>

</div>

</section>



{/* INTRO */}

<section className="max-w-4xl mx-auto py-16 text-center px-6">

<h2 className="text-4xl font-bold">
Find Yourself Beyond The Ordinary
</h2>

<p className="mt-6 text-lg text-gray-700">

A journey created for those who chase mountains,
wild landscapes and experiences that awaken the soul.

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
grid
md:grid-cols-2
mb-14
"
>

<img
src={item.image}
className="
w-full
h-96
object-cover
"
/>


<div className="p-10">

<p className="text-orange-500 font-bold">
{item.day}
</p>


<h2 className="text-3xl font-bold mt-3">
{item.title}
</h2>


<p className="text-yellow-600 mt-2">
📍 {item.location}
</p>


<p className="
mt-6
leading-8
whitespace-pre-line
text-gray-700
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


<h2 className="text-4xl font-bold">
What's Included ✓
</h2>


<div className="
grid
md:grid-cols-3
gap-5
max-w-5xl
mx-auto
mt-10
">


<p>✓ Private adventure journey</p>
<p>✓ Bhutan visa arrangement</p>
<p>✓ Airport transfers</p>
<p>✓ Accommodation</p>
<p>✓ Daily meals</p>
<p>✓ Experienced guide</p>
<p>✓ Trek support team</p>
<p>✓ Trekking equipment</p>
<p>✓ Complete assistance</p>


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
font-bold
"
>

Start My Adventure →

</Link>


</section>


</main>

);

}