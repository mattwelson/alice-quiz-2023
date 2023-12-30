import type { LoaderFunctionArgs } from "@remix-run/node"
import { redirect } from "@remix-run/node"
import { getHikerType } from "~/models/queries.server"

// Just redirect to the Alice Adventuring blog post with the correct id
export async function loader({ params }: LoaderFunctionArgs) {
  const hikerType = await getHikerType(params.type!)

  return redirect(hikerType.link)
}
