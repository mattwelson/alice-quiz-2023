export default function Index() {
  async function clickHandler() {
    const url =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/PNG_Test.png/477px-PNG_Test.png"
    // fetch the image from the above url
    const image = await fetch(url)
    const imageBlob = await image.blob()
    const filesArray = [
      new File([imageBlob], "test.png", {
        type: "image/png",
        lastModified: new Date().getTime(),
      }),
    ]
    const shareData = {
      title: "test",
      files: filesArray,
    }

    if (navigator.canShare && navigator.canShare(shareData)) {
      await navigator.share(shareData)
    }
  }
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Share test</h1>
      <button onClick={clickHandler}>Share button</button>
    </div>
  )
}
