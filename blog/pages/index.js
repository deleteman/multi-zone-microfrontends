import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'


export default function Home() {
  return (
    <>
      <Head>
        <title>Multi-zones - Blog</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
            <h1>Welcome to our blog!</h1>
          <p>
          Welcome to the blog section of our website, which is powered by a separate micro frontend built using Next.js zones. Our blog section is an excellent example of how zones can help you manage complex projects and optimize performance.
          </p>

          <p>
By separating the blog from the rest of the website, we can apply unique configurations and functionality that are specific to the blog. For example, we can configure caching and routing to optimize page load times and SEO, as well as apply custom authentication and authorization rules to ensure that only authorized users can access certain content.
          </p>

          <p>
Using a separate micro frontend also allows us to scale our blog independently of the rest of the website. If we experience a spike in traffic on our blog, we can allocate more resources to the blog micro frontend without affecting the rest of the website's performance.
          </p>

          <p>
We've designed our blog section to be easy to navigate and search, with intuitive categories and tags, as well as a powerful search function. We've also included a commenting system that allows readers to engage with each other and share their thoughts on our posts.
</p>
          <p>
Whether you're a casual reader or a dedicated blogger, we hope that you'll find our blog section to be a valuable resource. Thank you for visiting our site, and happy reading!
</p>
<h2>Some blog posts</h2>
<ol>
  <li>
    <Link href="/post-1">
      Post 1: How to Build a Next.js App from Scratch
    </Link>
  </li>
  <li>
    <Link href="/post-2">
      Post 2: 10 Tips for Writing Clean and Maintainable Code
    </Link>
  </li>
  <li>
    <Link href="/post-3">
      Post 3: The Benefits of Using Next.js Zones
    </Link>
  </li>
  <li>
    <Link href="/post-4">
      Post 4: Building a Scalable E-commerce Store with Next.js
    </Link>
  </li>
  <li>
    <Link href="/post-5">
      Post 5: How to Optimize Your Next.js App for SEO
    </Link>
  </li>
</ol>

<a href="/">Go back home</a>
        </div>
      </main>
    </>
  )
}
