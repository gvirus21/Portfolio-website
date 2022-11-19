import "../styles/globals.css";
import CursorContextProvider from "../context/CursorContext";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CursorContextProvider>
      <html>
        <head />
        <body>{children}</body>
      </html>
    </CursorContextProvider>
  );
}
