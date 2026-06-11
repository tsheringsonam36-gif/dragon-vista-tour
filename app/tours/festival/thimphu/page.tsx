import Link from "next/link";

export default function ThimphuFestival() {

const itinerary=[

{
day:"Day 1",
title:"Arrival In Bhutan – The Journey Into Living Culture Begins",
location:"Paro → Thimphu",
image:"/paro.png",

text:`Your Bhutan experience begins as your flight descends into the beautiful Paro Valley surrounded by Himalayan mountains.

Meet your private guide and continue towards Thimphu, Bhutan’s charming capital city.

Take today slowly as you adjust to the altitude and begin discovering Bhutan’s cultural soul.

Visit the National Memorial Chorten where locals gather daily in prayer.

Explore the Folk Heritage Museum and Textile Museum to discover Bhutanese traditions, village life and the beauty of handwoven textiles.

End your day at the Institute of Zorig Chusum, where young artists continue Bhutan’s thirteen traditional arts.

Your first day reveals a kingdom where culture is not preserved in museums — it is lived every day.`
},


{
day:"Day 2",
title:"The Kingdom’s Grand Celebration – Thimphu Tshechu",
location:"Tashichho Dzong Festival Ground",
image:"/thimphu.png",

text:`Today you step into one of Bhutan’s most spectacular celebrations — Thimphu Tshechu.

The courtyard of Tashichho Dzong transforms into a world of colour, music and devotion.

Families arrive wearing their finest traditional dress while monks perform sacred cham dances passed down through generations.

Each mask dance tells powerful stories of wisdom, compassion and the victory of good over negativity.

Witness spiritual performances dedicated to Guru Rinpoche and experience blessings believed to bring happiness and protection.

Later visit Buddha Dordenma, standing peacefully above the capital with panoramic valley views.

This is Bhutan at its most vibrant.`
},


{
day:"Day 3",
title:"Across Himalayan Passes To The Valley Of Happiness",
location:"Thimphu → Punakha",
image:"/punakha.png",

text:`Journey towards Punakha, Bhutan’s former capital.

Cross Dochula Pass where 108 chortens stand among prayer flags and Himalayan views.

Continue into the warm Punakha Valley and visit the magnificent Punakha Dzong.

Standing between the Pho Chhu and Mo Chhu rivers, this masterpiece represents centuries of Bhutanese history and spirituality.

Later enjoy a peaceful walk to Khamsum Yulley Namgyal Chorten.

Surrounded by mountains and rice fields, it is one of Bhutan’s most beautiful viewpoints.`
},


{
day:"Day 4",
title:"Sacred Valleys & Timeless Traditions",
location:"Punakha Discovery",
image:"/paro-valley.png",

text:`Today explores the peaceful side of Bhutan.

Walk through traditional villages and rice fields towards Chimi Lhakhang, the famous temple connected with the legendary Divine Madman.

Experience Bhutanese countryside life, local stories and simple happiness.

Continue exploring historic valleys, traditional craftsmanship and the unique architecture that makes Bhutan unlike anywhere else.

A day of culture, connection and discovery.`
},


{
day:"Day 5",
title:"Return To Paro – Valley Of Legends",
location:"Punakha → Paro",
image:"/paro.png",

text:`Return to Paro, one of Bhutan’s most beautiful valleys.

Visit Drukgyal Dzong, an ancient fortress carrying stories of Bhutan’s victories and history.

Explore the National Museum inside the historic Ta Dzong watchtower.

Discover sacred artwork, ancient treasures and the stories that shaped the Kingdom of Bhutan.

Spend your evening surrounded by Paro’s peaceful mountain atmosphere.`
},


{
day:"Day 6",
title:"Tiger’s Nest – Bhutan’s Spiritual Icon",
location:"Taktsang Monastery",
image:"/tiger.png",

text:`Today is your unforgettable journey to Tiger’s Nest Monastery.

Follow peaceful forest trails decorated with colourful prayer flags as you climb towards Bhutan’s most iconic landmark.

Perched dramatically on a cliff above Paro Valley, this sacred monastery is connected to Guru Rinpoche and Bhutan’s spiritual beginnings.

The hike challenges the body.

The destination touches the heart.

A perfect ending to your Bhutan festival journey.`
},


{
day:"Day 7",
title:"Farewell Land Of The Thunder Dragon",
location:"Departure",
image:"/airport.png",

text:`Your Thimphu Festival journey comes to an end.

Carry home memories of sacred dances, colourful traditions, Himalayan landscapes and the kindness of Bhutanese people.

The mountains, monasteries and smiles of Bhutan will always welcome you back.

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
"linear-gradient(rgba(0,0,0,.55),rgba(0,0,0,.75)), url('/thimphu-festival.png')"
}}
>

<div className="text-center text-white px-6">

<h1 className="text-6xl font-bold">
👑 The Kingdom’s Grand Celebration
</h1>

<p className="text-2xl mt-5">
7 Days Thimphu Tshechu Festival Experience
</p>

</div>

</section>



{/* INTRO */}

<section className="max-w-4xl mx-auto py-16 text-center px-6">

<h2 className="text-4xl font-bold">
Experience Bhutan At Its Most Vibrant
</h2>

<p className="mt-6 text-lg text-gray-700">

A journey into sacred dances, colourful traditions and
the spiritual heart of Bhutan’s capital celebration.

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