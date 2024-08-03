import Head from 'next/head'

import Card from '@/components/Card'
import Section from '@/components/Section'
import SimpleLayout from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

const tools_setup = [
  {
    title: '16” MacBook Pro, M1 Pro, 32GB RAM (2021)',
    description:
      'I was using an Intel-based 16” MacBook Pro prior to this and the difference is night and day. I’ve never heard the fans turn on a single time, even under the incredibly heavy loads I put it through with our various launch simulations.',
  },
  {
    title: 'Air75 Wireless Mechanical Keyboard',
    description:
      'Call me old school, but I love the feel of a mechanical keyboard. That Air75 is a great balance between the feel & sound of ticks.',
  },
  {
    title: 'Redragon M601 Centrophorus Gaming Mouse',
    description:
      "Coming from BattleField 3, And other FPS games, A good mouse is a sniper's best friend, and it adds extra boost when moving it, making it ideal and faster than the trackpad.",
  },
  {
    title: 'iPhone 14 Pro Max',
    description: "Cuz I'm an iOS Software Engineer, and a fan",
  },
]

const tools_development = [
  {
    title: 'Xcode',
    description: "Yknow..., the 'One'.",
  },
  {
    title: 'VSCode',
    description: "For stuff that are outside of the 'One'.",
  },
  {
    title: 'Warp',
    description:
      'An AI Terminal combined with Oh-My-ZSH, Fig, and Plugins.',
  },
]

const tools_design = [
  {
    title: 'Figma',
    description:
      "Figma is just there for everything GUI-related outside Xcode, cropping, cutting, designing, UX-ing, you name it, it's at the heart of everything I do when it comes to UI.",
  },
]

const tools_productivity = [
  {
    title: 'Paste',
    description:
      'Simple, Powerful, Quick and to the point Clipboard Manager, It has a beautiful UI, from which you can never go wrong.',
  },
  {
    title: 'Raycast',
    description:
      'Alfred, but younger, cooler, and more powerful. Raycast is one of my productivity tools that helps in skipping lots of clicks, keystrokes into 4 to 6 keystrokes.',
  },
  {
    title: 'SideNote',
    description:
      'I love and swear by taking notes, SideNote makes taking them easy, fast & could drive a whole workflow into becoming tons better.',
  },
  {
    title: 'Meeter',
    description:
      'Like a personal assistant which does 1 thing only, telling you to join a meeting on time and be prepared, Meeter.',
  },
  {
    title: 'CleanShot X',
    description:
      'Most of my work is sharing and discussing, sometimes screenshots, sometimes videos, but CleanShot just works out so well with my workflow, and also makes my screenshots so elegant.',
  },
  {
    title: 'Session',
    description:
      'A very pleasant-on-the-eye way of using Promodoro Technique, with Analytics and automations right to the heart of Slack.',
  },
  {
    title: 'Numi',
    description:
      "It's an IDE + a Calculator, very handy when taking 'financial' notes.",
  },
]

export default function Uses() {
  return (
    <>
      <Head>
        <title>Uses - Ahmed Ramy</title>
        <meta
          name="description"
          content="Software I use, gadgets I love, and other things I recommend."
        />
      </Head>
      <SimpleLayout
        title="Software I use, gadgets I love, and other things I recommend."
        intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
      >
        <div className="space-y-20">
          <ToolsSection title="Workstation">
            {tools_setup.map((tool) => (
              <Tool key={tool.title} title={tool.title}>
                {tool.description}
              </Tool>
            ))}
          </ToolsSection>
          <ToolsSection title="Development tools">
            {tools_development.map((tool) => (
              <Tool key={tool.title} title={tool.title}>
                {tool.description}
              </Tool>
            ))}
          </ToolsSection>
          <ToolsSection title="Productivity">
            {tools_productivity.map((tool) => (
              <Tool key={tool.title} title={tool.title}>
                {tool.description}
              </Tool>
            ))}
          </ToolsSection>
          <ToolsSection title="Design">
            {tools_design.map((tool) => (
              <Tool key={tool.title} title={tool.title}>
                {tool.description}
              </Tool>
            ))}
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
