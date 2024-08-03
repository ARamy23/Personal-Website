import Image from 'next/image'
import Head from 'next/head'
import Button from '@/components/Button'

import { Container } from '@/components/Container'

import portraitImage from '@/images/portrait.jpg'
import SocialComponent from '@/components/SocialComponent'

const data = {
  title: "Courses 🎥",
  metaDescription:
    'I have taken a few courses over the years to learn new technologies and improve my skills. Here are some of the courses I have completed.',
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Ahmed Ramy</title>
        <meta name="description" content={data.metaDescription} />
      </Head>
      <Container className="flex h-full items-center pt-16 sm:pt-32">
      <div className="flex flex-col items-center">
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          Courses are Coming Soon
        </h1>

        <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
          Sorry to get your hopes up, something cool is coming!
        </p>

        <h3 className="mt-4 text-base font-semibold text-zinc-400 dark:text-zinc-500">
          🤖⚡️
        </h3>
        <Button href="/" variant="secondary" className="mt-4">
          Go back home
        </Button>
      </div>
    </Container>
    </>
  )
}
