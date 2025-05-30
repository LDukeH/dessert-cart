import "./globals.css";
import { redHatText } from "@/app/font";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${redHatText.className} antialiased bg-bg-primary `}>
        {children}
      </body>
    </html>
  );
}
