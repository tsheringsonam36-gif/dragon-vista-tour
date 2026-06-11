import Link from "next/link";

export default function CulturalTours() {

const tours = [

{
title:"A Taste Of Bhutan",
subtitle:"4 Days",
image:"/monk.png",
link:"/tours/cultural/4-days",
text:
"Perfect introduction to Bhutan. Discover peaceful valleys, ancient temples, traditional lifestyle and the unique happiness of the Himalayan Kingdom."
},


{
title:"Mystical Bhutan Experience",
subtitle:"5 Days",
image:"/buddha.png",
link:"/tours/cultural/5-days",
text:
"Experience Bhutan’s spiritual beauty through sacred monasteries, cultural landmarks and breathtaking Himalayan landscapes."
},


{
title:"Golden Kingdom Journey",
subtitle:"7 Days",
image:"/golden.png",
link:"/tours/cultural/7-days",
text:
"Explore Bhutan deeply through iconic valleys, historic dzongs, traditional villages and unforgettable cultural experiences."
},


{
title:"Bhutan Grand Discovery",
subtitle:"10 Days",
image:"/punakha.png",
link:"/tours/cultural/10-days",
text:
"Travel across Bhutan’s beautiful regions and experience hidden valleys, local traditions and authentic Bhutanese hospitality."
},


{
title:"Ultimate Bhutan Adventure",
subtitle:"15 Days Complete Cultural Experience",
image:"/ultimate.png",
link:"/tours/cultural/15-days",
text:
"Discover the complete spirit of Bhutan through culture, history, nature, festivals and meaningful local experiences."
}

];


return(

<main className="bg-[#f7f1e5] min-h-screen">


{/* HERO VIDEO SECTION */}

<section className="
relative
h-screen
flex
items-center
justify-center
text-center
overflow-hidden
">


{/* Background Video */}

<video
autoPlay
loop
muted
playsInline
className="
absolute
top-0
left-0
w-full
h-full
object-cover
"
>

<source src="/culture-video.mp4" type="video/mp4" />

</video>



{/* dark Overlay */}

<div className="
absolute
inset-0
bg-black/50
">
</div>



{/* Text */}

<div className="
relative
z-10
text-white
px-6
">


<h1 className="
text-6xl
font-bold
mb-6
text-yellow-400
drop-shadow-2x1
">

Bhutan Cultural Journeys

</h1>


<p className="
text-2xl
max-w-3xl
mx-auto
">

Discover Ancient Traditions And The Last Himalayan Kingdom

</p>


</div>


</section>





{/* INTRO */}


<section className="max-w-5xl mx-auto py-16 text-center px-6">


<h2 className="text-4xl font-bold">

Experience The Heart Of Bhutan

</h2>


<p className="
mt-6
text-gray-700
text-lg
leading-8
">

Journey into a peaceful kingdom where culture, spirituality and nature live together.
Explore ancient monasteries, traditional villages, mountain valleys and Bhutanese hospitality.


</p>


</section>





{/* TOUR CARDS */}


<section className="
max-w-7xl
mx-auto
px-6
pb-20
grid
md:grid-cols-3
gap-10
">


{tours.map((item,index)=>(


<div

key={index}

className="
bg-white
rounded-3xl
overflow-hidden
shadow-xl
hover:-translate-y-3
duration-300
"

>


<img

src={item.image}

className="
h-72
w-full
object-cover
"

/>


<div className="p-8">


<h2 className="
text-3xl
font-bold
text-gray-900
">

{item.title}

</h2>



<p className="
text-yellow-600
font-semibold
mt-2
">

{item.subtitle}

</p>



<p className="
mt-5
text-gray-700
leading-7
">

{item.text}

</p>



<Link

href={item.link}

className="
inline-block
mt-8
bg-yellow-500
text-black
px-8
py-4
rounded-full
font-bold
hover:bg-yellow-400
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
bg-gray-900
text-white
text-center
py-16
">


<h2 className="text-4xl font-bold">

Create Your Personal Bhutan Journey

</h2>


<p className="mt-5 text-gray-300">

Tell Dragon Vista Tours your dream Bhutan experience and we will craft your perfect journey.

</p>



<Link

href="/contact"

className="
inline-block
mt-10
bg-yellow-500
text-black
px-12
py-5
rounded-full
text-xl
font-bold
"

>

Talk To Us →

</Link>


</section>



</main>

);

}