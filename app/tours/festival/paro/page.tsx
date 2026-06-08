import Link from "next/link";

export default function ParoFestival() {

const itinerary=[

{
day:"Day 1",
title:"Arrival in Bhutan – The Festival Journey Begins",
location:"Paro Festival Celebration",
image:"/paro.png",

text:`Welcome to Bhutan — the Land of the Thunder Dragon.

Your journey begins with one of the world's most spectacular landings as your flight descends between Himalayan mountains into Paro Valley.

After a warm welcome from your private Bhutanese guide, step directly into Bhutan’s most treasured celebration — the Paro Tshechu Festival.

Experience colourful mask dances, traditional music and sacred performances dedicated to Guru Rinpoche, the great master who brought Buddhism to Bhutan.

Visit the magnificent Rinpung Dzong, known as the “Fortress of a Heap of Jewels”, where ancient architecture, monks and centuries-old traditions create an unforgettable atmosphere.

Continue to Kyichu Lhakhang, one of Bhutan’s oldest temples built in the 7th century, a peaceful sanctuary filled with blessings.

End your day exploring Paro town, traditional shops and Bhutanese handicrafts.`
},


{
day:"Day 2",
title:"Tiger’s Nest – Bhutan’s Spiritual Wonder",
location:"Taktsang Monastery",

image:"/tigernest.png",

text:`Today is one of Bhutan’s most unforgettable experiences.

Begin your hike through peaceful pine forests decorated with colourful prayer flags towards the legendary Tiger’s Nest Monastery.

Perched dramatically on a cliff high above Paro Valley, this sacred monastery is one of the most breathtaking spiritual sites in the world.

According to legend, Guru Rinpoche arrived here on the back of a flying tigress and meditated inside the sacred cave.

Whether you come for spirituality, adventure or beauty, reaching Tiger’s Nest becomes a memory that stays forever.`
},


{
day:"Day 3",
title:"Sacred Thongdrel Ceremony & Journey To Punakha",
location:"Paro → Punakha",

image:"/punakha.png",

text:`Begin your morning witnessing the most sacred moment of Paro Tshechu — the unveiling of the giant Thongdrel.

Displayed only for a few precious hours, this enormous sacred artwork of Guru Rinpoche is believed to bring blessings and cleanse negativity simply by seeing it.

After this once-in-a-lifetime experience, journey towards Punakha across the breathtaking Dochula Pass.

Walk among 108 memorial chortens surrounded by Himalayan views before visiting Punakha Dzong.

Standing beautifully between two rivers, this masterpiece represents Bhutan’s history, spirituality and timeless beauty.

Complete your day with a walk across Bhutan’s famous suspension bridge surrounded by mountain landscapes.`
},


{
day:"Day 4",
title:"Hidden Valleys, Peaceful Trails & Return To Thimphu",
location:"Punakha → Thimphu",

image:"/paro-valley.png",

text:`Begin your morning with a beautiful hike through rice fields and forests to Khamsum Yulley Namgyal Chorten.

Built with a wish for peace and harmony, this sacred temple rewards visitors with breathtaking views of Punakha Valley.

Continue through mountain roads and visit beautiful nature landscapes before returning to Thimphu.

Spend your evening exploring Bhutan’s charming capital, local shops and peaceful streets where tradition meets modern life.`
},


{
day:"Day 5",
title:"Heart Of Bhutan – Culture & Traditions",
location:"Thimphu",

image:"/thimphu.png",

text:`Discover the cultural heart of Bhutan.

Visit Buddha Dordenma, a magnificent statue overlooking the entire valley.

Experience the peaceful atmosphere of the National Memorial Chorten where locals gather for daily prayers.

Meet Bhutan’s unique national animal at the Takin Preserve.

Explore the colourful Farmers’ Market and experience everyday Bhutanese life.

End your cultural journey at Tashichho Dzong, the grand fortress representing Bhutan’s spiritual and royal heritage.`
},


{
day:"Day 6",
title:"Farewell Bhutan – Memories Of A Lifetime",
location:"Departure",

image:"/airport.png",

text:`Your Bhutan festival journey comes to an end.

You leave with more than photographs — you carry the sounds of sacred drums, colours of festival dances, mountain memories and the warmth of Bhutanese hospitality.

Until we welcome you again to the Land of the Thunder Dragon.

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
🎭 Dance Of Legends
</h1>

<p className="text-2xl mt-5">
6 Days Paro Tshechu Festival Experience
</p>

</div>

</section>



{/* INTRO */}

<section className="max-w-4xl mx-auto py-16 text-center px-6">

<h2 className="text-4xl font-bold">
Where Bhutan’s Ancient Traditions Come Alive
</h2>

<p className="mt-6 text-lg text-gray-700">

Experience sacred dances, colourful celebrations and spiritual blessings
during one of Bhutan’s most treasured festivals.

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