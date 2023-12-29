'use client'

import Image from 'next/image'
import {WebMidi} from "webmidi";

WebMidi
  .enable()
  .then(() => console.log("WebMidi enabled!"))
  .catch(err => alert(err));

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        hello world
      </div>
    </main>
  )
}
