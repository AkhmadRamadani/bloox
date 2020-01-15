import { APIAddress } from "../system/Collection";

export var result = {}

export function postModel (params) {
    fetch(APIAddress + 'Login',{
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            params
        })
    })
    .then((response) => response.json())
    .then((responseJson) => {
        // return result = responseJson
        return alert(responseJson.status)
    })
    .catch((error)=>{
        alert(error)
    })
}