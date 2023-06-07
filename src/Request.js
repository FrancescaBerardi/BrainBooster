import { useEffect, useState } from "react";

const Request = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setPending] = useState(true);
    const [error, setError] = useState(null)

    useEffect(() => {
        const abortCont = new AbortController();
        setTimeout(() => {
            fetch(url, {signal: abortCont.signal})
                .then(res => {
                    if(!res.ok){
                        throw Error("could not fetch the data for that resource")
                    }
                    return res.json();
                }).then(data => {
                    setData(data);
                    setPending(false);
                    setError(null);
                }).catch(err=>{
                    if (err.name === "AbortError"){
                        console.log("fetch aborted")
                    }
                    setError(err.message);
                    setPending(false);
                });
        }, 1000);
        return ()=> abortCont.abort();
    }, [url]); //ogni volta che l'url cambia rieseguirà useEffect. si mette in ascolto di questo dato
    return {data, isPending, error};
}
export default Request;