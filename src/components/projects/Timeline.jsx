export default function Timeline({ items = [] }) {
    if (!items.length) return null;
  
    return (
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200 md:left-1/2" />
  
        <div className="space-y-10">
          {items.map((item, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div key={item.id ?? index} className="relative flex items-start md:justify-center">
                {/* Dot */}
                <div className="absolute left-4 w-3 h-3 rounded-full bg-ewb-blue border-2 border-white shadow
                                md:left-1/2 md:-translate-x-1/2 mt-1.5 z-10" />
  
                {/* Card — mobile: always right of line; desktop: alternating */}
                <div className={`ml-10 md:ml-0 md:w-5/12 ${isLeft ? 'md:mr-auto md:pr-10' : 'md:ml-auto md:pl-10'}`}>
                  <div className="card p-5">
                    <span className="text-xs font-bold text-ewb-blue uppercase tracking-wide">
                      {item.date}
                    </span>
                    <h3 className="font-bold text-ucsd-navy mt-1 mb-2">{item.title}</h3>
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