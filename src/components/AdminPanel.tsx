import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import {
  Shield,
  CheckCircle,
  X,
  Clock,
  Search,
  Filter,
  Users,
  DollarSign,
  TrendingUp,
  AlertTriangle,
  FileText,
  Eye,
  Settings,
  Database,
  Activity,
  BarChart3,
  Zap,
  Ban,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

interface AdminPanelProps {
  onProjectClick: (projectId: string) => void;
}

const mockPendingProjects = [
  {
    id: "quantum-defi",
    name: "QuantumDeFi",
    ticker: "QDF",
    category: "DeFi",
    submittedBy: "0x742d...35a3",
    submittedDate: "2024-11-25",
    requestedAmount: 1200000,
    tokenPrice: 0.25,
    teamSize: 8,
    description:
      "Advanced quantum-resistant DeFi protocol for next-generation financial applications",
    website: "https://quantumdefi.com",
    whitepaper: "https://docs.quantumdefi.com/whitepaper.pdf",
    riskLevel: "medium",
  },
  {
    id: "ai-oracle",
    name: "AI Oracle Network",
    ticker: "AION",
    category: "AI",
    submittedBy: "0x891c...67f2",
    submittedDate: "2024-11-24",
    requestedAmount: 800000,
    tokenPrice: 0.15,
    teamSize: 5,
    description:
      "Decentralized AI oracle network providing machine learning predictions for smart contracts",
    website: "https://aioracle.network",
    whitepaper: "https://docs.aioracle.network/whitepaper.pdf",
    riskLevel: "low",
  },
  {
    id: "social-dao",
    name: "SocialDAO",
    ticker: "SDAO",
    category: "Social",
    submittedBy: "0x456e...89b1",
    submittedDate: "2024-11-23",
    requestedAmount: 2000000,
    tokenPrice: 0.5,
    teamSize: 12,
    description:
      "Governance protocol for decentralized social media platforms and content monetization",
    website: "https://socialdao.org",
    whitepaper: "https://docs.socialdao.org/whitepaper.pdf",
    riskLevel: "high",
  },
];

const mockApprovedProjects = [
  {
    id: "liquidbridge",
    name: "LiquidBridge",
    ticker: "LQBR",
    approvedDate: "2024-11-01",
    raised: 1185420,
    target: 800000,
    contributors: 246,
    status: "active",
  },
  {
    id: "omnipair",
    name: "Omnipair",
    ticker: "OMFG",
    approvedDate: "2024-10-28",
    raised: 1118102,
    target: 300000,
    contributors: 322,
    status: "active",
  },
];

const mockUsers = [
  {
    id: "user1",
    address: "0x742d...35a3",
    totalInvested: 25000,
    projectsInvested: 8,
    projectsLaunched: 2,
    status: "verified",
    joinDate: "2024-06-15",
    riskScore: "low",
  },
  {
    id: "user2",
    address: "0x891c...67f2",
    totalInvested: 125000,
    projectsInvested: 15,
    projectsLaunched: 0,
    status: "verified",
    joinDate: "2024-03-22",
    riskScore: "low",
  },
  {
    id: "user3",
    address: "0x456e...89b1",
    totalInvested: 500,
    projectsInvested: 1,
    projectsLaunched: 1,
    status: "flagged",
    joinDate: "2024-11-20",
    riskScore: "high",
  },
];

const platformStats = {
  totalProjects: 847,
  totalFunded: 24700000,
  totalInvestors: 12847,
  successRate: 89,
  pendingReviews: 3,
  activeProjects: 23,
  avgReturn: 12.3,
  totalUsers: 15432,
  monthlyRevenue: 89500,
  avgProjectValue: 850000,
};

export function AdminPanel({ onProjectClick }: AdminPanelProps) {
  const [activeTab, setActiveTab] = useState("pending");
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");
  const [filterRisk, setFilterRisk] = useState("all");

  const handleApprove = (projectId: string) => {
    alert(`Project ${projectId} approved! Notification sent to founder.`);
  };

  const handleReject = (projectId: string) => {
    const reason = prompt("Reason for rejection:");
    if (reason) {
      alert(`Project ${projectId} rejected. Reason: ${reason}`);
    }
  };

  const handleUserAction = (userId: string, action: string) => {
    alert(`User ${userId} ${action} successfully.`);
  };

  const filteredPendingProjects = mockPendingProjects.filter((project) => {
    const matchesSearch =
      project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.ticker.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      filterCategory === "all" || project.category === filterCategory;
    const matchesRisk =
      filterRisk === "all" || project.riskLevel === filterRisk;

    return matchesSearch && matchesCategory && matchesRisk;
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
    <div className="min-h-screen py-8 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center mb-8">
            <motion.div
              className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg mr-6 neon-glow"
              animate={{
                boxShadow: [
                  "0 0 20px #06b6d4",
                  "0 0 40px #06b6d4",
                  "0 0 20px #06b6d4",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Shield className="w-8 h-8 text-white" />
              </motion.div>
            </motion.div>
            <div>
              <motion.h1
                className="text-5xl font-bold mb-2 neon-text"
                animate={{
                  textShadow: [
                    "0 0 10px #06b6d4",
                    "0 0 30px #06b6d4",
                    "0 0 10px #06b6d4",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Admin Control Panel
              </motion.h1>
              <p className="text-xl text-gray-600">
                Manage platform operations, review projects, and monitor system
                health
              </p>
            </div>
          </div>

          {/* Platform Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {[
              {
                label: "Total Projects",
                value: platformStats.totalProjects,
                color: "blue",
                icon: BarChart3,
              },
              {
                label: "Total Funded",
                value: `$${(platformStats.totalFunded / 1000000).toFixed(1)}M`,
                color: "green",
                icon: DollarSign,
              },
              {
                label: "Total Investors",
                value: platformStats.totalInvestors.toLocaleString(),
                color: "purple",
                icon: Users,
              },
              {
                label: "Success Rate",
                value: `${platformStats.successRate}%`,
                color: "orange",
                icon: TrendingUp,
              },
              {
                label: "Pending Reviews",
                value: platformStats.pendingReviews,
                color: "red",
                icon: Clock,
              },
              {
                label: "Active Projects",
                value: platformStats.activeProjects,
                color: "indigo",
                icon: Activity,
              },
              {
                label: "Avg Return",
                value: `${platformStats.avgReturn}x`,
                color: "teal",
                icon: Zap,
              },
              {
                label: "Monthly Revenue",
                value: `$${(platformStats.monthlyRevenue / 1000).toFixed(0)}k`,
                color: "cyan",
                icon: Database,
              },
            ].map((stat, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card
                  className={`bg-gradient-to-br from-${stat.color}-50 to-${stat.color}-100 border-${stat.color}-200 hover:shadow-lg transition-all duration-300`}
                >
                  <CardContent className="p-4 text-center">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    >
                      <stat.icon
                        className={`w-6 h-6 text-${stat.color}-600 mx-auto mb-2`}
                      />
                    </motion.div>
                    <motion.div
                      className={`text-xl font-bold text-${stat.color}-600 mb-1`}
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.2,
                      }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-xs text-gray-600">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Main Content */}
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
            <TabsList className="grid w-full grid-cols-5 max-w-2xl mx-auto bg-gray-100 p-1 rounded-xl">
              {[
                {
                  value: "pending",
                  label: "Pending",
                  count: platformStats.pendingReviews,
                },
                { value: "approved", label: "Approved", count: null },
                { value: "users", label: "Users", count: null },
                { value: "analytics", label: "Analytics", count: null },
                { value: "settings", label: "Settings", count: null },
              ].map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="relative data-[state=active]:bg-cyan-500 data-[state=active]:text-white transition-all duration-300"
                >
                  {tab.label}
                  {tab.count && (
                    <motion.span
                      className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      {tab.count}
                    </motion.span>
                  )}
                </TabsTrigger>
              ))}
            </TabsList>

            {/* Pending Reviews Tab */}
            <TabsContent value="pending" className="space-y-6">
              <motion.div variants={itemVariants}>
                {/* Filters */}
                <Card className="p-6 bg-gradient-to-r from-cyan-50 to-white border-cyan-200">
                  <div className="flex items-center mb-4">
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      <Filter className="w-5 h-5 mr-2 text-cyan-600" />
                    </motion.div>
                    <h3 className="font-semibold text-lg text-cyan-700">
                      Filter Submissions
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <Input
                        placeholder="Search projects..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 h-12 border-cyan-200 focus:border-cyan-400"
                      />
                    </div>

                    <Select
                      value={filterCategory}
                      onValueChange={setFilterCategory}
                    >
                      <SelectTrigger className="h-12 border-cyan-200">
                        <SelectValue placeholder="Category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Categories</SelectItem>
                        <SelectItem value="DeFi">DeFi</SelectItem>
                        <SelectItem value="AI">AI</SelectItem>
                        <SelectItem value="Social">Social</SelectItem>
                        <SelectItem value="Gaming">Gaming</SelectItem>
                      </SelectContent>
                    </Select>

                    <Select value={filterRisk} onValueChange={setFilterRisk}>
                      <SelectTrigger className="h-12 border-cyan-200">
                        <SelectValue placeholder="Risk Level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Risk Levels</SelectItem>
                        <SelectItem value="low">Low Risk</SelectItem>
                        <SelectItem value="medium">Medium Risk</SelectItem>
                        <SelectItem value="high">High Risk</SelectItem>
                      </SelectContent>
                    </Select>

                    <div className="text-sm text-gray-500 flex items-center justify-center bg-white rounded-lg border border-cyan-200 px-4">
                      <motion.span
                        animate={{ color: ["#6b7280", "#06b6d4", "#6b7280"] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        {filteredPendingProjects.length} projects found
                      </motion.span>
                    </div>
                  </div>
                </Card>

                {/* Pending Projects */}
                <div className="space-y-6">
                  {filteredPendingProjects.map((project, index) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card className="shadow-lg border-l-4 border-l-cyan-400 hover:shadow-xl transition-all duration-300 bg-white">
                        <motion.div className="absolute inset-0 bg-gradient-to-r from-cyan-50/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                        <CardContent className="p-6 relative">
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex-1">
                              <div className="flex items-center space-x-3 mb-2">
                                <motion.h3
                                  className="text-xl font-bold"
                                  whileHover={{ scale: 1.05 }}
                                >
                                  {project.name}
                                </motion.h3>
                                <Badge
                                  variant="outline"
                                  className="border-cyan-300"
                                >
                                  ${project.ticker}
                                </Badge>
                                <Badge className="bg-cyan-100 text-cyan-800 border-cyan-200">
                                  {project.category}
                                </Badge>
                                <Badge
                                  className={`${
                                    project.riskLevel === "low"
                                      ? "bg-green-100 text-green-800 border-green-200"
                                      : project.riskLevel === "medium"
                                      ? "bg-yellow-100 text-yellow-800 border-yellow-200"
                                      : "bg-red-100 text-red-800 border-red-200"
                                  }`}
                                >
                                  {project.riskLevel} risk
                                </Badge>
                              </div>
                              <p className="text-gray-600 mb-4">
                                {project.description}
                              </p>

                              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                                <div>
                                  <span className="text-gray-500">
                                    Submitted by:
                                  </span>
                                  <div className="font-mono text-cyan-600">
                                    {project.submittedBy}
                                  </div>
                                </div>
                                <div>
                                  <span className="text-gray-500">Date:</span>
                                  <div>{project.submittedDate}</div>
                                </div>
                                <div>
                                  <span className="text-gray-500">
                                    Requested:
                                  </span>
                                  <div className="font-semibold text-cyan-600">
                                    ${project.requestedAmount.toLocaleString()}
                                  </div>
                                </div>
                                <div>
                                  <span className="text-gray-500">
                                    Team Size:
                                  </span>
                                  <div>{project.teamSize} members</div>
                                </div>
                              </div>

                              <div className="flex items-center space-x-4 mt-4 text-sm">
                                <a
                                  href={project.website}
                                  className="text-cyan-500 hover:underline flex items-center"
                                >
                                  <Eye className="w-4 h-4 mr-1" />
                                  Website
                                </a>
                                <a
                                  href={project.whitepaper}
                                  className="text-cyan-500 hover:underline flex items-center"
                                >
                                  <FileText className="w-4 h-4 mr-1" />
                                  Whitepaper
                                </a>
                              </div>
                            </div>

                            <div className="flex flex-col space-y-2 ml-6">
                              <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                <Button
                                  onClick={() => handleApprove(project.id)}
                                  className="bg-green-500 hover:bg-green-600 text-white neon-glow"
                                >
                                  <CheckCircle className="w-4 h-4 mr-2" />
                                  Approve
                                </Button>
                              </motion.div>
                              <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                <Button
                                  onClick={() => handleReject(project.id)}
                                  variant="outline"
                                  className="border-red-300 text-red-600 hover:bg-red-50"
                                >
                                  <X className="w-4 h-4 mr-2" />
                                  Reject
                                </Button>
                              </motion.div>
                              <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="border-cyan-300 text-cyan-600 hover:bg-cyan-50"
                                >
                                  <Eye className="w-4 h-4 mr-1" />
                                  Review
                                </Button>
                              </motion.div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </TabsContent>

            {/* Users Management Tab */}
            <TabsContent value="users" className="space-y-6">
              <motion.div variants={itemVariants}>
                <Card className="shadow-xl border-cyan-200">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Users className="w-6 h-6 mr-3 text-cyan-500" />
                      User Management
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {mockUsers.map((user, index) => (
                        <motion.div
                          key={user.id}
                          className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-all duration-300 hover:border-cyan-300"
                          initial={{ opacity: 0, x: -30 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex-1">
                              <div className="flex items-center space-x-3 mb-2">
                                <h3 className="font-bold text-lg font-mono text-cyan-600">
                                  {user.address}
                                </h3>
                                <Badge
                                  className={`${
                                    user.status === "verified"
                                      ? "bg-green-100 text-green-800 border-green-200"
                                      : user.status === "flagged"
                                      ? "bg-red-100 text-red-800 border-red-200"
                                      : "bg-yellow-100 text-yellow-800 border-yellow-200"
                                  }`}
                                >
                                  {user.status}
                                </Badge>
                                <Badge
                                  className={`${
                                    user.riskScore === "low"
                                      ? "bg-green-100 text-green-800 border-green-200"
                                      : user.riskScore === "medium"
                                      ? "bg-yellow-100 text-yellow-800 border-yellow-200"
                                      : "bg-red-100 text-red-800 border-red-200"
                                  }`}
                                >
                                  {user.riskScore} risk
                                </Badge>
                              </div>

                              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm">
                                <div>
                                  <span className="text-gray-500">
                                    Total Invested:
                                  </span>
                                  <div className="font-semibold text-cyan-600">
                                    ${user.totalInvested.toLocaleString()}
                                  </div>
                                </div>
                                <div>
                                  <span className="text-gray-500">
                                    Investments:
                                  </span>
                                  <div>{user.projectsInvested}</div>
                                </div>
                                <div>
                                  <span className="text-gray-500">
                                    Projects Launched:
                                  </span>
                                  <div>{user.projectsLaunched}</div>
                                </div>
                                <div>
                                  <span className="text-gray-500">
                                    Join Date:
                                  </span>
                                  <div>{user.joinDate}</div>
                                </div>
                                <div className="flex space-x-2">
                                  <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                  >
                                    <Button
                                      onClick={() =>
                                        handleUserAction(user.id, "verified")
                                      }
                                      size="sm"
                                      className="bg-cyan-500 hover:bg-cyan-600 text-white"
                                    >
                                      Verify
                                    </Button>
                                  </motion.div>
                                  <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                  >
                                    <Button
                                      onClick={() =>
                                        handleUserAction(user.id, "banned")
                                      }
                                      size="sm"
                                      variant="outline"
                                      className="border-red-300 text-red-600 hover:bg-red-50"
                                    >
                                      <Ban className="w-4 h-4" />
                                    </Button>
                                  </motion.div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            {/* Analytics Tab */}
            <TabsContent value="analytics" className="space-y-6">
              <motion.div variants={itemVariants}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="shadow-xl border-cyan-200">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <TrendingUp className="w-6 h-6 mr-3 text-cyan-500" />
                        Platform Growth
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[
                          {
                            label: "Monthly Active Projects",
                            value: "23",
                            trend: "+15%",
                          },
                          {
                            label: "New Investors This Month",
                            value: "1,247",
                            trend: "+28%",
                          },
                          {
                            label: "Average Project Success Rate",
                            value: "89%",
                            trend: "+5%",
                          },
                          {
                            label: "Total Volume (30d)",
                            value: "$2.3M",
                            trend: "+42%",
                          },
                        ].map((metric, index) => (
                          <motion.div
                            key={index}
                            className="flex justify-between items-center p-3 bg-gradient-to-r from-cyan-50 to-white rounded-lg border border-cyan-100"
                            whileHover={{ scale: 1.02 }}
                          >
                            <span className="text-gray-600">
                              {metric.label}
                            </span>
                            <div className="text-right">
                              <span className="font-bold text-cyan-600">
                                {metric.value}
                              </span>
                              <motion.span
                                className="text-green-600 text-sm ml-2"
                                animate={{ opacity: [0.7, 1, 0.7] }}
                                transition={{ duration: 2, repeat: Infinity }}
                              >
                                {metric.trend}
                              </motion.span>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="shadow-xl border-cyan-200">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <AlertTriangle className="w-6 h-6 mr-3 text-orange-500" />
                        Risk Management
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[
                          {
                            label: "High Risk Projects",
                            value: "2",
                            status: "warning",
                          },
                          {
                            label: "Failed Projects (6mo)",
                            value: "8",
                            status: "error",
                          },
                          { label: "Under Review", value: "3", status: "info" },
                          {
                            label: "Security Incidents",
                            value: "0",
                            status: "success",
                          },
                        ].map((item, index) => (
                          <motion.div
                            key={index}
                            className="flex justify-between items-center p-3 bg-gradient-to-r from-gray-50 to-white rounded-lg border border-gray-200"
                            whileHover={{ scale: 1.02 }}
                          >
                            <span className="text-gray-600">{item.label}</span>
                            <motion.span
                              className={`font-bold ${
                                item.status === "success"
                                  ? "text-green-600"
                                  : item.status === "warning"
                                  ? "text-yellow-600"
                                  : item.status === "error"
                                  ? "text-red-600"
                                  : "text-cyan-600"
                              }`}
                              animate={{ scale: [1, 1.1, 1] }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: index * 0.3,
                              }}
                            >
                              {item.value}
                            </motion.span>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            </TabsContent>

            {/* Settings Tab */}
            <TabsContent value="settings" className="space-y-6">
              <motion.div variants={itemVariants}>
                <Card className="shadow-xl border-cyan-200">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Settings className="w-6 h-6 mr-3 text-cyan-500" />
                      Platform Settings
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <h3 className="font-semibold text-lg text-cyan-700">
                            Platform Configuration
                          </h3>
                          <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">
                              Minimum Investment Amount
                            </label>
                            <Input
                              defaultValue="$50"
                              className="border-cyan-200 focus:border-cyan-400"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">
                              Platform Fee (%)
                            </label>
                            <Input
                              defaultValue="2.5"
                              className="border-cyan-200 focus:border-cyan-400"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">
                              Review Period (days)
                            </label>
                            <Input
                              defaultValue="5"
                              className="border-cyan-200 focus:border-cyan-400"
                            />
                          </div>
                        </div>

                        <div className="space-y-4">
                          <h3 className="font-semibold text-lg text-cyan-700">
                            Security Settings
                          </h3>
                          <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">
                              Max Daily Withdrawals
                            </label>
                            <Input
                              defaultValue="$100,000"
                              className="border-cyan-200 focus:border-cyan-400"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">
                              KYC Requirement Threshold
                            </label>
                            <Input
                              defaultValue="$10,000"
                              className="border-cyan-200 focus:border-cyan-400"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">
                              Auto-Ban Risk Score
                            </label>
                            <Input
                              defaultValue="90"
                              className="border-cyan-200 focus:border-cyan-400"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-end space-x-4 pt-6 border-t border-cyan-200">
                        <Button
                          variant="outline"
                          className="border-cyan-300 text-cyan-600 hover:bg-cyan-50"
                        >
                          Reset to Defaults
                        </Button>
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button className="bg-cyan-500 hover:bg-cyan-600 text-white neon-glow">
                            Save Changes
                          </Button>
                        </motion.div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>

            {/* Approved Projects Tab */}
            <TabsContent value="approved" className="space-y-6">
              <motion.div variants={itemVariants}>
                <Card className="shadow-xl border-cyan-200">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <CheckCircle className="w-6 h-6 mr-3 text-green-500" />
                      Approved Projects
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {mockApprovedProjects.map((project, index) => (
                        <motion.div
                          key={project.id}
                          className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-all duration-300 cursor-pointer hover:border-cyan-300"
                          onClick={() => onProjectClick(project.id)}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ scale: 1.02 }}
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <h3 className="font-bold text-lg text-cyan-600">
                                {project.name}
                              </h3>
                              <p className="text-gray-600 text-sm">
                                Approved {project.approvedDate}
                              </p>
                            </div>
                            <div className="text-right">
                              <div className="font-semibold text-cyan-600">
                                ${project.raised.toLocaleString()} raised
                              </div>
                              <div className="text-sm text-gray-500">
                                {project.contributors} contributors
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
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
