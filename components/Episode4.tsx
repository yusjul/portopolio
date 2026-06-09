"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Modal from './ui/Modal';
import Card from './ui/Card';
import { ArrowUpRight } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  tag: string;
  desc: string;
  image: string;
  problem: string;
  solution: string;
  result: string;
  stack: string[];
}

interface Episode4Props {
  id?: string;
}

export const Episode4: React.FC<Episode4Props> = ({ id }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 'project-1',
      title: 'SENTINEL_CORE',
      tag: 'CYBER_SECURITY',
      desc: 'A decentralized security monitoring system designed for enterprise-level cloud infrastructures. Focused on real-time threat detection using heuristic analysis and neural patterns.',
      problem: 'Traditional security monitoring systems suffered from high alert latency and high false-positive rates, making it difficult for cyber security teams to respond to network anomalies in real-time.',
      solution: 'Designed a distributed security event parser that processes raw networking packets at the edge and evaluates system behaviors against neural threat patterns using Rust.',
      result: 'Reduced average alert latency from 3.2 minutes to under 500 milliseconds and lowered false-positive alerts by 74%.',
      stack: ['Python', 'Rust', 'Redis', 'Docker'],
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070'
    },
    {
      id: 'project-2',
      title: 'NEURAL_BRIDGE',
      tag: 'SYSTEM_ARCHITECTURE',
      desc: 'An experimental middleware layer facilitating high-speed data translation between legacy mainframes and modern GraphQL endpoints. Built for extreme throughput.',
      problem: 'Enterprise mainframe databases processed messages in synchronous batches, blocking modern frontends and resulting in high operational latency.',
      solution: 'Developed a streaming reverse proxy that pools sockets and translates raw mainframe data streams into typed JSON objects in real-time.',
      stack: ['Java', 'Node.js', 'Go', 'Kubernetes'],
      result: 'Achieved sub-millisecond mapping latency and successfully managed peak flows of 85,000 transactions per second.',
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=2070'
    },
    {
      id: 'project-3',
      title: 'STRATOS_SYNC',
      tag: 'CLOUD_INFRA',
      desc: 'A global asset synchronization platform utilizing edge computing to deliver localized content at lightning speeds. Optimized for heavy media and real-time interactive streams.',
      problem: 'Heavy binary payloads suffered packages dropouts and routing delays across multiple cloud availability zones.',
      solution: 'Created an intelligent synchronizer deployed on AWS edge worker nodes that dynamically buffers and coordinates files transfers using C++ protocols.',
      stack: ['AWS', 'C++', 'PHP 8.2', 'React'],
      result: 'Stabilized frame rates for dynamic streaming media, obtaining a 99.98% successful packet transmission rate globally.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072'
    }
  ];

  return (
    <section id={id} className="snap-section flex items-center px-safe-margin bg-surface-container-low">
      <div className="w-full max-w-7xl mx-auto space-y-12">
        <div className="flex justify-between items-end">
          <div className="space-y-4">
            <span className="font-label-mono text-xs text-primary-fixed-dim uppercase tracking-wider block">
              Episode 04 // Creations
            </span>
            <h2 className="text-headline-lg text-on-surface">Project Showcase</h2>
          </div>
          <span className="font-label-mono text-xs text-outline hidden md:block select-none">
            TOTAL_ITEMS: 03
          </span>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              key={project.id}
            >
              <Card 
                onClick={() => setSelectedProject(project)}
                className="p-0 border border-outline-variant/10 aspect-video md:aspect-[4/3] group relative"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-50"
                  src={project.image}
                  alt={project.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-dim via-surface-dim/40 to-transparent" />
                
                <div className="absolute bottom-0 left-0 p-6 w-full flex justify-between items-end z-10">
                  <div className="space-y-1">
                    <span className="font-label-mono text-[9px] text-primary-fixed-dim tracking-wider block">
                      {project.tag}
                    </span>
                    <h3 className="text-headline-md font-bold tracking-wide text-on-surface">
                      {project.title}
                    </h3>
                  </div>
                  <div className="w-8 h-8 rounded border border-primary-fixed-dim/20 bg-surface-container-lowest/80 flex items-center justify-center text-primary-fixed-dim group-hover:bg-primary-container group-hover:text-on-primary transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title || ''}
        subtitle={selectedProject?.tag || ''}
        image={selectedProject?.image || ''}
        techStack={selectedProject?.stack || []}
      >
        {selectedProject && (
          <div className="space-y-6">
            <p className="text-body-lg text-on-surface-variant font-sans italic border-l-2 border-primary-fixed-dim pl-4 py-1">
              {selectedProject.desc}
            </p>
            <div className="grid md:grid-cols-3 gap-6 pt-4">
              <div className="md:col-span-2 space-y-4">
                <div>
                  <h4 className="font-label-mono text-[10px] text-primary-fixed-dim tracking-widest uppercase mb-1">
                    THE_CHALLENGE
                  </h4>
                  <p className="text-body-md text-on-surface-variant font-sans">
                    {selectedProject.problem}
                  </p>
                </div>
                <div>
                  <h4 className="font-label-mono text-[10px] text-primary-fixed-dim tracking-widest uppercase mb-1">
                    THE_RESOLUTION
                  </h4>
                  <p className="text-body-md text-on-surface-variant font-sans">
                    {selectedProject.solution}
                  </p>
                </div>
              </div>
              
              <div className="bg-surface-container-low/40 border border-outline-variant/20 p-6 rounded space-y-3 flex flex-col justify-center">
                <h4 className="font-label-mono text-[10px] text-outline tracking-widest uppercase">
                  METRIC_DELIVERED
                </h4>
                <p className="font-label-mono text-[13px] text-primary-fixed-dim font-bold leading-relaxed">
                  {selectedProject.result}
                </p>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Episode4;
