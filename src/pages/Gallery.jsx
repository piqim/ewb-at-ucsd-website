import { useState } from 'react';
import { useApi } from '../hooks/useFetch';

const ALL = 'All';

export default function Gallery() {
  const { data: projects, loading } = useApi('projects');
  const [active, setActive] = useState(ALL);
  const [lightbox, setLightbox] = useState(null); // { src, caption }

  // Build flat photo list from all project gallery arrays
  const photos = projects?.flatMap((p) =>
    (p.gallery ?? []).map((src) => ({ src, project: p.name, slug: p.slug }))
  ) ?? [];

  const filters = [ALL, ...(projects?.map((p) => p.name) ?? [])];
  const visible  = active === ALL ? photos : photos.filter((ph) => ph.project === active);

  return (
    <main>
      {/* Hero */}
      <section className="bg-ucsd-navy text-white py-20 px-4 text-center">
        <p className="section-tag text-ucsd-gold">Our Work in Photos</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Gallery</h1>
        <p className="text-blue-100 text-lg max-w-xl mx-auto">
          A look at our teams in the field, on campus, and in the community.
        </p>
      </section>

      {/* Filter tabs */}
      <section className="py-8 px-4 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto flex flex-wrap gap-3 justify-center">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors duration-150
                ${active === f
                  ? 'bg-ewb-blue text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="py-12 px-4 bg-gray-50 min-h-[40vh]">
        <div className="max-w-5xl mx-auto">
          {loading ? (
            <p className="text-center text-gray-400 py-20">Loading gallery…</p>
          ) : !visible.length ? (
            <p className="text-center text-gray-400 py-20">
              No photos yet — check back after our next trip!
            </p>
          ) : (
            <div className="columns-2 md:columns-3 gap-4 space-y-4">
              {visible.map((photo, i) => (
                <div
                  key={i}
                  className="break-inside-avoid cursor-pointer overflow-hidden rounded-xl group"
                  onClick={() => setLightbox(photo)}
                >
                  <img
                    src={photo.src}
                    alt={`${photo.project} photo ${i + 1}`}
                    className="w-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <div className="relative max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={lightbox.src}
              alt={lightbox.project}
              className="w-full rounded-xl object-contain max-h-[80vh]"
            />
            <p className="text-white text-sm text-center mt-3 opacity-70">{lightbox.project}</p>
            <button
              onClick={() => setLightbox(null)}
              className="absolute -top-4 -right-4 w-9 h-9 bg-white text-gray-800 rounded-full
                         font-bold text-lg flex items-center justify-center hover:bg-gray-100"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </main>
  );
}