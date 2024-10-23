import Link from "next/link";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col">
      <header>
        <nav className="bg-gray-800 p-4">
          <ul className="flex list-none p-0 m-0">
            <li className="mx-4">
              <Link
                href="/"
                className="text-white hover:bg-gray-700 p-2 rounded"
              >
                Home
              </Link>
            </li>
            <li className="mx-4">
              <Link
                href="/following"
                className="text-white hover:bg-gray-700 p-2 rounded"
              >
                Following
              </Link>
            </li>
            <li className="mx-4">
              <Link
                href="/contact"
                className="text-white hover:bg-gray-700 p-2 rounded"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <footer></footer>
    </div>
  );
};

export default Layout;
