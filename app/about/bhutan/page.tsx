export default function AboutBhutan() {
  return (
    <main
      className="min-h-screen bg-cover bg-center text-white"
      style={{
        backgroundImage: "url('/monk.png')",
      }}
    >

      {/* DARK OVERLAY */}
      <div className="min-h-screen bg-black/75 px-8 py-20">


        {/* HEADER */}

        <div className="text-center max-w-5xl mx-auto mb-16">

          <h1 className="text-5xl font-bold text-yellow-400 mb-6">
            Bhutan – The Land of the Thunder Dragon
          </h1>

          <p className="text-xl text-gray-200 leading-8">
            A Himalayan kingdom where ancient traditions,
            pristine nature and modern development exist in harmony.
          </p>

        </div>




        {/* CONTENT */}

        <div className="max-w-6xl mx-auto space-y-10">


          {/* INTRO */}

          <section className="bg-white/10 p-8 rounded-xl">

            <p className="leading-8 text-lg">

              Bhutan is a small independent Himalayan kingdom located
              in South Asia, peacefully nestled between two of the
              world’s largest countries — China to the north and India
              to the south.

              <br/><br/>

              Known as the “Land of the Thunder Dragon,” Bhutan is a
              unique destination where ancient traditions, pristine
              nature, and modern development exist in harmony.

              <br/><br/>

              Bhutan is a constitutional monarchy and one of the few
              countries in the world that has maintained its independence
              throughout history. It has never been colonised, conquered,
              or governed by any foreign power.

              <br/><br/>

              Bhutan is globally recognised for its philosophy of
              Gross National Happiness (GNH), where wellbeing,
              cultural preservation, environmental conservation and
              sustainable development are valued alongside economic
              growth.

              <br/><br/>

              The capital city of Bhutan is Thimphu — a charming city
              blending traditional Bhutanese architecture with modern
              lifestyles.

            </p>

          </section>





          {/* GRID */}

          <div className="grid md:grid-cols-2 gap-8">


            <section className="bg-white/10 p-8 rounded-xl">

              <h2 className="text-3xl text-yellow-400 font-bold mb-5">
                Population & Religion
              </h2>


              <p className="leading-8">

                Bhutan has a population of approximately 790,000 people,
                making it one of the least densely populated countries
                in the world.

                <br/><br/>

                The main religion is Vajrayana Buddhism, introduced in
                the 7th century. Buddhism continues to influence
                Bhutanese culture, festivals, architecture and daily life.

                <br/><br/>

                Hinduism is also practiced, especially in southern
                Bhutan, adding to the country’s cultural diversity.

              </p>

            </section>





            <section className="bg-white/10 p-8 rounded-xl">

              <h2 className="text-3xl text-yellow-400 font-bold mb-5">
                Official Language
              </h2>


              <p className="leading-8">

                The official language of Bhutan is Dzongkha,
                which has historical connections with the Tibetan language.

                <br/><br/>

                English is widely spoken and commonly used in education,
                government, tourism and business.

                <br/><br/>

                Bhutanese guides and tourism professionals communicate
                fluently in English, making travel convenient for visitors.

              </p>


            </section>





            <section className="bg-white/10 p-8 rounded-xl">

              <h2 className="text-3xl text-yellow-400 font-bold mb-5">
                Currency
              </h2>


              <p className="leading-8">

                The official currency is the Bhutanese Ngultrum (BTN).
                It has equal value with the Indian Rupee (INR).

                <br/><br/>

                Major currencies including USD, AUD, SGD, EUR and GBP
                can be exchanged at banks and authorised exchange services.

                <br/><br/>

                Credit cards are accepted in many hotels and businesses,
                but carrying local currency is recommended when travelling
                to rural areas.

              </p>


            </section>





            <section className="bg-white/10 p-8 rounded-xl">

              <h2 className="text-3xl text-yellow-400 font-bold mb-5">
                Geography & Nature
              </h2>


              <p className="leading-8">

                Bhutan offers breathtaking landscapes ranging from
                subtropical valleys to high Himalayan mountains.

                <br/><br/>

                More than 70% of Bhutan is covered by forests, making
                it one of the world leaders in conservation.

                <br/><br/>

                Bhutan is recognised as a carbon-negative country,
                absorbing more carbon dioxide than it produces.

              </p>


            </section>


          </div>






          {/* SAFETY */}

          <section className="bg-yellow-500 text-black p-8 rounded-xl">

            <h2 className="text-3xl font-bold mb-5">
              Safety & Hospitality
            </h2>


            <p className="leading-8 text-lg">

              Bhutan is considered one of the safest travel destinations
              in the world.

              <br/><br/>

              Visitors are welcomed with genuine warmth, kindness and
              traditional Bhutanese hospitality.

              <br/><br/>

              Travelling through Bhutan offers more than sightseeing —
              it is a journey into happiness, spirituality, culture and
              untouched Himalayan beauty.

            </p>


          </section>


        </div>


      </div>

    </main>
  );
}