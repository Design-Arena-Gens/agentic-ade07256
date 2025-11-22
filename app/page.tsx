import { ArrowRight, CheckCircle2, Leaf, PawPrint, Shield } from "lucide-react";

const featureHighlights = [
  {
    title: "Breed-Specific Nutrition",
    description:
      "Macros calibrated for German Shepherd energy levels, joint care, and lean muscle support.",
    icon: PawPrint
  },
  {
    title: "Holistic Ingredients",
    description:
      "Grass-fed proteins, probiotic-rich veggies, and omega-packed oils to boost immunity.",
    icon: Leaf
  },
  {
    title: "Veterinary Backed",
    description:
      "Crafted with canine nutritionists and veterinary partners to match every life stage.",
    icon: Shield
  }
];

const mealPlans = [
  {
    name: "Puppy Power Start",
    kcal: "650 kcal / meal",
    focus: "Growth & Immunity",
    items: [
      "Free-range chicken & bone broth",
      "Goat milk kefir for digestion",
      "Wild blueberry antioxidant boost"
    ],
    accent: "from-brand/70 via-brand to-brand-light"
  },
  {
    name: "Active Adult Fuel",
    kcal: "780 kcal / meal",
    focus: "Performance & Joint Health",
    items: [
      "Grass-fed beef & sweet potato",
      "Green lipped mussel joint complex",
      "Chia seed omega balance"
    ],
    accent: "from-stone-900 via-stone-700 to-brand-dark"
  },
  {
    name: "Golden Years Gentle",
    kcal: "540 kcal / meal",
    focus: "Longevity & Mobility",
    items: [
      "Norwegian salmon & pumpkin",
      "Turmeric + black pepper blend",
      "Collagen peptides for hips & spine"
    ],
    accent: "from-orange-200 via-orange-100 to-amber-200"
  }
];

const faq = [
  {
    question: "Can I customize meals for allergies?",
    answer:
      "Absolutely. Each plan starts with a sensitivity assessment so we can swap proteins, grains, or veggies your shepherd reacts to."
  },
  {
    question: "How fresh are the ingredients?",
    answer:
      "Meals are crafted in small weekly batches, blast-chilled, and delivered cold within 48 hours for peak freshness."
  },
  {
    question: "Is there support for weight management?",
    answer:
      "Our nutrition advisors monitor weight check-ins and adjust portion macros every month to keep body condition ideal."
  }
];

export default function HomePage() {
  return (
    <div className="min-h-screen overflow-hidden">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern" />
        <div className="absolute inset-0 opacity-30">
          <svg
            className="h-full w-full"
            viewBox="0 0 800 800"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="200" cy="120" r="180" fill="#8BC34A" opacity="0.25" />
            <circle cx="620" cy="220" r="160" fill="#3E7B1F" opacity="0.35" />
            <circle cx="380" cy="560" r="260" fill="#C5E1A5" opacity="0.2" />
          </svg>
        </div>
        <header className="relative z-10 mx-auto flex max-w-6xl flex-col gap-16 px-6 pb-24 pt-24 md:px-10 md:pt-28">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-3 text-white">
              <span className="rounded-full bg-white/10 p-2">
                <PawPrint className="h-6 w-6" />
              </span>
              <span className="font-heading text-2xl tracking-wide">
                Shepherd Feast
              </span>
            </div>
            <div className="hidden items-center gap-6 text-sm font-medium uppercase tracking-wide text-white/80 md:flex">
              <a href="#plans" className="transition hover:text-white">
                Meal Plans
              </a>
              <a href="#science" className="transition hover:text-white">
                The Science
              </a>
              <a href="#faq" className="transition hover:text-white">
                FAQ
              </a>
              <a
                href="#cta"
                className="rounded-full border border-white/60 px-5 py-2 transition hover:border-white hover:bg-white/10 hover:text-white"
              >
                Start Today
              </a>
            </div>
          </nav>

          <section className="grid gap-12 md:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-8 text-white">
              <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm uppercase tracking-[0.25em] text-white/80">
                German Shepherd Nutrition Experts
              </p>
              <h1 className="font-heading text-4xl leading-tight sm:text-5xl md:text-6xl">
                Fuel Courage, Focus & Loyalty with Whole-Food Nutrition.
              </h1>
              <p className="text-lg text-white/80 md:text-xl">
                German Shepherds demand purposeful fuel. Shepherd Feast delivers
                chef-crafted meals aligned with working dog metabolism, from
                puppy milestones to veteran guardianship.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#plans"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-stone-900 transition hover:bg-stone-100"
                >
                  Explore Meal Plans
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#science"
                  className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-3 font-semibold text-white transition hover:border-white hover:bg-white/10"
                >
                  Learn the Science
                </a>
              </div>
              <div className="grid gap-6 text-white/80 sm:grid-cols-2">
                <div className="glass rounded-3xl p-6">
                  <p className="text-3xl font-semibold text-white">32,000+</p>
                  <p className="mt-2 text-sm uppercase tracking-wide">
                    Bowls Served
                  </p>
                  <p className="mt-3 text-sm">
                    Fresh meals portioned to match shepherd athleticism and
                    mental workload.
                  </p>
                </div>
                <div className="glass rounded-3xl p-6">
                  <p className="text-3xl font-semibold text-white">96%</p>
                  <p className="mt-2 text-sm uppercase tracking-wide">
                    Improved Mobility
                  </p>
                  <p className="mt-3 text-sm">
                    Families reported smoother gait, shinier coat, and boosted
                    endurance within 45 days.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="glass relative z-10 h-full rounded-[2.75rem] border-white/30 p-8 text-white shadow-2xl">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-wide text-white/80">
                      Today&apos;s Feature
                    </p>
                    <h2 className="mt-2 font-heading text-3xl">
                      Alpine Herd Guard Bowl
                    </h2>
                  </div>
                  <span className="rounded-full bg-white/15 px-3 py-1 text-xs uppercase tracking-wide">
                    High-Energy
                  </span>
                </div>
                <div className="mt-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand-light" />
                    <p>
                      Raw-frozen venison & bone broth for lean muscle repair.
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand-light" />
                    <p>Fermented supergreens to sustain gut biome balance.</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand-light" />
                    <p>Cold-pressed camelina oil to lubricate hips & spine.</p>
                  </div>
                </div>
                <div className="mt-10 rounded-2xl bg-white/10 p-6 text-sm text-white/90">
                  <p className="font-semibold uppercase tracking-wide text-white">
                    Macro Snapshot
                  </p>
                  <div className="mt-4 grid grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-2xl font-heading text-white">41%</p>
                      <p className="mt-1 text-xs uppercase tracking-wide">
                        Protein
                      </p>
                    </div>
                    <div>
                      <p className="text-2xl font-heading text-white">24%</p>
                      <p className="mt-1 text-xs uppercase tracking-wide">
                        Healthy Fats
                      </p>
                    </div>
                    <div>
                      <p className="text-2xl font-heading text-white">35%</p>
                      <p className="mt-1 text-xs uppercase tracking-wide">
                        Smart Carbs
                      </p>
                    </div>
                  </div>
                </div>
                <p className="mt-8 text-xs uppercase tracking-[0.35em] text-white/60">
                  Delivered chilled • No fillers • Zero synthetic preservatives
                </p>
              </div>
              <div className="absolute -inset-6 rounded-[3.25rem] border border-white/20 opacity-40" />
            </div>
          </section>
        </header>
      </div>

      <main className="relative -mt-12 space-y-24 pb-32">
        <section
          id="science"
          className="mx-auto max-w-6xl rounded-[3rem] bg-white px-6 py-16 shadow-2xl md:px-10 md:py-20"
        >
          <div className="grid gap-10 md:grid-cols-[1fr_1.2fr] md:gap-16">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-brand-dark">
                Shepherd Performance Science
              </p>
              <h2 className="mt-4 font-heading text-3xl text-stone-900 md:text-4xl">
                Every component supports mobility, cognition, and immune
                strength.
              </h2>
              <p className="mt-6 text-base text-stone-600">
                Shepherd Feast meals mirror ancestral feeding patterns while
                harnessing modern sports-nutrition research. From raw proteins to
                probiotic fermentation, every element is tuned for shepherd
                life.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {featureHighlights.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-3xl border border-stone-200 bg-gradient-to-br from-white via-stone-50 to-stone-100 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <feature.icon className="h-10 w-10 text-brand-dark" />
                  <h3 className="mt-4 font-heading text-xl text-stone-900">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm text-stone-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="plans" className="mx-auto max-w-6xl px-6 md:px-10">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-brand-dark">
              Meal Architecture
            </p>
            <h2 className="mt-4 font-heading text-3xl text-stone-900 md:text-4xl">
              Tailored plans for every shepherd milestone.
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-base text-stone-600">
              Nutritionally balanced, portioned, and flash-frozen fresh. Select
              the plan that fits your shepherd&apos;s workload, age, and
              temperament — and adjust anytime with our canine nutrition team.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {mealPlans.map((plan) => (
              <div
                key={plan.name}
                className="relative overflow-hidden rounded-[2.5rem] border border-stone-200 bg-white shadow-lg"
              >
                <div
                  className={`absolute inset-x-0 top-0 h-40 bg-gradient-to-br ${plan.accent} opacity-90`}
                />
                <div className="relative p-8">
                  <span className="text-xs uppercase tracking-[0.35em] text-white">
                    {plan.focus}
                  </span>
                  <h3 className="mt-3 font-heading text-2xl text-white">
                    {plan.name}
                  </h3>
                  <p className="mt-6 rounded-full bg-white/20 px-4 py-2 text-sm font-semibold text-white">
                    {plan.kcal}
                  </p>
                </div>
                <div className="relative space-y-4 bg-white px-8 pb-10 pt-6">
                  {plan.items.map((item) => (
                    <div className="flex items-start gap-3" key={item}>
                      <CheckCircle2 className="mt-1 h-5 w-5 text-brand" />
                      <p className="text-sm text-stone-700">{item}</p>
                    </div>
                  ))}
                  <a
                    href="#cta"
                    className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-stone-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-stone-700"
                  >
                    Craft My Plan
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 md:px-10">
          <div className="grid gap-10 rounded-[3rem] bg-gradient-to-br from-brand-dark via-stone-900 to-stone-950 p-10 text-white md:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-white/70">
                Rituals that build resilience
              </p>
              <h2 className="mt-4 font-heading text-3xl md:text-4xl">
                Morning to evening, we fuel training, tracking, and cuddle time.
              </h2>
              <ul className="mt-8 space-y-4 text-sm text-white/80">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-brand-light" />
                  Cold-chain logistics maintain raw nutrient bioavailability
                  from kitchen to kennel.
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-brand-light" />
                  Adaptive portion algorithm syncs with weight check-ins,
                  activity trackers, and vet feedback.
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-brand-light" />
                  Community of shepherd handlers sharing training protocols &
                  success stories.
                </li>
              </ul>
            </div>

            <div className="rounded-[2.5rem] bg-white/10 p-8 shadow-xl">
              <p className="text-sm uppercase tracking-[0.35em] text-white/70">
                Handler Spotlight
              </p>
              <blockquote className="mt-6 text-lg leading-relaxed text-white/90">
                “Within six weeks on Shepherd Feast, Koda&apos;s agility scores
                jumped, her coat radiates, and those hip clicks vanished. It&apos;s
                the first meal plan that understands a working shepherd&apos;s
                engine.”
              </blockquote>
              <div className="mt-6 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/40 bg-white/10 font-heading text-lg">
                  K
                </div>
                <div>
                  <p className="font-semibold text-white">Mila Jensen</p>
                  <p className="text-sm text-white/70">
                    SAR Handler · Cascade Mountain Rescue
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="faq"
          className="mx-auto max-w-5xl space-y-8 px-6 text-stone-900 md:px-10"
        >
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-brand-dark">
              Shepherd Family Questions
            </p>
            <h2 className="mt-4 font-heading text-3xl md:text-4xl">
              Transparency at every stage of nutrition.
            </h2>
          </div>
          <div className="space-y-4">
            {faq.map((item) => (
              <details
                key={item.question}
                className="group rounded-3xl border border-stone-200 bg-white px-6 py-5 shadow-sm transition hover:border-brand"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-semibold">
                  <span>{item.question}</span>
                  <span className="ml-4 rounded-full border border-stone-200 px-3 py-1 text-xs uppercase tracking-wide transition group-open:border-brand group-open:text-brand">
                    Open
                  </span>
                </summary>
                <p className="mt-4 text-sm text-stone-600">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </main>

      <footer
        id="cta"
        className="mx-auto max-w-6xl rounded-t-[3rem] bg-stone-900 px-6 py-16 text-white md:px-10"
      >
        <div className="grid gap-10 md:grid-cols-[1fr_0.8fr] md:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-white/60">
              Ready to Serve
            </p>
            <h2 className="mt-4 font-heading text-3xl md:text-4xl">
              Build your shepherd&apos;s personalized menu in 3 minutes.
            </h2>
            <p className="mt-4 max-w-xl text-sm text-white/80">
              Complete a short profile and receive handcrafted meal rotations,
              portion guidance, and a dedicated canine nutrition advocate.
            </p>
          </div>
          <form className="space-y-4 rounded-[2.5rem] bg-white/10 p-6 backdrop-blur-md">
            <div>
              <label className="text-xs font-semibold uppercase tracking-wide text-white/70">
                Guardian Name
              </label>
              <input
                type="text"
                placeholder="Lena Fischer"
                className="mt-2 w-full rounded-full border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-white focus:outline-none"
              />
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wide text-white/70">
                Shepherd Age
              </label>
              <input
                type="text"
                placeholder="3 years"
                className="mt-2 w-full rounded-full border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-white focus:outline-none"
              />
            </div>
            <div>
              <label className="text-xs font-semibold uppercase tracking-wide text-white/70">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="mt-2 w-full rounded-full border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-white focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-white px-5 py-3 text-sm font-semibold text-stone-900 transition hover:bg-stone-100"
            >
              Generate Meal Blueprint
            </button>
            <p className="text-xs text-white/60">
              We respect working dog schedules. No spam, only tailored guidance.
            </p>
          </form>
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-white/60 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Shepherd Feast. All rights reserved.</p>
          <div className="flex gap-6 uppercase tracking-[0.25em]">
            <a href="#" className="transition hover:text-white">
              Nutrition Lab
            </a>
            <a href="#" className="transition hover:text-white">
              Handler Portal
            </a>
            <a href="#" className="transition hover:text-white">
              Privacy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
