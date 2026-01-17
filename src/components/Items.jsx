'use client'

import { useEffect, useState } from 'react'
import ItemCard from '@/components/ItemCard'

const Items = () => {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/data/items.json')
      .then(res => res.json())
      .then(data => {
        setItems(data)
        setLoading(false)
      })
      .catch(err => {
        console.error(err)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <p className="text-center py-20">Loading items...</p>
  }

  return (
    <section className="max-w-7xl mx-auto w-11/12 my-20">
      <h1 className="text-3xl font-bold mb-8">All Items</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {items.map(item => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  )
}

export default Items