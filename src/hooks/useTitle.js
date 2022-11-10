import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - PhotoGraphyPro`
    }, [title])
}

export default useTitle;