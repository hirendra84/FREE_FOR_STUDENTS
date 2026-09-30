import React from "react";

export const metadata = {
  title: "Contact Us",
  description: "Contact StudentPerks India",
};

export default function ContactUs() {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      <div className="prose dark:prose-invert max-w-none space-y-6">
        <p>Have a question, suggestion, or found a broken link? We'd love to hear from you!</p>

        <div className="mt-8 p-6 bg-secondary/20 rounded-xl border border-border">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="mb-2"><strong>Email:</strong> support@free-for-students.vercel.app</p>
          <p className="mb-2"><strong>Community:</strong> Join our <a href="https://t.me/+gn6eKVk821dmNjc1" className="text-primary hover:underline">Telegram</a> or <a href="https://chat.whatsapp.com/DC8icG0sd3WACULmqDuy9o" className="text-primary hover:underline">WhatsApp</a> groups.</p>
        </div>

        <h2 className="text-2xl font-semibold mt-8">Submit a Perk</h2>
        <p>If you know of a great student developer perk that we missed, please let us know in our community channels or shoot us an email. We verify and add new perks every week!</p>

        <h2 className="text-2xl font-semibold mt-8">Business Inquiries</h2>
        <p>For advertising, partnerships, or sponsorships, please email us directly with the subject line "Partnership Inquiry".</p>
      </div>
    </div>
  );
}
