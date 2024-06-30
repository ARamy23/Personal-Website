import Image from 'next/image'
import Head from 'next/head'

import { Container } from '@/components/Container'

import portraitImage from '@/images/portrait.jpg'
import SocialComponent from '@/components/SocialComponent'

const data = {
  title: "Hi! I'm Ahmed Ramy 👋",
  metaDescription:
    'An iOS software engineer who enjoys building stuff and helping other building stuff.',
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Ahmed Ramy</title>
        <meta name="description" content={data.metaDescription} />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover transition duration-150 hover:-rotate-3 hover:shadow-lg hover:shadow-blue-500/50 dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              {data.title}
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
                I started my journey with Computers back when I was 5, always
                been fascinated by all those moving bits that ends up as a
                spaceship game or angry chicken flying around 🐔 <br /> <br /> 
                And that passion about Computers never faded, whether movies, games,
                interactive stories, or even the internet, there was always
                someting to admire about them <br /> <br /> 
            </p>

            <p>
                And as years went on, that curiousness about how these things work has led me to watch a
                video about programming, the moment I compiled something with a bunch of if, else, switches and loops, I knew I found my new
                addiction <br />  <br /> 
                
                So you can say 2016 was the year of pivoting, I was in
                High School, I started taking CS50 course, there I e-met
                wonderful people, Dr. Malan, Doug Lloyd, and many others of the
                staff and the community that am so grateful to have met and
                learned from
              </p>
            </div>
          </div>
          <SocialComponent />
        </div>
      </Container>
    </>
  )
}
