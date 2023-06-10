import Head from 'next/head'
import { Container } from '@/components/Container'
import works from '@/data/works'
import projects from '@/data/projects'
import Card from '@/components/Card'
import Resume from '@/components/Resume'
import Contact from '@/components/Contact'
import { Button } from '@/components/Button'

export default function Home({ articles }) {
  return (
    <>
      <Head>
        <title>
          Ulises Farfan - Full Stack
        </title>
      </Head>
      <Container className="sm:px-8 my-9 h-screen flex pb-32 items-center">
        <div className="mx-auto max-w-2xl lg:max-w-5xl">
          <h1 className="text-4xl flex justify-center font-bold tracking-tight text-zinc-600 dark:text-zinc-100 text-6xl md:text-8xl lg:text-9xl">
            Ulises Farfan
          </h1>
          <h2 className="text-4xl flex justify-center font-bold tracking-tight text-teal-400 lg:text-5xl">
            Full Stack Developer && QA Tester
          </h2>
          <div className='w-full flex justify-center mt-6'>
            <Button href="#resume" className="mt-8" variant="secondary">
              View More
            </Button>
          </div>
        </div>
      </Container>
      <Container className="mt-24 md:mt-28 h-screen" id="resume">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2 pt-6">
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-bold tracking-tight -ml-2 text-zinc-800 dark:text-zinc-100">
              Works
            </h2>
            <section>
              {works.map((work, index) => (
                <Card key={works.slug} item={work} index={index} items={works} />
              ))}
            </section>
            <h2 className="text-2xl font-bold tracking-tight -ml-2 text-zinc-800 dark:text-zinc-100">
              Projects
            </h2>
            <section>
              {projects.map((project, index) => (
                <Card key={projects.slug} item={project} index={index} items={projects} />
              ))}
            </section>
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24 mb-12">
            <Resume />
            <Contact />
          </div>
        </div>
      </Container>
    </>
  )
}
