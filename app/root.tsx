import { cssBundleHref } from "@remix-run/css-bundle"
import type { LinkDescriptor, LinksFunction } from "@remix-run/node"
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react"
import { FaInstagram } from "react-icons/fa/index.js"

import "./tailwind.css"

export const googleFontLinks = [
  {
    rel: "preconnect",
    href: "https://fonts.googleapis.com",
  },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Montserrat&family=Playfair+Display&display=swap",
  },
] satisfies LinkDescriptor[]

export const links: LinksFunction = () => [
  ...(cssBundleHref
    ? [...googleFontLinks, { rel: "stylesheet", href: cssBundleHref }]
    : [...googleFontLinks]),
]

export default function App() {
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <Meta />
        <Links />
      </head>
      <body className='font-serif'>
        <header className='bg-primary text-primary-content mb-4 p-4 grid grid-cols-wrapper [&>*]:col-start-2'>
          <div className='flex justify-between'>
            <a
              className='font-serif text-xl'
              target='_blank'
              rel='noreferrer'
              href='https://aliceadventuring.com'
            >
              Alice Adventuring
            </a>
            <a
              className='font-serif text-3xl'
              target='_blank'
              rel='noreferrer'
              href='https://www.instagram.com/alice.adventuring/'
            >
              <FaInstagram />
            </a>
          </div>
        </header>
        <div className='grid gap-4 grid-cols-wrapper [&>*]:col-start-2'>
          <Outlet />
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
