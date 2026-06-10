import Link from "next/link";

export default function PunakhaFestival() {

const itinerary=[

{
day:"Day 1",
title:"Arrival In Bhutan – Enter The Kingdom Of Traditions",
location:"Paro → Thimphu",
image:"/paro.png",

text:`Welcome to Bhutan, the Land of the Thunder Dragon.

Your journey begins as you arrive among Himalayan mountains and peaceful valleys.

Meet your private Bhutanese guide before travelling towards Thimphu.

Begin discovering Bhutan’s cultural soul through traditional museums, ancient fortresses and local life.

Explore Bhutanese heritage, traditional textiles and the oldest fortress in the kingdom.

Today introduces you to a land where history and spirituality still live every day.`
},


{
day:"Day 2",
title:"Sacred Trails & Bhutanese Living Culture",
location:"Thimphu",
image:"/thimphu.png",

text:`Begin your day discovering the spiritual heart of Bhutan’s capital.

Visit the National Memorial Chorten where generations gather for daily prayers.

Experience traditional handmade paper making and explore Bhutan’s preserved arts.

Later, journey into the mountains with a peaceful hike towards Tango Monastery.

Surrounded by forests and meditation retreats, this sacred site has been an important Buddhist learning centre for centuries.

End your day exploring local markets filled with colours, conversations and Bhutanese life.`
},


{
day:"Day 3",
title:"Warriors Of The Valley – Punakha Festival",
location:"Punakha Dzong",
image:"/punakha.png",

text:`Today is the highlight of your journey.

Step inside the magnificent Punakha Dzong and experience one of Bhutan’s most meaningful celebrations.

The Punakha Tshechu honours Guru Rinpoche through sacred mask dances, spiritual performances and ancient rituals.

Monks dressed in colourful silk costumes bring centuries-old stories to life through movement, music and devotion.

Experience:

🎭 Sacred cham dances
⚔️ Ancient warrior traditions
🙏 Spiritual blessings
🏯 Bhutan’s most beautiful fortress setting

Later visit Khamsum Yulley Namgyal Chorten, a peaceful temple overlooking Punakha Valley.

Today is where Bhutan’s history becomes alive.`
},


{
day:"Day 4",
title:"Across Valleys Into Bhutan’s Spiritual Heartland",
location:"Punakha → Bumthang",
image:"/paro-valley.png",

text:`Begin with a peaceful walk through traditional villages and rice fields towards Chimi Lhakhang.

This beloved temple is connected with the legendary Divine Madman and Bhutanese stories of blessings.

Continue through mountain valleys, passing traditional towns and landscapes shaped by centuries of culture.

Your journey moves deeper into Bhutan’s spiritual heartland.`
},


{
day:"Day 5",
title:"Bumthang – Valley Of Ancient Legends",
location:"Bumthang",
image:"/couple-blessing.png",

text:`Explore one of Bhutan’s most sacred valleys.

Bumthang is home to ancient temples, legends and spiritual treasures.

Visit Tamshing Monastery, founded by the great treasure revealer Pema Lingpa.

Discover Kurjey Lhakhang, connected with Guru Rinpoche and among Bhutan’s most sacred sites.

Explore Jambay Lhakhang and centuries-old temples where Bhutanese spirituality continues unchanged.

A day surrounded by blessings, history and Himalayan peace.`
},


{
day:"Day 6",
title:"Royal Heritage & Journey Through Central Bhutan",
location:"Bumthang → Gangtey",
image:"/punakha.png",

text:`Travel through spectacular mountain landscapes towards Gangtey.

Visit Trongsa, the ancestral home of Bhutan’s royal family.

Explore the impressive Trongsa Dzong, rising dramatically above the valley.

Discover royal history, ancient watchtowers and stories that shaped modern Bhutan.

Continue towards peaceful Phobjikha Valley.`
},


{
day:"Day 7",
title:"Phobjikha Valley – Nature & Mountain Serenity",
location:"Gangtey → Paro",
image:"/paro-valley.png",

text:`Wake up in one of Bhutan’s most beautiful valleys.

Explore Gangtey Monastery overlooking the wide glacial landscape.

During winter months, Phobjikha becomes home to the elegant black-necked cranes arriving from Tibet.

Later return to Paro Valley.

Visit Paro Dzong, the National Museum and historic landmarks surrounded by mountain scenery.`
},


{
day:"Day 8",
title:"Tiger’s Nest – Bhutan’s Sacred Wonder",
location:"Taktsang Monastery",
image:"/tigernest.png",

text:`Today completes your Bhutan journey with the legendary Tiger’s Nest hike.

Follow forest paths decorated with prayer flags towards the monastery hanging high on a cliff.

This sacred place marks where Guru Rinpoche meditated and blessed the valley.

After visiting Tiger’s Nest, continue to Kyichu Lhakhang — one of Bhutan’s oldest temples.

A perfect spiritual ending to your festival adventure.`
},


{
day:"Day 9",
title:"Farewell Bhutan – Until Next Time",
location:"Departure",
image:"/airport.png",

text:`Your Punakha Festival journey comes to an end.

Leave with memories of ancient dances, sacred valleys, mountain landscapes and Bhutanese kindness.

The Land of the Thunder Dragon will always welcome you back.

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
"linear-gradient(rgba(0,0,0,.55),rgba(0,0,0,.75)), url('/punakha-festival.png')"
}}

>

<div className="text-center text-white px-6">

<h1 className="text-6xl font-bold">
⚔️ Warriors Of The Valley
</h1>

<p className="text-2xl mt-5">
9 Days Punakha Tshechu Festival Experience
</p>

</div>

</section>



<section className="max-w-4xl mx-auto py-16 text-center px-6">

<h2 className="text-4xl font-bold">
Where Bhutan’s Ancient Stories Come Alive
</h2>

<p className="mt-6 text-lg text-gray-700">

Experience sacred dances, warrior traditions and the
spiritual beauty of Bhutan’s ancient capital.

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

Plan My Punakha Festival Journey →

</Link>

</section>


</main>

);

}