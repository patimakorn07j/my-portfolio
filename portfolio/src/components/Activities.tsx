import { activities } from "../data/activities";

const BADGE_COLORS = ["bg-violet", "bg-cyan", "bg-pink", "bg-amber"];

export default function Activities() {
  const count = activities.length;

  return (
    <section
      id="activities"
      className="relative left-1/2 right-1/2 -mx-[50vw] w-screen bg-[#0A0A0C] px-6 py-20 text-[#F5EFE0]"
    >
      <div className="mx-auto max-w-6xl">
        {/* thin top bar */}
        <div className="mb-10 flex items-center justify-between border-t border-white/15 pt-3">
          <span className="font-mono text-[10px] tracking-widest text-white/30">
            01
          </span>
          <span className="font-mono text-[10px] tracking-widest text-white/30">
            UNIVERSITY ACTIVITIES
          </span>
        </div>

        {/* heading row */}
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div>
            <h2 className="font-display text-5xl font-700 leading-[0.95] text-[#F5EFE0] sm:text-6xl">
              University
            </h2>
            <h2 className="bg-gradient-to-r from-amber via-orange-400 to-pink bg-clip-text font-display text-5xl font-700 italic leading-[0.95] text-transparent sm:text-6xl">
              Activities
            </h2>
            <p className="mt-4 max-w-md text-sm text-white/50">
              ช่วงเวลาที่ได้เข้าร่วมกิจกรรมต่างๆ ในคณะและมหาวิทยาลัย
            </p>
          </div>
          <div className="text-right">
            <p className="font-mono text-xs tracking-widest text-white/40">
              {count} ACTIVITIES
            </p>
            <p className="font-display text-6xl font-700 leading-none text-white/10 sm:text-7xl">
              {String(count).padStart(2, "0")}
            </p>
          </div>
        </div>

        {/* masonry gallery */}
        <div className="columns-2 gap-4 sm:columns-3 [column-fill:_balance]">
          {activities.map((activity, i) => (
            <figure
              key={activity.id}
              className="group relative mb-4 block break-inside-avoid overflow-hidden bg-white/5"
            >
              <img
                src={activity.image}
                alt={activity.caption}
                loading="lazy"
                className="w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <span
                className={`absolute left-3 top-3 flex h-6 w-6 items-center justify-center rounded-md text-[10px] font-bold text-white ${BADGE_COLORS[i % BADGE_COLORS.length]}`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent p-3 pt-8">
                <p className="text-xs font-semibold leading-snug text-white">
                  {activity.caption}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}