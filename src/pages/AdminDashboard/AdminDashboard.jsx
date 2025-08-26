import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaUserCircle,
  FaBoxOpen,
  FaShoppingCart,
  FaFileInvoiceDollar,
  FaUsers,
  FaChartPie,
  FaCog,
  FaTags,
  FaTachometerAlt,
} from "react-icons/fa";
import useAuthStore from "../../store/useAuthstore";
import AddCategory from "../../components/ProductCategory/AddCategory";
import AllCategories from "../../components/ProductCategory/AllCategorie";
import AddProduct from "../../components/Product/AddProduct";
import AllProduct from "../../components/Product/AllProduct";
export default function AdminDashboard() {
  const user = useAuthStore((state) => state.user);
  const [active, setActive] = useState("Product");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const menuItems = [
    { name: "Product", icon: <FaBoxOpen /> },
    { name: "Category", icon: <FaTags /> },
    { name: "Order", icon: <FaShoppingCart /> },
    { name: "Invoice", icon: <FaFileInvoiceDollar /> },
    { name: "Customers", icon: <FaUsers /> },
    { name: "Reports", icon: <FaChartPie /> },
    { name: "Settings", icon: <FaCog /> },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`fixed sm:relative z-20 bg-gray-800 text-gray-200 flex flex-col h-full transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full sm:translate-x-0"
        } w-64`}
      >
        <div className="p-6 border-b border-gray-700 flex items-center gap-3">
          <FaUserCircle className="text-3xl" />
          <div>
            <p className="font-bold">{user?.name || "Admin Name"}</p>
            <p className="text-sm text-gray-400">
              {user?.email || "admin@example.com"}
            </p>
          </div>
        </div>
        <nav className="flex-1 p-4">
          {menuItems.map((item) => (
            <button
              key={item.name}
              onClick={() => setActive(item.name)}
              className={`w-full flex items-center gap-3 px-4 py-2 my-1 rounded-md transition-colors ${
                active === item.name
                  ? "bg-gray-700 text-white font-semibold"
                  : "hover:bg-gray-700 hover:text-white"
              }`}
            >
              {item.icon} {item.name}
            </button>
          ))}
        </nav>
      </aside>

      {/* Mobile Hamburger */}
      <button
        className="sm:hidden fixed top-4 left-4 z-30 text-2xl text-gray-800"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? <FaTimes /> : <FaBars />}
      </button>

      <main className="flex-1 p-8 overflow-auto">
        <h1 className="text-3xl font-bold mb-4">{active}</h1>
        <div className="bg-white p-4 rounded-lg shadow-md">
          {active === "Product" && <div><AddProduct/>
          <AllProduct/>
          </div>}
          {active === "Category" &&  <div>
    <AddCategory />
    <AllCategories />
  </div>}
          {active === "Order" && <p>View and manage all orders.</p>}
          {active === "Invoice" && <p>Generate and manage invoices.</p>}
          {active === "Customers" && <p>Manage your customers here.</p>}
          {active === "Reports" && <p>View sales and performance reports.</p>}
          {active === "Settings" && <p>Admin settings and configurations.</p>}
        </div>
      </main>
    </div>
  );
}
