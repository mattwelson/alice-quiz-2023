import type { getQuestion } from "~/models/queries.server"
import { Answer } from "./Answer"
import { Form } from "@remix-run/react"

export function Question({
  question,
  isInFlight,
  error,
}: {
  question: Awaited<ReturnType<typeof getQuestion>>
  isInFlight: boolean
  error?: string
}) {
  return (
    <Form method='POST'>
      <input type='hidden' name='question' value={question._id} />
      <div className='card mx-auto bg-primary text-primary-content max-w-lg shadow-lg'>
        <div className='card-body'>
          <h2 className='card-title font-normal'>{question.text}</h2>
          <div className='grid gap-4'>
            {question.answers.map((answer) => (
              <Answer answer={answer} key={answer._key} />
            ))}
          </div>
          <div className='card-actions justify-end mt-4'>
            <button
              className='shadow btn uppercase font-sans tracking-wider'
              type='submit'
              disabled={isInFlight}
            >
              {!isInFlight ? "Next" : "Loading..."}
            </button>
          </div>
        </div>
      </div>
    </Form>
  )
}
