import Head from 'next/head'

import Card from '@/components/Card'
import Section from '@/components/Section'
import SimpleLayout from '@/components/SimpleLayout'

function SpeakingSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({ title, description, event, cta, href }) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

const appearances = [
  {
    href: '#',
    title: 'Swift Tooling',
    description: "A talk creating your own tools, boost yours and your teams productivity, and ensure quality and move towards seniority",
    event: 'SwiftCairo 15th Meetup',
    cta: 'Watch the talk'
  },
  {
    href: 'https://github.com/SwiftCairo/MeetupSessions/tree/master?tab=readme-ov-file#13th-meetup-18012023',
    title: 'Architecture Homicide',
    description: "A talk about Common pitfalls and mistakes that affect the architecture, design stamina and the team's overall productivity, and how to identify them and solve them in a funny manner without triggers",
    event: 'SwiftCairo 13th Meetup',
    cta: 'Watch the talk'
  },
  {
    href: 'https://github.com/SwiftCairo/MeetupSessions/tree/master?tab=readme-ov-file#7th-meetup-24419',
    title: 'Swift Going Beyond Using Vapor',
    description: 'A talk about Vapor, a web framework for Swift which was able to build a production-ready backend for a mobile app, with crazy performance numbers.',
    event: 'SwiftCairo 7th Meetup',
    cta: 'See the demo & the slides'
  },
  {
    href: 'https://github.com/SwiftCairo/MeetupSessions/tree/master?tab=readme-ov-file#second-meetup-20618',
    title: 'Blogging',
    description: 'A talk about blogging, sharing & the importancy of giving back, and the butterfly effect that blogging can cause in the lives of those who read them.',
    event: 'SwiftCairo 2nd Meetup',
    cta: 'See the demo & the slides'
  }
]

const workshop_guest = [
  {
    href: '#',
    title: 'Notes: Second Brain',
    description: 'How can a note taking habit, become a knowledge vault, with simple techniques.',
    event: 'LintSchool Happy Hour',
    cta: 'Checkout LintSchool'
  },
  {
    href: '#',
    title: 'Dependency Injection: ServiceLocator',
    description: 'How to create a dependency container without being fancy, in shorter amount of time.',
    event: 'LintSchool Happy Hour',
    cta: 'Checkout LintSchool'
  },
  {
    href: '#',
    title: 'Backend Crashcourse with Vapor',
    description: 'Teaching SwiftyCampers how to build a backend with Vapor, a web framework for Swift.',
    event: "SwiftyCamp 2019's Patch",
    cta: 'Checkout SwiftyCamp'
  }
]


export default function Speaking() {
  return (
    <>
      <Head>
        <title>Speaking - Ahmed Ramy</title>
        <meta
          name="description"
          content="I’ve spoken at events all around the world and been interviewed for many podcasts."
        />
      </Head>
      <SimpleLayout
        title="I’ve spoken at events all around the world and been interviewed for many podcasts."
        intro="One of my favorite ways to share my ideas is live on stage, where there’s so much more communication bandwidth than there is in writing, and I love podcast interviews because they give me the opportunity to answer questions instead of just present my opinions."
      >
        <div className="space-y-20">
          <SpeakingSection title="Meetup Talks">
            {appearances.map((appearance) => (
              <Appearance
              key={appearance.title}
              href={appearance.href}
              title={appearance.title}
              description={appearance.description}
              event={appearance.event}
              cta={appearance.cta}
            />
            ))}
          </SpeakingSection>
          <SpeakingSection title="Workshops">
          {workshop_guest.map((appearance) => (
              <Appearance
              key={appearance.title}
              href={appearance.href}
              title={appearance.title}
              description={appearance.description}
              event={appearance.event}
              cta={appearance.cta}
            />
            ))}
          </SpeakingSection>
        </div>
      </SimpleLayout>
    </>
  )
}
