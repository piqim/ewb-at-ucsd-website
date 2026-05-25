import { useState } from 'react';
import { useApi } from '../hooks/useFetch';

const ALL = 'All';

export default function Gallery() {
  const { data: projects, loading } = useApi('projects');

  // TODO: declare two state variables:
  // - active: tracks the currently selected filter, default ALL
  // - lightbox: tracks the currently open photo object { src, project }, default null
  const [active, setActive] = useState(ALL);
  const [lightbox, setLightbox] = useState(null);
  // TODO: build a `photos` array by flatMapping over projects.
  // Each project has a gallery array of image URL strings.
  // Map each URL to an object: { src, project: p.name }
  // Default to empty array if projects is null.
  const photos =
    projects?.flatMap((p) =>
      (p.gallery ?? []).map((src) => ({
        src,
        project: p.name,
      }))
    ) ?? [];
  // TODO: build a `filters` array: [ALL, ...each project's name]
  const filters = [ALL, ...(projects?.map((p) => p.name) ?? [])];
  // TODO: build a `visible` array:
  // if active === ALL, show all photos
  // otherwise filter to only photos where photo.project === active
  const visible =
    active === ALL
      ? photos
      : photos.filter((p) => p.project === active);

  return (
    <main>

      {/* HERO */}
      {/* TODO: ucsd-navy background, white text, py-20, px-4, centered */}
      <section className="bg-ucsd-navy text-white py-20 px-4 text-center">
        <div className="">
          <p className="">Our Work in Photos</p>
          <h1 className="">Gallery</h1>
          <p className="">
            A look at our teams in the field, on campus, and in the community.
          </p>
        </div>
      </section>

      {/* FILTER TABS */}
      {/* TODO: white background, py-8, px-4, border-b border-gray-100 */}
      <section className="bg-white py-8 px-4 border-b border-gray-100">
        {/* TODO: max-w-5xl, mx-auto, flex wrap, gap-3, justify-center */}
        <div className="max-w-5xl mx-auto flex flex-wrap gap-3 justify-center">
          {/* TODO: map over filters array — not defined yet, see above */}
          {(filters ?? []).map((f) => (
            <button
              key={f}
              // TODO: call setActive(f) on click
              onClick={() => setActive(f)}
              // TODO: pill shape — rounded-full, px-5 py-2, text-sm, font-semibold,
              // transition-colors duration-150.
              // Active (f === active): bg-ewb-blue text-white
              // Inactive: bg-gray-100 text-gray-600 hover:bg-gray-200
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors duration-150 ${
                active === f
                  ? 'bg-ewb-blue text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      {/* PHOTO GRID */}
      {/* TODO: bg-gray-50, py-12, px-4, min-h-[40vh] */}
      <section className="bg-gray-50 py-12 px-4 min-h-[40vh]">
        {/* TODO: max-w-5xl, mx-auto */}
        <div className="max-w-5xl mx-auto">
          {loading ? (
            <p className="">Loading gallery…</p>
          ) : !visible?.length ? (
            <p className="">No photos yet — check back after our next trip!</p>
          ) : (
            // TODO: masonry layout — columns-2 md:columns-3, gap-4, space-y-4
            <div className="columns-2 md:columns-3 gap-4 space-y-4">
              {(visible ?? []).map((photo, i) => (
                // TODO: break-inside-avoid, cursor-pointer, overflow-hidden,
                // rounded-xl, group class for hover effects.
                // onClick should set lightbox to this photo object.
                <div key={i} className="break-inside-avoid cursor-pointer overflow-hidden rounded-xl group" onClick={() => setLightbox(photo)}>
                  {/* TODO: w-full, object-cover.
                      On hover: group-hover:scale-105
                      transition-transform duration-300 */}
                  <img
                    src={photo.src}
                    alt={`${photo.project} photo ${i + 1}`}
                    className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* LIGHTBOX */}
      {/* TODO: only render when lightbox state is not null */}
      {lightbox && (
        // TODO: fixed fullscreen overlay — fixed inset-0, bg-black/80, z-50,
        // flex centered, p-4.
        // onClick on the overlay should close the lightbox (set to null)
        <div className="fixed inset-0 bg-black/80 z-50 flex text-center p-4" onClick={() => setLightbox(null)}>
          {/* TODO: max-w-3xl, w-full.
              stopPropagation on click so the image doesn't close the lightbox */}
          <div className="max-w-3xl w-full relative" onClick={(e) => e.stopPropagation()}>
            {/* TODO: w-full, rounded-xl, object-contain, max-h-[80vh] */}
            <img src={lightbox?.src} alt={lightbox?.project} className="w-full rounded-xl object-contain max-h-[80vh]" />
            {/* TODO: white text, text-sm, text-center, mt-3, opacity-70 */}
            <p className="text-white text-sm text-center mt-3 opacity-70">{lightbox?.project}</p>
            {/* TODO: absolute close button — -top-4 -right-4, w-9 h-9,
                bg-white, text-gray-800, rounded-full, font-bold,
                flex centered, hover:bg-gray-100.
                onClick should close the lightbox. */}
            <button onClick={() => setLightbox(null)} className="absolute -top-4 -right-4 w-9 h-9 bg-white text-gray-800 rounded-full font-bold flex items-center justify-center hover:bg-gray-100">✕</button>
          </div>
        </div>
      )}

    </main>
  );
}