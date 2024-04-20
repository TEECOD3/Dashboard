import LoginForm from "./LoginForm";

export default function Home() {
  return (
    <div className="bg-white p-8 lg:p-16 shadow-3d max-w-[29.4375rem] w-full min-h-[32.6875rem] mt-8">
      <span className="block border-b border-grey-white pb-[1.5rem] mb-8">
        <h1 className="max-w-[19.3125rem] text-center mx-auto text-t24 font-semibold text-dark-blue">
          Log in to your LASU Admin Panel
        </h1>
      </span>
      <LoginForm />
    </div>
  );
}
