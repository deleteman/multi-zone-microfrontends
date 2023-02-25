import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'


export default function Page() {
  return (
    <>
      <Head>
        <title>Main site - About page</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <h1>About this site</h1>

          <p>Welcome to our website, where we showcase the power and versatility of Next.js zones. If you're new to Next.js, it's a React-based web development framework that helps you build fast, scalable, and SEO-friendly websites and applications.</p>

         <p>One of the most exciting features of Next.js is zones. Zones are a way to group pages together and apply different configurations to each zone. This is particularly useful for large websites with diverse content and functionality.</p>

        <p>For example, imagine a website that has a blog, an e-commerce store, and a support section. Each of these sections has its own set of pages and requirements. With zones, you can easily apply different configurations, such as caching, routing, and authentication, to each section. This makes it easy to manage and optimize your website, without having to worry about conflicts or inconsistencies.</p>

        <p>At our site, we've created a demonstration of Next.js zones in action. We've built a sample website that showcases three different zones: a blog, a store, and a support section. Each zone has its own set of pages, with unique functionality and configurations. We've also included a global zone, which applies to all pages on the website.</p>

        <p>We hope that our demonstration will inspire you to explore the power of Next.js zones for your own projects. Whether you're building a small website or a large-scale application, Next.js zones can help you manage complexity and optimize performance. Thank you for visiting our site, and happy coding!</p>
        <Link href="/">Go back home</Link>
        </div>
      </main>
    </>
  )
}
