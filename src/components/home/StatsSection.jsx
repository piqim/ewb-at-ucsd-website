import { useEffect, useRef, useState } from 'react';
import { useApi } from '../../hooks/useFetch';

function CountUp({ target, duration = 1800 }) {
  const [count, setCount] = useState(0);
  const containerRef = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();
          const tick = (now) => {
            const progress = Math.min((now - startTime) / duration, 1);
            setCount(Math.floor(progress * target));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return <span ref={containerRef}>{count.toLocaleString()}</span>;
}

export default function StatsSection() {
  const { data: stats, loading } = useApi('stats');
  if (loading || !stats) return null;

  return (
    <section className="bg-ewb-blue text-white py-14 px-4">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat) => (
          <div key={stat.id}>
            <p className="text-4xl font-bold">
              {stat.prefix ?? ''}
              <CountUp target={stat.value} />
              {stat.suffix ?? ''}
            </p>
            <p className="text-blue-100 text-sm mt-1">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}