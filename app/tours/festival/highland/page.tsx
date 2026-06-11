import Link from "next/link";

export default function HighlandFestival() {

const itinerary=[

{
day:"Day 1",
title:"Arrival In Bhutan – Gateway To The Himalayas",
location:"Paro",
image:"/paro.png",

text:`Welcome to Bhutan — the Land of the Thunder Dragon.

Your adventure begins with an unforgettable landing among Himalayan peaks.

Meet your private Bhutanese guide and slowly adjust to the peaceful mountain atmosphere.

Enjoy beautiful viewpoints overlooking Paro Valley and explore the charming streets filled with traditional architecture, handicrafts and local life.

Today is the beginning of your journey beyond ordinary Bhutan.`
},


{
day:"Day 2",
title:"Journey Through Mountain Passes To Punakha",
location:"Paro → Punakha",
image:"/punakha.png",

text:`Travel across the breathtaking Dochula Pass, where 108 sacred chortens stand beneath the Himalayan skyline.

Continue into the warm Punakha Valley — once Bhutan’s ancient capital.

Visit Chimi Lhakhang, a peaceful temple surrounded by traditional villages and rice fields.

Explore the magnificent Punakha Dzong, standing proudly between two rivers.

Walk across Bhutan’s famous suspension bridge and feel the beauty of the valley from above.

A day where landscapes, legends and history come together.`
},


{
day:"Day 3",
title:"Hidden Temples & Valley Blessings",
location:"Punakha Exploration",
image:"/punakha.png",

text:`Today discover the peaceful side of Punakha.

Begin with a scenic hike through fields and forests towards Khamsum Yulley Namgyal Chorten.

This remarkable temple was built with prayers for harmony and peace.

Continue to sacred monasteries overlooking the valley and discover places where spirituality has remained unchanged for generations.

Slow travel.

Deep connection.

True Bhutan.`
},


{
day:"Day 4",
title:"Into The Highlands – Journey To Laya",
location:"Punakha → Gasa → Laya",
image:"/yak.png",

text:`Today your true Himalayan adventure begins.

Travel north towards the remote mountains of Gasa before starting your trek into the legendary village of Laya.

Follow trails surrounded by forests, rivers and dramatic Himalayan scenery.

As you climb higher, enter a world few travellers experience.

Meet the Layap people, known for their unique traditions, clothing and mountain lifestyle.

Tonight, sleep surrounded by the untouched beauty of Bhutan’s highlands.`
},


{
day:"Day 5",
title:"Guardians Of The Mountains – Royal Highland Festival",
location:"Laya Highland Festival",
image:"/merak.png",

text:`Today is the heart of your journey.

Experience one of Bhutan’s rarest and most extraordinary celebrations — the Royal Highland Festival.

Set beneath towering Himalayan peaks, this festival celebrates the strength, creativity and traditions of Bhutan’s mountain communities.

Experience:

🐂 Yak culture and highland traditions
👑 Unique Layap heritage
🎶 Traditional songs and dances
🏔 Mountain lifestyle exhibitions
🥾 Highland sporting events

This is Bhutan beyond imagination.

A celebration of people who live among the clouds.`
},


{
day:"Day 6",
title:"A Deeper Highland Experience",
location:"Laya",
image:"/flag.png",

text:`Spend another unforgettable day immersed in highland culture.

Meet communities from remote mountain regions.

Discover traditional knowledge, local crafts, highland food and stories passed through generations.

Surrounded by Himalayan giants, experience a lifestyle built around nature, resilience and harmony.

Few journeys bring travellers this close to authentic Bhutan.`
},


{
day:"Day 7",
title:"Leaving The Clouds Behind",
location:"Laya → Punakha",
image:"/monk.png",

text:`Wake up one final morning among Bhutan’s remote peaks.

Descend slowly through mountain trails, carrying memories of the highlands.

Return towards Punakha, following rivers and valleys back from one of Bhutan’s most extraordinary regions.

A day to reflect on a journey few travellers will ever experience.`
},


{
day:"Day 8",
title:"Ancient Paro & Bhutanese Traditions",
location:"Punakha → Paro",
image:"/paro.png",

text:`Return to beautiful Paro Valley.

Visit Kyichu Lhakhang, one of Bhutan’s oldest and most sacred temples.

Experience traditional Bhutanese activities, explore local markets and enjoy the peaceful rhythm of valley life.

Today reconnects you with Bhutan’s culture after your mountain adventure.`
},


{
day:"Day 9",
title:"Tiger’s Nest – The Final Himalayan Journey",
location:"Taktsang Monastery",
image:"/tiger.png",

text:`Complete your Bhutan adventure with the legendary Tiger’s Nest hike.

Walk through forests decorated with prayer flags towards the monastery resting dramatically on a cliff.

This sacred place represents courage, devotion and transformation.

Standing above Paro Valley, look back on your journey:

The festivals.

The mountains.

The people.

The memories.

This is your Bhutan story.`
},


{
day:"Day 10",
title:"Farewell Bhutan – Until The Mountains Call Again",
location:"Departure",
image:"/airport.png",

text:`Your Royal Highland journey comes to an end.

Leave Bhutan carrying memories of remote valleys, sacred traditions and friendships created among the mountains.

The Himalayas will always be waiting.

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
"linear-gradient(rgba(0,0,0,.55),rgba(0,0,0,.75)), url('/highland-festival.png')"
}}

>

<div className="text-center text-white px-6">

<h1 className="text-6xl font-bold">
🏔 Guardians Of The Mountains
</h1>

<p className="text-2xl mt-5">
10 Days Royal Highland Festival Experience
</p>

</div>

</section>



<section className="max-w-4xl mx-auto py-16 text-center px-6">

<h2 className="text-4xl font-bold">
Journey Beyond Ordinary Bhutan
</h2>

<p className="mt-6 text-lg text-gray-700">

Discover remote Himalayan communities, ancient traditions,
and a festival celebrated among the clouds.

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
<p>✓ Meals</p>
<p>✓ Trek support</p>
<p>✓ Experienced guide</p>
<p>✓ Entry permits</p>
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

Start My Highland Journey →

</Link>


</section>


</main>

);

}