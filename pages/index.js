import Link from 'next/link'

export default function Home() {
  return (
  <div className="container"> 
    <h1 className="title">
      Learn <a href="https://nextjs.org">Next.js!</a>
    </h1> 
    <h1 className="title">
      Read <Link href="/posts/first-post">this page!</Link>
    </h1>
  </div>
  )
}
