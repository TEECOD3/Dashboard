import Link from "next/link";
import React from "react";

function page() {
  return (
    <div className="bg-white p-8 lg:p-16 shadow-3d max-w-[37.4375rem] w-full min-h-[32.6875rem] mt-8">
      <span className="block border-b border-grey-white pb-[1.5rem] mb-8">
        <h1 className="max-w-[29.4375rem] text-center mx-auto text-2xl font-semibold text-dark-blue">
          Hi, Welcome to your LASU Admin Dashboard
        </h1>
      </span>
      <div className="">
        <div className="text-sm mb-8 text-outer-space leading-[-0.3px]">
          <span className="mb-6 block">
            Welcome to your dashboard! Here&apos;s how to make the most of it:
          </span>

          <ul className="space-y-5 mb-6">
            {[
              "Access real-time data: Make informed decisions with clear and concise information.",
              "Collaborate with others: Share files, leave comments, and assign tasks for seamless teamwork.",
              "Discover new features: Explore hidden gems and advanced capabilities.",
              "Kindly note that your location data is being collected.",
            ].map((d, i) => (
              <li key={i} className="list-inside list-decimal">
                {d}
              </li>
            ))}
          </ul>

          <span>
            Simplify your life and enjoy your journey with our dashboard!
          </span>
        </div>
        <Link
          href="/overview"
          className="bg-camel text-center rounded-[0.625rem] block w-full py-[1.4375rem] text-white font-semibold text-sm"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}

export default page;
