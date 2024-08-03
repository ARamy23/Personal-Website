import { Fragment } from 'react'
import logoElmenus from '@/images/logos/elmenus.svg'
import logoSQ10 from '@/images/logos/sq10.svg'
import logoCAFU from '@/images/logos/cafu.svg'
import logoSWVL from '@/images/logos/swvl.svg'
import logoProba from '@/images/logos/proba.svg'
import logoDCA from '@/images/logos/dca.svg'
import logoCamelan from '@/images/logos/camelan.svg'
import Image from 'next/image'

const resume = [
  {
    company: 'CAFU',
    title: 'iOS Software Engineer - III',
    logo: logoCAFU,
    start: 'December 2023',
    end: {
      label: 'Present',
      dateTime: new Date().getFullYear(),
    },
  },
    {
      company: 'CAFU',
      title: 'iOS Software Engineer - II',
      logo: logoCAFU,
      start: 'August 2022',
      end: {
        label: 'December 2023',
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
      title: 'iOS Software Engineer - III',
      logo: logoSQ10,
      start: 'Oct 2021',
      end: 'Feb 2022',
    },
    {
      company: 'Proba',
      title: 'iOS Software Engineer - III',
      logo: logoProba,
      start: 'Aug 2021',
      end: 'Oct 2021',
    },
    {
      company: 'DCA - LeanScale',
      title: 'iOS Software Engineer - II',
      logo: logoDCA,
      start: 'Sep 2020',
      end: 'Aug 2021',
    },
    {
      company: 'Camlist (Previously Camelan)',
      title: 'iOS Software Engineer - II',
      logo: logoCamelan,
      start: 'Jan 2020',
      end: 'Sep 2020',
    },
  {
    company: 'elmenus',
    title: 'iOS Software Engineer - I',
    logo: logoElmenus,
    start: 'Oct 2018',
    end: 'Jan 2020',
  },
]

function calculateDuration(start, end) {
  const startDate = new Date(start);
  const endDate = end === 'Present' ? new Date() : new Date(end);
  const durationInMonths = (endDate.getFullYear() - startDate.getFullYear()) * 12 + (endDate.getMonth() - startDate.getMonth());
  const years = Math.floor(durationInMonths / 12);
  const months = durationInMonths % 12;
  return `${years > 0 ? `${years} yr${years > 1 ? 's' : ''} ` : ''}${months > 0 ? `${months} mo${months > 1 ? 's' : ''}` : ''}`.trim();
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
              <dt className="sr-only">Duration</dt>
              <dd className="text-xs text-blue-500 dark:text-blue-400">
                {calculateDuration(role.start, role.end.label || role.end)}
              </dd>
            </dl>
          </li>
        ))}
      </ol>
    </div>
  )
}
