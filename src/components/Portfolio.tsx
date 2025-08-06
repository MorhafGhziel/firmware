import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  Target,
  Edit,
  ExternalLink,
  PieChart,
  BarChart3,
  Wallet,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

interface PortfolioProps {
  onProjectClick: (projectId: string) => void;
}

const mockInvestments = [
  {
    id: "liquidbridge",
    name: "LiquidBridge",
    ticker: "LQBR",
    invested: 2500,
    tokens: 6250,
    currentValue: 3200,
    pnl: 700,
    pnlPercent: 28,
    status: "active",
    gradient: "from-blue-400 via-cyan-500 to-teal-600",
    investedDate: "2024-11-15",
  },
  {
    id: "omnipair",
    name: "Omnipair",
    ticker: "OMFG",
    invested: 1000,
    tokens: 33333,
    currentValue: 1450,
    pnl: 450,
    pnlPercent: 45,
    status: "active",
    gradient: "from-purple-400 via-pink-500 to-red-500",
    investedDate: "2024-11-10",
  },
  {
    id: "mtncapital",
    name: "mtnCapital",
    ticker: "MTC",
    invested: 5000,
    tokens: 8681,
    currentValue: 4200,
    pnl: -800,
    pnlPercent: -16,
    status: "active",
    gradient: "from-emerald-400 via-teal-500 to-cyan-600",
    investedDate: "2024-10-28",
  },
];

const mockLaunchedProjects = [
  {
    id: "defi-vault",
    name: "DefiVault",
    ticker: "DVT",
    category: "DeFi",
    status: "approved",
    launched: "2024-11-20",
    raised: 850000,
    target: 500000,
    contributors: 142,
    gradient: "from-green-400 via-emerald-500 to-teal-600",
  },
  {
    id: "nft-marketplace",
    name: "NFT Exchange",
    ticker: "NFTX",
    category: "NFT",
    status: "in-review",
    submitted: "2024-11-22",
    gradient: "from-purple-400 via-violet-500 to-pink-600",
  },
];

export function Portfolio({ onProjectClick }: PortfolioProps) {
  const [activeTab, setActiveTab] = useState("investments");

  const totalInvested = mockInvestments.reduce(
    (sum, inv) => sum + inv.invested,
    0
  );
  const totalCurrentValue = mockInvestments.reduce(
    (sum, inv) => sum + inv.currentValue,
    0
  );
  const totalPnL = totalCurrentValue - totalInvested;
  const totalPnLPercent = (totalPnL / totalInvested) * 100;

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
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
                Portfolio
              </h1>
              <p className="text-xl text-gray-600">
                Track your investments and launched projects
              </p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold mb-1">
                ${totalCurrentValue.toLocaleString()}
              </div>
              <div
                className={`flex items-center justify-end ${
                  totalPnL >= 0 ? "text-green-600" : "text-red-600"
                }`}
              >
                {totalPnL >= 0 ? (
                  <TrendingUp className="w-4 h-4 mr-1" />
                ) : (
                  <TrendingDown className="w-4 h-4 mr-1" />
                )}
                ${Math.abs(totalPnL).toLocaleString()} (
                {totalPnLPercent >= 0 ? "+" : ""}
                {totalPnLPercent.toFixed(1)}%)
              </div>
            </div>
          </div>

          {/* Portfolio Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-100">
              <CardContent className="p-6 text-center">
                <Wallet className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-blue-600 mb-1">
                  ${totalInvested.toLocaleString()}
                </div>
                <div className="text-sm text-gray-600">Total Invested</div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-100">
              <CardContent className="p-6 text-center">
                <TrendingUp className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-green-600 mb-1">
                  ${totalCurrentValue.toLocaleString()}
                </div>
                <div className="text-sm text-gray-600">Current Value</div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50 to-violet-50 border-purple-100">
              <CardContent className="p-6 text-center">
                <PieChart className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-purple-600 mb-1">
                  {mockInvestments.length}
                </div>
                <div className="text-sm text-gray-600">Active Investments</div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-orange-50 to-amber-50 border-orange-100">
              <CardContent className="p-6 text-center">
                <Target className="w-8 h-8 text-orange-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-orange-600 mb-1">
                  {mockLaunchedProjects.length}
                </div>
                <div className="text-sm text-gray-600">Projects Launched</div>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* Tabs */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="space-y-8"
          >
            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto">
              <TabsTrigger value="investments">My Investments</TabsTrigger>
              <TabsTrigger value="launched">My Projects</TabsTrigger>
            </TabsList>

            {/* Investments Tab */}
            <TabsContent value="investments" className="space-y-6">
              <motion.div variants={itemVariants}>
                <Card className="shadow-xl">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <BarChart3 className="w-6 h-6 mr-3 text-blue-500" />
                      Investment Portfolio
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {mockInvestments.map((investment) => (
                        <div
                          key={investment.id}
                          className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow cursor-pointer"
                          onClick={() => onProjectClick(investment.id)}
                        >
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center space-x-4">
                              <div
                                className={`w-12 h-12 bg-gradient-to-br ${investment.gradient} rounded-xl flex items-center justify-center shadow-md`}
                              >
                                <DollarSign className="w-6 h-6 text-white" />
                              </div>
                              <div>
                                <h3 className="font-bold text-lg">
                                  {investment.name}
                                </h3>
                                <p className="text-gray-600 text-sm">
                                  ${investment.ticker} • Invested{" "}
                                  {investment.investedDate}
                                </p>
                              </div>
                            </div>
                            <Badge
                              className={`${
                                investment.pnl >= 0
                                  ? "bg-green-100 text-green-800 border-green-200"
                                  : "bg-red-100 text-red-800 border-red-200"
                              }`}
                            >
                              {investment.pnl >= 0 ? "+" : ""}
                              {investment.pnlPercent.toFixed(1)}%
                            </Badge>
                          </div>

                          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm">
                            <div>
                              <div className="text-gray-500 mb-1">Invested</div>
                              <div className="font-semibold">
                                ${investment.invested.toLocaleString()}
                              </div>
                            </div>
                            <div>
                              <div className="text-gray-500 mb-1">Tokens</div>
                              <div className="font-semibold">
                                {investment.tokens.toLocaleString()}
                              </div>
                            </div>
                            <div>
                              <div className="text-gray-500 mb-1">
                                Current Value
                              </div>
                              <div className="font-semibold">
                                ${investment.currentValue.toLocaleString()}
                              </div>
                            </div>
                            <div>
                              <div className="text-gray-500 mb-1">P&L</div>
                              <div
                                className={`font-semibold ${
                                  investment.pnl >= 0
                                    ? "text-green-600"
                                    : "text-red-600"
                                }`}
                              >
                                {investment.pnl >= 0 ? "+" : ""}$
                                {investment.pnl.toLocaleString()}
                              </div>
                            </div>
                            <div className="flex justify-end">
                              <Button
                                variant="outline"
                                size="sm"
                                className="h-8"
                              >
                                <ExternalLink className="w-4 h-4 mr-1" />
                                View
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            {/* Launched Projects Tab */}
            <TabsContent value="launched" className="space-y-6">
              <motion.div variants={itemVariants}>
                <Card className="shadow-xl">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Target className="w-6 h-6 mr-3 text-blue-500" />
                        Launched Projects
                      </div>
                      <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                        Launch New Project
                      </Button>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {mockLaunchedProjects.map((project) => (
                        <div
                          key={project.id}
                          className="p-6 border border-gray-200 rounded-xl"
                        >
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center space-x-4">
                              <div
                                className={`w-12 h-12 bg-gradient-to-br ${project.gradient} rounded-xl flex items-center justify-center shadow-md`}
                              >
                                <Target className="w-6 h-6 text-white" />
                              </div>
                              <div>
                                <h3 className="font-bold text-lg">
                                  {project.name}
                                </h3>
                                <p className="text-gray-600 text-sm">
                                  ${project.ticker} • {project.category}
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center space-x-3">
                              <Badge
                                className={`${
                                  project.status === "approved"
                                    ? "bg-green-100 text-green-800 border-green-200"
                                    : project.status === "in-review"
                                    ? "bg-yellow-100 text-yellow-800 border-yellow-200"
                                    : "bg-gray-100 text-gray-800 border-gray-200"
                                }`}
                              >
                                {project.status === "approved"
                                  ? "Live"
                                  : project.status === "in-review"
                                  ? "Under Review"
                                  : "Draft"}
                              </Badge>
                              <Button variant="outline" size="sm">
                                <Edit className="w-4 h-4 mr-1" />
                                Edit
                              </Button>
                            </div>
                          </div>

                          {project.status === "approved" ? (
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                              <div>
                                <div className="text-gray-500 mb-1">Raised</div>
                                <div className="font-semibold">
                                  ${project.raised?.toLocaleString() || "0"}
                                </div>
                              </div>
                              <div>
                                <div className="text-gray-500 mb-1">Target</div>
                                <div className="font-semibold">
                                  ${project.target?.toLocaleString() || "0"}
                                </div>
                              </div>
                              <div>
                                <div className="text-gray-500 mb-1">
                                  Contributors
                                </div>
                                <div className="font-semibold">
                                  {project.contributors}
                                </div>
                              </div>
                              <div>
                                <div className="text-gray-500 mb-1">
                                  Success Rate
                                </div>
                                <div className="font-semibold text-green-600">
                                  {project.raised && project.target
                                    ? (
                                        (project.raised / project.target) *
                                        100
                                      ).toFixed(0)
                                    : "0"}
                                  %
                                </div>
                              </div>
                            </div>
                          ) : (
                            <div className="text-sm">
                              <div className="text-gray-500 mb-1">
                                Submitted
                              </div>
                              <div className="font-semibold">
                                {project.submitted}
                              </div>
                              <p className="text-gray-600 mt-2">
                                Your project is currently under review by our
                                team. You'll receive an email notification once
                                the review is complete.
                              </p>
                            </div>
                          )}

                          {project.status === "approved" && (
                            <div className="mt-4">
                              <Progress
                                value={
                                  project.raised && project.target
                                    ? (project.raised / project.target) * 100
                                    : 0
                                }
                                className="h-2"
                              />
                            </div>
                          )}
                        </div>
                      ))}

                      {mockLaunchedProjects.length === 0 && (
                        <div className="text-center py-12">
                          <Target className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                          <h3 className="text-xl font-semibold text-gray-600 mb-2">
                            No projects launched yet
                          </h3>
                          <p className="text-gray-500 mb-6">
                            Ready to bring your blockchain project to life?
                          </p>
                          <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                            Launch Your First Project
                          </Button>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
}
