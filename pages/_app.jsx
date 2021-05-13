import '../style/global.css'
import * as ackeeTracker from 'ackee-tracker'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const ackeeInstance = ackeeTracker.create("https://manialytics.herokuapp.com", {
      detailed: true,
      ignoreLocalhost: true
    })
    ackeeInstance.record("8f317627-3e1b-4e96-94a1-ad60a6945bd4", ackeeTracker.attributes(true), () => {
      console.log("record")
    })
  })

  return <Component {...pageProps} />
}

export default MyApp
