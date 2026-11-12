"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { CodepenIcon, WebhookIcon, ActivityIcon, MobileIcon } from "./icons"

const skillCategories = {
  support: {
    title: "Dukungan TI & Helpdesk",
    icon: MobileIcon,
    description: "Dukungan pengguna dan pemecahan masalah TI",
    skills: [
      { name: "IT Helpdesk", highlight: true },
	  { name: "User Access Management", highlight: false },
      { name: "Hardware Troubleshooting", highlight: true },
      { name: "Software Installation", highlight: false },
	  { name: "User Support", highlight: true },
      { name: "Peripheral Maintenance", highlight: false },
      { name: "Basic IT Security", highlight: false },
    ],
    tools: [
      "Windows OS",
      "Microsoft Office",
      "Antivirus",
      "Printer & Peripheral",
    ],
  },

  network: {
    title: "Dukungan Jaringan",
    icon: WebhookIcon,
    description: "Konfigurasi dan pemeliharaan infrastruktur jaringan",
    skills: [
      { name: "MikroTik RouterOS", highlight: true },
      { name: "Routing & Switching", highlight: true },
	   { name: "TCP/IP", highlight: false },
      { name: "IP Addressing & Subnetting", highlight: false },
      { name: "Network Troubleshooting", highlight: true },
      { name: "LAN / WAN", highlight: false },
      { name: "Wireless Networking", highlight: false },
    ],
    tools: [
      "MikroTik RouterOS",
      "WinBox",
      "MTCNA",
      "MTCRE",
    ],
  },

  systems: {
    title: "Analisis Sistem",
    icon: ActivityIcon,
    description: "Analisis kebutuhan dan dokumentasi sistem informasi",
    skills: [
      { name: "System Analysis", highlight: true },
      { name: "Business Process Analysis", highlight: false },
	  { name: "Requirements Gathering", highlight: true },
      { name: "Stakeholder Coordination", highlight: false },
	   { name: "System Documentation", highlight: true },
      { name: "Requirements Validation", highlight: false },
    ],
    tools: [
      "Microsoft Word",
      "Microsoft Excel",
      "System Documentation",
      "Process Analysis",
    ],
  },

  governance: {
    title: "Tata Kelola TI",
    icon: CodepenIcon,
    description: "Tata kelola TI dan manajemen perubahan sistem",
    skills: [
      { name: "COBIT 2019", highlight: true },
      { name: "BAI06 - Managed IT Changes", highlight: true },
      { name: "Change Management", highlight: true },
      { name: "Change Documentation", highlight: false },
      { name: "Impact Analysis", highlight: false },
      { name: "Change Plan & Schedule", highlight: false },
      { name: "Post-Implementation Review", highlight: false },
    ],
    tools: [
      "COBIT 2019",
      "Change Plan & Schedule",
      "Change Documentation",
      "Change Status Report",
    ],
  },
};

function SkillCard({ skill, isSelected, onClick }) {
	const Icon = skill.icon;

	return (
		<motion.div
			onClick={onClick}
			className={`relative cursor-pointer group p-6 rounded-2xl border transition-all duration-300 ${
				isSelected
    ? "bg-white border-blue-600 border-2 shadow-lg"
    : "bg-white border-blue-200 hover:bg-blue-50/50 hover:border-blue-400"
			}`}
			whileHover={{ scale: 1.03 }}
			whileTap={{ scale: 0.97 }}
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.3 }}>
			{/* Glow effect - removed for selected state */}
			{!isSelected && (
				<div className="absolute inset-0 rounded-2xl transition-opacity duration-300 opacity-0 group-hover:opacity-50 bg-gradient-to-r from-gray-400/20 to-gray-600/20 blur-xl" />
			)}

			<div className="relative z-10 flex flex-col items-center text-center space-y-4">
				<div
					className={`p-4 rounded-xl transition-all duration-300 ${
						isSelected ? "bg-white/30" : "bg-white/10 group-hover:bg-white/20"
					}`}>
					<Icon className="w-8 h-8 text-black" />
				</div>
				<div>
					<h3 className="font-semibold text-black text-lg mb-2">
						{skill.title}
					</h3>
					<p className="text-gray-600 text-sm leading-relaxed">
						{skill.description}
					</p>
				</div>
			</div>
		</motion.div>
	);
}
const tagVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1 },
};

function SkillDetails({ selectedSkill }) {
  if (!selectedSkill) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="mt-12 space-y-8"
    >
      {/* Languages & Frameworks Section */}
      <motion.div
       className="bg-white border border-blue-200 rounded-2xl p-8 shadow-sm"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h3 className="text-2xl font-semibold text-black mb-6 text-center">
            Keahlian Utama
        </h3>
        <motion.div
          key={selectedSkill.title}
          className="flex flex-wrap justify-center gap-3"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.04, delayChildren: 0.1 } } }}
          initial="hidden"
          animate="show"
        >
          {selectedSkill.skills.map((skill) => (
            <motion.span
              key={skill.name}
              variants={tagVariants}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-default flex items-center gap-2
                ${
                  skill.highlight
  ? "bg-blue-600 text-white shadow-md border-blue-600 scale-105 z-10 hover:bg-blue-700 hover:shadow-lg"
  : "bg-white border border-blue-200 text-slate-800 hover:bg-blue-50"
                }`}
            >
              {skill.highlight && (
                <span className="text-yellow-400 text-[10px] animate-pulse">✦</span>
              )}
              {skill.name}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>

      {/* Tools Section */}
      <motion.div
        className="bg-white border border-blue-200 rounded-2xl p-8"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 }}
      >
        <h3 className="text-xl font-medium text-gray-500 mb-6 text-center uppercase tracking-wider">
           Tools & Sertifikasi
        </h3>
        <motion.div
          key={selectedSkill.title + "-tools"}
          className="flex flex-wrap justify-center gap-3"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.04, delayChildren: 0.1 } } }}
          initial="hidden"
          animate="show"
        >
          {selectedSkill.tools.map((tool) => (
            <motion.span
              key={tool}
              variants={tagVariants}
              className="px-4 py-1.5 bg-gray-300/30 border border-gray-400/20 rounded-lg text-gray-600 text-xs font-medium"
            >
              {tool}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default function Skills() {
	const [selectedCategory, setSelectedCategory] = useState("support");
	return (
		<div className="relative">
			<div className="mx-auto container px-6 py-20">
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="text-center space-y-4 mb-16">
					<h2 className="text-5xl font-bold bg-gradient-to-r from-black to-gray-600 bg-clip-text text-transparent">
						Keahlian & Kompetensi
					</h2>
					<p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
						 Kompetensi dalam dukungan teknologi informasi, infrastruktur
                         jaringan, analisis sistem, dan tata kelola TI..
					</p>
				</motion.div>

				{/* Skill Categories Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
					{Object.entries(skillCategories).map(([key, skill], index) => (
						<motion.div
							key={key}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ delay: index * 0.1 }}>
							<SkillCard
								skill={skill}
								isSelected={selectedCategory === key}
								onClick={() => setSelectedCategory(key)}
							/>
						</motion.div>
					))}
				</div>

				{/* Skill Details */}
				<AnimatePresence mode="wait">
					<SkillDetails selectedSkill={skillCategories[selectedCategory]} />
				</AnimatePresence>
			</div>
		</div>
	);
}
