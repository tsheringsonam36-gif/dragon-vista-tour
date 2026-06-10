import Link from "next/link";

export default function HimalayanRetreat() {

const itinerary=[

{
day:"Day 1",
title:"Arrive, Breathe & Slow Down",
location:"Paro → Thimphu",
image:"/paro.png",

text:`Your retreat begins the moment you arrive in the peaceful Himalayan kingdom of Bhutan.

Leave behind the noise of everyday life and allow yourself to move with Bhutan’s slower rhythm.

After meeting your private guide, enjoy a scenic drive through valleys and traditional villages towards Thimphu.

Begin your journey inward with visits to peaceful spiritual landmarks including the National Memorial Chorten and the majestic Buddha Dordenma overlooking the valley.

Watch locals offering prayers, spinning prayer wheels and moving peacefully through daily life.

This is your invitation to pause.

To breathe.

To reconnect.`
},


{
day:"Day 2",
title:"Mindful Mountains & Cultural Connection",
location:"Thimphu → Punakha",

image:"/punakha.png",

text:`Today, journey across the beautiful Dochula Pass where 108 chortens rest among clouds and mountain winds.

Take a quiet moment among the prayer flags and enjoy panoramic Himalayan views.

Continue into the peaceful Punakha Valley.

Visit the magnificent Punakha Dzong, standing gracefully between two rivers — a symbol of balance and harmony.

Later, enjoy a gentle walk to Khamsum Yulley Namgyal Chorten.

Surrounded by rice fields, rivers and mountains, this sacred place offers the perfect moment for reflection and inner peace.`
},


{
day:"Day 3",
title:"Sacred Valleys & Simple Happiness",
location:"Punakha → Paro",

image:"/paro-valley.png",

text:`Begin your morning slowly with a peaceful walk through traditional villages and terraced fields.

Visit Chimi Lhakhang, a temple surrounded by stories, blessings and Bhutanese traditions.

Return to Paro Valley — a place where ancient temples, mountain landscapes and quiet moments come together.

Explore Paro Dzong and historic sites while experiencing Bhutan’s timeless spiritual atmosphere.

Today is about appreciating simple moments.

Fresh air.

Warm smiles.

Quiet happiness.`
},


{
day:"Day 4",
title:"Tiger’s Nest – Journey Within",
location:"Taktsang Monastery",

image:"/tiger.png",

text:`Today is the heart of your Himalayan Retreat.

Begin your mindful hike through pine forests, prayer flags and mountain silence towards the legendary Tiger’s Nest Monastery.

With every step upward, leave something behind.

Stress.

Noise.

Distraction.

Arrive at one of the world's most sacred cliffside monasteries and experience a moment of complete stillness.

Inside this spiritual sanctuary:

🪔 Offer butter lamps
🙏 Receive blessings
✨ Make a personal wish for peace, clarity and happiness

This is more than a hike.

It is a journey back to yourself.`
},


{
day:"Day 5",
title:"Return Home Renewed",
location:"Departure",

image:"/airport.png",

text:`Your Bhutan retreat comes to an end, but the feeling remains.

The silence of the mountains.

The kindness of the people.

The peaceful moments you created.

Leave Bhutan lighter, refreshed and inspired.

Until your next journey.

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
"linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,.70)), url('/retreat.png')"
}}
>

<div className="text-center text-white px-6">

<h1 className="text-6xl font-bold">
🌿 Himalayan Retreat
</h1>

<p className="text-2xl mt-5">
Disconnect From The Noise. Reconnect With Your Soul.
</p>

</div>

</section>



{/* INTRO */}

<section className="max-w-4xl mx-auto py-16 text-center px-6">

<h2 className="text-4xl font-bold">
A Journey Back To Yourself
</h2>

<p className="mt-6 text-lg text-gray-700">

A peaceful Bhutan escape designed around mindfulness,
culture, nature and spiritual connection.

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

<p>✓ Private retreat journey</p>
<p>✓ Bhutan visa arrangement</p>
<p>✓ Airport transfers</p>
<p>✓ Accommodation</p>
<p>✓ Daily meals</p>
<p>✓ Private vehicle</p>
<p>✓ Licensed guide</p>
<p>✓ Cultural experiences</p>
<p>✓ Full assistance</p>

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

Begin My Retreat →

</Link>


</section>


</main>

);

}