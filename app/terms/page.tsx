"use client"

import { motion } from "framer-motion"
import { Shield, AlertTriangle, FileText, Scale } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function TermsPage() {
  const sections = [
    {
      id: "acceptance",
      title: "1. Acceptance of Terms",
      icon: <FileText className="h-6 w-6" />,
      content: `By accessing and using BlueWing's services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree to these terms, you must not use our services.

These terms constitute a legally binding agreement between you and BlueWing. We reserve the right to modify these terms at any time, and such modifications will be effective immediately upon posting.`,
    },
    {
      id: "services",
      title: "2. Description of Services",
      icon: <Shield className="h-6 w-6" />,
      content: `BlueWing provides gaming enhancement software and related services for various video games. Our services include but are not limited to:

• Game enhancement tools and software
• Account unlocking services
• Hardware ID unbanning services
• Customer support and technical assistance

All services are provided "as is" and we make no warranties regarding their performance, compatibility, or effectiveness.`,
    },
    {
      id: "eligibility",
      title: "3. User Eligibility",
      icon: <AlertTriangle className="h-6 w-6" />,
      content: `You must be at least 18 years old to use our services. By using our services, you represent and warrant that:

• You are of legal age to form a binding contract
• You have the legal capacity to agree to these terms
• Your use of our services will not violate any applicable laws or regulations
• You will not use our services for any illegal or unauthorized purpose

We reserve the right to refuse service to anyone at our sole discretion.`,
    },
    {
      id: "prohibited",
      title: "4. Prohibited Uses",
      icon: <Scale className="h-6 w-6" />,
      content: `You agree not to use our services for any of the following prohibited activities:

• Violating any local, state, national, or international law or regulation
• Transmitting or procuring the sending of any advertising or promotional material
• Impersonating or attempting to impersonate BlueWing, our employees, or other users
• Using our services in any way that could disable, overburden, or impair our servers
• Attempting to gain unauthorized access to our systems or networks
• Reverse engineering, decompiling, or disassembling our software

Violation of these terms may result in immediate termination of your access to our services.`,
    },
    {
      id: "payment",
      title: "5. Payment Terms",
      icon: <FileText className="h-6 w-6" />,
      content: `All payments for our services must be made in advance. We accept various payment methods as displayed on our website. By making a purchase, you agree that:

• All sales are final and non-refundable except as explicitly stated
• You are responsible for any applicable taxes
• Prices are subject to change without notice
• We reserve the right to refuse or cancel orders at our discretion

Refunds may be considered on a case-by-case basis within 24 hours of purchase if the product fails to work as advertised.`,
    },
    {
      id: "intellectual",
      title: "6. Intellectual Property",
      icon: <Shield className="h-6 w-6" />,
      content: `All content, features, and functionality of our services are owned by BlueWing and are protected by copyright, trademark, and other intellectual property laws. You agree that:

• You will not copy, modify, or distribute our software without permission
• You will not remove or alter any proprietary notices from our software
• You will not create derivative works based on our services
• You will not use our trademarks or service marks without written consent

Any unauthorized use of our intellectual property may result in legal action.`,
    },
    {
      id: "privacy",
      title: "7. Privacy and Data Collection",
      icon: <Shield className="h-6 w-6" />,
      content: `We respect your privacy and are committed to protecting your personal information. Our data collection practices include:

• Collection of necessary information for service provision
• Use of cookies and tracking technologies for website functionality
• Secure storage of payment and account information
• No sharing of personal data with third parties without consent

For detailed information about our privacy practices, please refer to our Privacy Policy.`,
    },
    {
      id: "disclaimers",
      title: "8. Disclaimers and Limitations",
      icon: <AlertTriangle className="h-6 w-6" />,
      content: `Our services are provided "as is" without any warranties of any kind. We disclaim all warranties, express or implied, including:

• Warranties of merchantability and fitness for a particular purpose
• Warranties that our services will be uninterrupted or error-free
• Warranties regarding the security or reliability of our services
• Any warranties arising from course of dealing or usage of trade

We shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our services.`,
    },
    {
      id: "termination",
      title: "9. Termination",
      icon: <Scale className="h-6 w-6" />,
      content: `We reserve the right to terminate or suspend your access to our services at any time, with or without cause, and with or without notice. Grounds for termination may include:

• Violation of these Terms of Service
• Fraudulent or illegal activity
• Abuse of our services or systems
• Non-payment of fees

Upon termination, your right to use our services will cease immediately, and we may delete your account and all associated data.`,
    },
    {
      id: "governing",
      title: "10. Governing Law",
      icon: <Scale className="h-6 w-6" />,
      content: `These Terms of Service shall be governed by and construed in accordance with the laws of the jurisdiction in which BlueWing operates, without regard to conflict of law principles.

Any disputes arising from these terms or your use of our services shall be resolved through binding arbitration in accordance with the rules of the applicable arbitration association.`,
    },
    {
      id: "contact",
      title: "11. Contact Information",
      icon: <FileText className="h-6 w-6" />,
      content: `If you have any questions about these Terms of Service, please contact us through:

• Discord: discord.gg/bluewing
• Email: support@bluewing.com
• Website: Contact form on our support page

We will respond to all inquiries within 24-48 hours during business days.`,
    },
  ]

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navbar />

      <div className="pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-4">
          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Please read these terms carefully before using BlueWing's services.
            </p>
            <div className="mt-6 text-sm text-gray-500">Last updated: January 15, 2024</div>
          </motion.div>

          {/* Important Notice */}
          <motion.div
            className="bg-yellow-900/20 border border-yellow-500/30 rounded-xl p-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-start space-x-3">
              <AlertTriangle className="h-6 w-6 text-yellow-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-bold text-yellow-400 mb-2">Important Notice</h3>
                <p className="text-gray-300">
                  By using BlueWing's services, you acknowledge that you understand the risks associated with game
                  enhancement software. Use of such software may violate the terms of service of the games you play and
                  could result in account penalties. You use our services at your own risk.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Terms Sections */}
          <div className="space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={section.id}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="text-cyan-400">{section.icon}</div>
                  <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                </div>
                <div className="text-gray-300 leading-relaxed whitespace-pre-line">{section.content}</div>
              </motion.div>
            ))}
          </div>

          {/* Agreement Section */}
          <motion.div
            className="mt-12 bg-cyan-900/20 border border-cyan-500/30 rounded-xl p-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">Agreement Acknowledgment</h3>
            <p className="text-gray-300 mb-6">
              By continuing to use BlueWing's services, you acknowledge that you have read, understood, and agree to be
              bound by these Terms of Service.
            </p>
            <div className="text-sm text-gray-400">
              If you do not agree to these terms, please discontinue use of our services immediately.
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
