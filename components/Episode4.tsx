"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Modal from './ui/Modal';
import Card from './ui/Card';
import { ArrowUpRight } from 'lucide-react';

function sanitizeUrl(url: string | undefined): string | undefined {
  if (!url) return undefined;
  try {
    const parsed = new URL(url);
    if (parsed.protocol === 'https:' || parsed.protocol === 'http:') {
      return url;
    }
    return undefined;
  } catch {
    return undefined;
  }
}

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
  githubUrl: string;
  demoUrl?: string;
}

interface Episode4Props {
  id?: string;
}

export const Episode4: React.FC<Episode4Props> = ({ id }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 'project-1',
      title: 'Worlcup',
      tag: 'Data Analytics',
      desc: 'Platform pemantauan turnamen sepak bola dengan data jadwal, klasemen, dan statistik langsung.',
      problem: 'Menampilkan data jadwal dan statistik turnamen secara real-time dengan latensi rendah.',
      solution: 'Integrasi API data olahraga dengan mekanisme caching server-side yang efisien.',
      result: 'Penyajian statistik pertandingan instan dan responsif.',
      stack: ['React', 'Next.js', 'Tailwind CSS', 'REST API'],
      image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&q=80&w=1000',
      githubUrl: 'https://github.com/yusjul/Worlcup'
    },
    {
      id: 'project-2',
      title: 'laundry-app',
      tag: 'Web Application',
      desc: 'Aplikasi pengelolaan alur kerja operasional dan pelacakan status pesanan laundry berbasis web.',
      problem: 'Pencatatan manual pesanan laundry rawan kesalahan status pengerjaan dan penagihan.',
      solution: 'Sistem pencatatan pesanan terpusat dengan dasbor status cucian yang mudah dipantau.',
      result: 'Mengurangi kekeliruan pencatatan dan mempermudah operasional harian.',
      stack: ['JavaScript', 'HTML5', 'CSS3', 'Node.js'],
      image: '/thumbnails/laundry-app.png',
      githubUrl: 'https://github.com/yusjul/laundry-app',
      demoUrl: 'https://laundry-app-lemon.vercel.app'
    },
    {
      id: 'project-3',
      title: 'ToolSuf',
      tag: 'Developer Tools',
      desc: 'Kumpulan utilitas online praktis untuk manipulasi dokumen, konversi format, dan produktivitas harian.',
      problem: 'Alat bantu online yang ada sering kali berat, dipenuhi iklan berlebih, atau kurang praktis.',
      solution: 'Membangun modul tools mandiri yang ringan, modular, dan berjalan langsung di sisi klien.',
      result: 'Perangkat utilitas cepat dengan waktu muat minimal tanpa ketergantungan server berat.',
      stack: ['TypeScript', 'JavaScript', 'Tailwind CSS'],
      image: '/thumbnails/toolsuf.png',
      githubUrl: 'https://github.com/yusjul/ToolSuf',
      demoUrl: 'https://tool-suf.vercel.app'
    },
    {
      id: 'project-4',
      title: 'LabsYusJuL-futurestack',
      tag: 'Architecture Experiment',
      desc: 'Eksperimen arsitektur web modern menguji integrasi Next.js, TypeScript, dan optimasi performa tinggi.',
      problem: 'Memastikan performa optimal dan modularitas kode pada aplikasi berbasis Next.js App Router.',
      solution: 'Perancangan arsitektur modular dengan struktur layout terisolasi dan bundling optimal.',
      result: 'Skor Lighthouse tinggi dan waktu interaksi awal yang sangat cepat.',
      stack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      image: '/thumbnails/futurestack.png',
      githubUrl: 'https://github.com/yusjul/LabsYusJuL-futurestack',
      demoUrl: 'https://labs-yus-ju-l-futurestack.vercel.app'
    },
    {
      id: 'project-5',
      title: 'suaraku-offline',
      tag: 'Audio Processing',
      desc: 'Perekam dan visualisator gelombang suara berbasis web yang berjalan 100% luring untuk privasi pengguna.',
      problem: 'Banyak web audio tools mengirim rekaman suara ke cloud tanpa transparansi.',
      solution: 'Memanfaatkan Web Audio API peramban untuk pemrosesan audio lokal tanpa koneksi luar.',
      result: 'Privasi data suara terlindungi penuh tanpa latensi pengiriman jaringan.',
      stack: ['JavaScript', 'Web Audio API', 'HTML5', 'CSS3'],
      image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&q=80&w=1000',
      githubUrl: 'https://github.com/yusjul/suaraku-offline'
    },
    {
      id: 'project-6',
      title: 'portopolio',
      tag: 'Creative Web',
      desc: 'Website portofolio interaktif dengan WebGL background shader dan micro-interaction berbasis cerita.',
      problem: 'Menyajikan identitas diri yang kuat secara visual tanpa mengorbankan performa halaman.',
      solution: 'Kombinasi shader fragment GLSL, Framer Motion, dan sistem desain gelap berkarakter.',
      result: 'Tampilan visual dinamis dengan frame rate 60 FPS dan navigasi yang terstruktur.',
      stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'WebGL'],
      image: '/thumbnails/portopolio.png',
      githubUrl: 'https://github.com/yusjul/portopolio'
    },
    {
      id: 'project-7',
      title: 'Manis-diawal',
      tag: 'Interactive Web',
      desc: 'Eksplorasi web interaktif berbasis narasi cabang dengan antarmuka tematik gelap kontras.',
      problem: 'Membangun interaksi web naratif yang responsif terhadap input pilihan pengguna.',
      solution: 'Implementasi finite state machine sederhana untuk mengelola alur percabangan cerita.',
      result: 'Pengalaman interaktif yang dinamis dengan transisi visual yang halus.',
      stack: ['JavaScript', 'Framer Motion', 'HTML5', 'CSS3'],
      image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=1000',
      githubUrl: 'https://github.com/yusjul/Manis-diawal'
    },
    {
      id: 'project-8',
      title: 'AutoSort-Downloads',
      tag: 'System Automation',
      desc: 'Skrip otomatisasi berbasis sistem untuk mengorganisir berkas unduhan secara otomatis berdasarkan tipe.',
      problem: 'Folder unduhan yang berantakan memperlambat pencarian dokumen dan memakan kapasitas disk.',
      solution: 'Watcher direktori otomatis yang memindahkan berkas ke folder kategori yang sesuai.',
      result: 'Folder unduhan tetap rapi otomatis tanpa intervensi manual berkala.',
      stack: ['Python', 'OS Scripting', 'Automation'],
      image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&q=80&w=1000',
      githubUrl: 'https://github.com/yusjul/AutoSort-Downloads'
    },
    {
      id: 'project-9',
      title: 'Domino-AI-Anlyzer',
      tag: 'Data & Probability',
      desc: 'Eksperimen komputasi probabilitas dan kalkulasi langkah taktis dalam simulasi permainan domino.',
      problem: 'Memprediksi sebaran kartu sisa lawan secara statistik di setiap giliran putaran.',
      solution: 'Algoritma probabilitas probabilistik yang menghitung peluang kombinasi langkah optimal.',
      result: 'Rekomendasi keputusan langkah berdasarkan pergerakan kartu yang telah keluar.',
      stack: ['Python', 'Statistical Analysis', 'Algorithm'],
      image: 'https://images.unsplash.com/photo-1611195974226-a6a9be9dd763?auto=format&fit=crop&q=80&w=1000',
      githubUrl: 'https://github.com/yusjul/Domino-AI-Anlyzer'
    }
  ];

  return (
    <section id={id} className="snap-section flex items-center px-safe-margin bg-transparent overflow-y-auto py-20 md:py-24">
      <div className="w-full max-w-7xl mx-auto space-y-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4 max-w-xl"
          >
            <div className="font-label-mono text-[10px] tracking-[0.25em] text-outline uppercase">
              04 — Karya
            </div>
            <h2 className="text-headline-lg text-on-surface font-extrabold tracking-tight">
              Proyek terpilih
            </h2>
            <p className="text-body-lg text-on-surface-variant font-light leading-relaxed">
              Aplikasi, utilitas, dan eksperimen teknis yang dibangun untuk memecahkan masalah nyata.
            </p>
          </motion.div>
          <span className="font-label-mono text-xs text-outline tracking-wider self-start sm:self-auto">
            {String(projects.length).padStart(2, '0')} Proyek
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              key={project.id}
            >
              <Card 
                onClick={() => setSelectedProject(project)}
                className="p-0 border border-outline-variant/20 rounded-lg overflow-hidden aspect-[16/10] group relative cursor-pointer bg-surface-container-lowest"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-40 group-hover:opacity-60"
                  src={project.image}
                  alt={project.title}
                  onError={(e) => {
                    // Fallback to subtle dark gradient if image fails
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-dim via-surface-dim/60 to-transparent" />
                
                <div className="absolute bottom-0 left-0 p-5 w-full flex justify-between items-end z-10">
                  <div className="space-y-1.5 pr-3">
                    <span className="font-label-mono text-[10px] text-primary-fixed-dim tracking-wider block uppercase">
                      {project.tag}
                    </span>
                    <h3 className="text-base md:text-lg font-bold text-on-surface line-clamp-1">
                      {project.title}
                    </h3>
                    <p className="text-body-sm text-on-surface-variant/80 font-light line-clamp-1 hidden sm:block">
                      {project.desc}
                    </p>
                  </div>
                  <div className="flex-shrink-0 w-8 h-8 rounded border border-outline-variant/30 bg-surface-container-lowest/80 flex items-center justify-center text-outline group-hover:text-primary-fixed-dim group-hover:border-primary-fixed-dim/40 transition-colors">
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
            <p className="text-body-md text-on-surface-variant leading-relaxed">
              {selectedProject.desc}
            </p>
            <div className="grid md:grid-cols-3 gap-5 pt-2">
              <div className="md:col-span-2 space-y-4">
                <div className="space-y-1.5">
                  <h4 className="font-label-mono text-[10px] text-outline tracking-wider uppercase">
                    Masalah
                  </h4>
                  <p className="text-body-sm text-on-surface-variant/90 leading-relaxed">
                    {selectedProject.problem}
                  </p>
                </div>
                <div className="space-y-1.5">
                  <h4 className="font-label-mono text-[10px] text-outline tracking-wider uppercase">
                    Solusi
                  </h4>
                  <p className="text-body-sm text-on-surface-variant/90 leading-relaxed">
                    {selectedProject.solution}
                  </p>
                </div>
              </div>
              
              <div className="bg-surface-container-low/50 border border-outline-variant/20 p-4 rounded-lg space-y-2 flex flex-col justify-center">
                <h4 className="font-label-mono text-[10px] text-outline tracking-wider uppercase">
                  Hasil
                </h4>
                <p className="font-label-mono text-xs text-primary-fixed-dim font-medium leading-relaxed">
                  {selectedProject.result}
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-outline-variant/15 flex flex-wrap gap-3">
              {sanitizeUrl(selectedProject.demoUrl) && (
                <a
                  href={sanitizeUrl(selectedProject.demoUrl)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 font-label-mono text-xs font-semibold rounded-md bg-primary-fixed-dim text-black hover:bg-primary transition-colors flex items-center gap-2 cursor-pointer"
                >
                  Live Demo
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              )}
              {sanitizeUrl(selectedProject.githubUrl) && (
                <a
                  href={sanitizeUrl(selectedProject.githubUrl)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 font-label-mono text-xs font-semibold rounded-md border border-outline-variant/40 text-on-surface hover:border-primary-fixed-dim/50 hover:text-primary-fixed-dim transition-colors flex items-center gap-2 cursor-pointer"
                >
                  GitHub Repository
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Episode4;
