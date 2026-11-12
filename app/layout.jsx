import "./globals.css";
import { Poppins, Jost } from "next/font/google";
import Navbar from "@/components/Navbar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import { Analytics } from "@vercel/analytics/react";
//import Chat from "@/components/Chat";
import ClientTopProgressBar from "@/components/ClientTopProgressBar";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700"],
	style: ["normal", "italic"],
	display: "swap",
	variable: "--font-poppins",
});

const jost = Jost({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	display: "swap",
	variable: "--font-jost",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata = {
	metadataBase: new URL(siteUrl),

  title: "M Rifqi Saputra | IT Support & Network Support",

  description:
    "Information Systems graduate from Institut Teknologi Kalimantan with hands-on experience in IT service desk support, network troubleshooting, and system analysis. MTCNA and MTCRE certified.",

  author: "M Rifqi Saputra",

  applicationName: "M Rifqi Saputra Portfolio",

  keywords: [
    "M Rifqi Saputra",
    "IT Support",
    "IT Helpdesk",
    "Network Support",
    "Information Systems",
    "Institut Teknologi Kalimantan",
    "MikroTik",
    "MTCNA",
    "MTCRE",
    "Network Troubleshooting",
    "IT Service Desk",
    "COBIT 2019",
    "Balikpapan",
  ],

  openGraph: {
    type: "website",
    url: siteUrl,
    title: "M Rifqi Saputra | IT Support & Network Support",
    siteName: "M Rifqi Saputra Portfolio",

    description:
      "Personal portfolio of M Rifqi Saputra, Information Systems graduate specializing in IT Support and Network Support.",

    images: [
      {
        url: "/og-image-rev.png",
        alt: "M Rifqi Saputra Portfolio",
        width: 1200,
        height: 630,
      },
    ],
  },
};


const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",

  name: "M Rifqi Saputra",
  url: siteUrl,

  jobTitle: "IT Support & Network Support",

  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Institut Teknologi Kalimantan",
  },

  knowsAbout: [
    "IT Support",
    "IT Helpdesk",
    "Network Support",
    "Network Troubleshooting",
    "MikroTik",
    "IT Service Desk",
    "System Analysis",
    "COBIT 2019",
  ],
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={`${poppins.variable} ${jost.variable}`}>
			<body>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>
				<ClientTopProgressBar />
				<Navbar />
				{children}
				{/*<Chat />*/}
				<Analytics />
			</body>
		</html>
	);
}
