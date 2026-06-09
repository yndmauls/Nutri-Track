import { Leaf } from "lucide-react"

export default function LoginPage() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#b1d8b1]">
      
      {/* --- BACKGROUND VIDEO BUAH JATUH --- */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 z-0 h-full w-full object-cover opacity-50 mix-blend-overlay"
      >
        {/* Nama file video udah disamain sama yang ada di folder public lu */}
        <source src="/7931719-uhd_2160_3840_24fps.mp4" type="video/mp4" />
      </video>

      {/* --- KOTAK FORM LOGIN --- */}
      <div className="relative z-10 w-full max-w-sm rounded-3xl border border-white/20 bg-[#c7e5c7]/80 p-8 shadow-2xl backdrop-blur-md">
        
        <div className="mb-6 flex items-center justify-center gap-2">
          <span className="text-[#a4df3b]">
            <Leaf className="h-8 w-8" />
          </span>
          <span className="text-2xl font-bold text-[#a4df3b]">
            Nutri<span className="text-green-800">Track</span>
          </span>
        </div>

        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-green-950">Welcome back</h2>
          <p className="mt-2 text-sm text-green-900/70">
            Enter your credentials to sign in to your account
          </p>
        </div>

        <form className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-green-950">Email</label>
            <input 
              type="email" 
              placeholder="you@example.com" 
              className="w-full rounded-lg border border-green-500/30 bg-green-50/50 px-4 py-2.5 text-green-950 placeholder-green-800/40 outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600" 
            />
          </div>
          
          <div>
            <label className="mb-1 block text-sm font-medium text-green-950">Password</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              className="w-full rounded-lg border border-green-500/30 bg-green-50/50 px-4 py-2.5 text-green-950 outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600" 
            />
          </div>

          <div className="flex items-center gap-2">
            <input 
              type="checkbox" 
              id="stay" 
              className="h-4 w-4 rounded border-green-500/30 text-green-600 focus:ring-green-600" 
            />
            <label htmlFor="stay" className="text-sm text-green-950">Stay logged in</label>
          </div>

          <button 
            type="button" 
            className="mt-2 w-full rounded-lg bg-[#5ba85b] px-4 py-3 font-bold text-white shadow-md transition hover:bg-[#4a8a4a] hover:shadow-lg"
          >
            Sign In
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-green-950/70">
          Don't have an account? <a href="#" className="font-medium text-green-900 underline hover:text-green-700">Sign up</a>
        </p>
      </div>
      
    </div>
  )
}