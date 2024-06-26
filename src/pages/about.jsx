import Image from 'next/future/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { getAllArticles } from '@/lib/getAllArticles'
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'
import SocialComponent from '@/components/SocialComponent'

const data = {
  title: "Hi! I'm Ahmed Ramy 👋",
  metaDescription:
    'An iOS software engineer who enjoys building stuff and helping other building stuff.',
}

function Article({ article }) {
  if (article) { 
    return (
      <article className="md:grid md:grid-cols-4 md:items-baseline">
        <Card className="md:col-span-3">
          <Card.Title href={`/articles/${article.slug}`}>
            {article.title}
          </Card.Title>
          <Card.Eyebrow
            as="time"
            dateTime={article.date}
            className="md:hidden"
            decorate
          >
            {formatDate(article.date)}
          </Card.Eyebrow>
          <Card.Description>{article.description}</Card.Description>
          <Card.Cta>Read article</Card.Cta>
        </Card>
        <Card.Eyebrow
          as="time"
          dateTime={article.date}
          className="mt-1 hidden md:block"
        >
          {formatDate(article.date)}
        </Card.Eyebrow>
      </article>
    )
  } else { 
    return (
      <p>
        No articles yet.
      </p>
    )
  }
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
              <Article article={article} />
            </div>
          </div>
          <SocialComponent />
        </div>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      // First article that contains 'about-me' as a name
      article: (await getAllArticles())
      .map(({ component, ...meta }) => meta)
      .filter(({ meta }) => meta.slug === 'about-me'),
    },
  }
}