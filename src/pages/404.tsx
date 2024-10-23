import Link from "next/link";

const Custom404: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full p-10">
      <h1 className="text-4xl font-bold text-gray-800">You are lost</h1>
      <p className="mt-4 text-lg text-gray-600">Sorry, we couldn't find that page.</p>
      <Link href="/" className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Go back to Home
      </Link>
    </div>
  );
};

export default Custom404;
