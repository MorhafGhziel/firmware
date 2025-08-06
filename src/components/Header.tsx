import { Button } from "./ui/button";
import { ChevronDown, Sun, User, Zap } from "lucide-react";
import { motion } from "framer-motion";

type PageType =
  | "home"
  | "discover"
  | "create"
  | "portfolio"
  | "admin"
  | "project";

interface HeaderProps {
  currentPage?: PageType;
  onNavigate?: (page: PageType) => void;
}

export function Header({ currentPage = "home", onNavigate }: HeaderProps) {
  const handleNavigation = (page: PageType) => {
    if (onNavigate) {
      onNavigate(page);
    }
  };

  return (
    <header className="bg-white/80 backdrop-blur-xl border-b border-cyan-200/50 px-4 py-3 sticky top-0 z-50">
      {/* Holographic stripe */}
      <motion.div
        className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
        animate={{
          x: [-100, 100, -100],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto flex items-center justify-between max-w-7xl">
        <div className="flex items-center space-x-8">
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.button
              onClick={() => handleNavigation("home")}
              className="text-xl font-bold text-gray-900 hover:text-cyan-600 transition-colors cursor-pointer"
              whileHover={{ textShadow: "0 0 8px #00ffff" }}
            >
              onlyfounders
              <motion.div
                className="absolute -inset-1 bg-cyan-400/20 rounded blur opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
            </motion.button>
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Zap className="w-4 h-4 text-cyan-500" />
            </motion.div>
          </motion.div>

          <nav className="flex items-center space-x-6">
            {[
              { key: "discover", label: "Discover" },
              { key: "create", label: "Launch Project" },
              { key: "portfolio", label: "Portfolio" },
            ].map((item) => (
              <motion.button
                key={item.key}
                onClick={() => handleNavigation(item.key as PageType)}
                className={`transition-all duration-300 ${
                  currentPage === item.key
                    ? "text-cyan-600 font-medium"
                    : "text-gray-700 hover:text-gray-900"
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                {item.label}
                {currentPage === item.key && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-cyan-400 neon-glow"
                    layoutId="activeTab"
                    initial={false}
                  />
                )}
                <motion.div
                  className="absolute inset-0 bg-cyan-400/10 rounded opacity-0"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.button>
            ))}

            <div className="flex items-center space-x-1 relative group">
              <motion.a
                href="#"
                className="text-gray-700 hover:text-gray-900 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                How it Works
              </motion.a>
              <motion.div
                animate={{ rotate: [0, 180, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <ChevronDown className="w-4 h-4 text-gray-500" />
              </motion.div>
            </div>
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Button
              variant="ghost"
              size="sm"
              className="hover:bg-cyan-50 hover:text-cyan-600"
            >
              <Sun className="w-4 h-4" />
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              size="sm"
              className="border-cyan-200 hover:border-cyan-400 hover:bg-cyan-50 hover:text-cyan-600 transition-all duration-300"
            >
              Connect Wallet
            </Button>
          </motion.div>

          <motion.button
            onClick={() => handleNavigation("admin")}
            className={`p-2 rounded-lg transition-all duration-300 ${
              currentPage === "admin"
                ? "bg-cyan-100 text-cyan-600 neon-glow"
                : "hover:bg-gray-100"
            }`}
            title="Admin Panel"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <User className="w-4 h-4" />
            {currentPage === "admin" && (
              <motion.div
                className="absolute inset-0 bg-cyan-400/20 rounded-lg"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            )}
          </motion.button>

          <motion.div
            className="flex items-center space-x-2 bg-gray-900 text-white px-3 py-1 rounded-lg relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-transparent"
              animate={{ x: [-100, 100] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="w-6 h-6 bg-cyan-400 rounded-full relative z-10"
              animate={{
                boxShadow: [
                  "0 0 5px #00ffff",
                  "0 0 20px #00ffff",
                  "0 0 5px #00ffff",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <div className="text-sm relative z-10">
              <motion.div
                className="font-medium"
                animate={{ opacity: [1, 0.7, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                7xdk...mN9P
              </motion.div>
              <div className="text-xs text-gray-300">$247.50 USDC</div>
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  );
}
