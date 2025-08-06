import { Card, CardContent } from "./ui/card";
import { Lightbulb, Rocket, Shield, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

export function FundingProcess() {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      className="mt-16 space-y-12"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Three-step process */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div variants={cardVariants}>
          <Card className="h-full shadow-xl hover:shadow-2xl transition-all duration-300">
            <CardContent className="p-8 text-center">
              <motion.div
                className="flex items-center justify-center space-x-4 mb-6"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
              </motion.div>
              <h2 className="text-2xl font-bold mb-4">Get Funded</h2>
              <p className="text-gray-600 leading-relaxed">
                Visionary founders launch funding campaigns on onlyfounders. Our
                curated community of DeFi enthusiasts and institutional
                investors can back revolutionary protocols they believe will
                shape the future of finance. Each project sets a minimum funding
                threshold - if not met, all contributions are automatically
                refunded.
              </p>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <div className="text-sm text-blue-800 font-medium">
                  💡 Pro Tip: Projects with detailed documentation and working
                  prototypes receive 3x more funding on average.
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={cardVariants}>
          <Card className="h-full shadow-xl hover:shadow-2xl transition-all duration-300">
            <CardContent className="p-8 text-center">
              <motion.div
                className="flex items-center justify-center space-x-4 mb-6"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
              </motion.div>
              <h2 className="text-2xl font-bold mb-4">Launch & Distribute</h2>
              <p className="text-gray-600 leading-relaxed">
                Once successfully funded, project tokens are minted and
                distributed proportionally to all contributors based on their
                investment amount. 20% of raised funds plus 2M additional tokens
                are paired in an initial liquidity pool, ensuring immediate
                tradability and price discovery.
              </p>

              <div className="mt-6 p-4 bg-green-50 rounded-lg">
                <div className="text-sm text-green-800 font-medium">
                  🚀 Instant Liquidity: Contributors can trade tokens
                  immediately after distribution with guaranteed market depth.
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={cardVariants}>
          <Card className="h-full shadow-xl hover:shadow-2xl transition-all duration-300">
            <CardContent className="p-8 text-center">
              <motion.div
                className="flex items-center justify-center space-x-4 mb-6"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-violet-500 rounded-full flex items-center justify-center shadow-lg">
                  <Shield className="w-8 h-8 text-white" />
                </div>
              </motion.div>
              <h2 className="text-2xl font-bold mb-4">DAO Governance</h2>
              <p className="text-gray-600 leading-relaxed">
                Remaining funds are secured in a futarchy-governed DAO treasury.
                Beyond monthly allowances, founders must propose fund usage
                through prediction markets where participants bet on proposal
                outcomes. This market-based governance ensures optimal capital
                allocation and protects contributor interests.
              </p>

              <div className="mt-6 p-4 bg-purple-50 rounded-lg">
                <div className="text-sm text-purple-800 font-medium">
                  🛡️ Unruggable Design: Market-based decisions prevent founder
                  misalignment and ensure community-driven development.
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Additional Features Section */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <Card className="shadow-xl bg-gradient-to-br from-slate-800 to-slate-900 text-white">
          <CardContent className="p-8">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Advanced Analytics</h3>
            </div>

            <p className="text-gray-300 leading-relaxed mb-6">
              Real-time project tracking, contributor analytics, and market
              sentiment analysis powered by on-chain data and community signals.
              Make informed investment decisions with comprehensive project
              health metrics.
            </p>

            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                <div className="text-xl font-bold text-cyan-400">847</div>
                <div className="text-xs text-gray-400">Projects Launched</div>
              </div>
              <div className="p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                <div className="text-xl font-bold text-green-400">$24.7M</div>
                <div className="text-xs text-gray-400">Total Funded</div>
              </div>
              <div className="p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                <div className="text-xl font-bold text-purple-400">89%</div>
                <div className="text-xs text-gray-400">Success Rate</div>
              </div>
              <div className="p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                <div className="text-xl font-bold text-orange-400">12.3x</div>
                <div className="text-xs text-gray-400">Avg Return</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white">
          <CardContent className="p-8">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Security First</h3>
            </div>

            <p className="text-green-100 leading-relaxed mb-6">
              Multi-signature treasuries, automated auditing, and insurance
              coverage protect your investments. Our battle-tested smart
              contracts have secured over $50M in total value locked with zero
              exploits.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3 p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                <div className="w-2 h-2 bg-green-300 rounded-full"></div>
                <span className="text-sm">Multi-sig Treasury Protection</span>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                <div className="w-2 h-2 bg-green-300 rounded-full"></div>
                <span className="text-sm">Automated Smart Contract Audits</span>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                <div className="w-2 h-2 bg-green-300 rounded-full"></div>
                <span className="text-sm">$10M Insurance Coverage</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  );
}
