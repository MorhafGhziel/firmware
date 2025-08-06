import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

import { Separator } from "./ui/separator";
import {
  Rocket,
  DollarSign,
  CheckCircle,
  AlertCircle,
  Info,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export function CreateProject() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    // Basic Info
    projectName: "",
    ticker: "",
    description: "",
    category: "",

    // Tokenomics
    totalSupply: "",
    tokenPrice: "",
    minRaise: "",
    maxRaise: "",
    vestingPeriod: "",

    // Team & Links
    teamSize: "",
    website: "",
    twitter: "",
    discord: "",
    github: "",
    whitepaper: "",

    // Campaign Details
    campaignDuration: "",
    monthlyAllowance: "",
    useOfFunds: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert(
        "Project submitted for review! You'll receive an email confirmation shortly."
      );
      // Reset form
      setCurrentStep(1);
      setFormData({
        projectName: "",
        ticker: "",
        description: "",
        category: "",
        totalSupply: "",
        tokenPrice: "",
        minRaise: "",
        maxRaise: "",
        vestingPeriod: "",
        teamSize: "",
        website: "",
        twitter: "",
        discord: "",
        github: "",
        whitepaper: "",
        campaignDuration: "",
        monthlyAllowance: "",
        useOfFunds: "",
      });
    }, 2000);
  };

  const steps = [
    { number: 1, title: "Project Info", description: "Basic project details" },
    {
      number: 2,
      title: "Tokenomics",
      description: "Token economics & funding",
    },
    {
      number: 3,
      title: "Team & Links",
      description: "Team info & social links",
    },
    { number: 4, title: "Review", description: "Review & submit" },
  ];

  const categories = [
    "DeFi",
    "AI",
    "Gaming",
    "Privacy",
    "Social",
    "Infrastructure",
    "Investment Fund",
  ];

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
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg">
              <Rocket className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
            Launch Your Project
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Submit your blockchain project for community funding. Our expert
            review team will evaluate your submission and help you reach
            qualified investors.
          </p>
        </motion.div>

        {/* Progress Steps */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Mobile Steps - Vertical Layout */}
          <div className="lg:hidden space-y-4">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center space-x-4">
                <div
                  className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-colors flex-shrink-0 ${
                    currentStep >= step.number
                      ? "bg-blue-500 border-blue-500 text-white"
                      : "border-gray-300 text-gray-400"
                  }`}
                >
                  {currentStep > step.number ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    step.number
                  )}
                </div>
                <div className="flex-1">
                  <div
                    className={`font-medium transition-colors ${
                      currentStep >= step.number
                        ? "text-blue-600"
                        : "text-gray-400"
                    }`}
                  >
                    {step.title}
                  </div>
                  <div className="text-sm text-gray-500">
                    {step.description}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Steps - Horizontal Layout */}
          <div className="hidden lg:block">
            <div className="flex items-center justify-between mb-4">
              {steps.map((step, index) => (
                <div key={step.number} className="flex items-center">
                  <div
                    className={`flex items-center justify-center w-12 h-12 rounded-full border-2 transition-colors ${
                      currentStep >= step.number
                        ? "bg-blue-500 border-blue-500 text-white"
                        : "border-gray-300 text-gray-400"
                    }`}
                  >
                    {currentStep > step.number ? (
                      <CheckCircle className="w-6 h-6" />
                    ) : (
                      step.number
                    )}
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={`h-0.5 w-20 mx-4 transition-colors ${
                        currentStep > step.number
                          ? "bg-blue-500"
                          : "bg-gray-300"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between">
              {steps.map((step) => (
                <div key={step.number} className="text-center">
                  <div
                    className={`font-medium transition-colors ${
                      currentStep >= step.number
                        ? "text-blue-600"
                        : "text-gray-400"
                    }`}
                  >
                    {step.title}
                  </div>
                  <div className="text-sm text-gray-500">
                    {step.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Form Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Step 1: Project Info */}
          {currentStep === 1 && (
            <motion.div variants={itemVariants}>
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Info className="w-6 h-6 mr-3 text-blue-500" />
                    Project Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Project Name *
                      </label>
                      <Input
                        placeholder="e.g., LiquidBridge"
                        value={formData.projectName}
                        onChange={(e) =>
                          handleInputChange("projectName", e.target.value)
                        }
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Token Ticker *
                      </label>
                      <Input
                        placeholder="e.g., LQBR"
                        value={formData.ticker}
                        onChange={(e) =>
                          handleInputChange(
                            "ticker",
                            e.target.value.toUpperCase()
                          )
                        }
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Category *
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {categories.map((category) => (
                        <button
                          key={category}
                          onClick={() =>
                            handleInputChange("category", category)
                          }
                          className={`p-3 rounded-lg border-2 transition-colors ${
                            formData.category === category
                              ? "border-blue-500 bg-blue-50 text-blue-700"
                              : "border-gray-200 hover:border-gray-300"
                          }`}
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Project Description *
                    </label>
                    <Textarea
                      placeholder="Describe your project, its purpose, and what makes it unique..."
                      value={formData.description}
                      onChange={(e) =>
                        handleInputChange("description", e.target.value)
                      }
                      className="min-h-32"
                    />
                    <div className="text-sm text-gray-500 mt-1">
                      {formData.description.length}/500 characters
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* Step 2: Tokenomics */}
          {currentStep === 2 && (
            <motion.div variants={itemVariants}>
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <DollarSign className="w-6 h-6 mr-3 text-blue-500" />
                    Tokenomics & Funding
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Total Token Supply *
                      </label>
                      <Input
                        placeholder="e.g., 10000000"
                        value={formData.totalSupply}
                        onChange={(e) =>
                          handleInputChange("totalSupply", e.target.value)
                        }
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Token Price (USDC) *
                      </label>
                      <Input
                        placeholder="e.g., 0.40"
                        value={formData.tokenPrice}
                        onChange={(e) =>
                          handleInputChange("tokenPrice", e.target.value)
                        }
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Minimum Raise (USDC)
                      </label>
                      <Input
                        placeholder="e.g., 800000"
                        value={formData.minRaise}
                        onChange={(e) =>
                          handleInputChange("minRaise", e.target.value)
                        }
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Maximum Raise (USDC)
                      </label>
                      <Input
                        placeholder="e.g., 2000000"
                        value={formData.maxRaise}
                        onChange={(e) =>
                          handleInputChange("maxRaise", e.target.value)
                        }
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Monthly Allowance (USDC) *
                      </label>
                      <Input
                        placeholder="e.g., 25000"
                        value={formData.monthlyAllowance}
                        onChange={(e) =>
                          handleInputChange("monthlyAllowance", e.target.value)
                        }
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Campaign Duration (days) *
                      </label>
                      <Input
                        placeholder="e.g., 30"
                        value={formData.campaignDuration}
                        onChange={(e) =>
                          handleInputChange("campaignDuration", e.target.value)
                        }
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Use of Funds *
                    </label>
                    <Textarea
                      placeholder="Explain how you plan to use the raised funds..."
                      value={formData.useOfFunds}
                      onChange={(e) =>
                        handleInputChange("useOfFunds", e.target.value)
                      }
                      className="min-h-24"
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* Step 3: Team & Links */}
          {currentStep === 3 && (
            <motion.div variants={itemVariants}>
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Rocket className="w-6 h-6 mr-3 text-blue-500" />
                    Team & Links
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Team Size *
                    </label>
                    <Input
                      placeholder="e.g., 5"
                      value={formData.teamSize}
                      onChange={(e) =>
                        handleInputChange("teamSize", e.target.value)
                      }
                      className="h-12 max-w-xs"
                    />
                  </div>

                  <Separator />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Website *
                      </label>
                      <Input
                        placeholder="https://yourproject.com"
                        value={formData.website}
                        onChange={(e) =>
                          handleInputChange("website", e.target.value)
                        }
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Twitter
                      </label>
                      <Input
                        placeholder="https://twitter.com/yourproject"
                        value={formData.twitter}
                        onChange={(e) =>
                          handleInputChange("twitter", e.target.value)
                        }
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Discord
                      </label>
                      <Input
                        placeholder="https://discord.gg/yourproject"
                        value={formData.discord}
                        onChange={(e) =>
                          handleInputChange("discord", e.target.value)
                        }
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        GitHub
                      </label>
                      <Input
                        placeholder="https://github.com/yourproject"
                        value={formData.github}
                        onChange={(e) =>
                          handleInputChange("github", e.target.value)
                        }
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Whitepaper/Documentation *
                    </label>
                    <Input
                      placeholder="https://docs.yourproject.com"
                      value={formData.whitepaper}
                      onChange={(e) =>
                        handleInputChange("whitepaper", e.target.value)
                      }
                      className="h-12"
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* Step 4: Review */}
          {currentStep === 4 && (
            <motion.div variants={itemVariants}>
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CheckCircle className="w-6 h-6 mr-3 text-blue-500" />
                    Review & Submit
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-8">
                    {/* Project Summary */}
                    <div className="p-6 bg-gray-50 rounded-xl">
                      <h3 className="font-bold text-xl mb-4">
                        {formData.projectName || "Project Name"}
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="font-medium">Ticker:</span>{" "}
                          {formData.ticker || "N/A"}
                        </div>
                        <div>
                          <span className="font-medium">Category:</span>{" "}
                          {formData.category || "N/A"}
                        </div>
                        <div>
                          <span className="font-medium">Token Price:</span> $
                          {formData.tokenPrice || "0"} USDC
                        </div>
                        <div>
                          <span className="font-medium">Total Supply:</span>{" "}
                          {formData.totalSupply
                            ? parseInt(formData.totalSupply).toLocaleString()
                            : "0"}
                        </div>
                        <div>
                          <span className="font-medium">Min Raise:</span> $
                          {formData.minRaise
                            ? parseInt(formData.minRaise).toLocaleString()
                            : "0"}{" "}
                          USDC
                        </div>
                        <div>
                          <span className="font-medium">
                            Monthly Allowance:
                          </span>{" "}
                          $
                          {formData.monthlyAllowance
                            ? parseInt(
                                formData.monthlyAllowance
                              ).toLocaleString()
                            : "0"}{" "}
                          USDC
                        </div>
                      </div>
                    </div>

                    {/* Important Notice */}
                    <div className="p-6 bg-blue-50 border border-blue-200 rounded-xl">
                      <div className="flex items-start">
                        <AlertCircle className="w-6 h-6 text-blue-600 mr-3 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-blue-900 mb-2">
                            Review Process
                          </h4>
                          <p className="text-blue-800 text-sm">
                            After submission, our team will review your project
                            within 3-5 business days. You'll receive an email
                            with the review results and next steps. Approved
                            projects will be featured on our platform for
                            community funding.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="text-center">
                      <Button
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                        className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white px-12 py-6 text-lg"
                      >
                        {isSubmitting ? (
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{
                              duration: 1,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-3"
                          />
                        ) : (
                          <Rocket className="w-5 h-5 mr-3" />
                        )}
                        {isSubmitting ? "Submitting..." : "Submit for Review"}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* Navigation Buttons */}
          <motion.div
            className="flex justify-between mt-8"
            variants={itemVariants}
          >
            <Button
              onClick={handlePrevious}
              disabled={currentStep === 1}
              variant="outline"
              className="px-8"
            >
              Previous
            </Button>

            {currentStep < 4 ? (
              <Button
                onClick={handleNext}
                className="bg-blue-500 hover:bg-blue-600 text-white px-8"
              >
                Next
              </Button>
            ) : null}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
