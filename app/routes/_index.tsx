import type { MetaFunction } from "@remix-run/node"

export const meta: MetaFunction = () => {
  return [
    { title: "Tramper Type - Alice Adventuring" },
    { name: "description", content: "What type of tramper are you?" },
  ]
}

export default function Index() {
  return (
    <div className='prose text-center mt-16'>
      <h2>What type of tramper are you?</h2>
      <p className='mt-4'>
        <a href='/quiz' className='btn btn-primary'>
          Take the quiz!
        </a>
      </p>
    </div>
  )
}
