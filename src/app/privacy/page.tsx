import React from "react";

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for StudentPerks India",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      <div className="prose dark:prose-invert max-w-none space-y-6">
        <p>Last updated: {new Date().toLocaleDateString()}</p>
        
        <h2 className="text-2xl font-semibold mt-8">1. Information We Collect</h2>
        <p>At StudentPerks India, accessible from https://free-for-students.vercel.app, one of our main priorities is the privacy of our visitors. We collect minimal information. If you contact us directly, we may receive additional information such as your name, email address, phone number, the contents of the message, and any other information you may choose to provide.</p>

        <h2 className="text-2xl font-semibold mt-8">2. Log Files</h2>
        <p>StudentPerks India follows a standard procedure of using log files. These files log visitors when they visit websites. The information collected includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks.</p>

        <h2 className="text-2xl font-semibold mt-8">3. Cookies and Web Beacons</h2>
        <p>Like any other website, StudentPerks India uses cookies. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience.</p>

        <h2 className="text-2xl font-semibold mt-8">4. Google DoubleClick DART Cookie</h2>
        <p>Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to our site and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy.</p>

        <h2 className="text-2xl font-semibold mt-8">5. Third-Party Privacy Policies</h2>
        <p>StudentPerks India's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information.</p>

        <h2 className="text-2xl font-semibold mt-8">6. Consent</h2>
        <p>By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.</p>
      </div>
    </div>
  );
}
