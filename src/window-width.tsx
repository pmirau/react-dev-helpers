'use client'

import { useEffect, useState } from 'react'

export type WindowWidthProps = object

/**
 * React component to display the current viewport width and breakpoint. This aids in responsive design debugging during development.
 */
export default function WindowWidth({}: WindowWidthProps) {
  const [windowWidth, setWindowWidth] = useState(0)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className="fixed right-0 bottom-0 bg-white p-1 font-mono text-xs font-bold">
      <div className="flex flex-row items-center gap-2">
        <div>{windowWidth}</div>
        <div className="text-[.6rem] text-compl">
          <div className="hidden max-sm:block">none</div>
          <div className="hidden sm:max-md:block">sm</div>
          <div className="hidden md:max-lg:block">md</div>
          <div className="hidden lg:max-xl:block">lg</div>
          <div className="hidden xl:max-2xl:block">xl</div>
          <div className="hidden 2xl:max-3xl:block">2xl</div>
          <div className="hidden 3xl:block">3xl</div>
        </div>
      </div>
      <div className="mt-0.5 flex flex-row justify-between">
        <div className="size-1 rounded-full bg-compl-300 max-sm:bg-compl" />
        <div className="size-1 rounded-full bg-compl-300 sm:max-md:bg-compl" />
        <div className="size-1 rounded-full bg-compl-300 md:max-lg:bg-compl" />
        <div className="size-1 rounded-full bg-compl-300 lg:max-xl:bg-compl" />
        <div className="size-1 rounded-full bg-compl-300 xl:max-2xl:bg-compl" />
        <div className="size-1 rounded-full bg-compl-300 2xl:max-3xl:bg-compl" />
        <div className="size-1 rounded-full bg-compl-300 3xl:bg-compl" />
      </div>
    </div>
  )
}
