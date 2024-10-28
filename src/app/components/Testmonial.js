import React from 'react'

const Testmonial = () => {
  return (
    <div className='bg-purple-700 py-10 my-10' >
        <h1 className='text-center text-white text-lg ' >Testimonials</h1>
      <div class="w-full h-auto flex flex-col items-center justify-center mt-5 gap-8">
    <h1 class="text-4xl text-white leading-relaxed text-center w-1/2">
    "They made me feel totally ease, and were able to understand my needs and solve my problems."    </h1>
    <div class="flex items-center gap-4">
        <div class="rounded-full w-12 h-12 bg-black overflow-hidden">
            <img src="https://rairaksa.github.io/assets/img/rai.jpg"/>
        </div>
        <div class="flex flex-col tracking-wider">
            <label class="text-white font-bold text-base">Amit Barai</label>
            <label class="text-white font-normal text-sm">Fullstack  Developer</label>
        </div>
    </div>
</div>
    </div>
  )
}

export default Testmonial
