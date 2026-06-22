export default function TravelGuide() {

const dos = [

"Follow proper dress code when visiting monasteries, temples, offices and cultural sites.",
"Remove hats and footwear before entering temple altar rooms.",
"Maintain silence and respect inside religious and heritage sites.",
"Walk clockwise around religious monuments, stupas and prayer wheels.",
"Carry valid travel documents and permits during your journey.",
"Use certified accommodation, licensed guides and approved tour services.",
"Respect local traditions, customs and community values.",
"Dispose waste responsibly and protect Bhutan’s natural environment.",
"Follow traffic rules and use designated crossings.",
"Travel with appropriate insurance for unforeseen emergencies."

];


const donts = [

"Do not touch murals, religious paintings or sacred objects inside temples.",
"Avoid smoking in public areas where restrictions apply.",
"Do not use drones without official permission.",
"Avoid spitting or littering in public and natural areas.",
"Do not take photos or videos where photography is restricted.",
"Do not feed wildlife or animals along highways and public areas.",
"Do not wash, swim or throw objects into sacred lakes and water bodies.",
"Avoid sitting with legs stretched towards religious altars.",
"Do not disrespect cultural practices or local beliefs.",
"Do not damage heritage sites, plants or the natural environment."

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
"url('/thimphu.png')"

}}

>


{/* DARK OVERLAY */}


<div className="absolute inset-0 bg-black/75"></div>



{/* CONTENT */}

<div className="relative z-10">



{/* HEADER */}


<div className="text-center max-w-5xl mx-auto mb-20">


<h4 className="
text-yellow-500
tracking-[6px]
uppercase
">

Dragon Vista Tours

</h4>



<h1 className="
text-5xl
md:text-7xl
font-bold
mt-5
">

Bhutan Travel Guide

</h1>



<h2 className="
text-yellow-500
text-2xl
mt-5
">

Do's & Don'ts

</h2>



<p className="
mt-8
text-gray-200
text-lg
leading-relaxed
">

A respectful journey through the mystical
Land of the Thunder Dragon.

<br/><br/>

Travel responsibly, honour Bhutanese traditions,
protect sacred places and help preserve the beauty
of our Himalayan kingdom.

</p>


</div>





{/* CARDS */}


<div className="
grid
md:grid-cols-2
gap-10
max-w-7xl
mx-auto
">



{/* DO */}

<div className="
bg-white/10
backdrop-blur-md
rounded-3xl
p-8
border
border-green-400/40
shadow-xl
">


<h2 className="
text-3xl
font-bold
text-green-400
mb-8
">

✓ DO's

</h2>




<div className="space-y-5">


{dos.map((item,index)=>(


<div

key={index}

className="flex gap-4"

>


<span className="
text-green-400
text-xl
">

✓

</span>


<p className="
text-gray-200
leading-relaxed
">

{item}

</p>


</div>


))}


</div>


</div>







{/* DON'T */}

<div className="
bg-white/10
backdrop-blur-md
rounded-3xl
p-8
border
border-red-400/40
shadow-xl
">



<h2 className="
text-3xl
font-bold
text-red-400
mb-8
">

✕ DON'Ts

</h2>



<div className="space-y-5">


{donts.map((item,index)=>(


<div

key={index}

className="flex gap-4"

>


<span className="
text-red-400
text-xl
">

✕

</span>



<p className="
text-gray-200
leading-relaxed
">

{item}

</p>



</div>


))}


</div>



</div>



</div>







{/* FOOTER */}


<div className="
text-center
mt-20
">


<h3 className="
text-yellow-500
text-3xl
font-semibold
">

Thank You For Travelling Responsibly

</h3>



<p className="
mt-5
text-gray-200
text-xl
">

Dragon Vista Tours — Where Happiness Meets Adventure

</p>



</div>



</div>



</section>


);

}