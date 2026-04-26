import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    // TODO: min-h-[70vh] so the page fills the screen even without content.
    // flex column, centered both axes (items-center justify-center), px-4, centered text
    <main className="">

      {/* TODO: giant decorative "404" — text-8xl, font-bold.
          Use text-gray-100 so it's very faint (decorative only).
          Add select-none so users can't accidentally select it. */}
      <p className="">404</p>

      {/* TODO: text-2xl, font-bold, text-ucsd-navy, mt-2, mb-3 */}
      <h1 className="">Page Not Found</h1>

      {/* TODO: text-gray-500, mb-8, max-w-sm */}
      <p className="">
        The page you're looking for doesn't exist or may have moved.
      </p>

      {/* TODO: .btn-primary */}
      <Link to="/" className="">Back to Home</Link>

    </main>
  );
}