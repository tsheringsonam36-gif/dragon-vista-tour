export default function Contact() {
  return (
    <main
      className="min-h-screen bg-cover bg-center px-10 py-20"
      style={{
        backgroundImage: "url('/flag.png')",
      }}
    >

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">


        {/* LEFT CONTACT FORM */}

        <div className="bg-black/80 text-white p-10 rounded-xl">

          <h1 className="text-4xl font-bold text-orange-400 mb-5">
            Get in Touch
          </h1>

          <p className="mb-8 text-gray-300">
            Your Bhutan adventure begins here. Share your travel dreams with our local Bhutan specialists, and we will craft a meaningful journey filled with culture, nature, and unforgettable experiences.
          </p>


          <form
            action="https://formspree.io/f/mnjylnyy"
            method="POST"
            className="space-y-5"
          >

            <input
              name="name"
              type="text"
              required
              placeholder="Your Name"
              className="w-full bg-transparent border border-gray-500 p-4 rounded text-white"
            />


            <input
              name="email"
              type="email"
              required
              placeholder="Email Address"
              className="w-full bg-transparent border border-gray-500 p-4 rounded text-white"
            />


            <input
              name="phone"
              type="text"
              placeholder="Phone Number (optional)"
              className="w-full bg-transparent border border-gray-500 p-4 rounded text-white"
            />


            <textarea
              name="message"
              rows={6}
              required
              placeholder="Discover Bhutan your way — every journey crafted with care and local expertise."
              className="w-full bg-transparent border border-gray-500 p-4 rounded text-white"
            />


            <label className="flex gap-3 text-sm text-gray-300">

              <input
                name="updates"
                type="checkbox"
              />

              Receive travel updates and Bhutan tour offers

            </label>


            <button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-black py-4 rounded font-bold tracking-widest"
            >

              SEND ENQUIRY

            </button>


          </form>


        </div>




        {/* RIGHT INFORMATION BOX */}

        <div className="bg-white text-black p-10 rounded-xl">

          <h2 className="text-3xl font-bold mb-8">
            Why Travel With Dragon Vista?
          </h2>


          <ul className="space-y-6 text-lg">

            <li>✓ Bhutan travel specialists</li>

            <li>✓ Personalised private journeys</li>

            <li>✓ Authentic cultural experiences</li>

            <li>✓ Trekking & festival experts</li>

            <li>✓ Local Bhutan knowledge</li>

          </ul>


        </div>


      </div>


    </main>
  );
}