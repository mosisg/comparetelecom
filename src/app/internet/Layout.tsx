import "./globals.css";
import { GlobalNav } from "@/app/ui/global-nav";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Comparetelecom",
    template: "%s | Comparetelecom Comparateur",
  },
  description:
    "A playground to explore new Next.js App Router features such as nested layouts, instant loading states, streaming, and component level data fetching.",
  openGraph: {
    title: "Next.js App Router Playground",
    description:
      "A playground to explore new Next.js App Router features such as nested layouts, instant loading states, streaming, and component level data fetching.",
    images: [`/api/og?title=Next.js App Router`],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="[color-scheme:dark]">
      <body className="bg-gray-1100 overflow-y-scroll bg-[url('/grid.svg')] pb-36">
        <GlobalNav />
         
        <div className="lg:pl-72">
        {children}
          <div className="w-11/12 mx-auto max-w-4xl space-y-8 px-2 pt-20 lg:px-8 lg:py-8">
            
            <div className="bg-vc-border-gradient rounded-lg p-px shadow-lg shadow-black/20">
              <div className=" p-3.5 lg:p-6">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Dolores eos facere eum. Deleniti deserunt, illum reprehenderit
                mollitia, accusantium quam reiciendis, vitae ut odio rerum nisi
                unde ad doloremque a sit corrupti dolore molestias dolores
                assumenda alias qui sequi et? Dignissimos possimus illum
                obcaecati corrupti laboriosam corporis ut ducimus consectetur
                quas.
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
