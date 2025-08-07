import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  Search,
  PlusCircle,
  TrendingUp,
  ArrowRight,
  CheckCircle,
  DollarSign,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface HowItWorksProps {
  isOpen: boolean;
  onClose: () => void;
}

export function HowItWorks({ isOpen, onClose }: HowItWorksProps) {
  const steps = [
    {
      id: 1,
      title: "Discover Projects",
      description:
        "Browse through curated blockchain projects seeking funding. Use our advanced filters to find opportunities that match your investment strategy.",
      icon: Search,
      color: "from-emerald-500 to-emerald-600",
      features: [
        "Vetted projects",
        "Risk assessment",
        "Detailed analytics",
        "Community reviews",
      ],
    },
    {
      id: 2,
      title: "Invest & Fund",
      description:
        "Invest in promising projects with transparent terms. Track your investments in real-time and participate in project governance.",
      icon: DollarSign,
      color: "from-blue-500 to-blue-600",
      features: [
        "Secure transactions",
        "Real-time tracking",
        "Governance rights",
        "Regular updates",
      ],
    },
    {
      id: 3,
      title: "Earn Returns",
      description:
        "Watch your investments grow as projects succeed. Benefit from token appreciation, staking rewards, and exclusive project perks.",
      icon: TrendingUp,
      color: "from-violet-500 to-violet-600",
      features: [
        "Token appreciation",
        "Staking rewards",
        "Exclusive access",
        "Portfolio growth",
      ],
    },
  ];

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 50,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut" as const,
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.3,
        ease: "easeIn" as const,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      x: -30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="modal-backdrop"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={onClose}
          />

          {/* Modal Container - Perfectly Centered */}
          <div className="fixed inset-0 z-50 overflow-hidden">
            <div className="min-h-full flex items-center justify-center p-4">
              <motion.div
                className="w-full max-w-5xl max-h-[85vh] bg-card border border-border rounded-2xl shadow-2xl overflow-hidden relative"
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                style={{
                  // Ensure the modal is centered and constrained
                  maxWidth: "min(90vw, 1200px)",
                  maxHeight: "min(85vh, 800px)",
                }}
              >
                {/* Header */}
                <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-6 border-b border-border relative flex-shrink-0">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-3xl font-bold text-foreground mb-2">
                        How onlyfounders Works
                      </h2>
                      <p className="text-muted-foreground">
                        Your gateway to the future of blockchain investing
                      </p>
                    </div>
                    <motion.button
                      onClick={onClose}
                      className="p-2 hover:bg-muted rounded-lg text-muted-foreground hover:text-foreground transition-colors flex-shrink-0"
                      whileHover={{ scale: 1.1, rotate: 90 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <X className="w-6 h-6" />
                    </motion.button>
                  </div>
                </div>

                {/* Scrollable Content */}
                <div
                  className="overflow-y-auto flex-1"
                  style={{ maxHeight: "calc(85vh - 140px)" }}
                >
                  <div className="p-8">
                    <motion.div className="space-y-8" variants={modalVariants}>
                      {steps.map((step, index) => (
                        <motion.div
                          key={step.id}
                          variants={itemVariants}
                          className="group"
                        >
                          <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 border border-border/50 hover:border-primary/30 bg-card">
                            <div className="flex items-start p-6">
                              {/* Step Icon & Number */}
                              <div className="flex-shrink-0 mr-6">
                                <motion.div
                                  className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center shadow-lg relative`}
                                  whileHover={{
                                    scale: 1.05,
                                    rotate: [0, 5, -5, 0],
                                    transition: { duration: 0.3 },
                                  }}
                                >
                                  <step.icon className="w-10 h-10 text-white" />
                                  <Badge className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
                                    {step.id}
                                  </Badge>
                                </motion.div>
                              </div>

                              {/* Step Content */}
                              <div className="flex-1 min-w-0">
                                <div className="flex items-start justify-between mb-4">
                                  <h3 className="text-2xl font-bold text-foreground mb-3">
                                    {step.title}
                                  </h3>

                                  {/* Arrow for connecting steps */}
                                  {index < steps.length - 1 && (
                                    <motion.div
                                      className="hidden xl:flex items-center justify-center ml-6 flex-shrink-0"
                                      animate={{
                                        x: [0, 8, 0],
                                        opacity: [0.6, 1, 0.6],
                                      }}
                                      transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: index * 0.5,
                                      }}
                                    >
                                      <ArrowRight className="w-8 h-8 text-primary/60" />
                                    </motion.div>
                                  )}
                                </div>

                                <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                                  {step.description}
                                </p>

                                {/* Features Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                  {step.features.map(
                                    (feature, featureIndex) => (
                                      <motion.div
                                        key={featureIndex}
                                        className="flex items-center space-x-3 text-muted-foreground group-hover:text-foreground transition-colors"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{
                                          delay:
                                            0.4 +
                                            index * 0.15 +
                                            featureIndex * 0.1,
                                          duration: 0.4,
                                        }}
                                      >
                                        <motion.div
                                          whileHover={{
                                            scale: 1.2,
                                            rotate: 360,
                                          }}
                                          transition={{ duration: 0.3 }}
                                        >
                                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                                        </motion.div>
                                        <span className="text-sm font-medium">
                                          {feature}
                                        </span>
                                      </motion.div>
                                    )
                                  )}
                                </div>
                              </div>
                            </div>
                          </Card>
                        </motion.div>
                      ))}
                    </motion.div>

                    {/* CTA Section */}
                    <motion.div
                      className="mt-12 p-8 bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl border border-primary/20"
                      variants={itemVariants}
                      initial="hidden"
                      animate="visible"
                      transition={{ delay: 1 }}
                    >
                      <div className="text-center">
                        <motion.h3
                          className="text-2xl font-bold text-foreground mb-3"
                          animate={{
                            textShadow: [
                              "0 0 0 var(--foreground)",
                              "0 0 20px var(--primary)",
                              "0 0 0 var(--foreground)",
                            ],
                          }}
                          transition={{ duration: 3, repeat: Infinity }}
                        >
                          Ready to Start Your Journey?
                        </motion.h3>
                        <p className="text-muted-foreground mb-6 text-lg">
                          Join thousands of smart investors funding the
                          decentralized future
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Button
                              size="lg"
                              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 neon-glow"
                              onClick={onClose}
                            >
                              <Search className="w-5 h-5 mr-2" />
                              Explore Projects
                            </Button>
                          </motion.div>
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Button
                              variant="outline"
                              size="lg"
                              className="border-primary/30 text-primary hover:bg-primary/10 px-8 py-3"
                              onClick={onClose}
                            >
                              <PlusCircle className="w-5 h-5 mr-2" />
                              Launch Project
                            </Button>
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
