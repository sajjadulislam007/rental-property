import Navbar from "@/components/Navbar";

// Style Importing
import "@/assets/styles/globals.css";

// Importing Meta Data
export const metadata = {
  title: "Rental Property | Find your perfect rental property here!",
  description: "Find your dream rental property here",
  keywords: "rental, find rental, find properties",
};

const MainLayout = ({ children }) => {
  return (
    <html leng="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
};

export default MainLayout;
