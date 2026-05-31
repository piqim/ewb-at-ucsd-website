import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <main className="min-h-[70h] flex flex-col items-center justify-center px-4 text-center">
      <p className="text-8x1 font-bold text-gray-100 select-none">404</p>
      <h1 className="text-2xl font-bold text-ucsd-navy mt-2 mb-3">Page Not Found</h1>
      <p className="text-gray-500 mb-8 max-w-sm">
        The page you're looking for doesn't exist or may have moved.
      </p>
      <Link to="/" className="btn-primary">Back to Home</Link>
    </main>
  );
}