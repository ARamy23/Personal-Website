import Image from 'next/future/image'
import Head from 'next/head'
import { Container } from '@/components/Container'
import portraitImage from '@/images/portrait.jpg'
import SocialComponent from '@/components/SocialComponent'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkGithub from 'remark-github'
import remarkToc from 'remark-toc'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeShiftHeading from 'rehype-shift-heading'
import rehypeHighlight from 'rehype-highlight'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import swift from 'react-syntax-highlighter/dist/cjs/languages/prism/swift'
import rangeParser from 'parse-numeric-range'
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import clsx from 'clsx'

SyntaxHighlighter.registerLanguage('swift', swift)

const data = {
  title: "Hi! I'm Ahmed Ramy 👋",
  metaDescription:
    'An iOS software engineer who enjoys building stuff and helping other building stuff.',
}

const ResponsiveImage = (props) => (
  <Image alt={props.alt} layout="responsive" {...props} />
)

const HeaderClassNames = "font-bold transition ease-in-out duration-300 text-zinc-400 hover:text-zinc-900 hover:transition-all dark:text-zinc-400 hover:dark:text-zinc-200"
const SpanHeaderClassNames = "text-base font-bold transition ease-in-out duration-300 text-blue-500 hover:text-blue-600 dark:text-teal-500 hover:transition-all"

const H1 = (children) => (
  <p className={clsx('text-4xl', HeaderClassNames)}>
    <span className={clsx('hover:text-2xl', SpanHeaderClassNames)}>
      #
    </span>
    <span> </span>
    {children}
  </p>
)

const H2 = (children) => (
  <p className={clsx('text-3xl', HeaderClassNames)}>
    <span className={clsx('hover:text-xl', SpanHeaderClassNames)}>
      ##
    </span>
    <span> </span>
    {children}
  </p>
)

const H3 = (children) => (
  <p className={clsx('text-2xl', HeaderClassNames)}>
    <span className={clsx('hover:text-xl', SpanHeaderClassNames)}>
      ###
    </span>
    <span> </span>
    {children}
  </p>
)

const H4 = (children) => (
  <p className={clsx('text-xl', HeaderClassNames)}>
    <span className={clsx('hover:text-lg', SpanHeaderClassNames)}>
      ####
    </span>
    <span> </span>
    {children}
  </p>
)

const H5 = (children) => (
  <p className={clsx('text-lg', HeaderClassNames)}>
    <span className={clsx('hover:text-md', SpanHeaderClassNames)}>
      #####
    </span>
    <span> </span>
    {children}
  </p>
)

const H6 = (children) => (
  <p className={clsx('text-md', HeaderClassNames)}>
    <span className={clsx('hover:text-md', SpanHeaderClassNames)}>
      ######
    </span>
    <span> </span>
    {children}
  </p>
)

const Blockquote = (children) => (
  <blockquote className="p-4 my-4 transition ease-in-out duration-300 text-lg font-semibold italic text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 hover:dark:text-zinc-200 border-l-4 border-zinc-200 dark:border-zinc-700 hover:border-zinc-300 hover:dark:border-zinc-500">
    <svg
      aria-hidden="true"
      className="h-4 w-4 transition duration-300 text-blue-400 dark:text-teal-500 hover:scale-150 hover:translate-x-1 hover:-translate-y-1"
      viewBox="0 0 24 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
        fill="currentColor"
      />
    </svg>
    <p>{children}</p>
  </blockquote>
)

const Code = (props) => (
  <code className="rounded bg-zinc-100 px-2 py-1 font-mono text-sm text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100">
    {chidlren}
  </code>
)

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

So, I hackintoshed my PC, and so began the journey

# The Journey

## Learning the ropes
I took an offline course, and I learnt the basics of Swift, and built a simple app that would show the weather of a city
On the side, I took an online course by Dr. Angela Yu, and I was already on my way to landing my first internship after 7 months of hard work

## The Internship
By the time I finished my first year at college, I landed an Internship in WiFi Metropolis, a local startup that evolved to what is now called 'Coral Technologies'

The Internship was a great experience, I was working with a Sr. Engineer of 8 years of experience in the field, and he guided me to some key lessons
Sadly I wasn't accepted into continuing after a month, but that was actually a key factor in being drived into learning more, and so... I landed a new Internship in elmenus

## A Foodie in a land of Food
elmenus was my first real opportunity, and Alhamdullelah (Thanks to God), I was able to nail it, all that 12 months hard work, paid off, and I was offered a full time offer
in my 2nd month, from there, I was able to achieve lots of personal & career milestones, that I'd have never ever imagined to have done

## A Pet to the rescue
Early 2020, before the COVID-19 hits the world, I was offered a full-time job at Cognitev, where they were working on a secret project called 'Camelan'
Camelan was one of the first projects I had which really had a +ive impact on people

I still remember the quote of one of our users back then saying 

> we saved his life from debts, because during the lockdown in UAE, all the pet stores were shut down
> And he had no source of income any more.

And another one who said

> I am so grateful to Camelan, I found a pet by my side because I was going crazy, and thinking of ending my life, but my new friend (a dog) gave me some hope that there is still something to live for

Since then, I made it a goal, that whatever product-based company I join, must have a +ive impact, it's up to me to make that happen along with my team **In Shaa Allah (If God wills)**

... WIP ...
`

const syntaxTheme = oneDark

export default function About({ article }) {
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
              <ReactMarkdown
                children={markdown}
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeHighlight]}
                components={{
                  h1: ({ node, children }) => H1(children),
                  h2: ({ node, children }) => H2(children),
                  h3: ({ node, children }) => H3(children),
                  h4: ({ node, children }) => H4(children),
                  h5: ({ node, children }) => H5(children),
                  h6: ({ node, children }) => H6(children),
                  blockquote: ({ node, children }) => Blockquote(children),
                  // code({ node, inline, className, ...props }) {
                  //   const match = /language-(\w+)/.exec(className || '')
                  //   const hasMeta = node?.data?.meta

                  //   const applyHighlights = (
                  //     applyHighlights
                  //   ) => {
                  //     if (hasMeta) {
                  //       const RE = /{([\d,-]+)}/
                  //       const metadata = node.data.meta?.replace(/\s/g, '')
                  //       const strlineNumbers = RE?.test(metadata)
                  //         ? RE?.exec(metadata)[1]
                  //         : '0'
                  //       const highlightLines = rangeParser(strlineNumbers)
                  //       const highlight = highlightLines
                  //       const data = highlight.includes(applyHighlights)
                  //         ? 'highlight'
                  //         : null
                  //       return { data }
                  //     } else {
                  //       return {}
                  //     }
                  //   }

                  //   return match ? (
                  //     <SyntaxHighlighter
                  //       style={syntaxTheme}
                  //       language={match[1]}
                  //       PreTag="div"
                  //       className="codeStyle"
                  //       showLineNumbers={false}
                  //       wrapLines={true}
                  //       useInlineStyles={true}
                  //       lineProps={applyHighlights}
                  //       {...props}
                  //     />
                  //   ) : (
                  //     <code className={className} {...props} />
                  //   )
                  // },
                }}
              />
            </div>
          </div>
          <SocialComponent />
        </div>
      </Container>
    </>
  )
}
