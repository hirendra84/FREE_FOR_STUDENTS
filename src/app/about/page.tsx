import React from "react";

export const metadata = {
  title: "About Us",
  description: "About StudentPerks India",
};

export default function AboutUs() {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">About Us</h1>
      <div className="prose dark:prose-invert max-w-none space-y-6">
        <p>Welcome to <strong>StudentPerks India</strong>!</p>
        
        <h2 className="text-2xl font-semibold mt-8">Our Mission</h2>
        <p>Our mission is simple: to democratize access to premium developer tools, cloud credits, and educational resources for students across India. We believe that financial constraints should never hold a student back from learning, building, and launching amazing software projects.</p>

        <h2 className="text-2xl font-semibold mt-8">What We Do</h2>
        <p>The tech industry provides thousands of dollars in free perks for verified students, but these offers are scattered across the internet and often hard to find. We curate, verify, and organize the best student developer packs, free cloud tiers, and premium software licenses into one easy-to-navigate directory.</p>

        <h2 className="text-2xl font-semibold mt-8">Who We Are</h2>
        <p>StudentPerks India is built by developers, for developers. We understand the struggle of trying to host your first full-stack application or trying to afford premium IDEs. That's why we created this platform to help you unlock the tools you need to succeed.</p>

        <p className="mt-8 font-semibold">Join our community, grab your student perks, and start building today!</p>
      </div>
    </div>
  );
}
