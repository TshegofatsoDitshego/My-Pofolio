/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar, Footer } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { ExperienceEducation } from "./components/ExperienceEducation";
import { Contact } from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen text-zinc-100 selection:bg-brand-500/30">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <ExperienceEducation />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
