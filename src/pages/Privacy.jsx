import React from "react";

export default function Privacy() {
  return (
    <section className="min-h-screen bg-base-200 dark:bg-gray-900 text-gray-800 dark:text-gray-100 py-20 px-6 transition-colors duration-500">
      <div className="max-w-5xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-10 md:p-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-primary dark:text-yellow-400 mb-10">
          Privacy Policy
        </h1>

        <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg leading-relaxed">
          Your privacy is important to us. This Privacy Policy explains how we
          collect, use, and protect your personal information when you use our
          website and services. Please take a moment to read it carefully.
        </p>

        {/* SECTION 1 */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-blue-600 dark:text-yellow-400">
            1. Information We Collect
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            We may collect personal information such as your name, email
            address, and account details when you register, book sessions, or
            contact us. We also collect non-personal data such as browser type,
            device information, and usage patterns to improve user experience.
          </p>
        </div>

        {/* SECTION 2 */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-blue-600 dark:text-yellow-400">
            2. How We Use Your Information
          </h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
            <li>To provide, maintain, and improve our services.</li>
            <li>To personalize user experience and display relevant content.</li>
            <li>To communicate with you about updates, offers, or issues.</li>
            <li>To ensure security and prevent unauthorized access.</li>
          </ul>
        </div>

        {/* SECTION 3 */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-blue-600 dark:text-yellow-400">
            3. Data Protection
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            We implement advanced security measures to protect your information
            from unauthorized access, alteration, or disclosure. However, please
            note that no method of online transmission or storage is completely
            secure.
          </p>
        </div>

        {/* SECTION 4 */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-blue-600 dark:text-yellow-400">
            4. Cookies and Tracking
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            We use cookies and similar technologies to analyze traffic,
            customize content, and improve your experience. You can manage your
            cookie preferences in your browser settings at any time.
          </p>
        </div>

        {/* SECTION 5 */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-blue-600 dark:text-yellow-400">
            5. Third-Party Services
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            We may share limited data with trusted partners that help us operate
            our services, such as payment gateways or analytics tools. These
            partners are required to maintain strict confidentiality.
          </p>
        </div>

        {/* SECTION 6 */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-blue-600 dark:text-yellow-400">
            6. Your Rights
          </h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
            <li>Access and review the personal data we hold about you.</li>
            <li>Request correction or deletion of your personal information.</li>
            <li>Opt out of promotional communications at any time.</li>
          </ul>
        </div>

        {/* SECTION 7 */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-blue-600 dark:text-yellow-400">
            7. Changes to This Policy
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            We may update this Privacy Policy from time to time. Any significant
            changes will be notified via our website or email so that you stay
            informed.
          </p>
        </div>

        {/* SECTION 8 */}
        <div>
          <h2 className="text-2xl font-semibold mb-3 text-blue-600 dark:text-yellow-400">
            8. Contact Us
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            If you have any questions or concerns about our Privacy Policy,
            please reach out to us at:
          </p>
          <div className="mt-4">
            <p className="font-medium">📧 Email:</p>
            <p className="text-gray-700 dark:text-gray-300">support@skillhub.com</p>
            <p className="font-medium mt-2">📍 Address:</p>
            <p className="text-gray-700 dark:text-gray-300">
              123 SkillHub Street, Learning City, World
            </p>
          </div>
        </div>

        <div className="text-center mt-12 text-gray-500 dark:text-gray-400 text-sm">
          Last updated: November 2025
        </div>
      </div>
    </section>
  );
}
