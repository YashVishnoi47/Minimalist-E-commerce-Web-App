import Navbar from "@/components/Navbar";
import { ClerkProvider } from "@clerk/nextjs";

const Layout = ({ children }) => {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`w-full min-h-screen flex flex-col items-center`}>
          <Navbar />
          <main className="w-full h-full">{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
};

export default Layout;
