import { useEffect, useState } from "react"
import axios from "axios"

const usePhotos = () => {
    const [photos, setPhotos] = useState([])
    const [error, setError] = useState([])

    useEffect(()=> {
        axios.get("http://localhost:3000/events")
        .then((res) => setPhotos(res.data)).catch((error) => setError(error.message))
        
    }, [])
return {photos, error}

}

export default usePhotos