import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import {
  Search,
  Filter,
  Clock,
  DollarSign,
  TrendingUp,
  Zap,
  Star,
  SlidersHorizontal,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

interface DiscoverProjectsProps {
  onProjectClick: (projectId: string) => void;
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
    gradient: "from-blue-400 via-cyan-500 to-teal-600",
    tokenPrice: 0.4,
    minInvestment: 100,
    expectedReturn: "8-12x",
    hot: true,
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
    gradient: "from-purple-400 via-pink-500 to-red-500",
    tokenPrice: 0.03,
    minInvestment: 50,
    expectedReturn: "15-25x",
    hot: true,
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
    gradient: "from-emerald-400 via-teal-500 to-cyan-600",
    tokenPrice: 0.576,
    minInvestment: 500,
    expectedReturn: "5-8x",
    featured: true,
  },
  {
    id: "nexusai",
    name: "NexusAI",
    description:
      "Decentralized AI compute network enabling permissionless access to GPU resources for machine learning workloads.",
    category: "AI",
    minRaise: 1200000,
    committed: 890450,
    contributors: 178,
    daysLeft: 19,
    status: "active",
    gradient: "from-orange-400 via-amber-500 to-yellow-600",
    tokenPrice: 0.75,
    minInvestment: 200,
    expectedReturn: "20-40x",
  },
  {
    id: "quantumvault",
    name: "QuantumVault",
    description:
      "Next-generation privacy protocol using zero-knowledge proofs for confidential transactions and data storage.",
    category: "Privacy",
    minRaise: 650000,
    committed: 745280,
    contributors: 203,
    daysLeft: 12,
    status: "active",
    gradient: "from-indigo-400 via-purple-500 to-pink-600",
    tokenPrice: 0.25,
    minInvestment: 150,
    expectedReturn: "10-18x",
  },
  {
    id: "socialfi",
    name: "SocialFi Network",
    description:
      "Decentralized social media platform where users earn rewards for quality content and community engagement.",
    category: "Social",
    minRaise: 450000,
    committed: 628930,
    contributors: 412,
    daysLeft: 6,
    status: "active",
    gradient: "from-rose-400 via-pink-500 to-purple-600",
    tokenPrice: 0.18,
    minInvestment: 75,
    expectedReturn: "6-10x",
  },
  {
    id: "blockchain-gaming",
    name: "GameChain",
    description:
      "Revolutionary blockchain gaming infrastructure enabling true asset ownership and cross-game compatibility.",
    category: "Gaming",
    minRaise: 900000,
    committed: 425000,
    contributors: 156,
    daysLeft: 28,
    status: "active",
    gradient: "from-violet-400 via-purple-500 to-blue-600",
    tokenPrice: 0.12,
    minInvestment: 80,
    expectedReturn: "12-20x",
  },
  {
    id: "defi-insurance",
    name: "ShieldProtocol",
    description:
      "Decentralized insurance protocol providing coverage for DeFi protocols and smart contract risks.",
    category: "DeFi",
    minRaise: 550000,
    committed: 780000,
    contributors: 298,
    daysLeft: 16,
    status: "active",
    gradient: "from-green-400 via-emerald-500 to-teal-600",
    tokenPrice: 0.35,
    minInvestment: 120,
    expectedReturn: "6-12x",
  },
];

export function DiscoverProjects({ onProjectClick }: DiscoverProjectsProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [sortBy, setSortBy] = useState("trending");

  const filteredProjects = mockProjects.filter((project) => {
    const matchesSearch =
      project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || project.category === selectedCategory;
    const matchesStatus =
      selectedStatus === "all" || project.status === selectedStatus;

    return matchesSearch && matchesCategory && matchesStatus;
  });

  // Sort projects
  const sortedProjects = [...filteredProjects].sort((a, b) => {
    switch (sortBy) {
      case "newest":
        return b.daysLeft - a.daysLeft;
      case "ending-soon":
        return a.daysLeft - b.daysLeft;
      case "most-funded":
        return b.committed - a.committed;
      case "trending":
      default:
        return (
          (b.hot ? 1 : 0) - (a.hot ? 1 : 0) || b.contributors - a.contributors
        );
    }
  });

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
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
              Discover Projects
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore cutting-edge blockchain projects seeking investment.
              Filter by category, funding status, and more to find opportunities
              that match your investment strategy.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {mockProjects.length}
              </div>
              <div className="text-gray-600">Active Projects</div>
            </Card>
            <Card className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50">
              <div className="text-3xl font-bold text-green-600 mb-2">
                $12.3M
              </div>
              <div className="text-gray-600">Total Raised</div>
            </Card>
            <Card className="text-center p-6 bg-gradient-to-br from-purple-50 to-violet-50">
              <div className="text-3xl font-bold text-purple-600 mb-2">
                2,847
              </div>
              <div className="text-gray-600">Total Investors</div>
            </Card>
            <Card className="text-center p-6 bg-gradient-to-br from-orange-50 to-amber-50">
              <div className="text-3xl font-bold text-orange-600 mb-2">
                18.5x
              </div>
              <div className="text-gray-600">Best Return</div>
            </Card>
          </div>
        </motion.div>

        {/* Advanced Filters */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="p-6">
            <div className="flex items-center mb-4">
              <SlidersHorizontal className="w-5 h-5 mr-2 text-gray-600" />
              <h3 className="font-semibold text-lg">Filter & Sort</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {/* Search */}
              <div className="relative lg:col-span-2">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 h-12 border-gray-200 focus:border-blue-400"
                />
              </div>

              {/* Category Filter */}
              <Select
                value={selectedCategory}
                onValueChange={setSelectedCategory}
              >
                <SelectTrigger className="h-12 border-gray-200">
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="DeFi">DeFi</SelectItem>
                  <SelectItem value="AI">AI</SelectItem>
                  <SelectItem value="Privacy">Privacy</SelectItem>
                  <SelectItem value="Social">Social</SelectItem>
                  <SelectItem value="Gaming">Gaming</SelectItem>
                  <SelectItem value="Investment Fund">
                    Investment Fund
                  </SelectItem>
                </SelectContent>
              </Select>

              {/* Status Filter */}
              <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                <SelectTrigger className="h-12 border-gray-200">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="active">Open</SelectItem>
                  <SelectItem value="upcoming">Upcoming</SelectItem>
                  <SelectItem value="completed">Closed</SelectItem>
                </SelectContent>
              </Select>

              {/* Sort By */}
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="h-12 border-gray-200">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="trending">Trending</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="ending-soon">Ending Soon</SelectItem>
                  <SelectItem value="most-funded">Most Funded</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </Card>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {sortedProjects.map((project) => {
            const fundingPercentage =
              project.minRaise > 0
                ? (project.committed / project.minRaise) * 100
                : 100;

            return (
              <motion.div key={project.id} variants={itemVariants}>
                <Card className="group hover:shadow-2xl transition-all duration-500 border-0 overflow-hidden bg-white shadow-lg hover:-translate-y-2">
                  {/* Project Header */}
                  <div
                    className={`relative h-40 bg-gradient-to-br ${project.gradient} overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>

                    {/* Badges */}
                    <div className="absolute top-3 left-3 flex flex-col gap-1">
                      <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm text-xs">
                        {project.category}
                      </Badge>
                      {project.hot && (
                        <Badge className="bg-red-400/20 text-red-200 border-red-400/30 backdrop-blur-sm text-xs">
                          <Zap className="w-3 h-3 mr-1" />
                          Hot
                        </Badge>
                      )}
                      {project.featured && (
                        <Badge className="bg-yellow-400/20 text-yellow-200 border-yellow-400/30 backdrop-blur-sm text-xs">
                          <Star className="w-3 h-3 mr-1" />
                          Featured
                        </Badge>
                      )}
                    </div>

                    <div className="absolute top-3 right-3 flex items-center text-white text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      {project.daysLeft}d left
                    </div>

                    <div className="absolute bottom-3 left-3 right-3">
                      <h3 className="text-white font-bold text-lg mb-1">
                        {project.name}
                      </h3>
                      <Badge className="bg-green-400/20 text-green-200 border-green-400/30 text-xs">
                        Expected: {project.expectedReturn}
                      </Badge>
                    </div>
                  </div>

                  {/* Project Details */}
                  <CardContent className="p-4">
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Key Metrics */}
                    <div className="space-y-3 mb-4">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-500">Raised</span>
                        <span className="font-semibold">
                          ${(project.committed / 1000).toFixed(0)}k
                        </span>
                      </div>

                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-500">Token Price</span>
                        <span className="font-semibold">
                          ${project.tokenPrice}
                        </span>
                      </div>

                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-500">Min Investment</span>
                        <span className="font-semibold">
                          ${project.minInvestment}
                        </span>
                      </div>

                      {project.minRaise > 0 && (
                        <div className="space-y-1">
                          <Progress
                            value={Math.min(fundingPercentage, 100)}
                            className="h-2"
                          />
                          <div className="flex justify-between text-xs text-gray-500">
                            <span>
                              {Math.round(fundingPercentage)}% complete
                            </span>
                            <span>{project.contributors} investors</span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Action Button */}
                    <Button
                      onClick={() => onProjectClick(project.id)}
                      className="w-full bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white group-hover:scale-105 transition-transform"
                    >
                      <DollarSign className="w-4 h-4 mr-2" />
                      Invest Now
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* No Results */}
        {sortedProjects.length === 0 && (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              No projects found
            </h3>
            <p className="text-gray-500">
              Try adjusting your search criteria or filters
            </p>
          </motion.div>
        )}

        {/* Load More Button */}
        {sortedProjects.length > 0 && (
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Button variant="outline" size="lg" className="px-8">
              Load More Projects
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
