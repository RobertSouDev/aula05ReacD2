- para chama uma api fetch() REST

- para fazer algo carregar primeiro que html :
    * "use client"

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

- async  nao toda linguagem que vc vai precissa diferenciar no JS quando vc tem uma operancao que depende da conexao de net ou fator externo que ele nao sabe adivinha entao vc manda ele "espere isso termina" que se usa o await sendo que precisa ser uma function async