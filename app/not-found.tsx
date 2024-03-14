import { NotFoundIllustration } from "@/public/Illustrations/illustrations";
import Image from "next/image";

export default function NotFound() {
  return (
    <main className="w-full h-full">
      <div className="w-[400px] h-[400px]">
        <NotFoundIllustration foreground="" background="" accent="" />
      </div>
    </main>
  );
}
