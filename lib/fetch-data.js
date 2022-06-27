export async function loadData(id = '') {
    // Call an external API endpoint to get posts
    const res = await fetch(`https://express-mongo-iota.vercel.app/qurban?id=${id}`);
    const data = await res.json();

    return data;
}
export async function loadBuyers(id) {
    if (!id) return [];
    // Call an external API endpoint to get posts
    const res = await fetch(`https://express-mongo-iota.vercel.app/buyer?qurbanId=${id}`);
    const data = await res.json();

    return data;
}
