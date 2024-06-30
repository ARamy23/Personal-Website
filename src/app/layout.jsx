import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - Ahmed Ramy',
    default:
      'Ahmed Ramy - iOS Software Engineer',
  },
  description:
    "Hi! I'm Ahmed Ramy, a Senior iOS Engineer who enjoys building stuff and helping others build stuff. I'm passionate about Swift, Software Design and Architecture, and the Apple Ecosystem.",
  // alternates: {
  //   types: {
  //     'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
  //   },
  // },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
