export function handleChange(e){
    console.log('funcionou')
    return { 
        type: 'VALUE_CHANGED',
        payload: e.target.value
    }
}