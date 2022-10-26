import Image from 'next/future/image'
import Head from 'next/head'
import { Container } from '@/components/Container'
import portraitImage from '@/images/portrait.jpg'
import SocialComponent from '@/components/SocialComponent'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'


const data = {
  title: "Hi! I'm Ahmed Ramy 👋",
  metaDescription:
    'An iOS software engineer who enjoys building stuff and helping other building stuff.',
}

const ResponsiveImage = (props) => (
  <Image alt={props.alt} layout="responsive" {...props} />
)

const markdown = `
I'm a software engineer who enjoys building stuff and helping other building stuff. I'm currently working at [**CAFU**](https://twitter.com/). I'm also a co-founder of [**NONE**](https://twitter.com/).
`

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
              <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />
            </div>
          </div>
          <SocialComponent />
        </div>
      </Container>
    </>
  )
}