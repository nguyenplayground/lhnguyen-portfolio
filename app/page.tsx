import { BlogPosts } from 'app/components/posts'

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
    </section>
  )
}
