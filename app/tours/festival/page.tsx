import Link from "next/link";

export default function FestivalTours() {

const festivals = [

{
title:"Dance of Legends",
subtitle:"6 Days Paro Tshechu Festival",
image:"/paro-festival.png",
link:"/tours/festival/paro",
text:
"Witness Bhutan’s most iconic celebration where sacred mask dances, ancient stories and colourful traditions come alive in the beautiful Paro Valley."
},


{
title:"Festival Above The Clouds",
subtitle:"7 Days Dochula Festival",
image:"/dochula-festival.png",
link:"/tours/festival/dochula",
text:
"Celebrate Bhutanese culture high among the Himalayan mountains, where sacred performances honour history, peace and tradition."
},


{
title:"The Kingdom’s Grand Celebration",
subtitle:"7 Days Thimphu Festival",
image:"/thimphu-festival.png",
link:"/tours/festival/thimphu",
text:
"Experience Bhutan’s capital during its biggest celebration filled with sacred dances, colourful costumes and spiritual energy."
},


{
title:"Wings Of The Himalayas",
subtitle:"9 Days Black-Necked Crane Festival",
image:"/crane-festival.png",
link:"/tours/festival/crane",
text:
"Journey into the magical Phobjikha Valley where Bhutan celebrates the arrival of the graceful black-necked cranes."
},


{
title:"Warriors Of The Valley",
subtitle:"9 Days Punakha Festival",
image:"/punakha-festival.png",
link:"/tours/festival/punakha",
text:
"Step inside Bhutan’s ancient history with warrior traditions, sacred dances and unforgettable celebrations inside Punakha Dzong."
},


{
title:"Guardians Of The Mountains",
subtitle:"10 Days Royal Highland Festival",
image:"/highland-festival.png",
link:"/tours/festival/highland",
text:
"Travel beyond ordinary routes into Bhutan’s remote mountains where highland communities celebrate their unique way of life."
}

];


return(

<main className="bg-[#f7f1e5] min-h-screen">


{/* HERO SECTION */}

<section
className="
h-screen
bg-cover
bg-center
flex
items-center
justify-center
text-center
"

style={{
backgroundImage:
"linear-gradient(rgba(0,0,0,.55),rgba(0,0,0,.75)), url('/Festival.png')"
}}

>


<div className="text-white px-6">


<h1 className="text-6xl font-bold mb-6 text-yellow-400 drop-shadow-2x1">
Bhutan Festival Journeys
</h1>


<p className="text-2xl max-w-3xl mx-auto">

Where Ancient Traditions Come Alive

</p>


</div>


</section>




{/* INTRO */}


<section className="max-w-5xl mx-auto py-16 text-center px-6">


<h2 className="text-4xl font-bold">

Experience Bhutan Through Celebration

</h2>


<p className="
mt-6
text-gray-700
text-lg
leading-8
">

Step into a kingdom where centuries-old traditions still breathe.
Witness sacred mask dances, colourful festivals, mountain communities
and spiritual celebrations passed down through generations.

</p>


</section>





{/* FESTIVAL CARDS */}


<section className="
max-w-7xl
mx-auto
px-6
pb-20
grid
md:grid-cols-3
gap-10
">


{festivals.map((item,index)=>(


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

Explore Festival →

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

Find Your Perfect Festival Date

</h2>


<p className="mt-5 text-gray-300">

Let Dragon Vista Tours craft your unforgettable Bhutan festival experience.

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