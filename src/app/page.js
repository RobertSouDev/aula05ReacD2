"use client"

import { useEffect, useState } from "react";

export default function Home() {

  const [loading, setLoading] = useState(true)

 useEffect(()=> {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
 }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
       {loading ? "Carregando..." : "Carregou!"}
    </main>
  );
}
