import type { NextConfig } from "next";

const securityHeaders = [
  // Prevent browsers from guessing MIME type — stops MIME-confusion attacks
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  // Prevent embedding in frames from other origins (clickjacking)
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  // Block cross-site scripting in legacy browsers
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
  // Control referrer info sent with requests
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  // Restrict browser APIs — only enable what this portfolio actually needs
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=()",
  },
  // Enforce HTTPS for 1 year, include subdomains (activate when deployed on HTTPS)
  {
    key: "Strict-Transport-Security",
    value: "max-age=31536000; includeSubDomains",
  },
  // Content Security Policy — tuned for this portfolio's actual asset sources
  // - 'unsafe-inline' in style-src is required by Tailwind CSS v4 / Framer Motion inline styles
  // - data: in img-src allows canvas/WebGL toDataURL and local thumbnails
  // - blob: in img-src allows browser-generated object URLs
  // - fonts.gstatic.com / fonts.googleapis.com for Google Fonts (Inter, Geist Mono)
  // - images.unsplash.com for project thumbnails loaded from Unsplash CDN
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'", // Next.js RSC/hydration requires these
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: blob: https://images.unsplash.com",
      "connect-src 'self'",
      "media-src 'self'",
      "worker-src blob:",
      "frame-ancestors 'self'",
      "form-action 'self'",
      "base-uri 'self'",
      "object-src 'none'",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  turbopack: {
    root: './',
  },
  async headers() {
    return [
      {
        // Apply security headers to all routes
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
