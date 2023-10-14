import { Form, Link, redirect } from "react-router-dom";
import { ButtonAuth } from "../components/items/ButtonAuth";

export const SignUp = () => {
  return (
    <div className="w-full h-5/6 flex justify-center items-center">
      <div className="w-[400px] mx-auto ">
        <img src="assets/image/logo2.png" alt="" className="block mx-auto" />
        <h1 className="text-[#3C424C] text-2xl font-bold text-center mt-5">
          Sign up for Meowing
        </h1>
        <Form method="post" className="mt-9">
          <div className="w-full mb-8">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full bg-transparent outline-none border-b-2 pb-2 border-[#3C424C] placeholder:text-[#3C424C] text-slate-600"
              autoComplete="off"
            />
          </div>
          <div className="w-full mb-8">
            <input
              type="text"
              name="username"
              placeholder="Username"
              className="w-full bg-transparent outline-none border-b-2 pb-2 border-[#3C424C] placeholder:text-[#3C424C]"
              autoComplete="off"
            />
          </div>
          <div className="w-full mb-8">
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full bg-transparent outline-none border-b-2 pb-2 border-[#3C424C] placeholder:text-[#3C424C]"
              autoComplete="off"
            />
          </div>
          <div className="w-full mb-8">
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              className="w-full bg-transparent outline-none border-b-2 pb-2 border-[#3C424C] placeholder:text-[#3C424C]"
              autoComplete="off"
            />
          </div>
          <div className="flex gap-2 mb-5">
            <input type="checkbox" className="accent-slate-600" />
            <p className="text-sm">Agree to join Lorem Ipsum Meowing</p>
          </div>
          <ButtonAuth text={"Create Account"} />
        </Form>
        <p className="mt-16 text-[#3C424C] text-sm text-center">
          Already have an account<span className="font-semibold">?</span>{" "}
          <span className="font-bold">
            <Link to={"/login"}>Sign In</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export function action() {
  return redirect("/login");
}
