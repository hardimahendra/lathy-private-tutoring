import "./globals.css";
import "./depth.css";
import "./editorial.css";

export const metadata = {
  title: "Lathy Private — Belajar dengan ritme yang pas",
  description: "Landing page demonstrasi Lathy Private, layanan les privat yang fleksibel.",
};

export default function RootLayout({ children }) {
  return <html lang="id"><body>{children}</body></html>;
}
