"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";


export default function OperationBoard(){

const router = useRouter();

const [bookings,setBookings]=useState<any[]>([]);

const [year,setYear]=useState("All");

const [month,setMonth]=useState("All");





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







const filtered =
bookings.filter((b)=>{

return(

(year==="All" || b.year===year)

&&

(month==="All" || b.month===month)

);

});







function logout(){

localStorage.removeItem("DVTLOGIN");

router.push("/login");

}








function DownloadButton({file}:{file:any}){


if(file){


return(

<a

href={file}

download

className="bg-green-600 text-white px-4 py-2 rounded"

>

Download

</a>

);


}



return(

<span className="bg-yellow-400 px-4 py-2 rounded">

Pending

</span>

);


}









return(

<main

className="
min-h-screen
bg-cover
bg-center
p-6
"

style={{

backgroundImage:
"linear-gradient(rgba(0,0,0,.55),rgba(0,0,0,.65)), url('/operation.png')"

}}

>






{/* HEADER */}

<div className="flex justify-between">


<div>


<h1 className="text-4xl font-bold">

 Dragon Vista Operation Board

</h1>


<p>

Excel Style Tour Management Control

</p>


</div>





<button

onClick={logout}

className="bg-red-600 text-white px-5 rounded"

>

Logout

</button>



</div>









{/* FILTER */}

<div className="bg-white p-5 rounded-xl shadow mt-6 flex gap-5">


<select

className="border p-3"

onChange={(e)=>setYear(e.target.value)}

>

<option>All</option>
<option>2025</option>
<option>2026</option>
<option>2027</option>
<option>2028</option>
<option>2029</option>
<option>2030</option>

</select>





<select

className="border p-3"

onChange={(e)=>setMonth(e.target.value)}

>

<option>All</option>
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



</div>










{/* TABLE */}

<div className="bg-white mt-8 rounded-xl shadow overflow-x-auto">


<table className="min-w-[1800px] border text-sm text-center">



<thead className="bg-black text-white">


<tr>


<th className="p-3">Booking</th>

<th>Guest</th>

<th>Pax</th>

<th>Arrival</th>

<th>Departure</th>


<th>Day 1 Hotel</th>

<th>Day 2 Hotel</th>

<th>Day 3 Hotel</th>

<th>Day 4 Hotel</th>

<th>Day 5 Hotel</th>

<th>Day 6 Hotel</th>

<th>Day 7 Hotel</th>


<th>Guide</th>

<th>Driver</th>

<th>Vehicle</th>


<th>Passport</th>

<th>Visa</th>

<th>Ticket</th>

<th>Itinerary</th>

<th>Payment</th>



</tr>


</thead>









<tbody>


{filtered.map((b,i)=>(



<tr

key={i}

className="border hover:bg-gray-100"

>





<td className="border p-2">


{b.bookingId}

<br/>

{b.month}

<br/>

{b.year}


</td>







<td className="border p-2">


<b>{b.guest}</b>

<br/>

{b.country}


</td>







<td className="border p-2">

{b.pax}

</td>






<td className="border p-2">

{b.arrival}

</td>






<td className="border p-2">

{b.departure}

</td>









{/* HOTELS */}

{[0,1,2,3,4,5,6].map((num)=>(


<td

key={num}

className="border p-2"

>


{b.hotels && b.hotels[num]

?

<div>


🏨 {b.hotels[num].hotel}


<br/>


📍 {b.hotels[num].city}


<br/>




<span

className={

b.hotels[num].status==="Confirmed"

?

"bg-green-500 text-white px-2 rounded"

:

"bg-yellow-400 px-2 rounded"

}

>


{b.hotels[num].status}


</span>



</div>


:

"-"

}


</td>



))}









<td className="border p-2">

{b.guide}

</td>




<td className="border p-2">

{b.driver}

</td>





<td className="border p-2">

{b.vehicle}

</td>









{/* DOWNLOAD DOCUMENTS */}


<td className="border p-2">

<DownloadButton file={b.passport}/>

</td>





<td className="border p-2">

<DownloadButton file={b.visa}/>

</td>






<td className="border p-2">

<DownloadButton file={b.ticket}/>

</td>






<td className="border p-2">

<DownloadButton file={b.itinerary}/>

</td>








<td className="border p-2">

{b.payment}

</td>






</tr>



))}



</tbody>




</table>


</div>









{/* STATUS */}

<div className="bg-white p-5 rounded-xl mt-5">


<h2 className="text-xl font-bold">

Status Meaning

</h2>


<p>

🟢 Download = Document Uploaded

</p>


<p>

🟡 Pending = Waiting Document

</p>


<p>

Operation team can view and download only.

</p>



</div>





</main>


);

}