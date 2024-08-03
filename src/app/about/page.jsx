import Image from 'next/image'
import Head from 'next/head'

import { Container } from '@/components/Container'

import portraitImage from '@/images/portrait.jpg'
import SocialComponent from '@/components/SocialComponent'

const data = {
  title: "Hi! I'm Ahmed Ramy 👋",
  metaDescription:
    'An iOS software engineer who enjoys building stuff and helping others build stuff.',
}

const story = {
  paragraph1: `
    My journey with computers began at the tender age of five, and I've been hooked ever since. 
    I was always fascinated by how those moving bits and bytes could turn into a spaceship game or an angry chicken flying across the screen. 
    One of my earliest programming memories was solving the <strong>"Mario" problem</strong>, and the joy I felt at that moment became my gateway into the world of programming.
  `,
  paragraph2: `
    Soon enough, I was diving into building a <strong>Tower of Hanoi</strong> game in Java and experimenting with HTML and CSS. 
    My inspiration came from my love for the game <a href="https://www.warframe.com/" target="_blank" rel="noopener noreferrer">Warframe</a>, which fueled my creativity to build text adventures in CLI tools using C++. 
    There was always something to admire in these digital creations, whether movies, games, or interactive stories.
  `,
  paragraph3: `
    However, the journey wasn't without its challenges. I often found myself wanting to try <em>everything</em>, leading to distractions. 
    Despite this, I persisted, driven by my insatiable curiosity about how things work. In 2016, while in high school, I took the <a href="https://cs50.harvard.edu/" target="_blank" rel="noopener noreferrer">CS50 course</a>, 
    where I met incredible people like <strong>Dr. Malan</strong> and <strong>Doug Lloyd</strong>. Their teachings and the supportive community around me solidified my passion for technology.
  `,
  paragraph4: `
    Today, I'm a <strong>Senior Engineer</strong>—soon to be <strong>Staff Engineer</strong>—where my role involves leading teams and experimenting with new technologies. 
    I find joy in guiding others through ambiguity, and my journey doesn't stop there. My current challenge is to venture into course-making and maintain my blog, 
    sharing knowledge beyond the confines of my company.
  `,
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
              <p dangerouslySetInnerHTML={{ __html: story.paragraph1 }} />
              <p dangerouslySetInnerHTML={{ __html: story.paragraph2 }} />
              <p dangerouslySetInnerHTML={{ __html: story.paragraph3 }} />
              <p dangerouslySetInnerHTML={{ __html: story.paragraph4 }} />
            </div>
          </div>
          <SocialComponent />
        </div>
      </Container>
    </>
  )
}
