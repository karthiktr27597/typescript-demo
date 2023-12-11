import { useEffect, useRef, useState } from "react"


export const MutableRef = () => {

    const interValRef = useRef<number | null>(null)
    const [timer, setTimer] = useState(0)


    const stopTimer = () => {
        if (interValRef.current) window.clearInterval(interValRef.current)
    }

    useEffect(() => {

        interValRef.current = window.setInterval(() => {
            setTimer((time) => time + 1)
        }, 1000)

        return () => {
            stopTimer()
        }
    }, [])


    return (
        <div>
            Hook-timer- {timer}
            <button onClick={stopTimer}>StopTimer</button>
        </div>
    )
}
