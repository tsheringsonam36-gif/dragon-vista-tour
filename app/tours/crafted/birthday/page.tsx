import Link from "next/link";

export default function BirthdayJourney() {

const itinerary = [

{
day:"Day 1",
title:"Arrival in Bhutan – Begin Your Birthday Escape",
location:"Paro → Thimphu",
image:"/paro.png",
text:`Your unforgettable birthday journey begins with one of the world's most scenic arrivals as you land among the Himalayan mountains of Bhutan.

Your private Bhutanese guide welcomes you before a beautiful drive to Thimphu, where tradition, happiness and peaceful mountain life create the perfect celebration atmosphere.

Start your adventure with Bhutan’s cultural treasures including Buddha Dordenma, standing gracefully above the valley with breathtaking views.

Visit the National Memorial Chorten, where locals gather for prayers and blessings, creating a peaceful beginning to your special journey.

Explore the colourful Centenary Farmers’ Market filled with local flavours, handmade crafts and authentic Bhutanese experiences.

As evening arrives, visit the majestic Tashichho Dzong glowing beneath the mountain sky before enjoying your first magical evening in Bhutan.`
},


{
day:"Day 2",
title:"Culture, Creativity & Birthday Memories",
location:"Thimphu Experience",
image:"/thimphu.png",
text:`Wake up to fresh Himalayan air and begin your day with beautiful views across Thimphu Valley.

Enjoy a peaceful nature walk through forest trails, surrounded by mountains and prayer flags.

Meet Bhutan’s unique national animal at the Takin Preserve before visiting sacred monasteries and cultural sites.

Discover Bhutanese astrology traditions, where important life moments are guided by ancient wisdom.

Create your own personalised Bhutanese postage stamp — a fun memory from your birthday journey.

Experience Bhutanese arts, paintings and traditional crafts, and capture beautiful moments that celebrate your story.`
},


{
day:"Day 3",
title:"Paro Valley – Legends, Culture & Celebration",
location:"Thimphu → Paro",
image:"/paro-valley.png",
text:`Journey into the beautiful Paro Valley, surrounded by rice fields, ancient temples and Himalayan landscapes.

Visit Tachog Lhakhang and cross the traditional iron bridge, experiencing Bhutan’s history and legends.

Continue to Kyichu Lhakhang, one of Bhutan’s oldest temples, where centuries of prayers and blessings create a peaceful atmosphere.

Explore local markets filled with Bhutanese crafts, flavours and souvenirs.

End your day discovering Bhutan’s fascinating history through ancient treasures, royal stories and cultural heritage.

A perfect day filled with discovery, joy and birthday memories.`
},


{
day:"Day 4",
title:"Tiger’s Nest Adventure & Birthday Blessing",
location:"Taktsang Monastery",
image:"/birthday.png",
text:`Today is the unforgettable highlight of your birthday celebration.

Begin your journey to the legendary Tiger’s Nest Monastery, Bhutan’s most iconic sacred site.

Walk through beautiful pine forests decorated with colourful prayer flags as every step brings you closer to this magical place above the clouds.

Upon reaching the monastery, celebrate your special moment with a meaningful Bhutanese blessing experience.

🪔 Light traditional butter lamps
🙏 Receive prayers for happiness, success and good health
✨ Make a birthday wish surrounded by centuries of spiritual energy

This is not just another birthday — it is a celebration of life, adventure and unforgettable memories in the Himalayas.`
},


{
day:"Day 5",
title:"Farewell Bhutan – Until Your Next Celebration",
location:"Departure",
image:"/airport.png",
text:`Today we say farewell to the Land of Happiness.

Leave Bhutan carrying more than photographs — take home new friendships, peaceful moments, spiritual blessings and a birthday story unlike any other.

May this special journey inspire many more adventures ahead.

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
"linear-gradient(rgba(0,0,0,.55),rgba(0,0,0,.65)), url('/birthday.png')"
}}

>

<div className="text-white px-6">

<h1 className="text-6xl font-bold mb-5">
🎂 VIP Birthday Bash
</h1>

<p className="text-2xl">
Blow Out The Candles Where Luxury Knows No Limits
</p>

</div>

</section>



{/* INTRO */}

<section className="max-w-4xl mx-auto text-center py-16 px-6">

<h2 className="text-4xl font-bold mb-6">
Celebrate Another Year With An Extraordinary Story
</h2>

<p className="text-gray-700 text-lg leading-8">

A birthday deserves more than a party.
Celebrate your special moment among Himalayan peaks,
ancient temples and unforgettable Bhutanese experiences.

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

Plan My Birthday Journey →

</Link>


</section>


</main>

);

}