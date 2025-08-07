import { Button } from "./ui/button";
import { ChevronDown, Sun, Moon, User, Zap, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "./ThemeProvider";
import { useState, useEffect } from "react";

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
  isMobileMenuOpen?: boolean;
  setIsMobileMenuOpen?: (open: boolean) => void;
}

export function Header({
  currentPage = "home",
  onNavigate,
  isMobileMenuOpen = false,
  setIsMobileMenuOpen,
}: HeaderProps) {
  const { theme, toggleTheme } = useTheme();
  const [isHowItWorksOpen, setIsHowItWorksOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest(".how-it-works-dropdown")) {
        setIsHowItWorksOpen(false);
        setCurrentStep(0);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const steps = [
    {
      title: "Discover Projects",
      subtitle: "Browse vetted blockchain projects",
      description:
        "Explore our curated selection of high-potential blockchain projects. Each project undergoes rigorous due diligence and community vetting to ensure quality investment opportunities.",
      features: [
        "AI-powered project screening",
        "Community-driven ratings",
        "Detailed project analytics",
        "Risk assessment reports",
      ],
      icon: "🔍",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Connect Wallet",
      subtitle: "Link your crypto wallet securely",
      description:
        "Connect your preferred cryptocurrency wallet to start investing. We support all major wallets with enterprise-grade security and multi-signature protection.",
      features: [
        "Multi-wallet support",
        "Hardware wallet integration",
        "Real-time security monitoring",
        "Insurance coverage",
      ],
      icon: "🔐",
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Invest & Track",
      subtitle: "Fund projects and monitor returns",
      description:
        "Invest in promising projects and track your portfolio performance in real-time. Get detailed analytics, performance metrics, and automated reporting.",
      features: [
        "Real-time portfolio tracking",
        "Performance analytics",
        "Automated reporting",
        "Exit strategy planning",
      ],
      icon: "📈",
      color: "from-purple-500 to-pink-500",
    },
  ];

  const handleNavigation = (page: PageType) => {
    if (onNavigate) {
      onNavigate(page);
    }
    if (setIsMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className="bg-background/80 backdrop-blur-xl border-b border-border px-4 py-3 w-full shadow-lg">
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
              className="relative text-xl font-bold text-foreground hover:text-primary transition-colors cursor-pointer"
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

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {[
              { key: "discover", label: "Discover" },
              { key: "create", label: "Launch Project" },
              { key: "portfolio", label: "Portfolio" },
            ].map((item) => (
              <motion.button
                key={item.key}
                onClick={() => handleNavigation(item.key as PageType)}
                className={`relative transition-all duration-300 ${
                  currentPage === item.key
                    ? "text-primary font-medium"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                {item.label}
                {currentPage === item.key && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary neon-glow"
                    layoutId="activeTab"
                    initial={false}
                  />
                )}
                <motion.div
                  className="absolute inset-0 bg-primary/10 rounded opacity-0"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.button>
            ))}

            <div className="flex items-center space-x-1 relative group how-it-works-dropdown">
              <motion.button
                onClick={() => setIsHowItWorksOpen(!isHowItWorksOpen)}
                className="text-muted-foreground hover:text-foreground transition-colors flex items-center space-x-1"
                whileHover={{ scale: 1.05 }}
              >
                How it Works
                <motion.div
                  animate={{ rotate: isHowItWorksOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-4 h-4 text-muted-foreground" />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {isHowItWorksOpen && (
                  <motion.div
                    className="absolute top-full left-0 mt-2 w-96 bg-card border border-border rounded-lg shadow-lg z-50"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {/* Header */}
                    <div className="p-4 border-b border-border">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-foreground">
                          How it Works
                        </h3>
                        <div className="flex space-x-1">
                          {steps.map((_, index) => (
                            <button
                              key={index}
                              onClick={() => setCurrentStep(index)}
                              className={`w-2 h-2 rounded-full transition-colors ${
                                index === currentStep
                                  ? "bg-primary"
                                  : "bg-muted"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Step Content */}
                    <div className="p-4">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={currentStep}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.3 }}
                          className="space-y-4"
                        >
                          {/* Step Header */}
                          <div className="flex items-center space-x-3">
                            <div
                              className={`w-12 h-12 rounded-full bg-gradient-to-r ${steps[currentStep].color} flex items-center justify-center text-white text-xl`}
                            >
                              {steps[currentStep].icon}
                            </div>
                            <div>
                              <h4 className="text-lg font-semibold text-foreground">
                                {steps[currentStep].title}
                              </h4>
                              <p className="text-sm text-muted-foreground">
                                {steps[currentStep].subtitle}
                              </p>
                            </div>
                          </div>

                          {/* Step Description */}
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {steps[currentStep].description}
                          </p>

                          {/* Step Features */}
                          <div className="space-y-2">
                            <h5 className="text-sm font-medium text-foreground">
                              Key Features:
                            </h5>
                            <ul className="space-y-1">
                              {steps[currentStep].features.map(
                                (feature, index) => (
                                  <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: 10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-center space-x-2 text-sm text-muted-foreground"
                                  >
                                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                                    {feature}
                                  </motion.li>
                                )
                              )}
                            </ul>
                          </div>

                          {/* Navigation */}
                          <div className="flex items-center justify-between pt-4 border-t border-border">
                            <button
                              onClick={() =>
                                setCurrentStep(Math.max(0, currentStep - 1))
                              }
                              disabled={currentStep === 0}
                              className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
                                currentStep === 0
                                  ? "text-muted-foreground cursor-not-allowed"
                                  : "text-foreground hover:bg-muted"
                              }`}
                            >
                              Previous
                            </button>

                            <div className="flex items-center space-x-2">
                              <span className="text-xs text-muted-foreground">
                                {currentStep + 1} of {steps.length}
                              </span>
                            </div>

                            {currentStep === steps.length - 1 ? (
                              <button
                                onClick={() => {
                                  handleNavigation("discover");
                                  setIsHowItWorksOpen(false);
                                  setCurrentStep(0);
                                }}
                                className="px-4 py-1.5 text-sm rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                              >
                                Get Started
                              </button>
                            ) : (
                              <button
                                onClick={() =>
                                  setCurrentStep(
                                    Math.min(steps.length - 1, currentStep + 1)
                                  )
                                }
                                className="px-3 py-1.5 text-sm rounded-md text-foreground hover:bg-muted transition-colors"
                              >
                                Next
                              </button>
                            )}
                          </div>
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="ghost"
                size="sm"
                className="relative hover:bg-primary/10 hover:text-primary"
                onClick={toggleTheme}
              >
                {theme === "light" ? (
                  <Moon className="w-4 h-4" />
                ) : (
                  <Sun className="w-4 h-4" />
                )}
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="sm"
                className="relative border-border hover:border-primary hover:bg-primary/10 hover:text-primary transition-all duration-300"
              >
                Connect Wallet
              </Button>
            </motion.div>

            <motion.button
              onClick={() => handleNavigation("admin")}
              className={`relative p-2 rounded-lg transition-all duration-300 ${
                currentPage === "admin"
                  ? "bg-primary/20 text-primary neon-glow"
                  : "hover:bg-muted"
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
              className="flex items-center space-x-2 bg-card text-card-foreground px-3 py-1 rounded-lg relative overflow-hidden border border-border"
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
                <div className="text-xs text-muted-foreground">
                  $247.50 USDC
                </div>
              </div>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMobileMenuOpen?.(!isMobileMenuOpen)}
            className="relative md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-lg z-[9999999] md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen?.(false)}
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
                    <motion.button
                      onClick={() => setIsHowItWorksOpen(!isHowItWorksOpen)}
                      className="flex items-center justify-between w-full p-3 rounded-lg text-foreground hover:bg-muted transition-colors"
                      whileHover={{ x: 4 }}
                    >
                      How it Works
                      <ChevronDown className="w-4 h-4 text-muted-foreground" />
                    </motion.button>
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
    </header>
  );
}
