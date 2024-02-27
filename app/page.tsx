'use client'

import { Announcement } from '@/components/announcement'
import { ExamplesNav } from '@/components/examples-nav'
import { Icons } from '@/components/icons'
import { Header } from '@/components/layouts/header'
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header'
import { Badge } from '@/components/ui/badge'
import { buttonVariants } from '@/components/ui/button'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import ButtonsPage from './examples/buttons/page'

export default function Home() {
  return (
    <div className="relative mx-auto h-screen w-full max-w-7xl px-6 md:px-8 lg:px-12">
      <Header />
      <PageHeader>
        <Announcement />
        <PageHeaderHeading>Your Utopia of UI Components</PageHeaderHeading>
        <PageHeaderDescription>
          Ready-to-use, simply copy and paste into your next project. All
          snippets crafted with{' '}
          <span>
            Tailwind CSS{' '}
            <Badge variant="secondary">
              <Icons.tailwind className="size-4" />
            </Badge>
          </span>{' '}
          for easy integration.
        </PageHeaderDescription>
        <PageActions>
          {/* <Button variant={'default'}>Docs</Button> */}
          <Link
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.github}
            className={cn(buttonVariants({ variant: 'outline' }))}
          >
            <Icons.gitHub className="mr-2 size-4" />
            GitHub
          </Link>
        </PageActions>
      </PageHeader>
      <ExamplesNav className="[&>a:first-child]:text-primary" />
      <section className="md:block">
        <div className="overflow-hidden rounded-md border bg-popover shadow-sm">
          <section>
            <ButtonsPage />
          </section>
        </div>
      </section>
      <footer>
        <div className="flex items-center justify-center py-8">
          <span className="text-sm font-medium">
            Made by
            <a
              href={siteConfig.links.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1"
            >
              @cahya
            </a>
          </span>
        </div>
      </footer>
    </div>
  )
}
