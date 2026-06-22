export default function VisaGuide() {

  const visaRequirements = [
    "Clear passport copy with minimum six months validity",
    "Recent passport-size photograph",
    "Confirmed arrival and departure information",
    "Required travel details and supporting documents",
    "Visa application fee as required by Bhutan regulations",
    "Applicable Sustainable Development Fee (SDF)"
  ];


  const whyChoose = [
    "Personalised Bhutan journey planning",
    "Assistance with visa guidance and travel preparation",
    "Carefully designed cultural, luxury, festival, trekking, and special occasion experiences",
    "Professional local knowledge and authentic Bhutanese hospitality",
    "Dedicated support from planning until your journey ends"
  ];


  return (

    <section className="min-h-screen bg-[#070707] text-white px-6 py-20">


      {/* HEADER */}

      <div className="text-center max-w-5xl mx-auto mb-16">


        <h4 className="text-yellow-500 tracking-[5px] uppercase">

          Dragon Vista Tours

        </h4>


        <h1 className="text-5xl md:text-6xl font-bold mt-5">

          Bhutan Visa & Travel Guide

        </h1>


        <h2 className="text-2xl text-yellow-500 mt-5">

          Your Journey to Bhutan Begins Here

        </h2>


        <p className="text-gray-300 mt-8 text-lg leading-relaxed">

          Discover the Kingdom of Bhutan with confidence.
          At Dragon Vista Tours, we make your travel preparation
          simple, smooth, and stress-free by guiding you through
          visa arrangements, travel requirements, and essential
          information before your unforgettable Himalayan journey begins.

        </p>


      </div>




      {/* VISA INFORMATION */}


      <div className="max-w-6xl mx-auto bg-white/10 rounded-3xl p-10 border border-yellow-500/30 shadow-xl mb-12">


        <h2 className="text-3xl font-bold text-yellow-500 mb-6">

          Bhutan Visa Information

        </h2>


        <p className="text-gray-300 leading-relaxed text-lg">

          Bhutan follows a unique tourism approach focused on meaningful
          experiences, cultural preservation, and environmental protection.

          International visitors require an approved Bhutan visa before arrival,
          except travellers from countries with separate entry arrangements.

          Our Dragon Vista Tours team assists guests throughout the visa process
          to ensure a seamless travel experience.

        </p>


      </div>





      {/* REQUIREMENTS */}


      <div className="max-w-6xl mx-auto mb-12">


        <h2 className="text-3xl font-bold mb-8">

          What You Need For Bhutan Visa Processing

        </h2>


        <div className="grid md:grid-cols-2 gap-5">


        {visaRequirements.map((item,index)=>(


          <div
          key={index}
          className="bg-white/10 rounded-2xl p-5 border border-white/10"
          >


          <span className="text-yellow-500 text-xl">
          ✓
          </span>


          <p className="inline ml-3 text-gray-200">

          {item}

          </p>


          </div>


        ))}


        </div>


      </div>





      {/* SDF SECTION */}



      <div className="max-w-6xl mx-auto bg-yellow-500/10 border border-yellow-500/40 rounded-3xl p-10 mb-12">


        <h2 className="text-3xl font-bold text-yellow-500">

          Sustainable Development Fee (SDF)

        </h2>


        <p className="mt-6 text-gray-300 leading-relaxed">


          The Sustainable Development Fee supports Bhutan’s commitment
          to protecting the environment, preserving cultural heritage,
          improving communities, and maintaining responsible tourism.


        </p>



        <div className="grid md:grid-cols-3 gap-6 mt-10 text-center">


          <div className="bg-black rounded-2xl p-6">

          <h3 className="text-xl font-bold">

          Adults

          </h3>

          <p className="text-yellow-500 mt-3">

          USD 100 / person / night

          </p>


          </div>



          <div className="bg-black rounded-2xl p-6">

          <h3 className="text-xl font-bold">

          Children 6–11 Years

          </h3>

          <p className="text-yellow-500 mt-3">

          USD 50 / person / night

          </p>


          </div>



          <div className="bg-black rounded-2xl p-6">

          <h3 className="text-xl font-bold">

          Below 6 Years

          </h3>

          <p className="text-yellow-500 mt-3">

          Exempt

          </p>


          </div>


        </div>


        <p className="text-gray-400 mt-8 text-sm">

        * Regional visitor fees may vary according to Bhutan Government regulations.

        </p>


      </div>





      {/* WHY DRAGON VISTA */}


      <div className="max-w-6xl mx-auto">


      <h2 className="text-3xl font-bold mb-8">

      Why Travel With Dragon Vista Tours?

      </h2>



      <div className="grid md:grid-cols-2 gap-5">


      {whyChoose.map((item,index)=>(


        <div 
        key={index}
        className="bg-white/10 p-5 rounded-xl"
        >

        <span className="text-yellow-500">

        ★

        </span>


        <span className="ml-3 text-gray-200">

        {item}

        </span>


        </div>


      ))}


      </div>


      </div>





      {/* NOTE */}



      <div className="max-w-5xl mx-auto text-center mt-20">


        <h2 className="text-yellow-500 text-2xl font-semibold">

        Important Travel Note

        </h2>


        <p className="text-gray-300 mt-5">

        Visa rules, government fees, and travel requirements may change.
        Dragon Vista Tours will provide updated guidance during your booking process.

        </p>



        <h3 className="text-yellow-500 mt-10 text-xl">

        Dragon Vista Tours — Where Happiness Meets Adventure

        </h3>



      </div>



    </section>

  );
}