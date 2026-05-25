export default function StayConnected() {
  return (
    // TODO: section with white background, py-16 vertical padding, px-4 horizontal
    <section className="bg-white py-16 px-4">

      {/* TODO: constrain to max-w-4xl, centered, text centered */}
      <div className="max-w-4xl mx-auto text-center">

        {/* TODO: small label — use .section-tag */}
        <p className="section-tag">Community</p>

        {/* TODO: heading — text-3xl, font-bold, ucsd-navy, mb-4 */}
        <h2 className="text-3xl font-bold text-ucsd-navy mb-4">Stay Connected</h2>

        {/* TODO: subtitle — text-gray-500, mb-10 */}
        <p className="text-gray-500 mb-10">
          Join our Discord for real-time updates and follow us on Instagram.
        </p>

        {/* TODO: side-by-side layout on desktop (md:flex-row), stacked on mobile.
            Use flex flex-col md:flex-row, gap-6, justify-center, items-stretch */}
        <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch">

          {/* Discord widget — TODO: constrain width (max-w-sm), centered (mx-auto),
              flex-1 so both cards are equal width */}
          <div className="max-w-sm mx-auto flex-1">
            <iframe
              src="https://discord.com/widget?id=YOUR_DISCORD_SERVER_ID&theme=dark"
              width="100%"
              height="300"
              allowTransparency="true"
              frameBorder="0"
              sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
              // TODO: add rounded corners (rounded-xl) and a soft shadow (shadow-sm)
              className="rounded-xl shadow-sm"
              title="EWB UCSD Discord"
            />
          </div>

          {/* Instagram card — TODO: flex-1, max-w-sm, mx-auto, full width (w-full) */}
          <div className="flex-1 max-w-sm mx-auto w-full">
            <a
              href="https://www.instagram.com/ewb.ucsd/"
              target="_blank"
              rel="noopener noreferrer"
              // TODO: use the .card class. Make it flex column, centered items,
              // full height (h-full), gap-4 between children.
              // On hover, add a pink border hint (hover:border-pink-300).
              // Add a group class so child elements can react to hover.
              className="card flex flex-col items-center h-full gap-4 hover:border-pink-300 group"
            >
              {/* TODO: circular gradient avatar — w-16 h-16, rounded-full.
                  Use a gradient from purple-500 via pink-500 to orange-400
                  (bg-gradient-to-br). Center the SVG icon inside. */}
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 flex items-center justify-center text-white">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>

              {/* Handle and label */}
              <div>
                {/* TODO: bold ucsd-navy handle, text-lg */}
                <p className="font-bold text-ucsd-navy text-lg">@ewb.ucsd</p>
                {/* TODO: muted label — text-gray-500, text-sm */}
                <p className="text-gray-500 text-sm">Follow us on Instagram</p>
              </div>

              {/* TODO: "View Profile →" link text — use Instagram brand color #C13584
                  via inline style. text-sm, font-semibold.
                  On hover (group-hover:underline) underline it. */}
              <span className="text-sm font-semibold group-hover:underline" style={{color: "#C13584"}}>
                View Profile →
              </span>

            </a>
          </div>

        </div>
      </div>
    </section>
  );
}