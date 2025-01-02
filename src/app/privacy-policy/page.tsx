// app/privacy/page.js
"use client"

import React from 'react';
import { useRouter } from 'next/navigation';

const PrivacyPolicy = () => {
  const router = useRouter();
  const goBack = () => {
		router.back();
	}

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className='cursor-pointer mb-10' onClick={goBack}>Back</div>

      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">1. Introduction</h2>
        <p>
          Dungeon Entertainment (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) values your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and share your information when you access and use our services, including the Dashboard and other products offered by Dungeon Entertainment (collectively referred to as the &quot;Services&quot;).
        </p>
        <p>
          By using our Services, you consent to the practices described in this Privacy Policy. If you do not agree with the terms of this policy, please do not use our Services.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">2. Information We Collect</h2>
        <p>We collect several types of information to provide and improve our Services:</p>

        <ul className="list-disc pl-6 mt-2">
          <li>
            <strong>Personal Information:</strong> We collect personal information that you provide directly to us, such as when you register for an account, fill out forms, or interact with us. This may include:
            <ul className="list-inside mt-2">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Business/Company name</li>
              <li>Billing information</li>
            </ul>
          </li>

          <li>
            <strong>Usage Data:</strong> We may also collect non-personally identifiable information about how you use our Services. This may include:
            <ul className="list-inside mt-2">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Pages visited on our website</li>
              <li>Device and operating system information</li>
              <li>Referring URLs</li>
            </ul>
          </li>

          <li>
            <strong>Cookies and Tracking Technologies:</strong> We use cookies and similar tracking technologies to track activity on our website and gather information to improve our Services. Cookies are small files stored on your device that allow us to recognize your browser and capture certain information.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">3. How We Use Your Information</h2>
        <p>We use the collected information for various purposes, including:</p>
        <ul className="list-disc pl-6 mt-2">
          <li>Providing and maintaining our Services</li>
          <li>Managing user accounts and customer support</li>
          <li>Improving and customizing our Services</li>
          <li>Communicating with you regarding your account or our Services</li>
          <li>Analyzing usage trends and behavior to enhance user experience</li>
          <li>Processing payments and billing for Services rendered</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">4. Sharing Your Information</h2>
        <p>We do not sell, trade, or otherwise transfer your personal information to third parties except in the following circumstances:</p>
        <ul className="list-disc pl-6 mt-2">
          <li><strong>Service Providers:</strong> We may share your information with trusted third-party service providers who assist in operating our Services, such as payment processors and cloud storage providers.</li>
          <li><strong>Legal Compliance:</strong> We may disclose your information to comply with legal obligations, respond to a legal process (such as a court order or subpoena), or protect the rights, property, and safety of Dungeon Entertainment, our users, or others.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">5. Data Security</h2>
        <p>We take reasonable precautions to protect your personal information. However, please be aware that no method of electronic storage or transmission over the internet is 100% secure. While we strive to use commercially acceptable means to protect your data, we cannot guarantee its absolute security.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">6. Your Data Protection Rights</h2>
        <p>Depending on your location, you may have certain rights regarding your personal information, including:</p>
        <ul className="list-disc pl-6 mt-2">
          <li><strong>Access:</strong> You have the right to request access to the personal information we hold about you.</li>
          <li><strong>Correction:</strong> You can request that we correct any inaccuracies in your personal information.</li>
          <li><strong>Deletion:</strong> You may request that we delete your personal information, subject to any legal requirements.</li>
          <li><strong>Opt-out of Marketing:</strong> You can opt-out of receiving marketing communications from us by following the unsubscribe instructions in our emails or by contacting us directly.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">7. Children&apos;s Privacy</h2>
        <p>Our Services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children under the age of 18. If we become aware that we have collected personal information from a child under 18, we will take steps to delete such information.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">8. Changes to This Privacy Policy</h2>
        <p>We may update our Privacy Policy from time to time. Any changes will be posted on this page, and we will update the &quot;Last Updated&quot; date at the bottom of the policy. We encourage you to review this Privacy Policy periodically for any changes. Continued use of our Services after any changes constitutes acceptance of those changes.</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">9. Contact Us</h2>
        <p>If you have any questions or concerns regarding this Privacy Policy, or if you wish to exercise your data protection rights, please contact us at:</p>
        <ul className="list-none pl-0 mt-2">
          <li><strong>Email:</strong> [connect@dungeonofgames.com]</li>
        </ul>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
