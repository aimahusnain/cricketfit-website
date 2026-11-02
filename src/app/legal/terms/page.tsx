import type { Metadata } from "next";
import LegalLayout, { LegalSection } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Terms & Conditions - CricketFit",
  description: "The terms that apply when you use the CricketFit app and website.",
};

const COMPANY = "Devkins";
const EMAIL = "aimahusnain@gmail.com";
const COUNTRY = "Pakistan";
const UPDATED = "02/11/2026";

const sections: LegalSection[] = [
  {
    title: "Acceptance of these terms",
    content: (
      <p>
        By creating an account or using CricketFit, you agree to these terms. If you do not
        agree, please do not use the app.
      </p>
    ),
  },
  {
    title: "Your account",
    content: (
      <ul>
        <li>You must give accurate information when you sign up.</li>
        <li>You are responsible for keeping your password secure and for activity on your account.</li>
      </ul>
    ),
  },
  {
    title: "Health and safety",
    content: (
      <>
        <p>
          CricketFit provides general cricket training content. It is not medical advice and
          does not replace a coach, doctor or physiotherapist.
        </p>
        <ul>
          <li>Talk to a doctor before starting any new exercise program, especially if you have an injury or health condition.</li>
          <li>Warm up, use proper technique and stop if you feel pain or dizziness.</li>
          <li>You train at your own risk. We are not responsible for injuries that happen while you use the app.</li>
        </ul>
      </>
    ),
  },
  {
    title: "Acceptable use",
    content: (
      <>
        <p>You agree not to:</p>
        <ul>
          <li>Use the app for anything unlawful</li>
          <li>Try to access other users&apos; accounts or data</li>
          <li>Copy, reverse engineer or interfere with the app or its servers</li>
          <li>Upload content that is offensive, infringing or harmful</li>
        </ul>
      </>
    ),
  },
  {
    title: "Your content",
    content: (
      <p>
        You own the custom workouts and other content you create. You give us permission to
        store and process that content so we can run the app for you.
      </p>
    ),
  },
  {
    title: "Our content and intellectual property",
    content: (
      <p>
        The app, its design, exercise library, workout templates and branding belong to{" "}
        {COMPANY} or its licensors. We give you a personal, limited, non-transferable licence
        to use the app. You may not copy, sell or redistribute our content without written
        permission.
      </p>
    ),
  },
  {
    title: "Offline use and syncing",
    content: (
      <p>
        You can use parts of the app offline. Offline changes are stored on your device until
        you sync them. If the same data is changed in more than one place, the most recent
        change is kept. You are responsible for syncing your changes. Data that has not been
        synced may be lost if you uninstall the app or clear its storage.
      </p>
    ),
  },
  {
    title: "Availability and changes",
    content: (
      <p>
        We work to keep CricketFit running, but we do not promise it will always be available
        or error-free. We may add, change or remove features at any time.
      </p>
    ),
  },
  {
    title: "Termination",
    content: (
      <p>
        You can stop using the app and ask us to delete your account at any time. We may
        suspend or close accounts that break these terms.
      </p>
    ),
  },
  {
    title: "Disclaimer and limit of liability",
    content: (
      <p>
        The app is provided “as is” without warranties of any kind. To the extent the law
        allows, {COMPANY} is not liable for indirect or consequential losses, or for any loss
        or injury arising from your use of the app. Nothing here limits rights you have under
        the law that cannot be excluded.
      </p>
    ),
  },
  {
    title: "Governing law",
    content: <p>These terms are governed by the laws of {COUNTRY}.</p>,
  },
  {
    title: "Changes to these terms",
    content: (
      <p>
        We may update these terms. If we make a significant change, we will tell you in the
        app or by email. Continuing to use CricketFit after a change means you accept the
        updated terms.
      </p>
    ),
  },
  {
    title: "Contact us",
    content: (
      <p>
        Questions about these terms? Email <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
      </p>
    ),
  },
];

export default function TermsPage() {
  return (
    <LegalLayout
      title="Terms & Conditions"
      updated={UPDATED}
      intro="These terms apply when you use the CricketFit app and website. Please read them carefully."
      sections={sections}
    />
  );
}