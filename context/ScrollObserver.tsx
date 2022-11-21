'use client'
import React, {createContext, useCallback, useEffect, useState} from 'react'

interface IScrollValue {
    scrollY: number
}

export const ScrollContext = createContext<IScrollValue>({
    scrollY: 0
})

interface ScrollObserverProps {
    children: React.ReactNode
}

const ScrollObserver: React.FC<ScrollObserverProps> = ({children}) => {
    
    const [scrollY, setScrollY] = useState(0)

    const handleScroll = useCallback(() => {
        setScrollY(window.scrollY)
    }, [])

    useEffect(() => {
        document.addEventListener('scroll', handleScroll, {passive: true})
        return (
            () => {document.removeEventListener('scroll', handleScroll)}
        ) 
    }, [handleScroll])
     
  return (
        <ScrollContext.Provider value={{scrollY}}>
            {children}
        </ScrollContext.Provider>
    )
}

export default ScrollObserver