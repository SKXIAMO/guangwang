import React from 'react'
import NavBar from '@/components/NavBar'
import './index.css'

export default function UserAgreement() {
  return (
    <div className="agreement-page">
      <NavBar>
        <h1 className="agreement-title">User Agreement</h1>
      </NavBar>

      <div className="agreement-content">
        <h1>Eiway User Agreement</h1>
        <p className="update-time">Last updated: 2026</p>

        <p>
          Welcome to <strong>Eiway</strong>. Please read this User Agreement carefully before using
          the Eiway application and services. By accessing or using the service, you agree to be
          bound by this agreement.
        </p>

        <h2>1. Acceptance of Terms</h2>
        <p>
          By creating an account or using Eiway, you confirm that you have read, understood, and
          agreed to comply with this User Agreement and all applicable laws.
        </p>

        <h2>2. Description of Services</h2>
        <p>
          Eiway provides online social interaction services including but not limited to messaging,
          video interaction, profile creation, and virtual item purchases.
        </p>
        <p>
          Eiway reserves the right to modify, suspend, or discontinue any part of the services at
          any time without prior notice.
        </p>

        <h2>3. User Accounts</h2>
        <p>
          You may be required to create an account to access certain features of Eiway. You agree to
          provide accurate and complete information and keep your account credentials secure.
        </p>
        <p>You are responsible for all activities that occur under your account.</p>

        <h2>4. User Conduct</h2>
        <p>Users agree not to:</p>
        <ul>
          <li>Violate any applicable laws or regulations</li>
          <li>Harass, abuse, or harm other users</li>
          <li>Upload illegal, harmful, or offensive content</li>
          <li>Attempt to interfere with the platform&apos;s security</li>
        </ul>

        <h2>5. Virtual Items and Purchases</h2>
        <p>
          Eiway may offer virtual items such as diamonds or coins which can be used within the
          platform. These items have no real-world monetary value and cannot be redeemed for cash.
        </p>
        <p>All purchases are final unless required otherwise by applicable law.</p>

        <h2>6. Privacy</h2>
        <p>
          Your privacy is important to us. Please review our Privacy Policy to understand how we
          collect, use, and protect your information.
        </p>

        <h2>7. Termination</h2>
        <p>
          Eiway reserves the right to suspend or terminate your account if you violate this
          agreement or engage in harmful activities.
        </p>

        <h2>8. Disclaimer</h2>
        <p>
          The Eiway service is provided on an &quot;as is&quot; and &quot;as available&quot; basis
          without warranties of any kind.
        </p>

        <h2>9. Changes to This Agreement</h2>
        <p>
          Eiway may update this agreement from time to time. Continued use of the service after
          changes indicates acceptance of the updated terms.
        </p>

        <h2>10. Contact Us</h2>
        <p>
          If you have any questions regarding this agreement, please contact us through the
          application support channel.
        </p>
      </div>
    </div>
  )
}
