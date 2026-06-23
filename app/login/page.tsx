"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";


export default function Login(){

const router = useRouter();

const [password,setPassword]=useState("");

const [error,setError]=useState("");




function login(){


if(password==="Dragon2026"){


localStorage.setItem(
"DVTLOGIN",
"YES"
);


router.push("/admin");


}else{


setError(
"Incorrect password. Please try again."
);


}


}







return(

<main

className="
min-h-screen
flex
items-center
justify-center
bg-cover
bg-center
"

style={{

backgroundImage:
"linear-gradient(rgba(0,0,0,.7),rgba(0,0,0,.8)), url('/mystery.png')"

}}

>





<div

className="
bg-white
p-10
rounded-3xl
shadow-2xl
w-96
text-center
"

>



<h1 className="text-4xl font-bold text-orange-500 mb-3">



</h1>



<h2 className="text-3xl font-bold mb-3">

Dragon Vista Tours

</h2>



<p className="text-gray-600 mb-8">

Staff Management Login

</p>





<input

type="password"

placeholder="Enter Password"

value={password}

onChange={(e)=>setPassword(e.target.value)}

className="
border
p-4
rounded-xl
w-full
text-center
"

/>





{error && (

<p className="text-red-600 mt-4">

{error}

</p>

)}







<button

onClick={login}

className="
bg-orange-500
hover:bg-orange-600
text-white
font-bold
w-full
p-4
rounded-xl
mt-6
"

>

LOGIN

</button>






<p className="text-gray-400 text-sm mt-8">

Authorized Dragon Vista Tours staff only

</p>





</div>


</main>


);

}