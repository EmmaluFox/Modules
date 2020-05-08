export function processData(data) {
    return data.ModelInfo.map((response) => ({Id: "id", Prices: "prices", ...response}));
}