import {
  MdWebAssetOff,
  MdWebAsset
} from 'react-icons/md'
import { GitHubIcon } from '@/components/SocialIcons'
import { SocialLink } from './SocialIcons'

function Card({ item, index, items }) {
  return (
    <article className={`${items.length - 1 === index ? "border-l-2 border-white dark:border-zinc-900" : "border-l-2 border-teal-400"}`}>
      <div className="flex flex-start">
        <div className="bg-teal-400 w-6 h-6 flex items-center justify-center rounded-full -ml-3" />
        <section className="block rounded-2xl border border-zinc-100 dark:border-zinc-700/40 p-6 w-full ml-6 mb-6">
          <header class="flex mb-1 flex-wrap">
            <h3 className="text-lg font-semibold text-teal-400 dark:text-teal-400">{item.title}</h3>
          </header>
          <section className="flex flex-wrap">
            {item.description && <p class="text-xs text-zinc-600 dark:text-zinc-400 w-full">{item.description}</p>}
            {item.techs && <p class="text-xs text-zinc-600 dark:text-zinc-400 w-full">Developed with: {item.techs}</p>}
          </section>
          <footer className='mt-4 gap-2 flex'>
            {item.github && <SocialLink href={item.github} icon={GitHubIcon} />}
            {item.demo && <SocialLink href={item.demo} icon={MdWebAsset} />}
          </footer>
        </section>
      </div>
    </article>
  )
}

export default Card