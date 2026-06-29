import Image from "next/image";
import Link from "next/link";

export default function EveryStepMattersPage() {
  return (
    <main className="bg-[#0B1120] text-white">

      {/* ================= HERO ================= */}

      <section className="relative h-[80vh] w-full overflow-hidden">

        <Image
          src="/monk.png"
          alt="Every Step Matters"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 flex h-full items-center justify-center">

          <div className="max-w-5xl px-6 text-center">

            <span className="inline-block rounded-full border border-green-500 bg-green-500/20 px-5 py-2 text-sm tracking-widest uppercase text-green-300">
              Travel With Purpose
            </span>

            <h1 className="mt-8 text-5xl font-bold leading-tight md:text-7xl">
              Every Step Matters
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-xl text-gray-300 leading-9">
              Five months of small actions, shared by guests, guides,
              drivers and trekking teams, creating a cleaner Bhutan one
              trail at a time.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-6 text-gray-300">

              <span>🌿 Conservation</span>

              <span>•</span>

              <span>Dragon Vista Tours</span>

              <span>•</span>

              <span>5 Minute Read</span>

            </div>

          </div>

        </div>

      </section>

      {/* ================= ARTICLE ================= */}

      <section className="mx-auto max-w-5xl px-6 py-20">

        <div className="rounded-3xl border border-green-500/20 bg-green-500/10 p-8 text-center">

          <p className="text-2xl italic leading-10 text-green-200">

            "The mountains give us unforgettable memories.
            Leaving them cleaner than we found them
            is our way of saying thank you."

          </p>

        </div>

        <article className="prose prose-invert prose-lg mx-auto mt-16 max-w-none">

          <p className="text-xl leading-10 text-gray-300">

            At Dragon Vista Tours, we believe that travelling should
            be about more than simply visiting beautiful places.
            Every journey is an opportunity to leave a positive impact
            on the destinations we explore. Bhutan is known around
            the world for its untouched mountains, pristine forests,
            crystal-clear rivers and breathtaking hiking trails.
            Preserving this natural beauty is a responsibility that
            belongs to all of us.

          </p>

          <p className="mt-8 text-xl leading-10 text-gray-300">

            Five months ago, we launched a small environmental
            initiative called <strong className="text-white">
            Every Step Matters</strong>. What started as a simple idea
            has quickly grown into one of the most meaningful parts
            of every hiking and trekking adventure we organise.

          </p>

          <p className="mt-8 text-xl leading-10 text-gray-300">

            The idea is beautifully simple.

          </p>

          <p className="mt-8 text-xl leading-10 text-gray-300">

            Wherever our guests travel, whether along peaceful hiking
            trails or high mountain trekking routes, we encourage
            everyone to pick up any litter they find along the way.
            Every plastic bottle, food wrapper, aluminium can,
            discarded tissue or forgotten piece of rubbish removed
            from the trail helps preserve Bhutan's extraordinary
            landscapes for future generations.

          </p>

          <div className="my-16 overflow-hidden rounded-3xl">

            <Image
              src="/monk.png"
              alt="Guests cleaning hiking trails"
              width={1400}
              height={900}
              className="w-full object-cover"
            />

          </div>

          <h2 className="text-4xl font-bold text-white">
            A Shared Responsibility
          </h2>

          <p className="mt-8 text-xl leading-10 text-gray-300">

            This initiative is not carried out by one person alone.
            It is a shared commitment embraced by every member of
            our journey.

          </p>

          <p className="mt-8 text-xl leading-10 text-gray-300">

            During our hiking experiences, our local guides,
            experienced drivers and valued guests all work together.
            As they walk through forests, villages and mountain paths,
            they collect litter whenever they come across it.
            What begins as a simple act quickly becomes a rewarding
            experience, reminding us that caring for nature is
            everyone's responsibility.

          </p>

          <p className="mt-8 text-xl leading-10 text-gray-300">

            Many of our guests tell us that this small activity becomes
            one of the most memorable moments of their journey.
            Instead of only admiring Bhutan's beautiful landscapes,
            they leave knowing they have helped protect them.

          </p>

          <div className="rounded-3xl border-l-4 border-green-400 bg-[#162033] p-10 my-16">

            <p className="text-3xl italic text-green-200 leading-relaxed">

              "Travel becomes even more meaningful when we leave the
              mountains cleaner than we found them."

            </p>

          </div>

          <h2 className="text-4xl font-bold text-white">

            Taking the Initiative Higher

          </h2>

          <p className="mt-8 text-xl leading-10 text-gray-300">

            Our trekking expeditions have embraced this initiative
            with incredible enthusiasm.

          </p>

          <p className="mt-8 text-xl leading-10 text-gray-300">

            Deep within Bhutan's mountains, every member of the
            trekking team becomes part of the mission.
            Our professional trekking guides, guests,
            experienced trekking cooks, camp staff,
            horsemen and support crew all actively participate
            in collecting litter throughout the trek.

          </p>

          <p className="mt-8 text-xl leading-10 text-gray-300">

            Whether it is hidden beside a mountain stream,
            caught beneath alpine shrubs or resting quietly
            along a forest trail, every piece of rubbish
            removed represents one more step toward protecting
            Bhutan's fragile environment.

          </p>

        <h2 className="mt-20 text-4xl font-bold text-white">
            A Friendly Challenge with a Meaningful Purpose
          </h2>

          <p className="mt-8 text-xl leading-10 text-gray-300">
            To make the initiative even more engaging, every trekking
            journey ends with a friendly challenge. Throughout the trek,
            everyone is encouraged to collect litter whenever they come
            across it. It isn't about competition—it is about creating
            awareness while working together to protect Bhutan's
            magnificent landscapes.
          </p>

          <p className="mt-8 text-xl leading-10 text-gray-300">
            On the final day of the trek, our entire team gathers before
            returning home. The litter collected by each participant is
            counted, and the person who has collected the most receives a
            small appreciation gift from Dragon Vista Tours.
          </p>

          <p className="mt-8 text-xl leading-10 text-gray-300">
            The reward itself is simple, but the real achievement is the
            collective effort. Every guest, guide, cook, horseman and
            trekking staff member contributes to leaving Bhutan's trails
            cleaner than they were before.
          </p>

          <div className="my-16 overflow-hidden rounded-3xl">
            <Image
              src="/dagalla.png"
              alt="Dragon Vista Tours team"
              width={1400}
              height={900}
              className="w-full object-cover"
            />
          </div>

          <h2 className="text-4xl font-bold text-white">
            Five Months of Positive Impact
          </h2>

          <p className="mt-8 text-xl leading-10 text-gray-300">
            Looking back over the past five months, we are incredibly
            proud of how far this initiative has come. What began as a
            simple idea has grown into a tradition embraced by our
            travellers and our team.
          </p>

          <p className="mt-8 text-xl leading-10 text-gray-300">
            Hundreds of pieces of litter have been removed from hiking
            trails and trekking routes across Bhutan. More importantly,
            hundreds of travellers have returned home carrying a deeper
            appreciation for responsible tourism and environmental
            stewardship.
          </p>

          <p className="mt-8 text-xl leading-10 text-gray-300">
            Time and again, our guests tell us that this activity became
            one of the highlights of their journey. Knowing they played a
            small role in protecting Bhutan creates memories that extend
            far beyond sightseeing.
          </p>

          <div className="my-20 rounded-3xl border border-green-500/30 bg-gradient-to-r from-green-900/30 to-emerald-900/20 p-12">

            <h3 className="text-4xl font-bold text-center text-white">
              Why Every Step Matters
            </h3>

            <div className="mt-12 grid gap-8 md:grid-cols-2">

              <div className="rounded-2xl bg-white/5 p-8">
                <div className="text-5xl mb-5">🌿</div>
                <h4 className="text-2xl font-semibold mb-4">
                  Protecting Nature
                </h4>
                <p className="text-gray-300 leading-8">
                  Every piece of litter removed helps preserve Bhutan's
                  forests, rivers and mountains for future generations.
                </p>
              </div>

              <div className="rounded-2xl bg-white/5 p-8">
                <div className="text-5xl mb-5">🤝</div>
                <h4 className="text-2xl font-semibold mb-4">
                  Working Together
                </h4>
                <p className="text-gray-300 leading-8">
                  Guests, guides, drivers, cooks and horsemen become one
                  team with one shared purpose.
                </p>
              </div>

              <div className="rounded-2xl bg-white/5 p-8">
                <div className="text-5xl mb-5">🏔️</div>
                <h4 className="text-2xl font-semibold mb-4">
                  Responsible Tourism
                </h4>
                <p className="text-gray-300 leading-8">
                  Travel becomes more meaningful when visitors actively
                  contribute to protecting the places they explore.
                </p>
              </div>

              <div className="rounded-2xl bg-white/5 p-8">
                <div className="text-5xl mb-5">❤️</div>
                <h4 className="text-2xl font-semibold mb-4">
                  Leaving a Legacy
                </h4>
                <p className="text-gray-300 leading-8">
                  Every small action creates lasting change. Together we
                  help keep Bhutan clean for generations to come.
                </p>
              </div>

            </div>

          </div>

          <div className="rounded-3xl bg-green-600 p-12 text-center">

            <h2 className="text-5xl font-bold">
              Join Us
            </h2>

            <p className="mt-8 text-xl leading-10 max-w-3xl mx-auto">

              When you travel with Dragon Vista Tours, you're not simply
              discovering Bhutan's breathtaking landscapes—you become
              part of a community that believes every journey should
              leave nature better than we found it.

            </p>

            <p className="mt-8 text-3xl font-semibold italic">

              Walk with Purpose.
              <br />
              Travel Responsibly.
              <br />
              Every Step Matters.

            </p>

          </div>

        </article>

        {/* ================= RELATED STORY ================= */}

        <section className="mt-28">

          <h2 className="text-4xl font-bold text-center mb-12">
            Continue Reading
          </h2>

          <Link href="/blog/living-springs">

            <div className="group overflow-hidden rounded-3xl border border-white/10 bg-[#141d2d] transition hover:border-green-400 hover:shadow-2xl">

              <div className="relative h-80">

                <Image
                  src="/jomolhari.png"
                  alt="Living Spring Project"
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

              </div>

              <div className="p-10">

                <span className="rounded-full bg-green-500/20 px-4 py-2 text-sm text-green-300">
                  Community Conservation
                </span>

                <h3 className="mt-6 text-3xl font-bold">
                  Living Spring Project
                </h3>

                <p className="mt-6 text-gray-300 text-lg leading-8">
                  Discover our mission to protect Bhutan's natural spring
                  water sources while supporting local communities and
                  preserving one of the country's most precious natural
                  resources.
                </p>

                <p className="mt-8 font-semibold text-green-400">
                  Read Story →
                </p>

              </div>

            </div>

          </Link>

        </section>

        {/* ================= BACK BUTTON ================= */}

        <div className="mt-20 flex justify-center">

          <Link
            href="/blog"
            className="rounded-full border border-green-500 px-8 py-4 font-semibold transition hover:bg-green-600"
          >
            ← Back to All Stories
          </Link>

        </div>

      </section>

    </main>
  );
}
  