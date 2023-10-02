import Link from "next/link";


export default function Home() {
  return (
    <div className="flex justify-center p-2 md:pt-16 ">
      <div className="flex flex-col items-center border border-black/10 p-2 w-full md:w-[300px]">
        <h3 className="text-2xl pb-2">Menu Principal</h3>
        <Link href="/interessimple">
          <div>
             Calcular el Interes Simple
          </div>
        </Link>
      </div>
    </div>
  )
}
