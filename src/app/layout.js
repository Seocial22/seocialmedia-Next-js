import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer.jsx";
import FloatingContact from "@/components/FloatingContact.jsx";
import NeonCursor from "@/components/NeonCursor";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="facebook-domain-verification"
          content="2koju9tvodnexe6azl5ruldzrfvow5"
        />
        <meta name="google-site-verification" content="fcZoZmZfUWeO4fMudBCAg5pZP7fGCzHViTZwCCSUHUU" />
      </head>
      <body className={` antialiased min-h-screen`}>
        <Header />
        {children}
        <NeonCursor />
        <FloatingContact />
        <Footer />
      </body>
    </html>
  );
}
