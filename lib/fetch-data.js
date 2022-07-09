export async function loadData(id = '') {
    const res = await fetch(`${process.env.API_URL}/qurban?id=${id}`);
    const data = await res.json();

    return data;
}

export async function loadBuyers(id) {
    if (!id) return [];
    const res = await fetch(`${process.env.API_URL}/buyer?qurbanId=${id}`);
    const data = await res.json();

    return data;
}

export async function postBuyer(body) {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL_LOCAL}/buyer`, {
            method: 'POST',
            body: body,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
        const data = await res.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

export async function postQurban(body) {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL_LOCAL}/qurban/create`, {
            method: 'POST',
            body: body,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
        const data = await res.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}
