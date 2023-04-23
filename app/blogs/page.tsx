"use client";

import Link from "next/link";

const blogs = [
  {
    title: "On Healing & The Power of Perspective",
    href: "https://www.lavendaire.com/on-healing/",
  },
  {
    title: "How to Have a Successful Counseling Session",
    href: "https://positivepsychology.com/counseling-session/",
  },
  {
    title: "How to Deal with Morning Anxiety",
    href: "https://www.psychologytoday.com/intl/blog/the-relatable-therapist/202304/how-to-deal-with-morning-anxiety",
  },
  {
    title: "10 Questions to Ask Yourself",
    href: "https://www.lavendaire.com/10-questions-ask/",
  },
  {
    title: "How Helping the Environment Can Make You Feel Better",
    href: "https://www.verywellmind.com/how-helping-the-environment-can-make-you-feel-better-5296131",
  },
  {
    title: "Self-Care Ideas",
    href: "https://www.headspace.com/mindfulness/self-care-ideas",
  },
  {
    title: "Tragedy & Tragic Events",
    href: "https://www.headspace.com/stress/tragedy-tragic-events",
  },
];

export default function Blogs() {
  return (
    <div className="flex flex-1 flex-col gap-4 pb-4 font-fraunces">
      <h1 className="py-4 text-center scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Blogs
      </h1>
      <div className="grid grid-cols-2 gap-4">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 bg-[#D9D9D9] py-4 px-4 rounded-lg border"
          >
            {blog.title}

            <div className="flex justify-end px-2">
              <Link
                href={blog.href}
                target="_blank"
                className="bg-[#CDC4BF] px-6 py-1 rounded-md"
              >
                READ
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
