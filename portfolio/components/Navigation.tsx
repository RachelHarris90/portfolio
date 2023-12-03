import { usePathname } from "next/navigation";
import Link from "next/link";

export const Navigation = () => {
  const pathname = usePathname();
  <nav>
    <ul>
      <li>
        <Link className={`link ${pathname === "/" ? "active" : ""}`} href="/">
          Home
        </Link>
      </li>
      <li>
        <Link
          className={`link ${pathname === "/about" ? "active" : ""}`}
          href="/about"
        >
          Projects
        </Link>
      </li>
    </ul>
  </nav>;
};
