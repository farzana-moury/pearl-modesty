import React from "react"
import { useEffect } from "react"


// export default function useScript(urlOfTheLibrary) {
//   const script = document.createElement('script');
//   script.src = urlOfTheLibrary;
//   script.async = true;
//   script.type = 'text/babel';
//   document.body.appendChild(script);
// }

const useScript = (url, integrity, async = true, crossOrigin = "anonymous") => {
  useEffect(() => {
    const script = document.createElement("script")

    script.src = url

    script.async = async

    script.type = 'text/babel';

    if (integrity) {
      script.integrity = integrity
    }

    script.crossOrigin = crossOrigin

    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [url, integrity, async, crossOrigin])
}

export default useScript