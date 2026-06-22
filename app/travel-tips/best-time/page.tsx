export default function BestTimeBhutan() {

const seasons = [

{
icon:"🌸",
season:"Spring",
months:"March – May",
title:"The Kingdom Awakens",
description:
"As winter fades, Bhutan transforms into a paradise of colours. Hillsides bloom with wildflowers, valleys glow with greenery, and Himalayan rhododendrons decorate the mountains in shades of red, pink and white.",
highlights:[
"Blooming Himalayan landscapes",
"Comfortable weather for trekking",
"Vibrant festivals and cultural celebrations",
"Perfect season for photography and nature lovers"
],
tips:[
"Reserve flights, guides and accommodation early as spring is a popular travel season.",
"Carry comfortable layers and light rain protection."
],
moment:
"Experience the magnificent Paro Tshechu, where sacred mask dances, colourful traditions and Bhutanese culture come alive."
},


{
icon:"🌿",
season:"Summer",
months:"June – August",
title:"The Emerald Escape",
description:
"Summer reveals Bhutan at its most peaceful and refreshing. Rain brings life to forests, rivers and rice terraces, transforming the kingdom into a breathtaking green paradise.",
highlights:[
"Lush valleys and green rice fields",
"Fewer travellers and peaceful experiences",
"Authentic cultural encounters",
"Beautiful scenery for nature exploration"
],
tips:[
"Early summer offers a wonderful balance of greenery and comfortable travel conditions.",
"Pack waterproof clothing and suitable footwear."
],
moment:
"Discover quiet villages, peaceful valleys and authentic Bhutanese connections away from the crowds."
},


{
icon:"🍂",
season:"Autumn",
months:"September – November",
title:"The Golden Himalayan Journey",
description:
"Autumn brings clear skies, golden valleys and spectacular Himalayan views. It is also Bhutan’s festival season filled with sacred dances and colourful celebrations.",
highlights:[
"Spectacular Himalayan views",
"Golden harvest landscapes",
"Major Bhutanese festivals",
"Excellent trekking conditions"
],
tips:[
"Advance planning is recommended as autumn is a preferred travel season.",
"Bring layered clothing for changing mountain temperatures."
],
moment:
"Walk through golden valleys, celebrate traditional festivals and experience Bhutan at its most joyful."
},


{
icon:"❄️",
season:"Winter",
months:"December – February",
title:"The Silent Himalayan Paradise",
description:
"Winter uncovers Bhutan’s peaceful beauty with crystal clear skies, quiet monasteries and breathtaking views of snow-covered Himalayan peaks.",
highlights:[
"Clear mountain views",
"Peaceful travel atmosphere",
"Black-Necked Crane experiences",
"Unique winter festivals"
],
tips:[
"December offers beautiful scenery with comfortable winter conditions.",
"Warm clothing is recommended for mornings and mountain areas."
],
moment:
"Experience Bhutan’s silence and serenity among spiritual landscapes and peaceful valleys."
}

];


return (

<section
className="
min-h-screen 
relative 
bg-cover 
bg-center 
bg-fixed
text-white 
px-6 
py-20
"

style={{
backgroundImage:
"url('/golden.png')"
}}

>


{/* DARK OVERLAY */}

<div className="absolute inset-0 bg-black/75"></div>


{/* CONTENT */}

<div className="relative z-10">



{/* HERO */}

<div className="max-w-5xl mx-auto text-center mb-20">


<h4 className="text-yellow-500 uppercase tracking-[5px]">

Dragon Vista Tours Presents

</h4>


<h1 className="text-5xl md:text-7xl font-bold mt-5">

Bhutan Through the Seasons

</h1>


<h2 className="text-yellow-500 text-2xl mt-5">

A Year of Himalayan Wonders

</h2>



<p className="text-gray-200 text-lg leading-relaxed mt-8">

Hidden among the majestic Himalayan mountains, Bhutan — 
the legendary Land of the Thunder Dragon — is a destination 
where ancient traditions, untouched landscapes and spiritual 
heritage live in perfect harmony.

<br/><br/>

There is no single perfect time to visit Bhutan —
because every season tells its own unforgettable story.

</p>


</div>





{/* SEASON CARDS */}


<div className="grid md:grid-cols-2 gap-10 max-w-7xl mx-auto">


{seasons.map((item,index)=>(


<div
key={index}

className="
bg-white/10
backdrop-blur-md
rounded-3xl 
p-8 
border 
border-yellow-500/40
shadow-xl 
hover:scale-105 
duration-300
"

>


<div className="text-5xl">
{item.icon}
</div>


<h2 className="text-4xl font-bold mt-5">
{item.season}
</h2>


<p className="text-yellow-500 mt-2">
{item.months}
</p>


<h3 className="text-2xl mt-5 font-semibold">
{item.title}
</h3>


<p className="text-gray-200 mt-5 leading-relaxed">

{item.description}

</p>



<h3 className="text-yellow-500 text-xl mt-8">

✨ Seasonal Highlights

</h3>


<ul className="mt-4 space-y-2">

{item.highlights.map((h,i)=>(

<li key={i}>
✓ {h}
</li>

))}

</ul>



<h3 className="text-yellow-500 text-xl mt-8">

Travel Tips

</h3>


<ul className="mt-4 space-y-2 text-gray-200">


{item.tips.map((tip,i)=>(

<li key={i}>

• {tip}

</li>

))}


</ul>




<div className="
mt-8 
bg-black/60 
rounded-2xl 
p-5 
border 
border-yellow-500/30
">


<h3 className="text-yellow-500">

Dragon Vista Moment

</h3>


<p className="text-gray-200 mt-3">

{item.moment}

</p>


</div>



</div>


))}


</div>





{/* END */}

<div className="max-w-5xl mx-auto text-center mt-24">


<h2 className="text-yellow-500 text-4xl font-bold">

Begin Your Bhutan Story With Dragon Vista Tours

</h2>


<p className="text-gray-200 text-lg mt-8">

Whether you dream of colourful festivals, mountain adventures,
luxury escapes, spiritual journeys or hidden valleys —
Bhutan welcomes you in every season.

</p>


<p className="text-2xl mt-10">

Every journey has a season.
<br/>
Every season has a story.

</p>


<h3 className="text-yellow-500 text-2xl mt-8">

Let Dragon Vista Tours create yours.

</h3>


</div>


</div>


</section>


);

}