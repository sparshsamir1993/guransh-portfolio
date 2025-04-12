import GoogleAnalytics from "@/components/atoms/GoogleAnalytics";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata = {
  title: "Guransh Brar",
  description: "Hi, I am Dr. Guransh Brar, welcome to my portfolio.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-RRLLCP569G"></script>
      </head>
      <body>
        <GoogleAnalytics />
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
