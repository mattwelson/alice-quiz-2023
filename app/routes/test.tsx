export default function Index() {
  async function clickHandler() {
    const url = "https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg"
    // fetch the image from the above url
    const image = await fetch(url)
    const imageBlob = await image.blob()
    const filesArray = [
      new File([imageBlob], "test.jpg", {
        type: "image/jpeg",
        lastModified: new Date().getTime(),
      }),
    ]
    const shareData = {
      title: "test",
      url: "https://aliceadventuring.com",
      files: filesArray,
    } satisfies ShareData

    if (navigator.canShare && navigator.canShare(shareData)) {
      await navigator.share(shareData)
    }
  }
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Share test</h1>
      <button className='btn btn-primary' onClick={clickHandler}>
        Share button
      </button>
    </div>
  )
}
