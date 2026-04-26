import { useEffect, useRef, useState } from 'react';
import { useApi } from '../../hooks/useFetch';

function CountUp({ target, duration = 1800 }) {
  const [count, setCount] = useState(0);
  const containerRef = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    // TODO: create an IntersectionObserver that:
    // - triggers when the element is at least 30% visible (threshold: 0.3)
    // - on first intersection (check started.current to avoid re-triggering):
    //   - sets started.current = true
    //   - records the start time using performance.now()
    //   - defines a tick function that:
    //     - calculates progress as (now - startTime) / duration, clamped to 1
    //     - sets count to Math.floor(progress * target)
    //     - calls requestAnimationFrame(tick) again if progress < 1
    //   - kicks off the animation with requestAnimationFrame(tick)
    // - observes containerRef.current
    // - returns a cleanup function that calls observer.disconnect()
  }, [target, duration]);

  return <span ref={containerRef}>{count.toLocaleString()}</span>;
}

export default function StatsSection() {
  const { data: stats, loading } = useApi('stats');
  if (loading || !stats) return null;

  return (
    // TODO: full-width section, ewb-blue background (bg-ewb-blue),
    // white text, py-14 vertical, px-4 horizontal
    <section className="">
      {/* TODO: max-w-5xl, mx-auto, 2 columns on mobile (grid-cols-2),
          4 on desktop (md:grid-cols-4), gap-8, text centered */}
      <div className="">
        {stats.map((stat) => (
          <div key={stat.id}>
            {/* TODO: text-4xl, font-bold */}
            <p className="">
              {stat.prefix ?? ''}
              <CountUp target={stat.value} />
              {stat.suffix ?? ''}
            </p>
            {/* TODO: text-blue-100, text-sm, mt-1 */}
            <p className="">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}