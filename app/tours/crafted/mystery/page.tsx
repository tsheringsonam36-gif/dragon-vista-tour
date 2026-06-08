import Link from "next/link";

export default function MysteryEscape() {

const itinerary = [

{
day:"Day 1",
title:"Arrival in Bhutan – Let The Mystery Begin",
location:"Paro → Thimphu",
image:"/paro.png",
text:`Your escape begins the moment your flight enters the Himalayan kingdom.

Arrive in Paro where mountain peaks, prayer flags and peaceful valleys welcome you into a world far away from ordinary life.

Meet your private Bhutanese guide and begin your journey to Thimphu.

Ease into Bhutan’s rhythm with visits to Buddha Dordenma, National Memorial Chorten and hidden corners of the capital.

Walk through local streets, discover unexpected stories and let Bhutan slowly reveal itself.

Your mystery journey has officially begun.`
},


{
day:"Day 2",
title:"Hidden Traditions & Secrets of Thimphu",
location:"Thimphu Discovery",
image:"/thimphu.png",
text:`Today is about uncovering the soul of Bhutan.

Step inside Simply Bhutan and experience traditional lifestyles, stories and customs.

Explore the Royal Textile Museum where every pattern tells a story.

Visit Tashichho Dzong, Bhutan’s grand fortress of spirituality and leadership.

Discover handmade paper workshops and ancient crafts preserved through generations.

End your day wondering what tomorrow’s adventure will reveal.`
},


{
day:"Day 3",
title:"Road Into The Valley Of Legends",
location:"Thimphu → Punakha",
image:"/punakha.png",
text:`Today the road itself becomes part of the adventure.

Journey across Dochula Pass, surrounded by 108 chortens, mountain winds and Himalayan views.

Descend into Punakha Valley, where rivers meet and legends live.

Explore Punakha Dzong, a masterpiece standing between the Pho Chhu and Mo Chhu rivers.

Continue to Khamsum Yulley Namgyal Chorten, where peaceful trails lead you above the valley.

A day filled with landscapes, history and hidden stories.`
},


{
day:"Day 4",
title:"Return To Paro – Gateway To The Unknown",
location:"Punakha → Paro",
image:"/paro-valley.png",
text:`Return to Paro, a valley surrounded by ancient temples, forests and mountains.

Explore Rinpung Dzong, where centuries of Bhutanese stories remain alive.

Visit the National Museum and discover treasures from Bhutan’s mysterious past.

Tonight, prepare yourself.

Tomorrow is your Escape Day — a journey beyond ordinary travel.`
},



{
day:"Day 5",
title:"THE ESCAPE DAY – Into The Himalayan Wilderness",
location:"Bumdra Hidden Mountain Experience",
image:"/tigernest.png",
text:`Today is the heart of your Mystery Escape.

Leave behind roads, noise and routine as you disappear into Bhutan’s untouched mountains.

Begin from Sang Choekor Buddhist College and follow ancient trails once walked by monks and pilgrims.

The climb takes you through peaceful forests, hidden viewpoints and ridges covered with prayer flags.

Every step reveals something unexpected — valleys below, snow mountains ahead and complete silence around you.

Reach Bumdra, the “Cave of a Thousand Prayers”, a sacred mountain sanctuary high above the world.

As evening falls:

✨ Watch the Himalayas change colours
🔥 Share stories beneath mountain skies
🙏 Experience peace found only far away from everything

This is the escape you never knew you needed.`
},



{
day:"Day 6",
title:"From The Clouds To Tiger’s Nest",
location:"Bumdra → Taktsang Monastery",
image:"/tigernest.png",
text:`Wake up above the clouds surrounded by Himalayan silence.

Begin your descent through ancient forests and sacred trails toward Bhutan’s greatest treasure.

Suddenly through the trees, the golden rooftops of Tiger’s Nest appear.

Reach Taktsang Monastery, dramatically hanging from the cliffside.

Stand where Guru Rinpoche meditated centuries ago and feel why this place touches every traveller.

A journey that began as a mystery ends as a memory you will never forget.`
},



{
day:"Day 7",
title:"Farewell Bhutan – Until The Next Mystery",
location:"Departure",
image:"/airport.png",
text:`Your escape comes to an end, but Bhutan stays with you.

You arrived searching for adventure and leave with stories, friendships and moments impossible to recreate.

Some journeys show you places.

The best journeys help you rediscover yourself.

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
"

style={{
backgroundImage:
"linear-gradient(rgba(0,0,0,.55),rgba(0,0,0,.7)), url('/mystery.png')"
}}
>


<div className="text-white px-6">

<h1 className="text-6xl font-bold mb-5">
🗝️ The Mystery Escape
</h1>

<p className="text-2xl">
Pack Your Bags. Leave The Details To Us. Embrace The Unknown.
</p>

</div>


</section>



<section className="max-w-4xl mx-auto text-center py-16 px-6">

<h2 className="text-4xl font-bold mb-6">
Your Adventure Is Waiting Somewhere Unknown
</h2>

<p className="text-gray-700 text-lg leading-8">

Designed for travellers who want surprise, wilderness,
culture and moments that cannot be planned.

</p>

</section>




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
className="h-96 w-full object-cover"
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
mt-6">

{item.text}

</p>


</div>

</div>

))}

</section>




<section className="bg-gray-900 text-white py-16 text-center">

<h2 className="text-4xl font-bold mb-8">
What's Included ✓
</h2>


<div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto text-lg">

<p>✓ Private guided journey</p>
<p>✓ Bhutan Visa Arrangement</p>
<p>✓ Airport Transfers</p>
<p>✓ Accommodation</p>
<p>✓ Daily Meals</p>
<p>✓ Trekking Support Team</p>
<p>✓ Camping Equipment</p>
<p>✓ Licensed Guide</p>
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

Plan My Mystery Escape →

</Link>


</section>


</main>

);

}