import { Form, Link, useActionData } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useEffect } from "react";
import FormInput from "../../components/FormInput";
import { useRegister } from "../../hooks/useRegister";
import { toast } from "react-toastify";

export const action = async ({ request }) => {
  let formData = await request.formData();
  let fullName = formData.get("full-name");
  let email = formData.get("email");
  let password = formData.get("password");
  let confirmPassword = formData.get("confirm_password");

  if (password == confirmPassword) {
    return {
      fullName,
      email,
      password,
      confirmPassword,
    };
  } else {
    toast.warn("password is not equal!");
    return null;
  }
};

function Register() {
  const { registerWithGoogle, registerWithEmail } = useRegister();

  const data = useActionData();
  useEffect(() => {
    if (data) {
      registerWithEmail(data.fullName, data.email, data.password);
      // console.log(data.fullName);
    }
  }, [data]);

  return (
    <div className="flex h-screen items-center justify-center bg-sky-400">
      <div className="mx-2 flex w-full max-w-96 flex-col items-center gap-4 rounded-xl bg-sky-600 px-2 py-5 md:px-8">
        <h1 className="text-2xl text-white">REGISTER</h1>
        <Form method="post" className="flex w-full flex-col gap-2">
          <FormInput name="full-name" type="text" placeholder="User name" />
          <FormInput name="email" type="email" placeholder="Email" />
          <FormInput name="password" type="password" placeholder="password" />
          <FormInput
            name="confirm_password"
            type="password"
            placeholder="confirm password"
          />
          <div className="mt-5 flex flex-col gap-3">
            <button
              type="submit"
              className="btn btn-primary rounded-3xl border border-none bg-sky-400 py-1 text-xl text-white hover:bg-sky-500"
            >
              Register
            </button>
            <button
              onClick={registerWithGoogle}
              type="button"
              className="btn btn-primary flex items-center justify-center gap-2 rounded-3xl border border-none bg-sky-400 py-1 text-xl text-white hover:bg-sky-500"
            >
              Google {<FcGoogle className="text-3xl" />}
            </button>
          </div>
          <div className="flex justify-center">
            <Link to="/login" className="link link-primary text-sm text-white">
              You already have account?
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Register;
