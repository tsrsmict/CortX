import React from 'react'

export default function SigninModule() {
    return(
        <div class="w-11/12 p-12 bg-sign-up sm:w-8/12 bg-white/[0.8] dark:bg-black/[0.8] shadow-10xl md:w-1/2 lg:w-5/12">
    
        <h1 class="text-5xl font-semibold dark:text-white">Sign In</h1>
        <br/><br/>
        <form class="mt-6">
          
          <label for="email" class="block mt-2 text-xs font-semibold text-gray-600 dark:text-white uppercase">E-mail</label>
          <input id="email" type="email" name="email" placeholder="john.doe@company.com" autocomplete="email" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
          <br/><br/>
          <label for="password" class="block mt-2 text-xs font-semibold text-gray-600  dark:text-white uppercase">Password</label>
          <input id="password" type="password" name="password" placeholder="********" autocomplete="new-password" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
          <br/>
          <button type="submit" class="w-full py-3 mt-6 font-medium tracking-widest text-white dark:text-black uppercase bg-black shadow-lg dark:bg-white focus:outline-none hover:bg-gray-900 dark:hover:bg-gray-300 hover:shadow-none">
            Sign up
          </button>
          <p class="flex justify-between mt-4 text-xs text-gray-500 dark:text-white cursor-pointer hover:text-sky-900">Already registered?</p>
        </form>
      </div>
    )
}