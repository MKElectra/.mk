import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | MK Electra",
  description: "Cookie usage policy for MK Electra website.",
};

export default function CookiePolicyPage() {
  return (
    <div className="py-20 lg:py-28 bg-navy-950 min-h-[80vh]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">
            PRIVACY & PREFERENCES
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">Cookie Policy</h1>
          <p className="text-xs font-mono text-steel-400 mt-2">Last Updated: January 1, 2026</p>
        </div>

        <div className="space-y-6 text-sm text-steel-300 leading-relaxed">
          <p>
            MK Electra uses essential cookies and performance analytics to ensure website stability,
            remember user preferences (such as material selections in the 3D quote configurator), and
            understand user navigation across our service divisions.
          </p>

          <h2 className="text-lg font-bold text-white pt-4">1. Essential Cookies</h2>
          <p>
            These cookies are necessary for core site functions, security, and session management. They
            do not track personally identifiable browsing across third-party websites.
          </p>

          <h2 className="text-lg font-bold text-white pt-4">2. Performance & Analytics Cookies</h2>
          <p>
            These help us measure site speed, page loading times, and popular navigation routes to
            continually improve our technical documentation and user experience.
          </p>

          <h2 className="text-lg font-bold text-white pt-4">3. Managing Preferences</h2>
          <p>
            You can configure your web browser to decline or delete cookies at any time. However,
            certain interactive features (such as saved quote configurator states) may not function as
            intended.
          </p>
        </div>
      </div>
    </div>
  );
}
