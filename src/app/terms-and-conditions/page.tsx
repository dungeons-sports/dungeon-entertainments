'use client'

import React from 'react'
import { useRouter } from 'next/navigation';

const Terms = () => {
  const router = useRouter();
  const goBack = () => {
		router.back();
	}

  return (
    <div className="max-w-4xl mx-auto p-6">
           <div className='cursor-pointer mb-10' onClick={goBack}>Back</div>

      <h1 className="text-4xl font-bold mb-6">Terms and Conditions</h1>

      <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
      <p>
        Welcome to Dungeon Entertainment&apos;s Dashboard Service (&quot;Dashboard&quot;).
        By accessing or using the Dashboard, you agree to comply with these Terms and Conditions (&quot;Terms&quot;). If you do not agree with any part of these Terms, you may not use the Dashboard.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">2. Dashboard Services</h2>
      <p>
        The Dashboard is provided to gaming lounges to facilitate:
      </p>
      <ul className="list-disc pl-6">
        <li><strong>Offline Booking:</strong> Manage customer bookings.</li>
        <li><strong>Booking Management:</strong> Organize and track bookings efficiently.</li>
        <li><strong>Invoicing:</strong> Generate and maintain records of payments and receipts.</li>
      </ul>
      <p>
        <em>
          *Please note that certain functionalities, such as invoicing, are currently under development. In this industry, paying customers typically receive an auto-generated receipt from UPI payment systems instead of formal invoices.
        </em>
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">3. User Obligations</h2>
      <p>
        As a user of the Dashboard, you agree to:
      </p>
      <ul className="list-disc pl-6">
        <li><strong>Proper Use:</strong> Accurately create bookings by selecting the appropriate devices and slot timings for each customer.</li>
        <li><strong>Compliance:</strong> Use the Dashboard only for the intended purposes and comply with all applicable laws and regulations.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">4. Platform Access</h2>
      <ul className="list-disc pl-6">
        <li><strong>Free to Use:</strong> The Dashboard is provided free of charge during this phase of operations.</li>
        <li><strong>Account Limitations:</strong> Each gaming lounge is limited to one account. Redistribution or unauthorized sharing of the Dashboard is strictly prohibited.</li>
        <li><strong>Restrictions:</strong> You may not resell, sublicense, or redistribute the Dashboard in any form.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">5. Limitations of Liability</h2>
      <p>
        Dungeon Entertainment provides the Dashboard &quot;as is&quot; and does not guarantee uninterrupted or error-free operation. We are not liable for:
      </p>
      <ul className="list-disc pl-6">
        <li>Losses incurred due to incorrect booking data entered by the user.</li>
        <li>Any system downtimes or delays in accessing the Dashboard.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">6. Termination</h2>
      <p>
        Dungeon Entertainment reserves the right to terminate or suspend access to the Dashboard if:
      </p>
      <ul className="list-disc pl-6">
        <li>These Terms are violated.</li>
        <li>Unauthorized use of the Dashboard is detected.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">7. Modifications to Terms</h2>
      <p>
        Dungeon Entertainment reserves the right to update or modify these Terms at any time. Users will be notified of significant changes. Continued use of the Dashboard after modifications constitutes acceptance of the updated Terms.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">8. Contact Us</h2>
      <p>
        For questions or concerns regarding these Terms, please contact us at:
      </p>
      <p>
        <strong>Email:</strong> [connect@dungeonofgames.com]
      </p>
    </div>
  )
}

export default Terms
