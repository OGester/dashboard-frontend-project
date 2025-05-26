import "../styles/globals.scss";

export const metadata = {
  title: "About Me",
  description: "Welcome to my corner of the galaxy!",
};

export const viewport = {
  initialScale: 1,
  width: "device-width",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body>{children}</body>
    </html>
  );
}
