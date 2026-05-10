import { useState } from 'react';
import { useApi } from '../hooks/useFetch';

const ALL = 'All';

export default function Gallery() {
  const { data: projects, loading } = useApi('projects');

  // TODO: declare two state variables:
  // - active: tracks the currently selected filter, default ALL
  // - lightbox: tracks the currently open photo object { src, project }, default null

  // TODO: build a `photos` array by flatMapping over projects.
  // Each project has a gallery array of image URL strings.
  // Map each URL to an object: { src, project: p.name }
  // Default to empty array if projects is null.

  // TODO: build a `filters` array: [ALL, ...each project's name]

  // TODO: build a `visible` array:
  // if active === ALL, show all photos
  // otherwise filter to only photos where photo.project === active

  const [active, setActive] = useState(ALL);
  const [lightbox, setLightbox] = useState(null);

  const photos = projects
    ? projects.flatMap((p) => p.gallery.map((src) => ({ src, project: p.name })))
    : [];

  const filters = [ALL, ...(projects ?? []).map((p) => p.name)];

  const visible = active === ALL ? photos : photos.filter((photo) => photo.project === active);

  return (
    <main>

      <section className="bg-ucsd-navy text-white py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="section-tag text-ucsd-gold">Our Work in Photos</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Gallery</h1>
          <p className="text-blue-100 text-lg">
            A look at our teams in the field, on campus, and in the community.
          </p>
        </div>
      </section>

      <section className="bg-white py-8 px-4 border-b border-gray-100">
        <div className="max-w-5xl mx-auto flex flex-wrap gap-3 justify-center">
          {(filters ?? []).map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors duration-150 ${f === active ? 'bg-ewb-blue text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-12 px-4 min-h-[40vh]">
        <div className="max-w-5xl mx-auto">
          {loading ? (
            <p className="text-center text-gray-400">Loading gallery…</p>
          ) : !visible?.length ? (
            <p className="text-center text-gray-400">No photos yet — check back after our next trip!</p>
          ) : (
            <div className="columns-2 md:columns-3 gap-4 space-y-4">
              {(visible ?? []).map((photo, i) => (
                <div key={i} className="break-inside-avoid cursor-pointer overflow-hidden rounded-xl group" onClick={() => setLightbox(photo)}>
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

      {lightbox && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <div className="relative max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
            <img src={lightbox?.src} alt={lightbox?.project} className="w-full rounded-xl object-contain max-h-[80vh]" />
            <p className="text-white text-sm text-center mt-3 opacity-70">{lightbox?.project}</p>
            <button onClick={() => setLightbox(null)} className="absolute -top-4 -right-4 w-9 h-9 bg-white text-gray-800 rounded-full font-bold flex items-center justify-center hover:bg-gray-100">✕</button>
          </div>
        </div>
      )}

    </main>
  );
}