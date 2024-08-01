Vue.component('basic_login_form_1722490641', {
  template: `
    <main class="h-screen flex items-center justify-center bg-gradient-to-br from-pink-500 to-purple-700">
      <div class="p-10 flex flex-col items-center justify-center bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg w-full max-w-md rounded-3xl shadow-2xl">
        <div class="text-white w-full">
          <div class="w-full mb-5">
            <h3 class="text-3xl font-bold mb-5 text-center text-white">Log in to your account</h3>
            <div class="flex justify-center mb-5">
              <p class="mr-2 mt-1.5 text-white">Don't have an account?</p>
              <button class="bg-pink-500 hover:bg-pink-400 active:bg-pink-600 text-white font-medium text-sm px-4 py-2 rounded-full transition duration-300 ease-in-out transform hover:scale-105">Sign up</button>
            </div>
          </div>
          <form @submit.prevent="handleSubmit" class="space-y-5 w-full">
            <div>
              <label class="font-medium text-white">Email</label>
              <input type="email" required class="w-full mt-2 px-4 py-3 text-white bg-transparent outline-none border border-white border-opacity-50 focus:border-pink-400 rounded-full shadow-inner" />
            </div>
            <div>
              <label class="font-medium text-white">Password</label>
              <input type="password" required class="w-full mt-2 px-4 py-3 text-white bg-transparent outline-none border border-white border-opacity-50 focus:border-pink-400 rounded-full shadow-inner" />
            </div>
            <button class="w-full px-6 py-3 text-white font-medium bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 active:from-pink-600 active:to-purple-700 rounded-full transition duration-300 ease-in-out transform hover:scale-105 shadow-lg">Sign in</button>
            <div class="text-center">
              <button class="bg-purple-500 hover:bg-purple-400 active:bg-purple-600 text-white font-medium text-sm px-4 py-2 rounded-full transition duration-300 ease-in-out transform hover:scale-105">Forgot password?</button>
            </div>
          </form>
        </div>
      </div>
    </main>
  `,
  data() {
    return {
      expanded: false,
      data: null
    }
  },
})