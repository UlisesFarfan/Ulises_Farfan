import { Button } from '@/components/Button'
import techSkills from '@/data/techskills'
import axios from 'axios'
import fileDownload from 'js-file-download'
import { BsList } from 'react-icons/bs'
import { toast } from 'react-hot-toast'

function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const downloadCv = async (e) => {
  e.preventDefault()
  toast.promise(
    axios.get('/download', {
      responseType: 'blob'
    })
      .then((response) => {
        fileDownload(response.data, 'ULISES_FARFAN_FULL_STACK_DEVELOPER.pdf')
      })
    ,
    {
      loading: 'Saving...',
      success: <b>Resume download successfully!</b>,
      error: <b>The download failed.</b>,
    },
    {
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },
    }
  );
}

function Resume() {
  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BsList className="h-6 w-6 flex-none" />
        <span className="ml-3">TECH SKILLS</span>
      </h2>
      <ol className="mt-6 space-y-4 h-100 snap-both overflow-y-auto">
        {techSkills.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4 snap-center">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <role.icon className='text-3xl text-teal-500' />
            </div>
            <div>
              <h3 className='text-sm font-semibold text-zinc-900 dark:text-zinc-100'>{role.name}</h3>
              <p className="text-xs text-zinc-600 dark:text-zinc-400">{role.seniority}</p>
              <p className="text-xs text-zinc-600 dark:text-zinc-400">{role.experience}</p>
            </div>
          </li>
        ))}
      </ol>
      <Button variant="secondary" className="group mt-6 w-full" onClick={downloadCv}>
        Download CV
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  )
}

export default Resume