import "./globals.css";
import { redHatText } from "@/app/font";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${redHatText.className} antialiased bg-bg-primary min-w-screen min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
