import { useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { Form, Link, useActionData } from "react-router-dom";
import FormInput from "../../components/FormInput";
import { useRegister } from "../../hooks/useRegister";
import { useLogin } from "../../hooks/useLogin";
import Modal from "../../components/Modal";

export const action = async ({ request }) => {
  let formData = await request.formData();
  let email = formData.get("email");
  let password = formData.get("password");
  let emailForReset = formData.get("email_for_reset");

  if (emailForReset?.trim()) {
    return { emailForReset };
  }
  return { email, password };
};

function Login() {
  const data = useActionData();
  const { registerWithGoogle } = useRegister();
  const { loginWithEmail } = useLogin();

  useEffect(() => {
    if (data?.email && data?.password) {
      loginWithEmail(data.email, data.password);
    }
  }, [data]);

  return (
    <>
      <Modal />
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
              <button
                className="link link-primary text-sm text-white"
                type="button"
                // onClick={() =>
                //   document.getElementById("my_modal_1").showModal()
                // }
              >
                Forget password
              </button>
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
    </>
  );
}

export default Login;
