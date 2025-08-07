import { Header } from "./Header";
import { Button } from "./ui/button";
import { ChevronDown, User } from "lucide-react";
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
    <div className="min-h-screen bg-background cyber-grid">
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
              className="absolute top-0 right-0 w-80 min-h-fit bg-card border-l border-border shadow-2xl rounded-bl-lg"
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
                          ? "bg-primary/20 text-primary font-medium"
                          : "text-foreground hover:bg-muted"
                      }`}
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {item.label}
                    </motion.button>
                  ))}

                  <div className="pt-4 border-t border-border">
                    <motion.a
                      href="#"
                      className="flex items-center justify-between w-full p-3 rounded-lg text-foreground hover:bg-muted transition-colors"
                      whileHover={{ x: 4 }}
                    >
                      How it Works
                      <ChevronDown className="w-4 h-4 text-muted-foreground" />
                    </motion.a>
                  </div>
                </nav>

                {/* Mobile Actions */}
                <div className="space-y-4 pt-4 border-t border-border">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full justify-start border-border hover:border-primary hover:bg-primary/10 hover:text-primary"
                    >
                      Connect Wallet
                    </Button>
                  </motion.div>

                  <motion.button
                    onClick={() => handleNavigation("admin")}
                    className={`w-full p-3 rounded-lg transition-all duration-300 flex items-center ${
                      currentPage === "admin"
                        ? "bg-primary/20 text-primary"
                        : "hover:bg-muted"
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <User className="w-4 h-4 mr-3" />
                    Admin Panel
                  </motion.button>

                  <motion.div
                    className="flex items-center space-x-3 bg-card text-card-foreground p-3 rounded-lg border border-border"
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
                      <div className="text-xs text-muted-foreground">
                        $247.50 USDC
                      </div>
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
