import React from "react";

export const metadata = {
  title: "Terms and Conditions",
  description: "Terms and Conditions for StudentPerks India",
};

export default function TermsConditions() {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Terms and Conditions</h1>
      <div className="prose dark:prose-invert max-w-none space-y-6">
        <p>Welcome to StudentPerks India!</p>
        <p>These terms and conditions outline the rules and regulations for the use of StudentPerks India's Website, located at https://free-for-students.vercel.app.</p>

        <h2 className="text-2xl font-semibold mt-8">1. Acceptance of Terms</h2>
        <p>By accessing this website we assume you accept these terms and conditions. Do not continue to use StudentPerks India if you do not agree to take all of the terms and conditions stated on this page.</p>

        <h2 className="text-2xl font-semibold mt-8">2. Third-Party Links and Offers</h2>
        <p>Our website acts as a directory to aggregate third-party offers, discounts, and developer tools specifically aimed at students. We do not own, control, or guarantee the availability, validity, or quality of these third-party offers. Clicking on external links may redirect you to a third-party website with its own Terms and Conditions.</p>

        <h2 className="text-2xl font-semibold mt-8">3. User Responsibilities</h2>
        <p>Users are responsible for ensuring their own eligibility for the student offers listed on our website. Misuse of student verification mechanisms on third-party sites is solely the responsibility of the user.</p>

        <h2 className="text-2xl font-semibold mt-8">4. Intellectual Property Rights</h2>
        <p>Unless otherwise stated, StudentPerks India and/or its licensors own the intellectual property rights for all material on StudentPerks India. All intellectual property rights are reserved. You may access this from StudentPerks India for your own personal use subjected to restrictions set in these terms and conditions.</p>

        <h2 className="text-2xl font-semibold mt-8">5. Disclaimer</h2>
        <p>We do not ensure that the information on this website is correct, we do not warrant its completeness or accuracy; nor do we promise to ensure that the website remains available or that the material on the website is kept up to date.</p>
      </div>
    </div>
  );
}
