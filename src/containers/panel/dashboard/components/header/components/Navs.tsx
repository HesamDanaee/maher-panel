import data from "@/public/data.json";
import Typography from "@/src/components/common/Typography";
import Link from "next/link";

export default function Navs() {
  const {
    panel: {
      header: { navbar },
    },
  } = data;

  return (
    <nav>
      <ul className="flex items-center gap-x-6">
        {navbar.map(({ href, text }) => (
          <Link href={href}>
            <li>
              <Typography
                variant="p"
                className="hover:cursor-pointer text-primary hover:text-foreground font-[300]"
              >
                {text}
              </Typography>
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
}
