"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";


export default function Admin(){

const router = useRouter();

const [bookings,setBookings]=useState<any[]>([]);

const [form,setForm]=useState<any>({

bookingId:"",
guest:"",
country:"",
pax:"",
year:"2026",
month:"January",
arrival:"",
departure:"",
guide:"",
driver:"",
vehicle:"",
payment:"Pending",

passport:"",
visa:"",
ticket:"",
itinerary:"",

hotels:[
{hotel:"",city:"",status:"Pending"},
{hotel:"",city:"",status:"Pending"},
{hotel:"",city:"",status:"Pending"},
{hotel:"",city:"",status:"Pending"},
{hotel:"",city:"",status:"Pending"},
{hotel:"",city:"",status:"Pending"},
{hotel:"",city:"",status:"Pending"},
]

});



// LOGIN CHECK

useEffect(()=>{

const login =
localStorage.getItem("DVTLOGIN");

if(login!=="YES"){

router.push("/login");

}


const saved =
localStorage.getItem("DVTCRM");

if(saved){

setBookings(JSON.parse(saved));

}

},[]);





function saveBooking(){

const updated=[
...bookings,
form
];

setBookings(updated);

localStorage.setItem(
"DVTCRM",
JSON.stringify(updated)
);

alert("Tour File Saved");

}





function deleteBooking(index:any){

const updated =
bookings.filter((_,i)=>i!==index);

setBookings(updated);

localStorage.setItem(
"DVTCRM",
JSON.stringify(updated)
);

}





function logout(){

localStorage.removeItem("DVTLOGIN");

router.push("/login");

}








return(

<main
className="
min-h-screen
bg-cover
bg-center
p-10
"

style={{

backgroundImage:
"linear-gradient(rgba(0,0,0,.6),rgba(0,0,0,.7)), url('/logo.png')"

}}

>


<div className="flex justify-between">


<h1 className="text-4xl font-bold">

Dragon Vista Admin Panel

</h1>


<button

onClick={logout}

className="bg-red-600 text-white px-5 rounded"

>

Logout

</button>


</div>





<button

onClick={()=>router.push("/admin/operation")}

className="bg-black text-white px-6 py-3 rounded mt-5"

>

Open Operation Board →

</button>








{/* FORM */}


<div className="bg-white p-6 rounded-xl shadow mt-8 grid grid-cols-3 gap-4">


{[

"bookingId",
"guest",
"country",
"pax",
"arrival",
"departure",
"guide",
"driver",
"vehicle",
"payment",

].map((item)=>(


<input

key={item}

placeholder={item}

className="border p-3"

onChange={(e)=>

setForm({

...form,

[item]:e.target.value

})

}

/>


))}






<select

className="border p-3"

onChange={(e)=>

setForm({...form,year:e.target.value})

}

>

<option>2026</option>
<option>2027</option>
<option>2028</option>
<option>2029</option>
<option>2030</option>

</select>





<select

className="border p-3"

onChange={(e)=>

setForm({...form,month:e.target.value})

}

>

<option>January</option>
<option>February</option>
<option>March</option>
<option>April</option>
<option>May</option>
<option>June</option>
<option>July</option>
<option>August</option>
<option>September</option>
<option>October</option>
<option>November</option>
<option>December</option>

</select>







<h2 className="col-span-3 text-xl font-bold">

Documents

</h2>




{["passport","visa","ticket","itinerary"].map((doc)=>(


<input

key={doc}

type="file"

className="border p-3"

onChange={(e:any)=>{

const file =
URL.createObjectURL(
e.target.files[0]
);

setForm({

...form,

[doc]:file

});

}}

/>


))}





<button

onClick={saveBooking}

className="bg-green-600 text-white p-4 rounded col-span-3"

>

SAVE TOUR FILE

</button>



</div>








{/* SAVED FILES */}


<h2 className="text-3xl font-bold mt-10">

Saved Tour Files

</h2>



<div className="grid gap-4 mt-5">


{bookings.map((b,i)=>(


<div

key={i}

className="bg-white p-5 rounded shadow flex justify-between"

>


<div>


<b>{b.bookingId}</b>

<br/>

{b.guest}

<br/>

{b.month} {b.year}


</div>



<button

onClick={()=>deleteBooking(i)}

className="bg-red-600 text-white px-5 rounded"

>

Delete

</button>



</div>


))}


</div>



</main>


);

}