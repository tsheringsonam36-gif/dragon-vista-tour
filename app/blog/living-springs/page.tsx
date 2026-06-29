import Image from "next/image";
import Link from "next/link";

export default function LivingSpringsPage() {
  return (
    <main className="bg-[#081018] text-white">

      {/* ================= HERO ================= */}

      <section className="relative h-[85vh] overflow-hidden">

        <Image
          src="/golden.png"
          alt="Living Spring Project"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 flex h-full items-center justify-center">

          <div className="max-w-5xl px-6 text-center">

            <span className="rounded-full bg-green-500/20 border border-green-400 px-5 py-2 text-green-300 uppercase tracking-[4px] text-sm">

              Launching in 2027

            </span>

            <h1 className="mt-8 text-6xl md:text-7xl font-bold">

              Living Spring Project

            </h1>

            <p className="mt-8 text-2xl text-gray-300 max-w-4xl mx-auto leading-10">

              Protecting Bhutan's disappearing spring waters,
              empowering remote communities and ensuring that
              future generations continue to drink from nature's
              purest source.

            </p>

          </div>

        </div>

      </section>

      {/* ================= INTRO ================= */}

      <section className="max-w-6xl mx-auto px-6 py-24">

        <div className="rounded-3xl bg-green-600/10 border border-green-500/20 p-10">

          <p className="text-3xl italic text-green-200 leading-relaxed text-center">

            "Every drop of clean water tells the story of a healthy
            forest, a thriving community and a future worth protecting."

          </p>

        </div>

        <article className="mt-20 space-y-10">

          <p className="text-xl leading-10 text-gray-300">

            Following the success of our
            <strong className="text-white">
              {" "}Every Step Matters{" "}
            </strong>

            conservation initiative, Dragon Vista Tours is proud
            to introduce another long-term vision for sustainable
            tourism in Bhutan.

          </p>

          <p className="text-xl leading-10 text-gray-300">

            The
            <strong className="text-green-300">
              {" "}Living Spring Project
            </strong>

             is an environmental initiative planned to begin
            in
            <strong className="text-white">
              {" "}2027
            </strong>
            .

          </p>

          <p className="text-xl leading-10 text-gray-300">

            Although the project is currently in its planning
            stage, our mission is already clear—to help protect
            Bhutan's precious natural spring waters before they
            disappear forever.

          </p>

        </article>

      </section>

      {/* ================= IMAGE ================= */}

      <section className="max-w-6xl mx-auto px-6">

        <div className="overflow-hidden rounded-3xl">

          <Image
            src="/lake.png"
            alt="Natural Spring Water"
            width={1600}
            height={900}
            className="w-full object-cover"
          />

        </div>

      </section>

      {/* ================= WHY IT MATTERS ================= */}

      <section className="max-w-6xl mx-auto px-6 py-24">

        <h2 className="text-5xl font-bold">

          Why Spring Waters Matter

        </h2>

        <p className="mt-10 text-xl leading-10 text-gray-300">

          Hidden deep within Bhutan's mountains are countless
          natural spring waters that have supplied clean drinking
          water to remote communities for generations.

        </p>

        <p className="mt-8 text-xl leading-10 text-gray-300">

          For many villages, these springs are far more than
          water sources.

          They are part of everyday life.

          Families depend on them for drinking,
          cooking and farming.

          Entire communities have grown around these
          precious springs for centuries.

        </p>

        <p className="mt-8 text-xl leading-10 text-gray-300">

          Unfortunately, many of these natural springs are
          slowly disappearing.

          Climate change,
          prolonged dry seasons,
          changing rainfall patterns,
          landslides and natural disasters
          are affecting fragile Himalayan ecosystems,
          causing water sources to weaken every year.

        </p>

      </section>

      {/* ================= CLIMATE ================= */}

      <section className="bg-[#101b2b] py-24">

        <div className="max-w-6xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            <div>

              <h2 className="text-5xl font-bold">

                Bhutan & Climate Change

              </h2>

              <p className="mt-10 text-xl leading-10 text-gray-300">

                Although Bhutan is recognised globally
                for being carbon negative,
                it remains one of the world's most
                climate-vulnerable Himalayan countries.

              </p>

              <p className="mt-8 text-xl leading-10 text-gray-300">

                Rising temperatures,
                melting glaciers,
                changing rainfall,
                floods,
                droughts
                and landslides
                threaten fragile mountain ecosystems
                and the communities that depend on them.

              </p>

              <p className="mt-8 text-xl leading-10 text-gray-300">

                If we fail to act today,
                future generations may lose
                some of Bhutan's most valuable
                natural water sources forever.

              </p>

            </div>

            <div>

              <Image
                src="/dagalla.png"
                alt="Climate Change Bhutan"
                width={900}
                height={1100}
                className="rounded-3xl"
              />

            </div>

          </div>

        </div>

      </section>

      {/* ================= UPCOMING ================= */}

      <section className="max-w-6xl mx-auto px-6 py-24">

        <div className="rounded-3xl border border-green-500/30 bg-gradient-to-r from-green-900/20 to-emerald-900/10 p-14">

          <h2 className="text-5xl font-bold text-center">

            Looking Ahead to 2027

          </h2>

          <p className="mt-10 text-center text-xl text-gray-300 leading-10 max-w-4xl mx-auto">

            We are currently identifying remote villages
            where communities still rely on natural spring
            waters for their daily lives.

            Over the coming months,
            our team will continue researching,
            consulting local communities
            and developing a long-term conservation
            plan that is practical,
            sustainable and community driven.

          </p>

        </div>

      </section>

      {/* ================= OUR MISSION ================= */}

      <section className="bg-[#0b1525] py-24">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-bold text-center">

            Our Mission

          </h2>

          <p className="text-center text-xl text-gray-300 max-w-4xl mx-auto mt-8 leading-10">

            The Living Spring Project is built on one simple belief:
            protecting Bhutan's natural spring waters means protecting
            the future of our people, our forests and our generations to come.

          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

            <div className="rounded-3xl bg-[#121f33] p-8 hover:scale-105 transition">
              <div className="text-6xl mb-6">💧</div>
              <h3 className="text-2xl font-bold mb-4">
                Protect Spring Waters
              </h3>
              <p className="text-gray-300 leading-8">
                Restore and protect vulnerable natural spring water
                sources that remote villages depend on every day.
              </p>
            </div>

            <div className="rounded-3xl bg-[#121f33] p-8 hover:scale-105 transition">
              <div className="text-6xl mb-6">🧹</div>
              <h3 className="text-2xl font-bold mb-4">
                Clean & Preserve
              </h3>
              <p className="text-gray-300 leading-8">
                Organise regular clean-up activities to keep spring
                water catchments clean and healthy.
              </p>
            </div>

            <div className="rounded-3xl bg-[#121f33] p-8 hover:scale-105 transition">
              <div className="text-6xl mb-6">🌳</div>
              <h3 className="text-2xl font-bold mb-4">
                Plant Native Trees
              </h3>
              <p className="text-gray-300 leading-8">
                Plant native Himalayan tree species around spring
                catchments to improve water retention and biodiversity.
              </p>
            </div>

            <div className="rounded-3xl bg-[#121f33] p-8 hover:scale-105 transition">
              <div className="text-6xl mb-6">👨‍👩‍👧‍👦</div>
              <h3 className="text-2xl font-bold mb-4">
                Community Awareness
              </h3>
              <p className="text-gray-300 leading-8">
                Work closely with local communities to encourage
                long-term protection of these important water sources.
              </p>
            </div>

            <div className="rounded-3xl bg-[#121f33] p-8 hover:scale-105 transition">
              <div className="text-6xl mb-6">🎓</div>
              <h3 className="text-2xl font-bold mb-4">
                Educate Young People
              </h3>
              <p className="text-gray-300 leading-8">
                Inspire future generations through environmental
                education and conservation awareness.
              </p>
            </div>

            <div className="rounded-3xl bg-[#121f33] p-8 hover:scale-105 transition">
              <div className="text-6xl mb-6">🥾</div>
              <h3 className="text-2xl font-bold mb-4">
                Spring Water Trails
              </h3>
              <p className="text-gray-300 leading-8">
                Create gentle hiking trails connecting natural spring
                waters, allowing visitors to experience and appreciate
                Bhutan's hidden treasures.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* ================= TRAVEL WITH PURPOSE ================= */}

      <section className="py-28">

        <div className="max-w-6xl mx-auto px-6">

          <div className="rounded-[40px] bg-gradient-to-r from-green-800 to-emerald-600 p-16 text-center">

            <span className="text-sm uppercase tracking-[5px]">

              Launching in 2027

            </span>

            <h2 className="text-6xl font-bold mt-6">

              Travel With Purpose

            </h2>

            <p className="text-2xl mt-10 max-w-4xl mx-auto leading-10">

              Every traveller who books a journey with
              Dragon Vista Tours during 2027 will
              automatically become part of the Living
              Spring Project.

            </p>

            <div className="grid md:grid-cols-2 gap-10 mt-16">

              <div className="rounded-3xl bg-white/10 p-10">

                <div className="text-6xl mb-5">

                  ❤️

                </div>

                <h3 className="text-3xl font-bold">

                  Every Traveller Matters

                </h3>

                <p className="mt-6 text-lg leading-9">

                  Simply by travelling with us,
                  every guest contributes to protecting
                  Bhutan's precious spring waters.

                </p>

              </div>

              <div className="rounded-3xl bg-white/10 p-10">

                <div className="text-6xl mb-5">

                  💚

                </div>

                <h3 className="text-3xl font-bold">

                  5% Goes Back

                </h3>

                <p className="mt-6 text-lg leading-9">

                  Five percent of every travel package
                  booked in 2027 will be allocated to
                  supporting the Living Spring Project,
                  including conservation work,
                  community education,
                  native tree planting
                  and environmental protection.

                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= QUOTE ================= */}

      <section className="max-w-5xl mx-auto px-6 py-20">

        <blockquote className="text-center">

          <p className="text-4xl italic text-green-300 leading-relaxed">

            "A single spring can sustain an entire village.

            A single journey can help protect it forever."

          </p>

        </blockquote>

      </section>

      {/* ================= RELATED STORY ================= */}

      <section className="max-w-6xl mx-auto px-6 pb-24">

        <h2 className="text-4xl font-bold text-center mb-12">

          Continue Reading

        </h2>

        <Link href="/blog/every-step-matters">

          <div className="group overflow-hidden rounded-3xl border border-white/10 bg-[#101b2b] hover:border-green-400 transition cursor-pointer">

            <div className="relative h-80">

              <Image
                src="/sagala.png"
                alt="Every Step Matters"
                fill
                className="object-cover group-hover:scale-110 transition duration-700"
              />

            </div>

            <div className="p-10">

              <span className="bg-green-500/20 px-4 py-2 rounded-full text-green-300 text-sm">

                Conservation Initiative

              </span>

              <h3 className="text-4xl font-bold mt-6">

                Every Step Matters

              </h3>

              <p className="mt-6 text-gray-300 text-lg leading-8">

                Discover how our guests, guides,
                drivers and trekking teams have been
                collecting litter from Bhutan's hiking
                and trekking trails, making every journey
                a positive contribution to nature.

              </p>

              <p className="mt-8 text-green-400 font-semibold">

                Read Story →

              </p>

            </div>

          </div>

        </Link>

        <div className="mt-16 flex justify-center">

          <Link
            href="/blog"
            className="rounded-full border border-green-500 px-8 py-4 hover:bg-green-600 transition font-semibold"
          >

            ← Back to All Stories

          </Link>

        </div>

      </section>

    </main>

  );

}