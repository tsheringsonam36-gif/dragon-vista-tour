export default function FiveDayTour() {
  return (
    <main className="min-h-screen bg-white p-10">
      <h1 className="text-5xl font-bold text-center mb-6">
        5 Days Bhutan Cultural Tour
      </h1>

      <p className="text-xl text-center text-gray-600 mb-10">
        Discover Bhutan's rich culture, monasteries, dzongs and Himalayan landscapes.
      </p>

      <div className="max-w-4xl mx-auto space-y-8">

        <div className="border rounded-xl p-6 shadow">
          <h2 className="text-2xl font-bold mb-2">Day 1 – Arrival in Paro & Transfer to Thimphu</h2>
          <p>
            Arrive at Paro International Airport. Meet your guide and drive to
            Thimphu. Explore the capital city and acclimatise to the altitude.
          </p>
        </div>

        <div className="border rounded-xl p-6 shadow">
          <h2 className="text-2xl font-bold mb-2">Day 2 – Thimphu Sightseeing</h2>
          <p>
            Visit Buddha Dordenma, Memorial Chorten, local markets, museums and
            cultural sites in Thimphu.
          </p>
        </div>

        <div className="border rounded-xl p-6 shadow">
          <h2 className="text-2xl font-bold mb-2">Day 3 – Thimphu to Punakha</h2>
          <p>
            Drive across Dochula Pass and enjoy panoramic Himalayan views.
            Visit Punakha Dzong and surrounding attractions.
          </p>
        </div>

        <div className="border rounded-xl p-6 shadow">
          <h2 className="text-2xl font-bold mb-2">Day 4 – Punakha to Paro</h2>
          <p>
            Travel back to Paro and explore the National Museum and Rinpung Dzong.
          </p>
        </div>

        <div className="border rounded-xl p-6 shadow">
          <h2 className="text-2xl font-bold mb-2">Day 5 – Tiger's Nest & Departure</h2>
          <p>
            Hike to the iconic Tiger's Nest Monastery before transferring to
            the airport for departure.
          </p>
        </div>

      </div>
    </main>
  );
}