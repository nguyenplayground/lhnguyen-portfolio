import { BlogPosts } from 'app/components/posts'
import { Envelope } from "@mynaui/icons-react";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        lhnguyen
      </h1>
      <p className="mb-4">
        {`I'm a story teller and a world builder. 
          I tell my story through motion pictures, sketch and words.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
        <section className="mt-12">
          <h2 className="text-xl font-semibold mb-2">Contact</h2>
          <div className="flex items-center gap-2">
            <Envelope className="w-5 h-5 text-neutral-600 dark:text-neutral-400" />
            <span>shiroenguyenlehoang@gmail.com</span>
          </div>
        </section>
    </section>
  )
}
