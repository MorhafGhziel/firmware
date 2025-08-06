import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Progress } from "./ui/progress";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import {
  Info,
  ExternalLink,
  Clock,
  Target,
  Zap,
  Globe,
  TrendingUp,
  CheckCircle,
  DollarSign,
  Calculator,
  Wallet,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

interface ProjectDetailsProps {
  projectId?: string | null;
}

export function ProjectDetails({
  projectId = "liquidbridge",
}: ProjectDetailsProps) {
  const [activeTab, setActiveTab] = useState("overview");
  const [investmentAmount, setInvestmentAmount] = useState("");
  const [isInvesting, setIsInvesting] = useState(false);

  // Mock project data - in a real app this would come from an API
  const projectData = {
    liquidbridge: {
      name: "LiquidBridge",
      fundingAmount: 1185420,
      minimumTarget: 800000,
      monthlyAllowance: 25000,
      gradient: "from-blue-400 via-cyan-500 to-teal-600",
      status: "Active Launch - 14 days remaining",
      description:
        "LiquidBridge is a revolutionary cross-chain liquidity aggregation protocol that eliminates the friction of multi-chain DeFi interactions. Our innovative bridge technology enables seamless asset transfers and yield optimization across 12+ blockchain networks, providing users with unified liquidity access and maximized capital efficiency through intelligent routing algorithms.",
      contributors: 246,
      tokenSymbol: "LQBR",
      tokenAddress: "LqBrX8mN2pRvH4qL9fW7aCdE3sG1tYuP6oI2jHyK9z",
      website: "https://liquidbridge.finance",
      docs: "https://docs.liquidbridge.finance",
      twitter: "https://twitter.com/liquidbridge",
      discord: "https://discord.gg/liquidbridge",
      github: "https://github.com/liquidbridge-protocol",
      minInvestment: 100,
      maxInvestment: 50000,
      tokenPrice: 0.4,
      expectedTokens: 10000000,
    },
    omnipair: {
      name: "Omnipair",
      fundingAmount: 1118102,
      minimumTarget: 300000,
      monthlyAllowance: 10000,
      gradient: "from-purple-400 via-pink-500 to-red-500",
      status: "Active Launch - 8 days remaining",
      description:
        "Omnipair is an immutable protocol that enables permissionless lending and margin trading without reliance on external oracles, governance, or asset whitelists. It introduces a Generalized Automated Market Maker that unifies liquidity for both swaps and lending within a single pool. This architecture maximizes capital efficiency and is purpose-built to support underserved long-tail assets.",
      contributors: 322,
      tokenSymbol: "OMFG",
      tokenAddress: "omfgRBnxHsNJh6YeGbGAmWenNkenzsXyBXm3WDhmeta",
      website: "https://omnipair.fi",
      docs: "https://docs.omnipair.fi/",
      twitter: "https://x.com/omnipair",
      discord: "https://discord.gg/omnipair",
      github: "https://github.com/omnipair-protocol",
      minInvestment: 50,
      maxInvestment: 25000,
      tokenPrice: 0.03,
      expectedTokens: 10000000,
    },
    mtncapital: {
      name: "mtnCapital",
      fundingAmount: 5758964,
      minimumTarget: 0,
      monthlyAllowance: 50000,
      gradient: "from-emerald-400 via-teal-500 to-cyan-600",
      status: "Active Launch - 22 days remaining",
      description:
        "mtnCapital is the first futarchy-governed investment fund that leverages prediction markets to make optimal investment decisions. Our unique approach combines traditional venture capital strategies with decentralized governance mechanisms, allowing token holders to participate in fund management through market-based decision making.",
      contributors: 891,
      tokenSymbol: "MTC",
      tokenAddress: "MtcX7mN2pRvH4qL9fW7aCdE3sG1tYuP6oI2jHyK8z",
      website: "https://mtncapital.fund",
      docs: "https://docs.mtncapital.fund",
      twitter: "https://twitter.com/mtncapital",
      discord: "https://discord.gg/mtncapital",
      github: "https://github.com/mtncapital-fund",
      minInvestment: 500,
      maxInvestment: 100000,
      tokenPrice: 0.576,
      expectedTokens: 10000000,
    },
  };

  const project =
    projectData[projectId as keyof typeof projectData] ||
    projectData.liquidbridge;
  const fundingPercentage =
    project.minimumTarget > 0
      ? (project.fundingAmount / project.minimumTarget) * 100
      : 100;

  // Investment calculations
  const investmentAmountNum = parseFloat(investmentAmount) || 0;
  const expectedTokens =
    investmentAmountNum > 0 ? investmentAmountNum / project.tokenPrice : 0;
  const investmentPercentage =
    investmentAmountNum > 0
      ? (investmentAmountNum / project.fundingAmount) * 100
      : 0;

  const handleInvestment = async () => {
    if (investmentAmountNum < project.minInvestment) return;

    setIsInvesting(true);
    // Simulate investment process
    setTimeout(() => {
      setIsInvesting(false);
      setInvestmentAmount("");
      // Here you would show success message or redirect
      alert(`Successfully invested $${investmentAmount} in ${project.name}!`);
    }, 2000);
  };

  const setQuickAmount = (amount: number) => {
    setInvestmentAmount(amount.toString());
  };

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
    <motion.div
      className="grid grid-cols-1 lg:grid-cols-3 gap-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Main Project Info */}
      <div className="lg:col-span-2 space-y-8">
        {/* Hero Section */}
        <motion.div variants={itemVariants}>
          <Card className="overflow-hidden border-0 shadow-2xl">
            <div
              className={`relative h-80 bg-gradient-to-br ${project.gradient}`}
            >
              {/* Animated background elements */}
              <div className="absolute inset-0">
                <motion.div
                  className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <motion.div
                  className="absolute bottom-10 left-10 w-24 h-24 bg-white/10 rounded-full blur-lg"
                  animate={{
                    scale: [1.2, 1, 1.2],
                    rotate: [360, 180, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              <div className="relative p-8 text-white h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <motion.h1
                      className="text-5xl font-bold bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent"
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    >
                      {project.name}
                    </motion.h1>
                    <Button
                      variant="secondary"
                      size="sm"
                      className="bg-white/20 hover:bg-white/30 text-white border-white/30 backdrop-blur-sm"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Share
                    </Button>
                  </div>

                  <motion.div
                    className="flex items-center space-x-3 mb-6"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <div className="flex items-center space-x-2">
                      <motion.div
                        className="w-3 h-3 bg-green-400 rounded-full"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <span className="text-sm font-medium">
                        {project.status}
                      </span>
                    </div>
                    <Badge
                      variant="secondary"
                      className="bg-white/20 text-white border-white/30"
                    >
                      <Zap className="w-3 h-3 mr-1" />
                      Hot
                    </Badge>
                  </motion.div>
                </div>

                <div className="space-y-6">
                  <motion.div
                    className="text-3xl font-bold"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    ${project.fundingAmount.toLocaleString()}
                    <span className="text-lg font-normal text-cyan-100 ml-2">
                      raised
                    </span>
                  </motion.div>

                  <div className="space-y-3">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 1, delay: 0.8 }}
                    >
                      <Progress
                        value={Math.min(fundingPercentage, 100)}
                        className="h-4 bg-white/20 border border-white/20"
                      >
                        <motion.div
                          className="h-full bg-gradient-to-r from-cyan-300 to-green-400 rounded-full shadow-lg"
                          initial={{ width: 0 }}
                          animate={{
                            width: `${Math.min(fundingPercentage, 100)}%`,
                          }}
                          transition={{ duration: 1.5, delay: 1 }}
                        />
                      </Progress>
                    </motion.div>
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">
                        {project.minimumTarget > 0
                          ? `${Math.round(
                              fundingPercentage
                            )}% of $${project.minimumTarget.toLocaleString()} minimum`
                          : "No minimum target"}
                      </span>
                      <div className="flex items-center space-x-1 bg-white/10 px-2 py-1 rounded backdrop-blur-sm">
                        <Info className="w-4 h-4" />
                        <span>
                          ${project.monthlyAllowance.toLocaleString()} monthly
                          budget
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div variants={itemVariants}>
          <Card className="p-2">
            <div className="flex space-x-1">
              {["overview", "problem", "solution", "tokenomics", "terms"].map(
                (tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 rounded-md transition-all duration-200 capitalize ${
                      activeTab === tab
                        ? "bg-blue-500 text-white shadow-lg"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    {tab}
                  </button>
                )
              )}
            </div>
          </Card>
        </motion.div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {activeTab === "overview" && (
            <Card className="shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <Globe className="w-8 h-8 text-blue-500" />
                  <h2 className="text-3xl font-bold">
                    {project.name} Protocol
                  </h2>
                </div>

                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {project.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border border-blue-100">
                    <Target className="w-8 h-8 text-blue-500 mb-3" />
                    <h3 className="font-semibold mb-2">Multi-Chain Support</h3>
                    <p className="text-gray-600 text-sm">
                      Supporting major blockchain networks with seamless
                      interoperability
                    </p>
                  </div>
                  <div className="p-6 bg-gradient-to-br from-green-50 to-teal-50 rounded-xl border border-green-100">
                    <TrendingUp className="w-8 h-8 text-green-500 mb-3" />
                    <h3 className="font-semibold mb-2">Advanced Technology</h3>
                    <p className="text-gray-600 text-sm">
                      Cutting-edge protocols designed for maximum efficiency and
                      security
                    </p>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <div>
                    <span className="text-gray-500">Official website: </span>
                    <a
                      href="#"
                      className="text-blue-500 hover:underline font-medium"
                    >
                      {project.website}
                    </a>
                  </div>
                  <div>
                    <span className="text-gray-500">
                      Technical documentation:{" "}
                    </span>
                    <a
                      href="#"
                      className="text-blue-500 hover:underline font-medium"
                    >
                      {project.docs}
                    </a>
                  </div>
                  <div>
                    <span className="text-gray-500">
                      Follow us on Twitter:{" "}
                    </span>
                    <a
                      href="#"
                      className="text-blue-500 hover:underline font-medium"
                    >
                      {project.twitter}
                    </a>
                  </div>
                  <div>
                    <span className="text-gray-500">Community Discord: </span>
                    <a
                      href="#"
                      className="text-blue-500 hover:underline font-medium"
                    >
                      {project.discord}
                    </a>
                  </div>
                  <div>
                    <span className="text-gray-500">GitHub Repository: </span>
                    <a
                      href="#"
                      className="text-blue-500 hover:underline font-medium"
                    >
                      {project.github}
                    </a>
                  </div>
                  <div>
                    <span className="text-gray-500">
                      {project.name} Token (${project.tokenSymbol}):{" "}
                    </span>
                    <a
                      href="#"
                      className="text-blue-500 hover:underline font-mono text-xs"
                    >
                      {project.tokenAddress}
                    </a>
                  </div>
                </div>

                <div className="p-6 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-xl border border-blue-200">
                  <p className="text-gray-700 font-medium">
                    {project.minimumTarget > 0
                      ? `With a $${(
                          project.minimumTarget / 1000
                        ).toLocaleString()}k minimum target, the funding will accelerate development, security audits, and team expansion over the next 18-24 months.`
                      : "This open funding campaign supports continuous development and innovation with transparent monthly budget allocation."}
                  </p>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Other tab content remains the same but could be customized per project */}
          {activeTab !== "overview" && (
            <Card className="shadow-xl">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-6 capitalize">
                  {activeTab}
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Detailed {activeTab} information for {project.name} would be
                  displayed here. This content would be customized based on the
                  selected project and tab.
                </p>
              </CardContent>
            </Card>
          )}
        </motion.div>
      </div>

      {/* Sidebar */}
      <div className="space-y-6">
        {/* Investment Section */}
        <motion.div variants={itemVariants}>
          <Card className="shadow-xl border-2 border-blue-100">
            <CardContent className="p-6">
              <motion.div
                className={`w-20 h-20 bg-gradient-to-br ${project.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <DollarSign className="w-10 h-10 text-white" />
              </motion.div>

              <div className="text-center mb-6">
                <h3 className="text-xl font-bold mb-2">
                  Invest in {project.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  Token Price:{" "}
                  <span className="font-semibold">${project.tokenPrice}</span>
                </p>
              </div>

              {/* Investment Amount Input */}
              <div className="space-y-4 mb-6">
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Investment Amount (USDC)
                  </label>
                  <Input
                    type="number"
                    placeholder="Enter amount"
                    value={investmentAmount}
                    onChange={(e) => setInvestmentAmount(e.target.value)}
                    className="text-center text-lg font-semibold"
                    min={project.minInvestment}
                    max={project.maxInvestment}
                  />
                </div>

                {/* Quick Amount Buttons */}
                <div className="grid grid-cols-3 gap-2">
                  {[250, 500, 1000].map((amount) => (
                    <Button
                      key={amount}
                      variant="outline"
                      size="sm"
                      onClick={() => setQuickAmount(amount)}
                      className="text-xs"
                    >
                      ${amount}
                    </Button>
                  ))}
                </div>

                <div className="text-xs text-gray-500 text-center">
                  Min: ${project.minInvestment} • Max: $
                  {project.maxInvestment.toLocaleString()}
                </div>
              </div>

              {/* Investment Calculation */}
              {investmentAmountNum > 0 && (
                <motion.div
                  className="bg-gray-50 rounded-lg p-4 mb-6 space-y-3"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">You will receive:</span>
                    <span className="font-semibold">
                      {expectedTokens.toLocaleString()} {project.tokenSymbol}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Your ownership:</span>
                    <span className="font-semibold">
                      {investmentPercentage.toFixed(3)}%
                    </span>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between text-sm font-semibold">
                    <span>Total Investment:</span>
                    <span>${investmentAmountNum.toLocaleString()}</span>
                  </div>
                </motion.div>
              )}

              {/* Investment Button */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  className={`w-full bg-gradient-to-r ${project.gradient} hover:shadow-lg text-white shadow-lg disabled:opacity-50`}
                  disabled={
                    investmentAmountNum < project.minInvestment ||
                    investmentAmountNum > project.maxInvestment ||
                    isInvesting
                  }
                  onClick={handleInvestment}
                >
                  {isInvesting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"
                    />
                  ) : (
                    <Wallet className="w-4 h-4 mr-2" />
                  )}
                  {isInvesting ? "Processing..." : "Invest Now"}
                </Button>
              </motion.div>

              <div className="mt-4 text-center">
                <p className="text-xs text-gray-500">
                  🔒 Secured by multi-signature smart contracts
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Investment Stats */}
        <motion.div variants={itemVariants}>
          <Card className="shadow-xl">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-4 flex items-center">
                <Calculator className="w-5 h-5 mr-2" />
                Investment Overview
              </h3>

              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                  <span className="text-sm text-gray-600">Token Supply</span>
                  <span className="font-semibold">
                    {project.expectedTokens.toLocaleString()}
                  </span>
                </div>

                <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                  <span className="text-sm text-gray-600">Current Price</span>
                  <span className="font-semibold">${project.tokenPrice}</span>
                </div>

                <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                  <span className="text-sm text-gray-600">Market Cap</span>
                  <span className="font-semibold">
                    $
                    {(
                      (project.expectedTokens * project.tokenPrice) /
                      1000000
                    ).toFixed(1)}
                    M
                  </span>
                </div>

                <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                  <span className="text-sm text-gray-600">Fully Diluted</span>
                  <span className="font-semibold">
                    $
                    {(
                      (project.expectedTokens * project.tokenPrice) /
                      1000000
                    ).toFixed(1)}
                    M
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Contributors Section */}
        <motion.div variants={itemVariants}>
          <Card className="shadow-xl">
            <CardContent className="p-6 text-center">
              <h3 className="font-semibold mb-6">Top Contributors</h3>

              <div className="relative w-36 h-36 mx-auto mb-6">
                <motion.div
                  className="absolute inset-0 rounded-full border-8 border-gray-200"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
                <motion.div
                  className="absolute inset-0 rounded-full border-t-8 border-blue-500"
                  style={{ transform: "rotate(268deg)" }}
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 268 }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <motion.div
                      className="text-3xl font-bold text-blue-600"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1 }}
                    >
                      {project.contributors}
                    </motion.div>
                    <div className="text-sm text-gray-500">Contributors</div>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm p-2 bg-gray-50 rounded-lg">
                  <span className="text-gray-600 font-mono">0x8f3a...2d7e</span>
                  <span className="font-medium text-blue-600">$78,500</span>
                </div>
                <div className="flex justify-between items-center text-sm p-2 bg-gray-50 rounded-lg">
                  <span className="text-gray-600 font-mono">0x2b9c...8f1a</span>
                  <span className="font-medium text-blue-600">$65,200</span>
                </div>
                <div className="flex justify-between items-center text-sm p-2 bg-gray-50 rounded-lg">
                  <span className="text-gray-600 font-mono">0x7d4e...3c9b</span>
                  <span className="font-medium text-blue-600">$52,800</span>
                </div>
                <div className="text-xs text-gray-500 mt-3">
                  +{project.contributors - 3} more contributors
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Development Timeline */}
        <motion.div variants={itemVariants}>
          <Card className="shadow-xl">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-6">Development Timeline</h3>

              <div className="space-y-5">
                <motion.div
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mt-1 shadow-md">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-sm">
                      Q4 2024 - Core Protocol
                    </div>
                    <div className="text-xs text-gray-500">
                      Smart contracts & initial features
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mt-1 shadow-md">
                    <Clock className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-sm">
                      Q1 2025 - Mainnet Launch
                    </div>
                    <div className="text-xs text-gray-500">
                      Public release & token distribution
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mt-1 shadow-md">
                    <Target className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-sm">
                      Q2 2025 - Expansion
                    </div>
                    <div className="text-xs text-gray-500">
                      Advanced features & partnerships
                    </div>
                  </div>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
}
