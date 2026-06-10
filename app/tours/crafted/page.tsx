import Link from "next/link";

export default function CraftedJourneys() {

const journeys = [

{
title:"The Ultimate Honeymoon",
text:"Escape to a world built just for two.",
image:"/honeymoon.png",
link:"/tours/crafted/honeymoon"
},

{
title:"Milestone Anniversary",
text:"Reignite the spark in the world's most breathtaking destinations.",
image:"/anniversary.png",
link:"/tours/crafted/anniversary"
},



{
title:"VIP Birthday Bash",
text:"Blow out the candles where luxury knows no limits.",
image:"/birthday.png",
link:"/tours/crafted/birthday"
},

{
title:"The Mystery Escape",
text:"Pack your bags, leave the details to us, and embrace the unknown.",
image:"/mystery.png",
link:"/tours/crafted/mystery"
},

{
title:"Multi-Generation Family Legacy",
text:"Create priceless family stories that will be passed down for decades.",
image:"/family.png",
link:"/tours/crafted/family"
},

{
title:"Element Adventure",
text:"Epic, high-octane expeditions designed for the modern explorer.",
image:"/adventure.png",
link:"/tours/crafted/adventure"
},

{
title:"Himalayan Retreat",
text:"Disconnect from the noise to reconnect with your soul.",
image:"/retreat.png",
link:"/tours/crafted/retreat"
}

];


return (

<main className="min-h-screen bg-[#07111f] text-white">


{/* HERO */}

<section className="text-center py-20 px-6">

<h1 className="
text-5xl 
font-bold
text-yellow-400
mb-6">

Crafted Bhutan Journeys

</h1>


<p className="
max-w-3xl
mx-auto
text-xl
text-gray-300">

For moments that deserve more than memories — 
we design extraordinary Bhutan experiences crafted around your story.

</p>


</section>



{/* JOURNEY CARDS */}


<section className="
grid
grid-cols-1
md:grid-cols-2
lg:grid-cols-3
gap-10
px-10
pb-20
">


{journeys.map((item)=>(


<div
key={item.title}

className="
relative
h-[420px]
rounded-3xl
overflow-hidden
shadow-2xl
group
">


<img

src={item.image}

className="
absolute
w-full
h-full
object-cover
group-hover:scale-110
transition
duration-700
"

/>


<div className="
absolute
inset-0
bg-black/50">

</div>



<div className="
absolute
bottom-0
p-8
">


<h2 className="
text-3xl
font-bold
text-yellow-300
mb-4">

{item.title}

</h2>


<p className="
text-lg
text-gray-200
mb-6">

{item.text}

</p>



<Link

href={item.link}

className="
inline-block
bg-yellow-500
text-black
px-6
py-3
rounded-full
font-bold
hover:bg-white
transition
"

>

Explore Journey →

</Link>


</div>


</div>


))}


</section>



{/* CONTACT */}

<section className="
text-center
py-20
bg-gradient-to-r
from-yellow-700
to-yellow-500
text-black
">


<h2 className="
text-4xl
font-bold
mb-5">

Your Bhutan Story Starts Here

</h2>


<p className="text-xl mb-8">

Tell us your dream. We create the journey.

</p>



<Link

href="/contact"

className="
bg-black
text-white
px-12
py-5
rounded-full
text-xl
hover:bg-gray-800
"

>

Enquire Now →

</Link>


</section>



</main>


)

}