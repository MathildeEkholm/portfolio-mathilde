import SiteHeader from "../../components/SiteHeader";
import ScreenMarquee from "../../components/ScreenMarquee";
import DiagramLightbox from "../../components/DiagramLightbox";
import ScreenTriptych from "../../components/ScreenTriptych";

export const metadata = {
  title: "GreenMobility — Mathilde Ekholm",
  description:
    "Redesigning a car sharing app around user context rather than features.",
};

const allScreens = [
  { src: "/images/greenmobility/01-find-car.png", label: "Find a car" },
  { src: "/images/greenmobility/02-compare.png", label: "Compare" },
  { src: "/images/greenmobility/03-radar.png", label: "Radar" },
  { src: "/images/greenmobility/04-in-trip-collapsed.png", label: "In trip" },
  { src: "/images/greenmobility/05-in-trip-expanded.png", label: "Trip detail" },
  { src: "/images/greenmobility/06-my-trips.png", label: "My trips" },
  { src: "/images/greenmobility/07-profile.png", label: "Profile" },
  { src: "/images/greenmobility/08-menu.png", label: "Menu" },
];

const focus = [
  "UX Research",
  "Information Architecture",
  "Interaction Design",
  "UI Design",
  "Prototyping",
  "User Testing",
];

const observations = [
  {
    title: "Fragmented navigation",
    body: "Related tasks were distributed across different parts of the experience.",
  },
  {
    title: "Feature first structure",
    body: "Users often needed to understand where a feature lived before accessing it.",
  },
  {
    title: "Changing needs",
    body: "Finding a car and managing an active trip require very different information, despite happening within the same map experience.",
  },
];

const findings = [
  {
    number: "01",
    title: "Decision making needs information, not just availability",
    body: "Participants expected nearby cars to provide enough information to make a choice, particularly walking distance and battery level.",
    quote: "I'd expect to see how many km their battery can cover.",
    implication:
      "Surface decision critical information directly when choosing a car.",
  },
  {
    number: "02",
    title: "The active trip belongs on the map",
    body: "One participant explicitly expected an ongoing booking to be visible on the initial screen rather than hidden inside a separate Activity area.",
    quote: "I wanna see my ongoing booking somewhere on the initial screen.",
    implication:
      "Treat an active trip as a state of the core experience rather than a separate destination.",
  },
  {
    number: "03",
    title: "Support depends on context",
    body: "Help and Support made sense under Account outside a trip, but participants expected it to be immediately available during an active booking.",
    quote:
      "During the booking, I'd expect this option to be quickly reachable on the main screen.",
    implication:
      "Important functionality does not always need one fixed location. Access should reflect context.",
  },
];

const proposedNotes = [
  {
    title: "Contextual core",
    body: "Home and Map change between Before Trip and In Trip, surfacing functionality relevant to the current moment.",
  },
  {
    title: "Clearer destinations",
    body: "Trips, personal information, payments and benefits are grouped according to user intent rather than accumulated under one area.",
  },
  {
    title: "Contextual access",
    body: "Some functionality can be reached from multiple contexts. Current Trip surfaces both through My Trips and the active map experience, while support becomes immediately accessible during a trip.",
  },
];

const beforeTrip = [
  {
    src: "/images/greenmobility/01-find-car.png",
    label: "Scan",
    caption:
      "Available cars stay visible on the map, giving an immediate sense of what is nearby.",
  },
  {
    src: "/images/greenmobility/02-compare.png",
    label: "Compare",
    caption:
      "Expanding the sheet surfaces walking distance and battery level, the information participants expected.",
  },
  {
    src: "/images/greenmobility/03-radar.png",
    label: "React",
    caption:
      "Radar is surfaced inside the car selection flow, at the moment it becomes useful.",
  },
];

const inTrip = [
  {
    src: "/images/greenmobility/04-in-trip-collapsed.png",
    label: "Stay focused",
    caption:
      "The collapsed state keeps the map dominant with a lightweight indication of the active vehicle.",
  },
  {
    src: "/images/greenmobility/05-in-trip-expanded.png",
    label: "Check what matters",
    caption:
      "Duration, distance, battery and estimated range, without leaving the map.",
  },
];

const destinations = [
  {
    src: "/images/greenmobility/06-my-trips.png",
    label: "My Trips",
    caption:
      "Current and previous trips grouped together, while an active trip also surfaces on the map.",
  },
  {
    src: "/images/greenmobility/07-profile.png",
    label: "Profile",
    caption:
      "Personal information, driving licence and policies, separated from unrelated services.",
  },
  {
    src: "/images/greenmobility/08-menu.png",
    label: "Menu",
    caption:
      "Payment, vouchers and packages, grouped as functionality users intentionally seek out.",
  },
];

export default function GreenMobilityCaseStudy() {
  return (
    <main className="flex min-h-screen flex-col">
      <SiteHeader />

      {/* 1. Hero */}
      <section className="bg-surface pt-28 sm:pt-32">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <p className="text-sm font-medium uppercase tracking-[0.09em] text-brand-soft">
            UX/UI Design
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-brand sm:text-5xl">
            GreenMobility
          </h1>
          <p className="mt-6 max-w-3xl text-2xl leading-snug text-ink-muted sm:text-3xl">
            Same map. Different moment.
          </p>
          <p className="mt-4 text-lg text-ink-subtle">2026</p>

          <div className="mt-10 flex flex-wrap gap-x-16 gap-y-6 border-t border-black/5 pt-8">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.12em] text-ink-subtle">
                Role
              </p>
              <p className="mt-2 text-base text-ink-muted">UX/UI Designer</p>
            </div>
            <div className="max-w-md">
              <p className="text-xs font-medium uppercase tracking-[0.12em] text-ink-subtle">
                Focus
              </p>
              <p className="mt-2 text-base text-ink-muted">
                {focus.join(" · ")}
              </p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.12em] text-ink-subtle">
                Type
              </p>
              <p className="mt-2 text-base text-ink-muted">
                Independent redesign concept
              </p>
            </div>
          </div>
        </div>

        {/* 2. Opening, with the whole system shown before any argument */}
        <ScreenMarquee screens={allScreens} subject="GreenMobility redesign" />

        <div className="mx-auto max-w-5xl px-5 pb-20 sm:px-8">
          <h2 className="max-w-3xl text-2xl font-semibold leading-snug text-brand sm:text-3xl">
            Redesigning GreenMobility around user context rather than features
          </h2>
          <div className="mt-6 grid max-w-4xl gap-6 md:grid-cols-2">
            <p className="text-lg leading-relaxed text-ink-muted">
              GreenMobility is built around a simple task: finding and using a
              car. But as I explored the app, I found that supporting this task
              often required navigating between features organised around the
              system rather than the user&apos;s current situation.
            </p>
            <p className="text-lg leading-relaxed text-ink-muted">
              I explored how the experience could instead adapt to the two
              moments that matter most: before a trip and during a trip.
            </p>
          </div>
        </div>
      </section>

      {/* 3. The problem */}
      <section className="bg-surface-muted py-20">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.12em] text-ink-subtle">
            The problem
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-snug text-brand">
            The functionality was there. The structure was getting in the way.
          </h2>
          <div className="mt-6 grid max-w-4xl gap-6 md:grid-cols-2">
            <p className="text-lg leading-relaxed text-ink-muted">
              GreenMobility already offered many of the features users might
              need, from finding cars and using Radar to viewing previous trips,
              accessing support and managing benefits. The challenge was how
              these features were organised and surfaced.
            </p>
            <p className="text-lg leading-relaxed text-ink-muted">
              Core mobility tasks existed alongside account settings, benefits,
              payment and support, while important functionality could require
              users to know where a feature lived before they could use it.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {observations.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-surface p-7 ring-1 ring-line-soft"
              >
                <h3 className="text-base font-semibold text-brand">
                  {item.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-ink-muted">
                  {item.body}
                </p>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-16 max-w-3xl text-center text-2xl leading-snug text-brand sm:text-3xl">
            How might the experience surface the right functionality based on
            what the user is trying to do, and when they need it?
          </p>
        </div>
      </section>

      {/* 4. Mapping the existing architecture */}
      <section className="bg-surface py-20">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.12em] text-ink-subtle">
            Mapping the existing architecture
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-snug text-brand">
            Understanding the system before redesigning the interface
          </h2>
          <div className="mt-6 grid max-w-4xl gap-6 md:grid-cols-2">
            <p className="text-lg leading-relaxed text-ink-muted">
              Before changing individual screens, I mapped the existing
              information architecture to understand how functionality was
              organised and accessed.
            </p>
            <p className="text-lg leading-relaxed text-ink-muted">
              The map revealed a relatively flat structure around the profile
              area, where unrelated functionality such as trip history, payment,
              benefits, customer service and account settings competed within
              the same hierarchy.
            </p>
          </div>
        </div>

        <DiagramLightbox
          src="/images/greenmobility/current-ia.png"
          alt="Current information architecture of the GreenMobility app"
          width={6504}
          height={4136}
          caption="Current information architecture. Expand to read the individual nodes."
        />

        <div className="mx-auto mt-14 max-w-5xl px-5 sm:px-8">
          <p className="border-l-2 border-brand/40 py-1 pl-6 text-xl leading-relaxed text-ink sm:text-2xl">
            <span className="font-semibold text-brand">Key insight:</span> The
            problem was not a lack of functionality. It was the relationship
            between functionality, context and access.
          </p>
        </div>
      </section>

      {/* 5. Early concept and user testing */}
      <section className="bg-surface-muted py-20">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.12em] text-ink-subtle">
            Early concept and user testing
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-snug text-brand">
            Testing the structure before polishing the interface
          </h2>
          <div className="mt-8 grid gap-10 md:grid-cols-2">
            <div>
              <p className="text-lg leading-relaxed text-ink-muted">
                Rather than moving directly into high fidelity design, I created
                an early concept that reorganised the experience into four
                areas: Map, Book, Activity and Account.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-ink-muted">
                I used scenario based testing to understand whether users could
                predict where they would find key functionality.
              </p>
            </div>
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.12em] text-ink-subtle">
                Participants were asked to
              </p>
              <ul className="mt-5 space-y-3">
                {[
                  "find a suitable car nearby",
                  "get notified when no cars were available",
                  "explore options for securing a car in advance",
                  "find information about a previous trip",
                  "access help and support",
                ].map((task) => (
                  <li key={task} className="flex items-start gap-3">
                    <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand" />
                    <span className="text-lg leading-relaxed text-ink-muted">
                      {task}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. What I learned */}
      <section className="bg-surface py-20">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.12em] text-ink-subtle">
            What I learned
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-snug text-brand">
            The test challenged my first solution
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ink-muted">
            The initial structure performed well for several tasks. Participants
            understood Radar, pre-booking and trip history, but their feedback
            also revealed something more important: the user&apos;s needs change
            with the moment they are in.
          </p>

          <div className="mt-14 grid gap-x-12 gap-y-14 md:grid-cols-3">
            {findings.map((finding) => (
              <div key={finding.number}>
                <p className="text-sm font-semibold tracking-[0.08em] text-brand-soft">
                  {finding.number}
                </p>
                <h3 className="mt-3 text-xl font-semibold leading-snug text-brand">
                  {finding.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-ink-muted">
                  {finding.body}
                </p>
                <blockquote className="mt-6 border-l-2 border-brand/30 pl-5 text-lg italic leading-relaxed text-ink">
                  &ldquo;{finding.quote}&rdquo;
                </blockquote>
                <p className="mt-6 text-base leading-relaxed text-ink-muted">
                  <span className="font-medium text-ink">
                    Design implication:
                  </span>{" "}
                  {finding.implication}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Reframing the experience */}
      <section className="bg-surface-muted py-20">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.12em] text-ink-subtle">
            Reframing the experience
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-snug text-brand">
            From navigation to context
          </h2>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl bg-surface p-7 ring-1 ring-line-soft">
              <p className="text-xs font-medium uppercase tracking-[0.12em] text-ink-subtle">
                My first concept asked
              </p>
              <p className="mt-3 text-xl leading-snug text-ink-muted">
                Where should each feature live?
              </p>
            </div>
            <div className="rounded-2xl bg-surface p-7 ring-1 ring-brand/25">
              <p className="text-xs font-medium uppercase tracking-[0.12em] text-ink-subtle">
                The final concept asked
              </p>
              <p className="mt-3 text-xl leading-snug text-brand">
                What does the user need right now?
              </p>
            </div>
          </div>

          <p className="mt-10 max-w-3xl text-lg leading-relaxed text-ink-muted">
            The map is already the centre of GreenMobility&apos;s experience, so
            rather than introducing another layer of primary navigation, I kept
            the map as the anchor and designed it around two distinct states.
          </p>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.12em] text-brand-soft">
                Before trip
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-brand">
                Find and choose
              </h3>
              <p className="mt-3 text-lg leading-relaxed text-ink-muted">
                Locate nearby cars, compare relevant information and react when
                no suitable car is available.
              </p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.12em] text-brand-soft">
                In trip
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-brand">
                Monitor and manage
              </h3>
              <p className="mt-3 text-lg leading-relaxed text-ink-muted">
                Keep the map accessible while surfacing trip status, vehicle
                information and immediate support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Proposed information architecture */}
      <section className="bg-surface py-20">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.12em] text-ink-subtle">
            Proposed information architecture
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-snug text-brand">
            Reorganising around user intent
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ink-muted">
            The proposed architecture separates the contextual mobility
            experience from supporting functionality. Instead of giving every
            feature equal weight, the new structure distinguishes between what
            users need in the moment and what they intentionally navigate to
            manage.
          </p>
        </div>

        <DiagramLightbox
          src="/images/greenmobility/proposed-ia.png"
          alt="Proposed information architecture for the GreenMobility redesign"
          width={10238}
          height={6658}
          caption="Proposed information architecture. Dotted lines mark functionality reachable from more than one context."
        />

        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {proposedNotes.map((note) => (
              <div key={note.title}>
                <h3 className="text-base font-semibold text-brand">
                  {note.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-ink-muted">
                  {note.body}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-16 max-w-3xl text-xl leading-relaxed text-ink sm:text-2xl">
            The final interface was not designed screen by screen. Each major
            interaction traces back to a change in how I understood the
            underlying experience.
          </p>
        </div>
      </section>

      {/* 9. Before Trip */}
      <section className="bg-surface-muted py-20">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.12em] text-brand-soft">
            Before trip
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-snug text-brand">
            Making the next decision easier
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ink-muted">
            Before a trip, the user&apos;s primary goal is not simply to see
            cars. It is to decide which car works for their journey. The bottom
            sheet therefore progresses from overview to comparison without
            removing the map from view.
          </p>
          <ScreenTriptych items={beforeTrip} subject="GreenMobility redesign" />
        </div>
      </section>

      {/* 10. In Trip */}
      <section className="bg-surface py-20">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.12em] text-brand-soft">
            In trip
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-snug text-brand">
            When the trip starts, the interface changes priorities
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ink-muted">
            Once a car is in use, finding another car is no longer the primary
            task. The same map transitions into an In Trip state, keeping the
            interface visually familiar while changing what the bottom sheet
            prioritises.
          </p>
          <ScreenTriptych items={inTrip} subject="GreenMobility redesign" />

          <div className="mt-16 grid gap-8 rounded-2xl bg-surface-muted p-8 md:grid-cols-2 sm:p-10">
            <div>
              <h3 className="text-xl font-semibold text-brand">
                Get help when it matters
              </h3>
              <p className="mt-4 text-lg leading-relaxed text-ink-muted">
                Help and Support is placed directly alongside the active trip,
                responding to the finding that support becomes more important
                and more time sensitive during a booking.
              </p>
            </div>
            <blockquote className="border-l-2 border-brand/30 pl-6 text-lg italic leading-relaxed text-ink">
              &ldquo;During the booking, I&apos;d expect this option to be
              quickly reachable on the main screen.&rdquo;
              <footer className="mt-3 text-sm not-italic text-ink-subtle">
                Test participant
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* 11. Supporting destinations */}
      <section className="bg-surface-muted py-20">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.12em] text-ink-subtle">
            Supporting destinations
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-snug text-brand">
            Giving everything else a clearer home
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ink-muted">
            Not every feature needs to compete for attention in the core
            mobility experience. I reorganised secondary functionality into
            clearer destinations based on what users are trying to manage.
          </p>
          <ScreenTriptych
            items={destinations}
            subject="GreenMobility redesign"
          />
        </div>
      </section>

      {/* 12. What I would validate next */}
      <section className="bg-surface py-20">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <p className="text-xs font-medium uppercase tracking-[0.12em] text-ink-subtle">
            Next steps
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-snug text-brand">
            What I would validate next
          </h2>
          <div className="mt-8 grid gap-10 md:grid-cols-2">
            <p className="text-lg leading-relaxed text-ink-muted">
              The redesign is based on insights from the first round of testing,
              but the new contextual model introduces assumptions that should be
              tested before implementation. I would focus the next round of
              testing on whether users:
            </p>
            <ul className="space-y-3">
              {[
                "understand that the bottom sheet changes between Before Trip and In Trip",
                "discover Radar naturally when no suitable car is available",
                "understand where to find previous trips, account information and benefits",
                "can quickly access support during an active trip",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand" />
                  <span className="text-lg leading-relaxed text-ink-muted">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-10 max-w-3xl text-xl leading-relaxed text-ink sm:text-2xl">
            Success would not only mean completing the tasks, but doing so
            without needing to understand how GreenMobility has organised its
            features internally.
          </p>
        </div>
      </section>

      {/* 13. Final system. Deliberately almost no copy. */}
      <section className="bg-surface-muted pt-20">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <h2 className="text-2xl font-semibold text-brand sm:text-3xl">
            Same map. Different moment.
          </h2>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-ink-muted">
            A contextual mobility experience that keeps the map at its centre,
            while adapting the information and actions around what the user
            needs in the moment.
          </p>
        </div>
        <ScreenMarquee screens={allScreens} subject="GreenMobility redesign" />
      </section>
    </main>
  );
}
