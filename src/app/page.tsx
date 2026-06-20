import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompass, faShapes, faArrowsTurnRight } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <main className="min-h-screen bg-blossom-cream dark:bg-blossom-cream flex flex-col items-center justify-center p-6">
      <div className="max-w-3xl w-full space-y-12 animate-[slideUp_0.6s_ease-out]">
        <div className="text-center space-y-4">
          <h1 className="text-5xl md:text-7xl font-nunito font-black text-blossom-ink">
            Year 4 Geometry
          </h1>
          <p className="text-xl font-dm-sans text-blossom-charcoal">
            Year 4 Geometry Lessons
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/lessons/angles-and-turns" className="bg-blossom-cloud dark:bg-blossom-cloud p-8 rounded-3xl shadow-blossom hover:scale-105 transition-transform duration-300 flex flex-col items-center text-center gap-4 group">
            <div className="w-16 h-16 rounded-full bg-blossom-bloom text-white flex items-center justify-center text-2xl shadow-sm group-hover:rotate-12 transition-transform">
              <FontAwesomeIcon icon={faArrowsTurnRight} />
            </div>
            <h2 className="font-nunito font-bold text-xl text-blossom-ink">Angles & Turns</h2>
          </Link>

          <Link href="/lessons/2d-shapes" className="bg-blossom-cloud dark:bg-blossom-cloud p-8 rounded-3xl shadow-blossom hover:scale-105 transition-transform duration-300 flex flex-col items-center text-center gap-4 group">
            <div className="w-16 h-16 rounded-full bg-blossom-sky text-white flex items-center justify-center text-2xl shadow-sm group-hover:scale-110 transition-transform">
              <FontAwesomeIcon icon={faShapes} />
            </div>
            <h2 className="font-nunito font-bold text-xl text-blossom-ink">2D Shapes</h2>
          </Link>

          <Link href="/lessons/position-and-direction" className="bg-blossom-cloud dark:bg-blossom-cloud p-8 rounded-3xl shadow-blossom hover:scale-105 transition-transform duration-300 flex flex-col items-center text-center gap-4 group">
            <div className="w-16 h-16 rounded-full bg-blossom-leaf text-white flex items-center justify-center text-2xl shadow-sm group-hover:-translate-y-2 transition-transform">
              <FontAwesomeIcon icon={faCompass} />
            </div>
            <h2 className="font-nunito font-bold text-xl text-blossom-ink">Position & Direction</h2>
          </Link>
        </div>
      </div>
    </main>
  );
}
