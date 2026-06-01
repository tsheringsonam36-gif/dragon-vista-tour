export default function FestivalTour() {
  return (
    <div className="p-10">
      <h1 className="text-5xl font-bold">Festival Tour</h1>

      <p className="mt-4 text-lg">
        Experience Bhutan's vibrant festivals, traditional mask dances,
        local culture and spiritual heritage.
      </p>

      <h2 className="mt-8 text-2xl font-bold">Tour Highlights</h2>

      <ul className="list-disc ml-6 mt-4">
        <li>Paro Tshechu Festival</li>
        <li>Punakha Dzong</li>
        <li>Tiger's Nest Monastery</li>
        <li>Traditional Bhutanese Culture</li>
      </ul>

      <button className="mt-8 bg-orange-500 text-white px-6 py-3 rounded-lg">
        Book Now
      </button>
    </div>
  );
}