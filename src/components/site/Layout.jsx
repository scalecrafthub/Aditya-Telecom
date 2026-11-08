import { Outlet, useLocation } from "react-router-dom";
import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.35 });
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background">
      <motion.div
        style={{ scaleY }}
        className="fixed left-0 top-0 z-[60] hidden h-screen w-[2px] origin-top bg-primary/70 lg:block"
      />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}