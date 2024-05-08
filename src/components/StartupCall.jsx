import React from 'react'

const StartupCall = () => {
  return (
<div class="bg-transparent py-6 sm:py-8 lg:py-12">
  <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
    <div class="flex flex-col items-center justify-between gap-4 rounded-lg bg-transparent border-2 border-white p-4 sm:flex-row md:p-8">
      <div>
        <h2 class="text-xl font-bold text-white md:text-2xl">Book a call For <span className='text-indigo-500'>Free</span></h2>
        <p class="text-gray-50">No Credit Card required</p>
      </div>

      <a href="/" class="inline-block rounded-lg bg-transparent border-2 border-indigo-600 hover:border-white hover:bg-indigo-600  px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 focus-visible:ring active:bg-indigo-700 md:text-base">Start now</a>
    </div>
  </div>
</div>
  )
}

export default StartupCall
