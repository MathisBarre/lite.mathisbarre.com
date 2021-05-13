import '../style/global.css'
import * as ackeeTracker from 'ackee-tracker'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const ackeeInstance = ackeeTracker.create("https://manialytics.herokuapp.com", {
      detailed: true,
      ignoreLocalhost: true
    })
    ackeeInstance.record("3ab5bc75-a533-4263-a4c3-8e6c0cdac29c", ackeeTracker.attributes(true), () => {
      console.log("record")
    })
  })

  return <Component {...pageProps} />
}

export default MyApp
