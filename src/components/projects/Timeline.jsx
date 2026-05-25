export default function Timeline({ items = [] }) {
  if (!items.length) return null;

  return (
    // TODO: relative positioning needed so the vertical line can be
    // absolutely positioned inside it
    <div className="relative">

      {/* Vertical connecting line */}
      {/* TODO: absolute line — absolute, left-4 on mobile / left-1/2 on desktop,
          top-0 to bottom-0, w-0.5, bg-gray-200 */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200" />

      {/* TODO: vertical stack of items with space-y-10 */}
      <div className="space-y-10">
        {items.map((item, index) => {
          const isLeft = index % 2 === 0;
          return (
            // TODO: relative (for the dot), flex, items-start,
            // md:justify-center so cards sit either side of the centre line
            <div key={item.id ?? index} className="relative flex items-start md:justify-center">

              {/* Timeline dot */}
              {/* TODO: absolute circle — absolute, left-4 on mobile,
                  left-1/2 on desktop with -translate-x-1/2 to center on the line.
                  w-3 h-3, rounded-full, bg-ewb-blue, border-2 border-white,
                  shadow, mt-1.5, z-10 so it sits above the line */}
              <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-3 h-3 rounded-full bg-ewb-blue border-2 border-white shadow mt-1.5 z-10" />

              {/* Card — on mobile always sits to the right of the dot (ml-10).
                  On desktop alternates left/right using isLeft:
                  isLeft  → md:mr-auto md:pr-10 (left side, padding away from centre)
                  !isLeft → md:ml-auto md:pl-10 (right side, padding away from centre)
                  Width on desktop: md:w-5/12 */}
              {/* TODO: apply the above logic using a template literal */}
              <div className={`ml-10 md:ml-0 md:w-5/12 ${isLeft ? 'md:mr-auto md:pr-10' : 'md:ml-auto md:pl-10'}`}>

                {/* TODO: .card, p-5 */}
                <div className="card p-5">
                  {/* TODO: date label — text-xs, font-bold, text-ewb-blue,
                      uppercase, tracking-wide */}
                  <span className="text-xs font-bold text-ewb-blue uppercase tracking-wide">{item.date}</span>
                  {/* TODO: font-bold, text-ucsd-navy, mt-1, mb-2 */}
                  <h3 className="font-bold text-ucsd-navy mt-1 mb-2">{item.title}</h3>
                  {/* TODO: text-gray-500, text-sm, leading-relaxed */}
                  <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                </div>

              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}