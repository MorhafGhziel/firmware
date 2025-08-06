import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

import {
  DollarSign,
  Target,
  PlusCircle,
  ArrowRight,
  Star,
  Rocket,
} from "lucide-react";
import { motion } from "framer-motion";

type PageType =
  | "home"
  | "discover"
  | "create"
  | "portfolio"
  | "admin"
  | "project";

interface HomePageProps {
  onProjectClick: (projectId: string) => void;
  onNavigate: (page: PageType) => void;
}

const mockProjects = [
  {
    id: "liquidbridge",
    name: "LiquidBridge",
    description:
      "Revolutionary cross-chain liquidity aggregation protocol that eliminates friction in multi-chain DeFi interactions.",
    category: "DeFi",
    minRaise: 800000,
    committed: 1185420,
    contributors: 246,
    daysLeft: 14,
    status: "active",
    featured: true,
    tokenPrice: 0.4,
    minInvestment: 100,
    expectedReturn: "8-12x",
  },
  {
    id: "omnipair",
    name: "Omnipair",
    description:
      "Permissionless lending and leveraged trading for any asset on Solana without relying on external oracles.",
    category: "DeFi",
    minRaise: 300000,
    committed: 1118102,
    contributors: 322,
    daysLeft: 8,
    status: "active",
    tokenPrice: 0.03,
    minInvestment: 50,
    expectedReturn: "15-25x",
  },
  {
    id: "mtncapital",
    name: "mtnCapital",
    description:
      "First futarchy-governed investment fund focusing on early-stage blockchain infrastructure projects.",
    category: "Investment Fund",
    minRaise: 0,
    committed: 5758964,
    contributors: 891,
    daysLeft: 22,
    status: "active",
    tokenPrice: 0.576,
    minInvestment: 500,
    expectedReturn: "5-8x",
  },
];

export function HomePage({ onProjectClick, onNavigate }: HomePageProps) {
  const featuredProject = mockProjects.find((p) => p.featured);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section
        className="relative overflow-hidden bg-white text-gray-900 py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl morph"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-cyan-300/10 rounded-full blur-3xl morph"
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>

        <div className="relative container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Badge
                variant="secondary"
                className="mb-6 bg-cyan-50 text-cyan-600 border-cyan-200 px-4 py-2 hover:bg-cyan-100 transition-colors"
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <DollarSign className="w-4 h-4 mr-2" />
                </motion.div>
                Early-Stage Investment Opportunities
              </Badge>
            </motion.div>

            <motion.h1
              className="text-6xl md:text-7xl font-bold mb-6 relative"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="relative inline-block">
                Invest in Tomorrow's
                <motion.div
                  className="absolute inset-0 text-cyan-400 opacity-50"
                  animate={{ x: [0, 2, 0], y: [0, -2, 0] }}
                  transition={{
                    duration: 0.1,
                    repeat: Infinity,
                    repeatDelay: 2,
                  }}
                >
                  Invest in Tomorrow's
                </motion.div>
              </span>
              <br />
              <motion.span
                className="neon-text relative inline-block"
                animate={{
                  textShadow: [
                    "0 0 5px #00ffff",
                    "0 0 20px #00ffff",
                    "0 0 5px #00ffff",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Breakthrough
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Get early access to revolutionary blockchain projects with high
              growth potential. Join smart investors funding the decentralized
              future.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  onClick={() => onNavigate("discover")}
                  className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden neon-glow"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{ x: [-100, 100] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  <DollarSign className="w-5 h-5 mr-2 relative z-10" />
                  <span className="relative z-10">Start Investing</span>
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  onClick={() => onNavigate("create")}
                  variant="outline"
                  className="border-cyan-300 text-cyan-600 hover:bg-cyan-50 px-8 py-6 text-lg transition-all duration-300 relative"
                >
                  <PlusCircle className="w-5 h-5 mr-2" />
                  Launch Project
                  <motion.div
                    className="absolute inset-0 border border-cyan-400 rounded opacity-0"
                    whileHover={{ opacity: 1 }}
                    animate={{
                      boxShadow: [
                        "0 0 0 0 rgba(6, 182, 212, 0)",
                        "0 0 0 4px rgba(6, 182, 212, 0.1)",
                        "0 0 0 0 rgba(6, 182, 212, 0)",
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              {[
                { value: "847", label: "Projects Funded" },
                { value: "$24.7M", label: "Total Invested" },
                { value: "12.3x", label: "Average Return" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    className="text-3xl font-bold text-cyan-600 mb-2"
                    animate={{
                      textShadow: [
                        "0 0 5px #06b6d4",
                        "0 0 15px #06b6d4",
                        "0 0 5px #06b6d4",
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.5,
                    }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Featured Project Section */}
      {featuredProject && (
        <motion.section
          className="py-16 container mx-auto px-4 max-w-7xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="text-center mb-12">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Badge
                variant="secondary"
                className="mb-4 bg-yellow-50 text-yellow-600 border-yellow-200 px-4 py-2"
              >
                <Star className="w-4 h-4 mr-2" />
                Featured Investment
              </Badge>
            </motion.div>
            <h2 className="text-4xl font-bold mb-4">
              High-Potential Opportunity
            </h2>
            <p className="text-gray-600 text-lg">
              Vetted by our investment team for exceptional growth potential
            </p>
          </div>

          <motion.div
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="overflow-hidden shadow-xl border-0 max-w-4xl mx-auto bg-white relative">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 via-transparent to-cyan-400/5"
                animate={{ x: [-100, 100, -100] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <div className="relative h-64 bg-gradient-to-br from-cyan-400 to-cyan-600 overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-black/10"
                  animate={{ opacity: [0.1, 0.2, 0.1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />

                <div className="relative p-8 text-white h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <motion.h3
                        className="text-4xl font-bold"
                        animate={{
                          textShadow: [
                            "0 0 10px rgba(255,255,255,0.5)",
                            "0 0 20px rgba(255,255,255,0.8)",
                            "0 0 10px rgba(255,255,255,0.5)",
                          ],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        {featuredProject.name}
                      </motion.h3>
                      <div className="flex space-x-2">
                        <Badge className="bg-yellow-400/20 text-yellow-200 border-yellow-400/30">
                          Featured
                        </Badge>
                        <motion.div
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 1, repeat: Infinity }}
                        >
                          <Badge className="bg-green-400/20 text-green-200 border-green-400/30">
                            {featuredProject.expectedReturn} ROI
                          </Badge>
                        </motion.div>
                      </div>
                    </div>
                    <p className="text-lg text-white/90 mb-6">
                      {featuredProject.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {[
                      {
                        label: "Raised",
                        value: `$${(
                          featuredProject.committed / 1000000
                        ).toFixed(1)}M`,
                      },
                      {
                        label: "Token Price",
                        value: `$${featuredProject.tokenPrice}`,
                      },
                      {
                        label: "Investors",
                        value: featuredProject.contributors,
                      },
                      { label: "Days Left", value: featuredProject.daysLeft },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.1 }}
                        className="text-center"
                      >
                        <div className="text-2xl font-bold">{item.value}</div>
                        <div className="text-sm text-white/70">
                          {item.label}
                        </div>
                      </motion.div>
                    ))}

                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        onClick={() => onProjectClick(featuredProject.id)}
                        className="bg-white/20 hover:bg-white/30 text-white border-white/30 backdrop-blur-sm w-full"
                      >
                        Invest Now
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </motion.section>
      )}

      {/* Quick Actions Section */}
      <motion.section
        className="py-16 bg-gray-50/50"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Get Started Today</h2>
            <p className="text-gray-600 text-lg">
              Choose your path to participate in the decentralized economy
            </p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {[
              {
                onClick: () => onNavigate("discover"),
                icon: DollarSign,
                title: "For Investors",
                subtitle: "Discover high-potential projects",
                action: "Start investing",
                gradient: "from-cyan-400 to-cyan-600",
                features: [
                  "Early access to promising projects",
                  "Transparent funding process",
                  "Community-driven due diligence",
                  "Potential for high returns",
                ],
              },
              {
                onClick: () => onNavigate("create"),
                icon: Rocket,
                title: "For Founders",
                subtitle: "Launch your blockchain project",
                action: "Submit project",
                gradient: "from-cyan-500 to-cyan-700",
                features: [
                  "Access to qualified investors",
                  "Expert project review",
                  "Transparent funding mechanics",
                  "Community support & feedback",
                ],
              },
              {
                onClick: () => onNavigate("portfolio"),
                icon: Target,
                title: "Portfolio",
                subtitle: "Track your investments",
                action: "View portfolio",
                gradient: "from-cyan-600 to-cyan-800",
                features: [
                  "Real-time portfolio tracking",
                  "Performance analytics",
                  "Investment history",
                  "Project management tools",
                ],
              },
            ].map((card, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Card
                  className="group hover:shadow-2xl transition-all duration-500 border-0 overflow-hidden bg-white shadow-lg cursor-pointer relative"
                  onClick={card.onClick}
                >
                  <motion.div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div
                    className={`relative h-48 bg-gradient-to-br ${card.gradient} overflow-hidden`}
                  >
                    <motion.div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />

                    <motion.div
                      className="absolute top-4 right-4 w-16 h-16 bg-white/10 rounded-full blur-lg"
                      animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 4 + index,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />

                    <div className="relative p-6 text-white h-full flex flex-col justify-between">
                      <div>
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          <card.icon className="w-12 h-12 mb-4" />
                        </motion.div>
                        <h3 className="text-2xl font-bold mb-2">
                          {card.title}
                        </h3>
                        <p className="text-cyan-100">{card.subtitle}</p>
                      </div>

                      <div className="flex items-center text-sm group-hover:translate-x-2 transition-transform duration-300">
                        <span>{card.action}</span>
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <ul className="space-y-2 text-gray-600">
                      {card.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            delay: index * 0.1 + featureIndex * 0.1,
                          }}
                        >
                          • {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="py-20 bg-gradient-to-br from-cyan-500 to-cyan-700 text-white relative overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
          animate={{ x: [-100, 100, -100] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="container mx-auto px-4 max-w-4xl text-center relative">
          <motion.h2
            className="text-4xl font-bold mb-6"
            animate={{
              textShadow: [
                "0 0 10px rgba(255,255,255,0.5)",
                "0 0 30px rgba(255,255,255,0.8)",
                "0 0 10px rgba(255,255,255,0.5)",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Ready to Build Wealth?
          </motion.h2>
          <p className="text-xl text-cyan-100 mb-8">
            Join successful investors funding breakthrough blockchain projects
            with exceptional growth potential.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                onClick={() => onNavigate("discover")}
                className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-6 text-lg shadow-xl"
              >
                <DollarSign className="w-5 h-5 mr-2" />
                Start Investing
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                onClick={() => onNavigate("create")}
                variant="outline"
                className="border-white/30 text-white bg-transparent hover:bg-white/10 px-8 py-6 text-lg"
              >
                Launch Your Project
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
