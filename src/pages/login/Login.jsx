import { useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { Form, Link, useActionData } from "react-router-dom";
import FormInput from "../../components/FormInput";
import { useRegister } from "../../hooks/useRegister";
import { useLogin } from "../../hooks/useLogin";

export const action = async ({ request }) => {
  let formData = await request.formData();
  let email = formData.get("email");
  let password = formData.get("password");
  return { email, password };
};

function Login() {
  const { registerWithGoogle } = useRegister();
  const data = useActionData();
  const { loginWithEmail } = useLogin();
  useEffect(() => {
    if (data) {
      loginWithEmail(data.email, data.password);
    }
  }, [data]);

  return (
    <div className="flex h-screen items-center justify-center bg-sky-400">
      <div className="mx-2 flex w-full max-w-96 flex-col items-center gap-4 rounded-xl bg-sky-600 px-2 py-5 md:px-8">
        <h1 className="text-2xl text-white">LOGIN</h1>
        <Form method="post" className="flex w-full flex-col gap-2">
          <FormInput name="email" type="email" placeholder="Email" />
          <FormInput name="password" type="password" placeholder="password" />
          <div className="mt-5 flex flex-col gap-3">
            <button className="rounded-3xl border bg-sky-400 py-1 text-xl text-white hover:bg-sky-500">
              Login
            </button>
            <button
              onClick={registerWithGoogle}
              className="flex items-center justify-center gap-2 rounded-3xl border bg-sky-400 py-1 text-xl text-white hover:bg-sky-500"
            >
              Google {<FcGoogle className="text-2xl" />}
            </button>
          </div>
          <div className="flex flex-col justify-between text-center sm:flex-row">
            <Link className="link text-sm text-white">Forget password?</Link>
            <Link
              to="/register"
              className="link link-primary text-sm text-white"
            >
              You don't have account yet?
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Login;
