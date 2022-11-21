import "../styles/globals.css";
import CursorContextProvider from "../context/CursorContext";
import ScrollObserver from "../context/ScrollObserver";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ScrollObserver>
      <CursorContextProvider>
        <html>
          <head />
          <body>{children}</body>
        </html>
      </CursorContextProvider>
    </ScrollObserver>
  );
}
