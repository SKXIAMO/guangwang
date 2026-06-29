import React from 'react'
import NavBar from '@/components/NavBar'
import './index.css'

export default function PrivacyPolicy() {
  return (
    <div className="agreement-page">
      <NavBar>
        <h1 className="agreement-title">Privacy Policy</h1>
      </NavBar>
      <div className="agreement-content">
        <h1>Eiway Privacy Policy</h1>
        <p className="update-time">Last updated: 2026</p>

        <p>
          Welcome to <strong>Eiway</strong>. Your privacy is very important to us. This Privacy
          Policy explains how Eiway collects, uses, and protects your information when you use our
          application and services.
        </p>

        <h2>1. Information We Collect</h2>
        <p>We may collect the following types of information:</p>
        <ul>
          <li>Account information such as username, profile photo, and email</li>
          <li>Device information including device model, operating system, and identifiers</li>
          <li>Usage data such as interactions, messages, and app activity</li>
          <li>Payment-related information when purchasing virtual items</li>
        </ul>

        <h2>2. How We Use Information</h2>
        <p>The information we collect may be used to:</p>
        <ul>
          <li>Provide and improve Eiway services</li>
          <li>Personalize user experience</li>
          <li>Ensure platform safety and prevent fraud</li>
          <li>Process payments and virtual item purchases</li>
          <li>Communicate updates and service notifications</li>
        </ul>

        <h2>3. Information Sharing</h2>
        <p>
          Eiway does not sell or rent your personal information. We may share information only in
          the following situations:
        </p>
        <ul>
          <li>With service providers that support our platform operations</li>
          <li>When required by law or legal processes</li>
          <li>To protect the safety and rights of users or the platform</li>
        </ul>

        <h2>4. Data Security</h2>
        <p>
          We implement reasonable technical and organizational measures to protect your information
          from unauthorized access, alteration, disclosure, or destruction.
        </p>

        <h2>5. Data Retention</h2>
        <p>
          We retain user data only for as long as necessary to provide services and comply with
          legal obligations.
        </p>

        <h2>6. Children&apos;s Privacy</h2>
        <p>
          Eiway is not intended for individuals under the age required by applicable law. We do not
          knowingly collect personal information from children.
        </p>

        <h2>7. User Rights</h2>
        <p>Depending on your location, you may have rights to:</p>
        <ul>
          <li>Access the personal information we hold about you</li>
          <li>Request correction or deletion of your data</li>
          <li>Restrict or object to certain processing</li>
        </ul>

        <h2>8. Changes to This Policy</h2>
        <p>
          Eiway may update this Privacy Policy from time to time. Continued use of the service after
          changes indicates acceptance of the updated policy.
        </p>

        <h2>9. Contact Us</h2>
        <p>
          If you have questions about this Privacy Policy, please contact us through the support
          channel provided within the Eiway application.
        </p>
      </div>
    </div>
  )
}
