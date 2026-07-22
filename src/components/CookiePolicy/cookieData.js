export const sections = [
  "Introduction",
  "What Are Cookies",
  "Cookies We Use",
  "Third-Party Cookies",
  "Managing Cookie Preferences",
  "Changes To This Policy",
  "Contact Us",
];

export const sectionContent = {
  Introduction: {
    title: "Cookie Policy",
    paragraphs: [
      "This Cookie Policy explains how Support Studio Technologies (SST) uses cookies and similar technologies on www.supportstudio.tech (the “Website”), what these technologies are used for, and the choices available to you.",
      "By continuing to browse or use our Website, you agree to our use of cookies as described in this Cookie Policy, unless you have disabled them in accordance with the guidance below.",
    ],
  },

  "What Are Cookies": {
    title: "What Are Cookies",
    paragraphs: [
      "Cookies are small text files that a website stores on your device (computer, tablet or mobile) when you visit it. They are widely used to make websites work, or work more efficiently, as well as to provide information to the owners of the site.",
      "Cookies set directly by SST are called “first-party cookies”. Cookies set by parties other than SST — for example an embedded scheduling widget, map, or video — are called “third-party cookies”. Third-party cookies enable functionality provided on or through the Website (such as booking a call, viewing our office location, or watching a video) and are managed by the party that placed them, not by SST.",
    ],
  },

  "Cookies We Use": {
    title: "Cookies We Use",
    paragraphs: [
      "We reviewed our Website to identify exactly what is active today. SST does not currently run any analytics or advertising cookies (such as Google Analytics or a marketing pixel) — the table below reflects only the cookies genuinely set when you use the Website.",
    ],
    table: [
      {
        name: "cookie_consent",
        provider: "Support Studio Technologies (first-party)",
        purpose:
          "Remembers whether you accepted or rejected cookies, so the consent banner is not shown again on future visits.",
        duration: "365 days",
      },
      {
        name: "Google Maps cookies (e.g. NID, CONSENT)",
        provider: "Google LLC (third-party)",
        purpose:
          "Set when the embedded location map on our Contact Us page loads, supporting the map display and Google's own services.",
        duration: "Set by Google; varies by cookie",
      },
      {
        name: "Calendly session cookies (e.g. __cf_bm)",
        provider: "Calendly LLC (third-party)",
        purpose:
          "Set when you use the embedded scheduling widget on our Book a Call page, to support booking a meeting and protect the widget from abuse.",
        duration: "Set by Calendly; varies by cookie",
      },
      {
        name: "YouTube cookies (e.g. YSC, VISITOR_INFO1_LIVE)",
        provider: "Google LLC / YouTube (third-party)",
        purpose:
          "Set when you play a video embedded in our website, supporting video playback and YouTube's own services.",
        duration: "Set by YouTube; varies by cookie",
      },
    ],
  },

  "Third-Party Cookies": {
    title: "Third-Party Cookies",
    paragraphs: [
      {
        parts: [
          "The map, scheduling widget, and video embeds on our Website are provided by third parties, and we do not control the cookies these providers set. For more information, please refer to their respective policies: the ",
          { text: "Google Privacy Policy", href: "https://policies.google.com/privacy" },
          " and the ",
          { text: "Calendly Privacy Notice", href: "https://calendly.com/privacy" },
          ".",
        ],
      },
      "If you do not wish to receive cookies from these providers, you can avoid loading the relevant embed (for example, by not opening the map, the scheduling widget, or a video) or block third-party cookies through your browser settings.",
    ],
  },

  "Managing Cookie Preferences": {
    title: "Managing Your Cookie Preferences",
    paragraphs: [
      "When you first visit our Website, you are shown a cookie banner where you can choose “Accept All” or “Reject All”. Your choice is remembered using the cookie_consent cookie described above, for 365 days.",
      "You can also control or delete cookies at any time through your browser settings. Most browsers let you refuse or delete cookies, though doing so may affect the availability of certain parts of our Website, such as the interactive map, scheduling widget, or embedded videos.",
    ],
  },

  "Changes To This Policy": {
    title: "Changes to This Cookie Policy",
    paragraphs: [
      "We may update this Cookie Policy from time to time to reflect changes in the cookies we use, or for other operational, legal, or regulatory reasons. Please revisit this page periodically to stay informed about our use of cookies.",
      "This Cookie Policy was last reviewed and updated on 20 July 2026.",
    ],
  },

  "Contact Us": {
    title: "Contact Us",
    paragraphs: [
      "If you have any questions about our use of cookies, please contact us:",
    ],
    contacts: [
      { label: "Email", value: "sstdpo@isupportz.com", href: "mailto:sstdpo@isupportz.com" },
      { label: "Phone", value: "0413-2191301", href: "tel:+04132191301" },
      {
        label: "Registered Address",
        value: "#192, Kamaraj Salai, Puducherry, India – Pin Code 605013",
        href: "https://maps.app.goo.gl/pHCzqbb6vXihYvjn6",
      },
    ],
  },
};
