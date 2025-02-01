'use client'
 
import { useState, useEffect } from 'react'
 
export default function VideoList() {
  const [posts, setPosts] = useState<any>(null)
 
  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch('https://api.bilibili.com/x/space/arc/search?mid=32822379&pn=1&ps=10', {
        headers: {
            "Content-Type": "application/json",
        },
        method: 'GET',
        mode: 'no-cors',
      })
      if (res.ok) {
        const data = await res.json();
        console.log(data);
        setPosts(data.data.list.vlist);
      } else {
        console.error('Failed to fetch data');
      }
    }
    fetchPosts()
  }, [])
 
  if (!posts) return <div>Loading...</div>
 
  return (
    <ul>
      {posts.map((post: any) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  )
}