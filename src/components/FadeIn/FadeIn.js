'use client'
import React from "react"
import styles from "./FadeIn.module.css"

// component that fades in children as they are scrolled into view
function FadeIn({ children, ...delegated}) {
    const [opacity, setOpacity] = React.useState(1) // ratio between 0 and 1
    const domRef = React.useRef()
    const handleScroll = () => {
        const { top } = domRef.current.getBoundingClientRect()
        const windowHeight = window.innerHeight
        // proportion of the domRef that is visible
        const visibleProportion =  top / windowHeight
        const opacityRatio = () => {
            if (visibleProportion > 1) return 0
            if (visibleProportion < 0.2) return 1
            return 1 - visibleProportion
        }
        setOpacity(opacityRatio())
    }
    React.useEffect(() => {
        handleScroll()
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div
            className={styles["fade-wrapper"]}
            ref={domRef}
            style={{ opacity }}
            {...delegated}
        >
            {children}
        </div>
    )
}

export default FadeIn