import Image from "next/image";
import Card from "./spotify/card";
import { motion } from "framer-motion";
import Me1 from "@/public/image/Rifqi4.png";
import Me2 from "@/public/image/Rifqi6.png";
import Me3 from "@/public/image/Rifqi5.png";
import Hr from "@/components/Hr";

function Title() {
	return (
		<div className="mt-10 flex flex-col justify-start items-center w-full pl-10 md:pl-32">
			<div className="flex justify-center items-center flex-col my-5 self-start ">
				<Hr variant="long"></Hr>
				<h1 className="text-3xl font-bold mt-3">Who Am I?</h1>
			</div>
		</div>
	);
}

export default function About() {
	return (
		<>
			<Title />
			<div className="relative mx-auto container gap-4 px-10 grid grid-cols-1 md:grid-cols-2 mb-10">
				<div className="flex justify-center items-start flex-col mb-5 ">
					<div className="images relative w-full  aspect-square">
						<div className="absolute top-28 left-10 w-[50%]  aspect-square grayscale hover:grayscale-0 transition-all ease duration-300">
							<motion.div
								initial={{ opacity: 0, scale: 0.5, x: 100 }}
								whileInView={{
									opacity: 1,
									scale: 1,
									x: 0,
								}}
								className="relative w-full h-full">
								<Image
									src={Me1}
									alt="Alvalens"
									fill
									sizes="(max-width: 768px) 80vw, 40vw"
									className="object-cover"
									placeholder="blur"
								/>
							</motion.div>
						</div>
						<div className="absolute top-16 right-28 w-[30%]  aspect-square grayscale hover:grayscale-0 transition-all ease duration-300">
							<motion.div
								initial={{
									opacity: 0,
									scale: 0.5,
									x: -100,
								}}
								whileInView={{
									opacity: 1,
									scale: 1,
									x: 0,
								}}
								transition={{ delay: 0.3 }}
								className="relative w-full h-full">
								<Image
									src={Me2}
									alt="Alvalens"
									fill
									sizes="(max-width: 768px) 60vw, 25vw"
									className="object-cover"
									placeholder="blur"
								/>
							</motion.div>
						</div>
						<div className="absolute bottom-16 right-20 w-[40%]  aspect-square grayscale hover:grayscale-0 transition-all ease duration-300">
							<motion.div
								initial={{
									opacity: 0,
									scale: 0.5,
									x: -100,
								}}
								whileInView={{
									opacity: 1,
									scale: 1,
									x: 0,
								}}
								transition={{
									delay: 0.5,
								}}
								className="relative w-full h-full">
								<Image
									src={Me3}
									alt="Alvalens"
									fill
									sizes="(max-width: 768px) 80vw, 35vw"
									className="object-cover"
									placeholder="blur"
								/>
							</motion.div>
						</div>
					</div>
				</div>
				<motion.div
					className="flex justify-center items-start flex-col mb-5 md:px-10"
					initial={{
						opacity: 0,
						x: 200,
					}}
					whileInView={{
						opacity: 1,
						x: 0,
					}}
					transition={{
						delay: 0.5,

						type: "spring",
					}}>
					<h2 className="text-2xl font-bold tracking-wider mb-3 text-slate-800">
    Muhammad{" "}
    <span className="text-blue-600">Rifqi Saputra</span>
</h2>
					<p className="text-slate-600 text-left title text-lg leading-relaxed">
						Saya seorang {" "}
						<span className="text-blue-600 font-semibold">
							IT Support dan Network engginer{" "}
						</span>
						spesialis infrastruktur TI, dukungan teknis, dan 
						administrasi jaringan{" "}
						. Lulusan Sistem Informasi{" "}
						<span className="text-blue-600 font-semibold">
							Institut Teknologi Kalimantan
						</span>
						, Saya memiliki pengalaman sebagai{" "}
						<span className="text-blue-600 font-semibold">
							  IT Service Desk Intern {" "}
						</span>
						dengan tanggung jawab memberikan dukungan teknis
                         kepada lebih dari 50 pengguna internal, menangani
						permasalahan perangkat keras dan perangkat lunak,
						serta melakukan troubleshooting jaringan.
						<br />
						<br />
						Selain itu, saya pernah menjalani pengalaman magang
 						sebagai{" "}
						<span className="text-blue-600 font-semibold">
							System Analyst Intern
						</span>
						. Didukung oleh sertifikasi{" "}
						<span className="text-blue-600 font-semibold">
							MikroTik Certified Network Associate (MTCNA)
                            dan MikroTik Certified Routing Engineer (MTCRE)
						</span>
						, saya terus mengembangkan kemampuan untuk
                        berkontribusi dalam bidang IT Support, IT Helpdesk,
                        dan Network Support.
					</p>
					<Card />
				</motion.div>
			</div>
		</>
	);
}
