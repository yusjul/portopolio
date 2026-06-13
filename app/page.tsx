"use client";

import React, { useState, useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import StoryProgressBar from '@/components/StoryProgressBar';
import BackgroundShader from '@/components/BackgroundShader';
import HeroSection from '@/components/HeroSection';
import Episode1 from '@/components/Episode1';
import Episode2 from '@/components/Episode2';
import Episode3 from '@/components/Episode3';
import Episode4 from '@/components/Episode4';
import Episode5 from '@/components/Episode5';
import Episode6 from '@/components/Episode6';
import Episode7 from '@/components/Episode7';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  const [currentEpisode, setCurrentEpisode] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [hovered, setHovered] = useState(false);

  const totalEpisodes = 9;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const handleMouseEnter = () => setHovered(true);
    const handleMouseLeave = () => setHovered(false);

    const refreshHoverListeners = () => {
      const targets = document.querySelectorAll('button, a, [role="button"], .glass-panel, input, textarea');
      targets.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
      });
    };

    refreshHoverListeners();

    // Re-bind hover selectors periodically as sub-elements/modals mount dynamically
    const interval = setInterval(refreshHoverListeners, 1000);
    return () => {
      clearInterval(interval);
      const targets = document.querySelectorAll('button, a, [role="button"], .glass-panel, input, textarea');
      targets.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [currentEpisode]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const sections = container.querySelectorAll('section');
    const observerOptions = {
      root: typeof window !== 'undefined' && window.innerWidth > 768 ? container : null,
      threshold: 0.4,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const idStr = entry.target.id;
          const index = parseInt(idStr.replace('episode-', ''), 10);
          if (!isNaN(index)) {
            setCurrentEpisode(index);
          }
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const handleScrollToEpisode = (index: number) => {
    const section = document.getElementById(`episode-${index}`);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="relative min-h-screen bg-background text-on-background overflow-hidden">
      <BackgroundShader />

      <div
        className="hidden lg:block custom-cursor pointer-events-none"
        style={{
          left: mousePos.x,
          top: mousePos.y,
          transform: `translate(-50%, -50%) scale(${hovered ? 2.2 : 1})`,
        }}
      />

      <Navbar onScrollToEpisode={handleScrollToEpisode} currentEpisode={currentEpisode} />

      <StoryProgressBar
        currentEpisode={currentEpisode}
        totalEpisodes={totalEpisodes}
        onScrollToEpisode={handleScrollToEpisode}
      />

      <div ref={containerRef} className="snap-container relative z-10 w-full">
        <HeroSection id="episode-0" onStart={() => handleScrollToEpisode(1)} />
        <Episode1 id="episode-1" />
        <Episode2 id="episode-2" />
        <Episode3 id="episode-3" />
        <Episode4 id="episode-4" />
        <Episode5 id="episode-5" />
        <Episode6 id="episode-6" />
        <Episode7 id="episode-7" />
        <ContactSection id="episode-8" onRestart={() => handleScrollToEpisode(0)} />
      </div>
    </main>
  );
}
