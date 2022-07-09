export async function loadData(id = '') {
    // Call an external API endpoint to get posts
    const res = await fetch(`${process.env.API_URL}/qurban?id=${id}`);
    const data = await res.json();

    return data;
}

export async function loadBuyers(id) {
    if (!id) return [];
    // Call an external API endpoint to get posts
    const res = await fetch(`${process.env.API_URL}/buyer?qurbanId=${id}`);
    const data = await res.json();

    return data;
}

export async function postBuyer() {
    // Call an external API endpoint to get posts
    const res = await fetch(`${process.env.API_URL}/buyer`, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });
    const data = await res.json();

    return data;
}
