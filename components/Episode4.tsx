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
      tag: 'EKSPLORASI_DATA_OLAHRAGA',
      desc: 'Karya dedikasi untuk merangkum riuh rendah antusiasme sepak bola dunia. Melalui platform ini, saya belajar mengalirkan semangat jutaan manusia di berbagai penjuru bumi ke dalam satu genggaman layar.',
      problem: 'Menampilkan data jadwal, klasemen, dan statistik turnamen akbar secara real-time dengan latensi rendah tanpa membuat pengguna kebingungan.',
      solution: 'Mengintegrasikan API data olahraga dengan caching agresif di sisi server untuk menyajikan pembaruan skor instan.',
      result: 'Mampu menyajikan statistik pertandingan dalam hitungan milidetik secara lancar tanpa hambatan.',
      stack: ['React', 'Next.js', 'Tailwind', 'REST API'],
      image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&q=80&w=1000',
      githubUrl: 'https://github.com/yusjul/Worlcup'
    },
    {
      id: 'project-2',
      title: 'laundry-app',
      tag: 'MANAJEMEN_USAHA_LOKAL',
      desc: 'Proyek yang mengajarkan saya bahwa teknologi terbaik adalah teknologi yang menyentuh urusan nyata manusia sehari-hari. Dibuat khusus untuk menyederhanakan dan merapikan manajemen operasional laundry.',
      problem: 'Usaha laundry kecil sering kali kesulitan melacak status cucian pelanggan secara akurat, menyebabkan risiko kehilangan pakaian atau keterlambatan pelayanan.',
      solution: 'Merancang database pelacak pesanan sederhana namun komprehensif, terhubung dengan notifikasi otomatis ke pelanggan.',
      result: 'Meminimalkan kesalahan pencatatan status cucian hingga 99% dan meningkatkan kepercayaan pelanggan usaha lokal.',
      stack: ['JavaScript', 'HTML5', 'CSS3', 'Node.js'],
      image: '/thumbnails/laundry-app.png',
      githubUrl: 'https://github.com/yusjul/laundry-app',
      demoUrl: 'https://laundry-app-lemon.vercel.app'
    },
    {
      id: 'project-3',
      title: 'ToolSuf',
      tag: 'UTILITAS_PENGEMBANG',
      desc: 'Kumpulan perkakas kecil yang lahir dari kebutuhan harian saya. Bukti bahwa efisiensi sejati sering kali dimulai dari alat-alat sederhana yang kita buat secara mandiri untuk mempermudah hidup kita sendiri.',
      problem: 'Tugas pemrosesan string dan data berulang-ulang membuang banyak waktu produktif setiap hari.',
      solution: 'Membangun pustaka fungsi utilitas serbaguna yang dikemas secara rapi agar mudah dipanggil kapan saja.',
      result: 'Mempercepat alur kerja coding harian saya hingga 40% dan merapikan pola penulisan kode berulang.',
      stack: ['TypeScript', 'Node.js', 'ES6'],
      image: '/thumbnails/toolsuf.png',
      githubUrl: 'https://github.com/yusjul/ToolSuf',
      demoUrl: 'https://tool-suf.vercel.app'
    },
    {
      id: 'project-4',
      title: 'LabsYusJuL-futurestack',
      tag: 'EKSPERIMEN_ARSITEKTUR',
      desc: 'Kamar eksperimen tempat saya menguji batas-batas arsitektur web modern. Di sini, saya menantang diri untuk menguji kombinasi stack terbaru, belajar dari kegagalan untuk merumuskan masa depan pengembangan web.',
      problem: 'Mengintegrasikan berbagai framework baru dengan optimasi rendering yang maksimal sering kali menemui hambatan kecocokan library.',
      solution: 'Merancang kerangka boilerplate modular dengan konfigurasi bundling yang dioptimalkan untuk meminimalkan beban load awal halaman.',
      result: 'Berhasil meraih skor performa Lighthouse 100/100 pada struktur pengujian awal stack masa depan.',
      stack: ['Next.js', 'TypeScript', 'Tailwind v4', 'GraphQL'],
      image: '/thumbnails/futurestack.png',
      githubUrl: 'https://github.com/yusjul/LabsYusJuL-futurestack',
      demoUrl: 'https://labs-yus-ju-l-futurestack.vercel.app'
    },
    {
      id: 'project-5',
      title: 'suaraku-offline',
      tag: 'PRIVASI_PEMROSESAN_SUARA',
      desc: 'Karya ini lahir dari kepedulian saya terhadap privasi data suara kita. Memungkinkan perekaman dan analisis gelombang suara secara luring (offline) tanpa membutuhkan koneksi internet, menjaga agar suara kita tetap menjadi milik kita seutuhnya.',
      problem: 'Sebagian besar alat pemroses suara modern bergantung pada server cloud, yang memicu keraguan terkait keamanan data pribadi pengguna.',
      solution: 'Mengembangkan parser audio berbasis web local API yang mengevaluasi gelombang suara secara langsung di browser pengguna.',
      result: 'Menjamin kerahasiaan data suara 100% luring dengan waktu proses instan tanpa latensi jaringan.',
      stack: ['JavaScript', 'Web Audio API', 'HTML5', 'CSS3'],
      image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&q=80&w=1000',
      githubUrl: 'https://github.com/yusjul/suaraku-offline'
    },
    {
      id: 'project-6',
      title: 'portopolio',
      tag: 'KRONIK_DIGITAL_INTERAKTIF',
      desc: 'Ruang refleksi digital ini. Sebuah catatan interaktif yang tidak sekadar menceritakan keahlian saya, tetapi juga merekam perjalanan jiwa saya di dunia baris-baris logika.',
      problem: 'Membuat situs portofolio yang tidak biasa—yang mampu menyentuh sisi emosional pembacanya sekaligus menampilkan performa visual shader WebGL yang mutakhir.',
      solution: 'Memadukan WebGL background shader, Framer Motion, dan struktur layout Next.js dengan narasi sastra bahasa Indonesia.',
      result: 'Menciptakan pengalaman bercerita yang sinematik dengan visual halus dan performa rendering 60 FPS.',
      stack: ['Next.js', 'Framer Motion', 'WebGL', 'Tailwind CSS'],
      image: '/thumbnails/portopolio.png',
      githubUrl: 'https://github.com/yusjul/portopolio'
    },
    {
      id: 'project-7',
      title: 'Manis-diawal',
      tag: 'FILOSOFI_INTERAKTIF',
      desc: 'Sebuah karya penuh filosofi tentang janji manis di awal. Melalui eksplorasi ini, saya menuangkan sudut pandang sarkasme dan humor yang jujur ke dalam interaksi digital, mengingatkan kita bahwa janji awal sering kali berbeda di akhir.',
      problem: 'Menerjemahkan ide abstrak tentang dinamika hubungan dan harapan manusia menjadi interaksi digital yang menarik secara psikologis.',
      solution: 'Membangun alur cerita bercabang (interactive branching narrative) dengan antarmuka gelap-neon yang merespons pilihan pengguna.',
      result: 'Memicu kontemplasi mendalam sekaligus menghibur pengguna melalui perjalanan cerita yang satir namun jujur.',
      stack: ['JavaScript', 'Framer Motion', 'HTML5', 'CSS3'],
      image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=1000',
      githubUrl: 'https://github.com/yusjul/Manis-diawal'
    },
    {
      id: 'project-8',
      title: 'AutoSort-Downloads',
      tag: 'MANAJEMEN_SISTEM_OTOMATIS',
      desc: 'Sebuah program yang bekerja dalam keheningan latar belakang untuk merapikan kekacauan folder unduhan saya secara otomatis. Bukti bahwa ketertiban eksternal mampu membawa ketenangan dalam pikiran kita saat bekerja.',
      problem: 'Folder Downloads yang menumpuk tak beraturan memperlambat pencarian file dan membuat desktop terasa penuh tekanan visual.',
      solution: 'Membuat skrip pengawas direktori yang mengelompokkan file berdasarkan ekstensi dan waktu unduh secara real-time.',
      result: 'Folder unduhan senantiasa rapi setiap waktu, menghemat waktu pencarian dokumen hingga ratusan menit setiap bulannya.',
      stack: ['Python', 'Automation', 'OS Scripting'],
      image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&q=80&w=1000',
      githubUrl: 'https://github.com/yusjul/AutoSort-Downloads'
    },
    {
      id: 'project-9',
      title: 'Domino-AI-Anlyzer',
      tag: 'PROBABILITAS_KECERDASAN_BUATAN',
      desc: 'Eksplorasi kecerdasan buatan untuk membaca peluang dalam permainan domino. Jembatan antara teori probabilitas matematika dengan keputusan taktis dalam hitungan detik.',
      problem: 'Menganalisis pergerakan kartu domino lawan secara dinamis untuk memprediksi probabilitas kemenangan di setiap putaran permainan.',
      solution: 'Mengembangkan algoritma analisis probabilitas statistik berbasis pergerakan kartu keluar yang dipadukan dengan pemodelan AI sederhana.',
      result: 'Mampu memberikan rekomendasi langkah taktis secara cepat guna meningkatkan persentase kemenangan taktis.',
      stack: ['Python', 'AI Model', 'Statistical Analytics'],
      image: 'https://images.unsplash.com/photo-1611195974226-a6a9be9dd763?auto=format&fit=crop&q=80&w=1000',
      githubUrl: 'https://github.com/yusjul/Domino-AI-Anlyzer'
    }
  ];

  return (
    <section id={id} className="snap-section flex items-center px-safe-margin bg-transparent overflow-y-auto py-20 md:py-24">
      <div className="w-full max-w-7xl mx-auto space-y-12">
        <div className="flex justify-between items-end">
          <div className="space-y-4">
            <div className="glass-panel px-3 py-1.5 w-fit text-[10px] tracking-[0.2em] font-label-mono font-bold uppercase text-primary-fixed-dim rounded-full border border-primary-fixed-dim/15 bg-white/[0.02] shadow-[0_0_15px_rgba(0,242,255,0.05)] mb-3">
              Episode 04 // Karya
            </div>
            <h2 className="text-headline-lg bg-gradient-to-r from-white to-on-surface-variant bg-clip-text text-transparent font-extrabold tracking-tight">Jejak Penciptaan</h2>
          </div>
          <span className="font-label-mono text-xs text-outline hidden md:block select-none">
            TOTAL_KARYA: {String(projects.length).padStart(2, '0')}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-4 md:gap-6">
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
                
                <div className="absolute bottom-0 left-0 p-4 md:p-6 w-full flex justify-between items-end z-10">
                  <div className="space-y-0.5 md:space-y-1">
                    <span className="font-label-mono text-[9px] text-primary-fixed-dim tracking-wider block">
                      {project.tag}
                    </span>
                    <h3 className="text-sm md:text-headline-md font-bold tracking-wide text-on-surface line-clamp-1">
                      {project.title}
                    </h3>
                  </div>
                  <div className="hidden md:flex w-8 h-8 rounded border border-primary-fixed-dim/20 bg-surface-container-lowest/80 items-center justify-center text-primary-fixed-dim group-hover:bg-primary-container group-hover:text-on-primary transition-all duration-300">
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
                    TANTANGAN
                  </h4>
                  <p className="text-body-md text-on-surface-variant font-sans">
                    {selectedProject.problem}
                  </p>
                </div>
                <div>
                  <h4 className="font-label-mono text-[10px] text-primary-fixed-dim tracking-widest uppercase mb-1">
                    SOLUSI
                  </h4>
                  <p className="text-body-md text-on-surface-variant font-sans">
                    {selectedProject.solution}
                  </p>
                </div>
              </div>
              
              <div className="bg-surface-container-low/40 border border-outline-variant/20 p-6 rounded space-y-3 flex flex-col justify-center">
                <h4 className="font-label-mono text-[10px] text-outline tracking-widest uppercase">
                  HASIL_YANG_TERCAPAI
                </h4>
                <p className="font-label-mono text-[13px] text-primary-fixed-dim font-bold leading-relaxed">
                  {selectedProject.result}
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-outline-variant/10 flex flex-wrap gap-4 justify-start">
              {selectedProject.demoUrl && (
                <a
                  href={selectedProject.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 font-label-mono text-xs uppercase tracking-wider transition-all duration-300 rounded-full bg-gradient-to-r from-[#00b4d8] to-[#00f2ff] text-black font-extrabold hover:shadow-[0_0_30px_rgba(0,242,255,0.4)] border border-[#00f2ff]/30 flex items-center gap-2 cursor-pointer"
                >
                  Buka Demo Live
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              )}
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 font-label-mono text-xs uppercase tracking-wider transition-all duration-300 rounded-full border border-primary-fixed-dim/30 text-primary-fixed-dim bg-white/5 hover:bg-primary-fixed-dim/10 hover:border-primary-fixed-dim hover:shadow-[0_0_20px_rgba(0,242,255,0.15)] flex items-center gap-2 cursor-pointer"
              >
                Kunjungi Repositori
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Episode4;
