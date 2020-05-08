export async function retrieveData(url) {
    let data = await fetch(url).then(response => {
        return response.json()
    });
    return JSON.parse(data);
}