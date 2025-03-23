import { ClerkProvider } from "@clerk/nextjs";

const Layout = ({ children }) => {
  return (
    <ClerkProvider>
      <div className="w-full min-h-[100vh] flex justify-center items-start ">
        {children}
      </div>
    </ClerkProvider>
  );
};

export default Layout;
