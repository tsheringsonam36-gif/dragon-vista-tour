import Link from "next/link";

export default function DochulaFestival() {

const itinerary=[

{
day:"Day 1",
title:"Arrival In Bhutan – Gateway To The Himalayas",
location:"Paro Arrival",

image:"/paro.png",

text:`Your Bhutan journey begins with an unforgettable arrival into Paro Valley, surrounded by the dramatic peaks of the Himalayas.

Meet your private Bhutanese guide and take your first moments to breathe in the peaceful mountain atmosphere.

Today is designed for gentle acclimatisation, allowing you to slow down and prepare for the cultural journey ahead.

Welcome to the Land of the Thunder Dragon — where every mountain carries a story and every journey begins with wonder.`
},


{
day:"Day 2",
title:"The Spirit Of Bhutan Begins",
location:"Paro → Thimphu",

image:"/thimphu.png",

text:`Travel to Bhutan’s charming capital city, where ancient traditions and modern Bhutanese life exist side by side.

Visit the magnificent Buddha Dordenma, a towering statue overlooking Thimphu Valley and radiating peace across the mountains.

Experience the National Memorial Chorten, where locals gather daily for prayers and blessings.

Explore Tashichho Dzong, Bhutan’s impressive fortress that represents the harmony between spiritual and royal traditions.

Your connection with Bhutan begins here.`
},


{
day:"Day 3",
title:"Living Culture, Heritage & Local Stories",
location:"Thimphu",

image:"/paro-valley.png",

text:`Spend today discovering Bhutan beyond the surface.

Step inside traditional Bhutanese life through museums, handmade crafts and cultural experiences.

Explore Bhutanese weaving traditions, ancient paper-making techniques and the creativity preserved through generations.

Meet Bhutan’s unique national animal, the Takin.

Walk through lively local markets where farmers, families and communities come together.

Today reveals the heart of Bhutanese happiness.`
},


{
day:"Day 4",
title:"Festival Above The Clouds – Druk Wangyel Tshechu",
location:"Dochula Pass → Paro",

image:"/punakha.png",

text:`Today is the highlight of your journey.

High above the valleys at Dochula Pass, surrounded by 108 chortens and breathtaking Himalayan peaks, witness one of Bhutan’s most meaningful celebrations.

The Druk Wangyel Tshechu is unlike any other festival in Bhutan.

Performed by the Royal Bhutan Army, powerful mask dances and symbolic performances honour Bhutan’s Fourth King, national unity and the spirit of peace.

Feel the mountain wind.

Hear the sacred music.

Watch colourful dancers move beneath snow-covered peaks.

This is Bhutan’s history, pride and culture brought beautifully to life.

After the festival, continue towards Paro Valley and explore ancient fortresses surrounded by timeless landscapes.`
},


{
day:"Day 5",
title:"Ancient Spiritual Treasures Of Paro",
location:"Paro",

image:"/couple-blessing.png",

text:`Today is a peaceful journey into Bhutan’s spiritual heritage.

Visit Kyichu Lhakhang, one of Bhutan’s oldest temples built in the 7th century.

Walk through sacred courtyards filled with centuries of prayers and blessings.

Discover hidden temples, ancient artwork and stories that connect Bhutan’s past with the present.

A day created for reflection, peace and deeper understanding.`
},


{
day:"Day 6",
title:"Tiger’s Nest – The Journey Above The Clouds",
location:"Taktsang Monastery",

image:"/tigernest.png",

text:`Today experience Bhutan’s most iconic landmark — Tiger’s Nest Monastery.

Follow forest trails decorated with prayer flags as you climb towards this breathtaking cliffside sanctuary.

Standing 900 metres above Paro Valley, Tiger’s Nest represents devotion, strength and spiritual transformation.

The journey is challenging.

The reward is unforgettable.

Return to Paro carrying one of Bhutan’s greatest memories.`
},


{
day:"Day 7",
title:"Farewell Bhutan – Until We Meet Again",
location:"Departure",

image:"/airport.png",

text:`Your festival journey comes to an end.

Leave Bhutan with memories of sacred dances, mountain festivals, peaceful temples and the kindness of the Bhutanese people.

The Himalayas always welcome you back.

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
"linear-gradient(rgba(0,0,0,.55),rgba(0,0,0,.75)), url('/festival.png')"
}}

>


<div className="text-center text-white px-6">

<h1 className="text-6xl font-bold">
☁️ Festival Above The Clouds
</h1>

<p className="text-2xl mt-5">
7 Days Dochula Druk Wangyel Festival Experience
</p>

</div>


</section>



{/* INTRO */}

<section className="max-w-4xl mx-auto py-16 text-center px-6">

<h2 className="text-4xl font-bold">
Where Culture Meets The Himalayas
</h2>

<p className="mt-6 text-lg text-gray-700">

Celebrate Bhutanese heritage among mountain peaks,
prayer flags and one of the kingdom’s most unique festivals.

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

<p>✓ Private festival journey</p>
<p>✓ Bhutan visa arrangement</p>
<p>✓ Airport transfers</p>
<p>✓ Accommodation</p>
<p>✓ Daily meals</p>
<p>✓ Licensed guide</p>
<p>✓ Private vehicle</p>
<p>✓ Entry fees</p>
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

Plan My Festival Journey →

</Link>


</section>


</main>

);

}