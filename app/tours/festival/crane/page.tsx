import Link from "next/link";

export default function CraneFestival() {

const itinerary=[

{
day:"Day 1",
title:"Arrival In Bhutan – Into The Peaceful Himalayas",
location:"Paro → Thimphu",
image:"/buddha.png",

text:`Your journey begins as you land in the beautiful Paro Valley surrounded by Himalayan peaks.

Meet your private Bhutanese guide and travel towards Thimphu, Bhutan’s charming capital.

Ease into the peaceful rhythm of Bhutan with visits to Buddha Dordenma, watching over the valley with calm and compassion.

Continue to the National Memorial Chorten where locals gather for daily prayers.

End your first evening exploring local markets, traditional streets and the warm atmosphere of Bhutanese life.

Your connection with the Land of the Thunder Dragon begins.`
},


{
day:"Day 2",
title:"Mountain Trails & Bhutanese Heritage",
location:"Thimphu Exploration",
image:"/thimphu.png",

text:`Begin the morning with a rewarding hike towards Phajoding Monastery, a sacred retreat hidden above Thimphu Valley.

Walk through peaceful forests, mountain trails and landscapes filled with silence.

Return to explore Bhutan’s cultural treasures.

Visit ancient temples, discover traditional textiles and experience the handmade paper craft preserved through generations.

Today combines nature, spirituality and Bhutanese creativity.`
},


{
day:"Day 3",
title:"Across Dochula Pass To Punakha Valley",
location:"Thimphu → Punakha",
image:"/punakha.png",

text:`Journey across Dochula Pass where 108 white chortens rise among colourful prayer flags.

On clear days, enjoy breathtaking Himalayan views stretching across the horizon.

Continue into Punakha Valley and visit the magnificent Punakha Dzong, standing gracefully between two rivers.

Enjoy a peaceful walk to Khamsum Yulley Namgyal Chorten through rice fields and mountain scenery.

A day filled with beauty, history and harmony.`
},


{
day:"Day 4",
title:"Wings Of The Himalayas – Crane Festival Day",
location:"Phobjikha Valley",
image:"/crane-festival.png",

text:`Today is the heart of your journey.

Travel into the magical glacial valley of Phobjikha — winter home of the endangered black-necked cranes.

Every November, these graceful birds return from the Tibetan Plateau and are welcomed as sacred visitors.

Experience the Black-Necked Crane Festival at Gangtey Monastery.

Enjoy:

🕊 Crane-inspired performances
🎭 Traditional mask dances
🎶 Local songs and community celebrations
🌿 Conservation stories

This festival is not only a celebration.

It is Bhutan’s beautiful relationship between people, nature and spirituality.

Later walk through the peaceful valley and experience one of Bhutan’s most untouched landscapes.`
},


{
day:"Day 5",
title:"Blessed Villages & Return To Paro",
location:"Phobjikha → Punakha → Paro",
image:"/paro.png",

text:`Begin your journey back through Bhutan’s beautiful valleys.

Visit traditional villages surrounded by mountain views.

Walk through peaceful rice fields towards Chimi Lhakhang, the famous temple of blessings connected with the Divine Madman.

Continue to Paro and explore the impressive Paro Dzong and National Museum.

Ancient stories, sacred artwork and Himalayan culture come together.`
},


{
day:"Day 6",
title:"Beyond The Clouds – Chele La & Hidden Haa Valley",
location:"Paro → Haa Valley",
image:"/monk.png",

text:`Today discover Bhutan’s hidden western valleys.

Travel across Chele La Pass, one of Bhutan’s highest mountain roads.

Enjoy dramatic views of Himalayan peaks, prayer flags and untouched landscapes.

Continue into the quiet Haa Valley, where traditional villages and ancient temples preserve a slower way of life.

A perfect escape into Bhutan’s peaceful countryside.`
},


{
day:"Day 7",
title:"Bumdra Adventure – Cave Of A Thousand Prayers",
location:"Bumdra Trek",
image:"/bumdrala.png",

text:`Today your mountain adventure begins.

Start from Sang Choekor Buddhist College and climb through forests, ridges and sacred landscapes.

As you rise higher:

🏔 Mountains become closer
🙏 Prayer flags guide your path
🌲 Silence surrounds you

Reach Bumdra Monastery — the Cave of a Thousand Prayers.

Spend the evening surrounded by Himalayan views, stars and unforgettable mountain peace.`
},


{
day:"Day 8",
title:"Sacred Descent Through Tiger’s Nest",
location:"Taktsang Monastery",
image:"/tiger.png",

text:`Wake up above the clouds and begin your descent through ancient forest trails.

Follow the monks’ pathway until Bhutan’s most iconic sight appears — Tiger’s Nest Monastery.

Perched dramatically on a cliff, this sacred site represents devotion, courage and spiritual transformation.

After visiting the monastery, return to Paro carrying one of Bhutan’s most powerful memories.`
},


{
day:"Day 9",
title:"Farewell Bhutan – Until We Meet Again",
location:"Departure",
image:"/airport.png",

text:`Your journey through Bhutan’s festivals, mountains and sacred valleys comes to an end.

Leave with memories of flying cranes, Himalayan landscapes, ancient traditions and warm Bhutanese hospitality.

May the spirit of Bhutan travel with you always.

Tashi Delek.`
}

];


return(

<main className="bg-[#f7f1e5] min-h-screen">


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
"linear-gradient(rgba(0,0,0,.55),rgba(0,0,0,.75)), url('/crane-festival.png')"
}}

>

<div className="text-center text-white px-6">

<h1 className="text-6xl font-bold">
🕊 Wings Of The Himalayas
</h1>

<p className="text-2xl mt-5">
9 Days Black-Necked Crane Festival Experience
</p>

</div>

</section>


<section className="max-w-4xl mx-auto py-16 text-center px-6">

<h2 className="text-4xl font-bold">
Where Nature, Culture & Spirituality Meet
</h2>

<p className="mt-6 text-lg text-gray-700">

Celebrate the return of Bhutan’s sacred cranes in the peaceful
Phobjikha Valley surrounded by mountains and tradition.

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
grid
md:grid-cols-2
mb-14
"
>

<img
src={item.image}
className="w-full h-96 object-cover"
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
<p>✓ Trek support</p>
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

Plan My Crane Festival Journey →

</Link>

</section>


</main>

);

}