import { Fragment } from 'react'
import logoElmenus from '@/images/logos/elmenus.svg'
import logoSQ10 from '@/images/logos/sq10.svg'
import logoCAFU from '@/images/logos/cafu.svg'
import logoSWVL from '@/images/logos/swvl.svg'
import logoProba from '@/images/logos/proba.svg'
import logoDCA from '@/images/logos/dca.svg'
import logoCamelan from '@/images/logos/camelan.svg'
import Image from 'next/future/image'

const resume = [
    {
      company: 'CAFU',
      title: 'iOS Software Engineer',
      logo: logoCAFU,
      start: 'August 2022',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear(),
      },
    },
    {
      company: 'SWVL',
      title: 'iOS Software Engineer - II',
      logo: logoSWVL,
      start: 'Feb 2022',
      end: 'August 2022',
    },
    {
      company: 'SQ10',
      title: 'iOS Software Engineer - Sr.',
      logo: logoSQ10,
      start: 'Oct 2021',
      end: 'Feb 2022',
    },
    {
      company: 'Proba',
      title: 'iOS Software Engineer - Tech Lead (Part-Time)',
      logo: logoProba,
      start: 'Aug 2021',
      end: 'Oct 2021',
    },
    {
      company: 'DCA - LeanScale',
      title: 'iOS Software Engineer - Mid.',
      logo: logoDCA,
      start: 'Sep 2020',
      end: 'Aug 2021',
    },
    {
      company: 'Camlist (Previously Camelan)',
      title: 'iOS Software Engineer - Mid.',
      logo: logoCamelan,
      start: 'Jan 2020',
      end: 'Sep 2020',
    },
  {
    company: 'elmenus',
    title: 'iOS Software Engineer - Jr.',
    logo: logoElmenus,
    start: 'Oct 2018',
    end: 'Jan 2020',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Promotion() { 
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5"
      >
        <path
          fillRule="evenodd"
          d="M9.664 1.319a.75.75 0 01.672 0 41.059 41.059 0 018.198 5.424.75.75 0 01-.254 1.285 31.372 31.372 0 00-7.86 3.83.75.75 0 01-.84 0 31.508 31.508 0 00-2.08-1.287V9.394c0-.244.116-.463.302-.592a35.504 35.504 0 013.305-2.033.75.75 0 00-.714-1.319 37 37 0 00-3.446 2.12A2.216 2.216 0 006 9.393v.38a31.293 31.293 0 00-4.28-1.746.75.75 0 01-.254-1.285 41.059 41.059 0 018.198-5.424zM6 11.459a29.848 29.848 0 00-2.455-1.158 41.029 41.029 0 00-.39 3.114.75.75 0 00.419.74c.528.256 1.046.53 1.554.82-.21.324-.455.63-.739.914a.75.75 0 101.06 1.06c.37-.369.69-.77.96-1.193a26.61 26.61 0 013.095 2.348.75.75 0 00.992 0 26.547 26.547 0 015.93-3.95.75.75 0 00.42-.739 41.053 41.053 0 00-.39-3.114 29.925 29.925 0 00-5.199 2.801 2.25 2.25 0 01-2.514 0c-.41-.275-.826-.541-1.25-.797a6.985 6.985 0 01-1.084 3.45 26.503 26.503 0 00-1.281-.78A5.487 5.487 0 006 12v-.54z"
          clipRule="evenodd"
        />
      </svg>
    )
}

export default function Feed() {
  return (
    <div className="flow-root">
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIdx) => (
          <li key={roleIdx} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {role.company}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {role.title}
              </dd>
            </dl>
          </li>
        ))}
      </ol>
    </div>
  )
}