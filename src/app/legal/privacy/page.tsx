import type { Metadata } from "next";
import LegalLayout, { LegalSection } from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy - CricketFit",
  description: "How CricketFit collects, uses and protects your information.",
};

const COMPANY = "Devkins";
const EMAIL = "aimahusnain@gmail.com";
const UPDATED = "02/11/2026";

const sections: LegalSection[] = [
  {
    title: "Information we collect",
    content: (
      <>
        <p>We collect only what the app needs to work.</p>
        <p><strong>Account information</strong></p>
        <ul>
          <li>Email address and password (handled by our authentication provider, Supabase)</li>
          <li>Username and profile photo, if you add them</li>
        </ul>
        <p><strong>Training information</strong></p>
        <ul>
          <li>Custom workouts you create</li>
          <li>Completed workout history, including workout type, duration and number of exercises completed</li>
        </ul>
        <p><strong>Settings</strong></p>
        <ul>
          <li>Notification choices: workout reminders, streak reminders, tips and updates, and your reminder time</li>
        </ul>
      </>
    ),
  },
  {
    title: "How we use your information",
    content: (
      <ul>
        <li>To create and manage your account and sign you in</li>
        <li>To save your custom workouts and show your workout history and calendar</li>
        <li>To send the reminders and notifications you have turned on</li>
        <li>To keep the app secure, fix problems and improve it</li>
        <li>To respond when you contact us</li>
      </ul>
    ),
  },
  {
    title: "Data stored on your device",
    content: (
      <p>
        CricketFit saves exercises, workout templates, your custom workouts and a queue of
        unsynced changes on your device so the app works offline. This data stays on your
        phone until you sync it from Settings. Uninstalling the app or clearing its storage
        removes locally stored data that has not been synced.
      </p>
    ),
  },
  {
    title: "Where your data is stored",
    content: (
      <p>
        Your account and synced data are stored with Supabase, our database and
        authentication provider. Data is transmitted over encrypted connections. Supabase
        may process data on servers in other countries.
      </p>
    ),
  },
  {
    title: "Sharing your information",
    content: (
      <>
        <p>We do not sell your personal information. We share it only:</p>
        <ul>
          <li>With service providers that run the app for us (such as Supabase and the notification service)</li>
          <li>When the law requires it</li>
          <li>To protect the rights, safety or security of our users or the app</li>
        </ul>
      </>
    ),
  },
  {
    title: "Notifications",
    content: (
      <p>
        We send push notifications only if you allow them. You can turn each type on or off in
        the app under Notifications, or change permissions in your device settings.
      </p>
    ),
  },
  {
    title: "Data retention and deletion",
    content: (
      <p>
        We keep your data while your account is active. You can ask us to delete your account
        and the data linked to it by emailing <a href={`mailto:${EMAIL}`}>{EMAIL}</a>. We will
        delete it within a reasonable time, except where the law requires us to keep
        certain records.
      </p>
    ),
  },
  {
    title: "Your rights",
    content: (
      <p>
        Depending on where you live, you may have the right to access, correct, export or
        delete your personal data, or to object to how we use it. To make a request, email{" "}
        <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
      </p>
    ),
  },
  {
    title: "Changes to this policy",
    content: (
      <p>
        We may update this policy from time to time. When we do, we will change the “last
        updated” date at the top of this page.
      </p>
    ),
  },
  {
    title: "Contact us",
    content: (
      <p>
        Questions about this policy? Email <a href={`mailto:${EMAIL}`}>{EMAIL}</a>. CricketFit
        is operated by {COMPANY}.
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      updated={UPDATED}
      intro="This policy explains what information CricketFit collects, how we use it and the choices you have. By using the app you agree to this policy."
      sections={sections}
    />
  );
}