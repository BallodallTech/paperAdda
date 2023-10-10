import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import UserProvider from "@/store/userContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PapperAdda",
  description:
    " Unlock the Gateway to Boundless Knowledge and Beyond with PapperAdda – Your Ultimate Destination for Enriching Insights and Information.",
};

export default function RootLayout({ children }: { children: JSX.Element }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="Exams, Preparation, UPSC, NEET, Utkarsh, Police Exam, Government Exam Preparations"
        />
        <meta name="author" content="BalodaAllTechSolution" />

        <meta
          property="og:title"
          content="PaperAdda - Your Gateway to Knowledge and Beyond"
        />
        <meta
          property="og:description"
          content="Unlock the Gateway to Boundless Knowledge and Beyond with PaperAdda – Your Ultimate Destination for Enriching Insights and Information"
        />
        <meta property="og:image" content="/home.png" />
        <meta property="og:url" content="https://paperadda.click" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="PaperAdda - Your Gateway to Knowledge and Beyond"
        />
        <meta
          name="twitter:description"
          content="Unlock the Gateway to Boundless Knowledge and Beyond with PaperAdda – Your Ultimate Destination for Enriching Insights and Information"
        />
        <meta name="twitter:image" content="/home.png" />
        <link rel="icon" type="image/x-icon" href="/book.ico" />
      </head>
      <body className={inter.className}>
        <UserProvider>{children}</UserProvider>
      </body>
    </html>
  );
}
