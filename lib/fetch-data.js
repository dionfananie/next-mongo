/**
 *
 * Function for Qurban
 *
 */

export async function loadQurban(params) {
    const searchParams = new URLSearchParams(params).toString();
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL_LOCAL}/qurban?${searchParams}`);
    const data = await res.json();

    return data;
}

export async function loadQurbanType() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL_LOCAL}/qurban/type`);
    const data = await res.json();

    return data;
}
export async function postQurban(body) {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL_LOCAL}/qurban/create`, {
            method: 'POST',
            body: body
        });
        const data = await res.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

export async function deleteQurban(id) {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL_LOCAL}/qurban/delete?id=${id}`, {
            method: 'GET'
        });
        const data = await res.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

/**
 *
 * Function for Buyers
 *
 */

export async function loadBuyers(id) {
    if (!id) return [];
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL_LOCAL}/buyer?qurbanId=${id}`);
    const data = await res.json();

    return data;
}

export async function loadBuyersAll() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL_LOCAL}/buyer`);
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
export async function deleteBuyer(id) {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL_LOCAL}/buyer/delete?id=${id}`, {
            method: 'GET'
        });
        const data = await res.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}
export async function updateBuyer(id) {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL_LOCAL}/buyer/update/paid?id=${id}`,
            {
                method: 'GET'
            }
        );
        const data = await res.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

/**
 *
 * API for Tipe Qurban
 */

export async function postTypeQurban(body) {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL_LOCAL}/qurban/type/create`, {
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

export async function deleteTypeQurban(id) {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL_LOCAL}/qurban/type/delete?id=${id}`,
            {
                method: 'GET'
            }
        );
        const data = await res.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

/**
 *
 * API for Auth
 */

export async function postLogin(body) {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL_LOCAL}/auth/login`, {
            method: 'POST',
            body: body,
            credentials: 'include',
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

export async function postRegister(body) {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL_LOCAL}/auth/register`, {
            method: 'POST',
            body: body,
            credentials: 'include',
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
