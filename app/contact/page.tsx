
import { Metadata } from "next";
import Contact from "./contactcomp";
export const metadata: Metadata = {
  title: "OutDoorQuest - Contact",
  description: "Contact OutDoorQuest for any inquiries, feedback, or support. We are here to help you with your outdoor toy needs.",
  keywords: ["OutDoorQuest", "contact", "inquiries", "feedback", "support"],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "OutDoorQuest - Contact",
    description: "Contact OutDoorQuest for any inquiries, feedback, or support. We are here to help you with your outdoor toy needs.",
    images: [
      {
        url: "https://outdoorquest.vercel.app/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "OutDoorQuest - Contact",
      },
    ],
  },
};

function page() {
  return (
  <Contact /> 
  )
}

export default page