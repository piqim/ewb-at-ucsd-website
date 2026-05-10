import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    // TODO: min-h-[70vh] so the page fills the screen even without content.
    // flex column, centered both axes (items-center justify-center), px-4, centered text
    <main className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">

      <p className="text-8xl font-bold text-gray-100 select-none">404</p>

      <h1 className="text-2xl font-bold text-ucsd-navy mt-2 mb-3">Page Not Found</h1>

      <p className="text-gray-500 mb-8 max-w-sm">
        The page you're looking for doesn't exist or may have moved.
      </p>

      <Link to="/" className="btn-primary">Back to Home</Link>

    </main>
  );
}