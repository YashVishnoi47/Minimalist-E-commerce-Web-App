import '@/app/globals.css'
export default function SellerDashboardLayout({ children }) {
  return (
    <html lang="en">
      <body className={`w-full h-screen flex flex-col items-center`}>
        <main className="w-full h-full">{children}</main>
      </body>
    </html>
  );
}
