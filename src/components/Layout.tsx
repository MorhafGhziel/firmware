import { Header } from "./Header";
import { Button } from "./ui/button";
import { ChevronDown, Sun, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

type PageType =
  | "home"
  | "discover"
  | "create"
  | "portfolio"
  | "admin"
  | "project";

interface LayoutProps {
  children: React.ReactNode;
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
}

export function Layout({ children, currentPage, onNavigate }: LayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavigation = (page: PageType) => {
    if (onNavigate) {
      onNavigate(page);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white cyber-grid">
      {/* Header - ABSOLUTELY ON TOP OF EVERYTHING */}
      <div className="fixed top-0 left-0 right-0 z-[999999] pointer-events-auto">
        <Header
          currentPage={currentPage}
          onNavigate={onNavigate}
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />
      </div>

      {/* Mobile Menu Overlay - HIGHEST Z-INDEX */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-lg z-[9999999] md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              className="absolute top-0 right-0 w-80 min-h-fit bg-white border-l border-cyan-200/50 shadow-2xl rounded-bl-lg"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 space-y-6">
                {/* Mobile Navigation */}
                <nav className="space-y-4">
                  {[
                    { key: "discover", label: "Discover" },
                    { key: "create", label: "Launch Project" },
                    { key: "portfolio", label: "Portfolio" },
                  ].map((item) => (
                    <motion.button
                      key={item.key}
                      onClick={() => handleNavigation(item.key as PageType)}
                      className={`w-full text-left p-3 rounded-lg transition-all duration-300 ${
                        currentPage === item.key
                          ? "bg-cyan-100 text-cyan-600 font-medium"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {item.label}
                    </motion.button>
                  ))}

                  <div className="pt-4 border-t border-gray-200">
                    <motion.a
                      href="#"
                      className="flex items-center justify-between w-full p-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
                      whileHover={{ x: 4 }}
                    >
                      How it Works
                      <ChevronDown className="w-4 h-4 text-gray-500" />
                    </motion.a>
                  </div>
                </nav>

                {/* Mobile Actions */}
                <div className="space-y-4 pt-4 border-t border-gray-200">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full justify-start hover:bg-cyan-50 hover:text-cyan-600"
                    >
                      <Sun className="w-4 h-4 mr-3" />
                      Theme
                    </Button>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full justify-start border-cyan-200 hover:border-cyan-400 hover:bg-cyan-50 hover:text-cyan-600"
                    >
                      Connect Wallet
                    </Button>
                  </motion.div>

                  <motion.button
                    onClick={() => handleNavigation("admin")}
                    className={`w-full p-3 rounded-lg transition-all duration-300 flex items-center ${
                      currentPage === "admin"
                        ? "bg-cyan-100 text-cyan-600"
                        : "hover:bg-gray-100"
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <User className="w-4 h-4 mr-3" />
                    Admin Panel
                  </motion.button>

                  <motion.div
                    className="flex items-center space-x-3 bg-gray-900 text-white p-3 rounded-lg"
                    whileHover={{ scale: 1.02 }}
                  >
                    <motion.div
                      className="w-6 h-6 bg-cyan-400 rounded-full"
                      animate={{
                        boxShadow: [
                          "0 0 5px #00ffff",
                          "0 0 20px #00ffff",
                          "0 0 5px #00ffff",
                        ],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <div className="text-sm">
                      <div className="font-medium">7xdk...mN9P</div>
                      <div className="text-xs text-gray-300">$247.50 USDC</div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main content with proper spacing */}
      <main className="pt-20 relative z-10">{children}</main>
    </div>
  );
}
