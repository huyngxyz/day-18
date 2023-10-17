import { useEffect } from "react";
import Hero from "./components/Hero";
import Lenis from "@studio-freight/lenis";

export default function App() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main>
      <Hero />
    </main>
  );
}
