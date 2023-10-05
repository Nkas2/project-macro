import { ButtonAuth } from "../components/items/ButtonAuth";

export const Login = () => {
  return (
    <div className="w-full h-5/6 flex justify-center items-center">
      <div className="w-[400px] mx-auto ">
        <img src="assets/image/logo2.png" alt="" className="block mx-auto" />
        <h1 className="text-[#3C424C] text-2xl font-bold text-center mt-5">
          Welcome back!
        </h1>
        <form className="mt-20">
          <div className="w-full mb-8">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full bg-transparent outline-none border-b-2 pb-2 border-[#3C424C] placeholder:text-[#3C424C] text-slate-600"
              autoComplete="off"
            />
          </div>
          <div className="w-full mb-5">
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full bg-transparent outline-none border-b-2 pb-2 border-[#3C424C] placeholder:text-[#3C424C]"
              autoComplete="off"
            />
          </div>

          <div className="flex justify-end mb-14">
            <p className="text-sm">Forgot password?</p>
          </div>
          <ButtonAuth text={"Log In"} />
        </form>
        <p className="mt-32 text-[#3C424C] text-sm text-center">
          Already have an account<span className="font-semibold">?</span>{" "}
          <span className="font-bold">Sign In</span>
        </p>
      </div>
    </div>
  );
};
