import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";
import "./globals.css";

export const metadata = {
  title: "Naufal Zhafran | Personal Portfolio",
  description: "Welcome to Naufal Zhafran's personal portfolio website showcasing projects, skills, and professional experience.",
  keywords: ["Naufal Zhafran", "portfolio", "developer", "software engineer", "projects"],
  authors: [{ name: "Naufal Zhafran" }],
  creator: "Naufal Zhafran",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://naufalzhafran.com",
    title: "Naufal Zhafran | Personal Portfolio",
    description: "Welcome to Naufal Zhafran's personal portfolio website showcasing projects, skills, and professional experience.",
    siteName: "Naufal Zhafran Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Naufal Zhafran | Personal Portfolio",
    description: "Welcome to Naufal Zhafran's personal portfolio website showcasing projects, skills, and professional experience.",
    creator: "@naufalzhafran",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const navbar = <Navbar logo={<b>NZ</b>} />;
const footer = <Footer>MIT {new Date().getFullYear()} © NAUFALZHAFRAN.</Footer>;

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      // Not required, but good for SEO
      lang="en"
      // Required to be set
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <body>
        <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          footer={footer}
          editLink={null}
          feedback={{ content: null }}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
