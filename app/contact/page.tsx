export default function Contact() {
  return (
    <main
      className="min-h-screen flex items-center justify-center bg-cover bg-center px-6"
      style={{
        backgroundImage: "url('/background.png')",
      }}
    >

      <div className="bg-green-950/95 rounded-3xl p-10 max-w-4xl w-full">

        <h1 className="text-4xl font-bold text-white text-center">
          Plan Your Bhutan Journey
        </h1>

        <p className="text-center text-gray-300 mt-3">
          Send us your enquiry and our local travel expert will contact you.
        </p>


        <form className="mt-10 space-y-5">


          <input
            type="text"
            placeholder="Your Name"
            className="
            w-full 
            p-5 
            rounded-xl 
            bg-white/10 
            border 
            border-white/30 
            text-white
            "
          />


          <input
            type="email"
            placeholder="Email Address"
            className="
            w-full 
            p-5 
            rounded-xl 
            bg-white/10 
            border 
            border-white/30 
            text-white
            "
          />



          <div className="flex gap-4">

            <input
              value="+975"
              readOnly
              className="
              w-28 
              p-5 
              rounded-xl 
              bg-white/10 
              border 
              border-white/30
              text-white
              "
            />


            <input
              type="text"
              placeholder="Phone Number (optional)"
              className="
              flex-1 
              p-5 
              rounded-xl 
              bg-white/10 
              border 
              border-white/30
              text-white
              "
            />

          </div>



          <textarea

            placeholder="Your message..."

            rows={5}

            className="
            w-full
            p-5
            rounded-xl
            bg-white/10
            border
            border-white/30
            text-white
            "

          />



          <label className="flex gap-3 text-gray-300">

            <input type="checkbox"/>

            Send me updates and special Bhutan travel offers

          </label>




          <button
            className="
            w-full
            bg-yellow-500
            text-white
            rounded-full
            py-5
            text-xl
            font-bold
            hover:bg-yellow-600
            "
          >

            Send Enquiry

          </button>


        </form>

      </div>

    </main>
  );
}