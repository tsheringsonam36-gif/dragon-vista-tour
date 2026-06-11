import Link from "next/link";

export default function TrekkingPage() {

const treks = [

{
title:"Journey Above The Clouds",
subtitle:"7 Days Bumdra Trek",
image:"/bumdrala.png",
link:"/tours/trekking/bumdra",
text:
"Hike through peaceful forests and mountain trails to one of Bhutan’s most magical campsites overlooking the Paro Valley."
},


{
title:"Path To The Sacred Mountain",
subtitle:"11 Days Jomolhari Trek",
image:"/jomolhari.png",
link:"/tours/trekking/jomolhari",
text:
"Experience Bhutan’s legendary Himalayan adventure beneath the stunning snow-covered Mount Jomolhari."
},


{
title:"Hidden Himalayan Trails",
subtitle:"12 Days Soi Yaksa Trek",
image:"/yak.png",
link:"/tours/trekking/soi-yaksa",
text:
"Discover untouched valleys, alpine landscapes and breathtaking mountain views far away from ordinary routes."
},


{
title:"Ancient Mountain Pathways",
subtitle:"9 Days Druk Path Trek",
image:"/drukpath.png",
link:"/tours/trekking/druk-path",
text:
"Walk the historic trail between Paro and Thimphu through lakes, forests and spectacular Himalayan scenery."
},


{
title:"Land Of Thousand Lakes",
subtitle:"9 Days Dagala Thousand Lakes Trek",
image:"/dagalla.png",
link:"/tours/trekking/dagala",
text:
"Explore crystal mountain lakes, peaceful highlands and unforgettable views across Bhutan’s untouched wilderness."
},


{
title:"Hidden Western Adventure",
subtitle:"7 Days Sagala Trek",
image:"/sagala.png",
link:"/tours/trekking/sagala",
text:
"Experience a beautiful short Himalayan trek filled with nature, mountain passes and traditional landscapes."
},


{
title:"Eastern Himalayan Escape",
subtitle:"18 Days Merak Sakteng Trek",
image:"/merak.png",
link:"/tours/trekking/merak-sakteng",
text:
"Journey into remote eastern Bhutan and meet unique mountain communities with ancient traditions."
},


{
title:"The Ultimate Himalayan Expedition",
subtitle:"21 Days Laya Gasa Trek",
image:"/jomolhari.png",
link:"/tours/trekking/laya-gasa",
text:
"Experience one of Bhutan’s greatest adventures through glaciers, remote villages and spectacular mountains."
},


{
title:"Peaceful Nature Discovery",
subtitle:"5 Days Sinchula Trek",
image:"/sinchulla.png",
link:"/tours/trekking/sinchula",
text:
"A beautiful short trek combining Himalayan nature, peaceful forests and cultural experiences."
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

<source src="/trekking-video.mp4" type="video/mp4" />

</video>



{/* Dark Overlay */}

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

Bhutan Trekking Adventures

</h1>


<p className="
text-2xl
max-w-3xl
mx-auto
">

Walk Ancient Trails Through The Untouched Himalayas

</p>


</div>


</section>





{/* INTRO */}

<section className="max-w-5xl mx-auto py-16 text-center px-6">


<h2 className="text-4xl font-bold">

Discover Bhutan Beyond The Roads

</h2>


<p className="
mt-6
text-gray-700
text-lg
leading-8
">

Explore hidden valleys, sacred mountains, alpine lakes and untouched landscapes.
Every step connects you with Bhutan’s natural beauty, culture and peaceful Himalayan spirit.


</p>


</section>






{/* TREKKING CARDS */}

<section className="
max-w-7xl
mx-auto
px-6
pb-20
grid
md:grid-cols-3
gap-10
">


{treks.map((item,index)=>(


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

Explore Trek →

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

Start Your Himalayan Adventure

</h2>


<p className="mt-5 text-gray-300">

Tell Dragon Vista Tours your dream trek and we will craft your unforgettable Bhutan journey.

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