import "globals.css";
import { TopNavBar } from "components/TopNavBar";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "FiloHr - Free Resume Builder",
  description:
    "FiloHr's user-friendly resume builder form helps you craft a professional and impactful resume in minutes.  Our streamlined format guides you through each step, prompting you for relevant information and achievements to showcase your skills and experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <TopNavBar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
