
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faCertificate,
  faBookOpen,
  faUsers,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import Me4 from "@/public/image/Rifqi8.png";
import Me5 from "@/public/image/Rifqi9.png";
import Me6 from "@/public/image/Rifqi10.png";

function Wrapper({ children }) {
  return (
    <div className="mx-auto container gap-10 p-10 grid grid-cols-1 my-10">
      <motion.div
        className="flex justify-center items-start flex-col mb-5"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          type: "spring",
          stiffness: 100,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}

const highlights = [
  {
    group: "2026",
    icon: faBookOpen,
    title: "Tugas Akhir – COBIT 2019",
    subtitle:
      "RSUD Dr. Kanujoso Djatiwibowo Balikpapan",
    date: "2026",
    color: "from-blue-500 to-cyan-500",
  },
  {
    group: "2024",
    icon: faCertificate,
    title: "MikroTik Certified Network Associate",
    subtitle: "MTCNA",
    date: "2024",
    color: "from-emerald-500 to-teal-500",
  },
  {
    group: "2024",
    icon: faCertificate,
    title: "MikroTik Certified Routing Engineer",
    subtitle: "MTCRE",
    date: "2024",
    color: "from-orange-500 to-amber-500",
  },
  {
    group: "Organisasi",
    icon: faUsers,
    title: "Himpunan Mahasiswa Sistem Informasi",
    subtitle: "Staf Magang → Staf → Staf Ahli",
    date: "Pengalaman organisasi",
    color: "from-violet-500 to-fuchsia-500",
  },
];

export default function Education() {
  const [isExpanded, setIsExpanded] = useState(false);

  const visibleHighlights = isExpanded
    ? highlights
    : highlights.slice(0, 3);

  const hasMoreHighlights = highlights.length > 3;

  return (
    <Wrapper>
      <section className="grid gap-8 md:gap-12">

        {/* Header */}
        <motion.div
          className="text-center space-y-2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold tracking-tighter">
            Education
          </h1>

          <p className="text-muted-foreground max-w-[800px] mx-auto">
            Latar belakang pendidikan dan pengembangan kompetensi.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Education - Left */}
          <motion.div
            className="px-5"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="font-medium text-lg mb-4">
              2021 – 2026
            </div>

            <div>
              <h2 className="font-semibold text-xl">
                Institut Teknologi Kalimantan
              </h2>

              <h3 className="text-md font-normal mb-3">
                S1 Sistem Informasi
              </h3>

              {/* Photo Gallery */}
              <div className="gap-4 mb-4 flex items-stretch md:h-[300px] xl:h-[400px]">

                <div className="flex-[1] transition-all duration-300 ease-in-out hover:flex-[3] group">
                  <Image
                    src={Me5}
                    width={400}
                    height={225}
                    alt="Dokumentasi pendidikan"
                    className="rounded-lg w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>

                <div className="flex-[1] transition-all duration-300 ease-in-out hover:flex-[3] group">
                  <Image
                    src={Me4}
                    width={400}
                    height={225}
                    alt="Dokumentasi kegiatan akademik"
                    className="rounded-lg w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>

                <div className="flex-[1] transition-all duration-300 ease-in-out hover:flex-[3] group">
                  <Image
                    src={Me6}
                    width={400}
                    height={225}
                    alt="Dokumentasi kelulusan"
                    className="rounded-lg w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>

              </div>

              {/* Description */}
              <div>
                <p className="text-gray-600 text-justify leading-relaxed text-base">

                  Lulusan{" "}
                  <span className="text-black font-medium">
                    S1 Sistem Informasi
                  </span>{" "}
                  dari{" "}
                  <span className="text-black font-medium">
                    Institut Teknologi Kalimantan
                  </span>
                  , dengan minat pada dukungan TI, jaringan komputer,
                  analisis sistem, dan tata kelola teknologi informasi.

                  <br />
                  <br />

                  Tugas akhir berfokus pada penyusunan tata kelola dan
                  manajemen teknologi informasi menggunakan{" "}
                  <span className="text-black font-medium">
                    COBIT 2019
                  </span>{" "}
                  pada RSUD Dr. Kanujoso Djatiwibowo Balikpapan,
                  khususnya proses{" "}
                  <span className="text-black font-medium">
                    BAI06 – Managed IT Changes
                  </span>
                  .

                  <br />
                  <br />

                  Di luar kegiatan akademik, pengembangan kompetensi
                  juga dilakukan melalui sertifikasi profesional dan
                  keterlibatan dalam organisasi mahasiswa.

                </p>
              </div>

              {/* Academic Information */}
              <div className="flex flex-wrap gap-2 mt-4 text-sm">

                <div className="bg-gray-300 text-black px-3 py-1 rounded-2xl">
                  IPK: 3,53 / 4,00
                </div>

                <div className="bg-gray-300 text-black px-3 py-1 rounded-2xl">
                  Lulus 2026
                </div>

              </div>
            </div>
          </motion.div>

          {/* Highlights - Right */}
          <motion.div
            className="flex flex-col justify-start px-5 md:px-0"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >

            <h2 className="font-semibold text-xl mt-7">
              Fokus Akademik & Sertifikasi
            </h2>

            <p className="text-md font-normal mb-3 md:mb-6">
              Kompetensi, sertifikasi, dan aktivitas organisasi.
            </p>

            <div className="relative">
              <div className="space-y-4">

                <AnimatePresence>
                  {visibleHighlights.map((item, index) => (

                    <motion.div
                      key={`${item.group}-${item.title}`}
                      className="group"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.05,
                      }}
                    >

                      {/* Group Label */}
                      {index === 0 ||
                      visibleHighlights[index - 1]?.group !== item.group ? (
                        <div className="flex items-center gap-3 mb-3 mt-2">
                          <span className="text-xs font-bold text-gray-600">
                            {item.group}
                          </span>

                          <div className="flex-1 h-px bg-gradient-to-r from-gray-300 to-transparent" />
                        </div>
                      ) : null}

                      {/* Card */}
                      <div className="bg-transparent border border-transparent rounded-2xl p-4 shadow-none transition-all duration-300 hover:bg-white/30 hover:border-white/30 hover:shadow-xl">

                        <div className="flex items-center gap-4">

                          <div
                            className={`aspect-square w-10 rounded-full bg-transparent group-hover:bg-gradient-to-r ${item.color} flex items-center justify-center transition-all duration-300`}
                               >
                             <FontAwesomeIcon
                           icon={item.icon}
     						className="text-gray-500 group-hover:text-white h-5 w-5 transition-colors duration-300"
 							 />
							</div>

                          <div>
                            <h3 className="font-medium text-black">
                              {item.title}
                            </h3>

                            <p className="text-sm text-gray-700">
                              {item.subtitle}
                            </p>

                            <div className="text-xs text-gray-500 mt-1">
                              {item.date}
                            </div>
                          </div>

                        </div>
                      </div>

                    </motion.div>
                  ))}
                </AnimatePresence>

              </div>

              {/* Show More / Less */}
              {hasMoreHighlights && (
                <motion.div
                  className="flex justify-center mt-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="flex items-center gap-2 px-6 py-3 bg-white/30 backdrop-blur-md border border-white/40 rounded-full hover:bg-white/40 transition-all duration-300 text-sm font-medium shadow-lg hover:shadow-xl"
                  >
                    <span>
                      {isExpanded
                        ? "Tampilkan lebih sedikit"
                        : `Tampilkan ${highlights.length - 3} lainnya`}
                    </span>

                    <FontAwesomeIcon
                      icon={
                        isExpanded
                          ? faChevronUp
                          : faChevronDown
                      }
                      className="h-3 w-3 transition-transform duration-300"
                    />
                  </button>
                </motion.div>
              )}

            </div>
          </motion.div>

        </div>
      </section>
    </Wrapper>
  );
}
