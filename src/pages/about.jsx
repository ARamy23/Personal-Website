import Image from 'next/future/image'
import Head from 'next/head'
import { Container } from '@/components/Container'
import portraitImage from '@/images/portrait.jpg'
import SocialComponent from '@/components/SocialComponent'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import clsx from 'clsx'
import CodeBlock from '@/components/CodeBlock'
import Markdown from '@/components/Markdown'

const markdown = `
# A Journey to the top of the mountain

I started my journey with Computers back when I was 5, always
been fascinated by all those moving bits that ends up as a
spaceship game or angry chicken flying around 🐔

And that passion about Computers never faded, whether movies, games,
interactive stories, or even the internet, there was always
someting to admire about them 

And as years went on, that curiousness about how these things work has led me to watch a
video about programming, the moment I compiled something with a bunch of if, else, switches and loops, I knew I found my new
addiction

# This was CS50.
The year was 2016, the year of pivoting, I was in
High School, I started taking CS50 course, there I e-met
wonderful people, Dr. Malan, Doug Lloyd, and many others of the
staff and the community that am so grateful to have met and
learned from, I still remember how I jumped off 
the chair when **mario** was finally accepted by the grader, the first
feeling is always the strongest when you nail something, and how I skipped it
first and tried my luck with the **quarter** problem and how many **ounces**, then returned back to it, good times

# Graduating Highschool

## FreeCodeCamp
After graduating Highschool, It was time to explore the world, I started out with HTML & CSS, FreeCodeCamp was a good 
reward, because I was seeing an actual cats website being rendered in front of me.

> and I really loved that feeling, because that, would later take me to where I am in iOS

After finishing the HTML & CSS section, I started learning JavaScript, and I blazed through problem sets, until I reached the backend section
and decided to try Android, because I wanted to share what I build with my family

## The clash of the Android Studio titan
I decided to checkout Android Studio, and Kotlin was just out back then, but I used Java because I knew I would need it in College
so, I took the harder route, and learned Android with Java

Couple of weeks into it, I was used to Android Studio being slow, a pain to work with, and slow on my computer, but I enjoyed building stuff and showing it to my dad

After 2 months into it, I was curious to check iOS, **and so it began**...

## A Glimpse of Apple

Even though I knew it was kinda impossible to become an iOS developer without a Mac, and back then, I couldn't afford one myself
But I was determined to learn it after seeing how beautiful the apps were, and how good Swift looked inside the code

So, I hackintoshed my PC, and after my first successful boot, I was greeted with a beautiful Apple logo, and I was so happy, I was finally in the Apple ecosystem

> And so began the journey.
`

const data = {
  title: "Hi! I'm Ahmed Ramy 👋",
  metaDescription:
    'An iOS software engineer who enjoys building stuff and helping other building stuff.',
}

function Portrait() { 
  return (
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
  )
}

export default function About({ article }) {
  return (
    <>
      <Head>
        <title>About - Ahmed Ramy</title>
        <meta name="description" content={data.metaDescription} />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <Portrait />
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              {data.title}
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <Markdown value={markdown} />
            </div>
          </div>
          <SocialComponent />
        </div>
      </Container>
    </>
  )
}
