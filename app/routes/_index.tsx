import type { MetaFunction } from "@remix-run/node"

export const meta: MetaFunction = () => {
  return [
    { title: "Tramper Type - Alice Adventuring" },
    { name: "description", content: "What type of tramper are you?" },
  ]
}

export default function Index() {
  return (
    <div className='prose'>
      <h1>Tramper Type</h1>
      <p>What type of tramper are you?</p>
      <p>
        <a href='/quiz' className='btn btn-primary'>
          Take the quiz!
        </a>
      </p>
    </div>
  )
}
