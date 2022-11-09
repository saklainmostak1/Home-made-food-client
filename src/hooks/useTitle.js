import { useEffect } from "react"

const useTitle = title =>{
    useEffect(() =>{
        document.title= `${title} - My Home Made  Food `
    }, [title])
}
export default useTitle