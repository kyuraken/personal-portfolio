import { Footer } from '@/components/footer';
import Navbar from '@/components/navbar';
import { ThemeProvider } from '@/providers/theme-provider';
import { theme } from '@/styles/theme';
import { Metadata } from 'next';
import localFont from 'next/font/local';

const syncopate = localFont({
  src: '../fonts/Syncopate-Bold.woff',
  variable: '--font-syncopate',
});

const playfairDisplay = localFont({
  src: '../fonts/PlayfairDisplay-Bold.woff',
  variable: '--font-playfair',
});

const inter = localFont({
  src: [
    {
      path: '../fonts/Inter_18pt-Regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/Inter_18pt-Medium.woff',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/Inter_18pt-SemiBold.woff',
      weight: '600',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-inter',
});

const fira_code = localFont({
  src: [
    {
      path: '../fonts/FiraCode-Regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/FiraCode-Medium.woff',
      weight: '500',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-fira-code',
});

export const metadata: Metadata = {
  title: 'Jason Hua Portfolio',
  description:
    'Jason Hua is a computer science student and software engineer focused on intelligent systems and security.',
  metadataBase: new URL('https://jasonhua.vercel.app'),
  authors: [{ name: 'Jason Hua' }],
  creator: 'Jason Hua',
  publisher: 'Jason Hua',
  keywords: [
    'portfolio',
    'front-end portfolio',
    'jason',
    'jason hua',
    'software engineer portfolio',
    'web developer portfolio',
  ],
  openGraph: {
    title: 'Jason Hua Portfolio',
    description:
      'Jason Hua is a computer science student and software engineer focused on intelligent systems and security.',
    url: 'https://jasonhua.vercel.app/',
    siteName: 'Jason Hua Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://jasonhua.vercel.app',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${syncopate.variable} ${playfairDisplay.variable} ${fira_code.variable}`}
    >
      <body>
        <ThemeProvider theme={theme}>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
