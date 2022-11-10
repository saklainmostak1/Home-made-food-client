import { useEffect } from "react"

const useTitle = title =>{
    useEffect(() =>{
        document.title= `${title} - Home Made  Food Service `
    }, [title])
}
export default useTitle