import React from "react";

export const metadata = {
  title: "Disclaimer",
  description: "Disclaimer for StudentPerks India",
};

export default function Disclaimer() {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Disclaimer</h1>
      <div className="prose dark:prose-invert max-w-none space-y-6">
        <h2 className="text-2xl font-semibold mt-8">1. General Information</h2>
        <p>All the information on this website - https://free-for-students.vercel.app - is published in good faith and for general information purpose only. StudentPerks India does not make any warranties about the completeness, reliability, and accuracy of this information. Any action you take upon the information you find on this website (StudentPerks India), is strictly at your own risk. StudentPerks India will not be liable for any losses and/or damages in connection with the use of our website.</p>

        <h2 className="text-2xl font-semibold mt-8">2. External Links Disclaimer</h2>
        <p>From our website, you can visit other websites by following hyperlinks to such external sites. While we strive to provide only quality links to useful and ethical websites, we have no control over the content and nature of these sites. These links to other websites do not imply a recommendation for all the content found on these sites. Site owners and content may change without notice and may occur before we have the opportunity to remove a link which may have gone 'bad'.</p>

        <h2 className="text-2xl font-semibold mt-8">3. Affiliation Disclaimer</h2>
        <p>StudentPerks India is an independent directory and is not affiliated, associated, authorized, endorsed by, or in any way officially connected with GitHub, Microsoft, AWS, or any of the other brands listed on this site unless explicitly stated. All product and company names are trademarks™ or registered® trademarks of their respective holders.</p>

        <h2 className="text-2xl font-semibold mt-8">4. Consent</h2>
        <p>By using our website, you hereby consent to our disclaimer and agree to its terms.</p>
      </div>
    </div>
  );
}
