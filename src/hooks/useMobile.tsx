import { useState, useEffect } from 'react'

export default function useMobile() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIsMobile = () => {
      const userAgent = window.navigator.userAgent
      const mobileKeywords = [
        'Android',
        'webOS',
        'iPhone',
        'iPad',
        'iPod',
        'BlackBerry',
        'Windows Phone',
      ]

      const isMobileDevice = mobileKeywords.some((keyword) =>
        userAgent.includes(keyword)
      )

      setIsMobile(isMobileDevice)
    }

    checkIsMobile()
  }, [])

  return { isMobile }
}
