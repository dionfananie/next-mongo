import { AppContext } from 'next/app';
import { parseCookies, setCookie } from 'nookies';

export default function Home({ posts }) {
    console.log(posts);
    return (
        <div>
            {posts?.map((post) => {
                return (
                    <>
                        <h1>{post?.attributes?.title}</h1>
                        <p>{post?.attributes?.content}</p>
                    </>
                );
            })}
        </div>
    );
}

export async function getServerSideProps(ctx: unknown) {
    const jwt = parseCookies(ctx).jwt;

    let jwtAuth = jwt;

    if (!jwt) {
        const loginData = {
            identifier: 'dion@edo.com',
            password: 'yoloyolo'
        };

        const login = await fetch(`https://strapi.dionfananie.my.id/api/auth/local`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginData)
        });
        const loginResponseData = await login.json();

        setCookie(ctx, 'jwt', loginResponseData.jwt, {
            maxAge: 30 * 24 * 60 * 60,
            path: '/'
        });
        jwtAuth = loginResponseData.jwt;
    }

    // get posts from strapi REST API
    const res = await fetch(`https://strapi.dionfananie.my.id/api/posts`, {
        headers: {
            Authorization: `Bearer ${jwtAuth}`
        }
    });
    let posts = await res.json();
    posts = posts.data;
    return {
        props: {
            posts: posts
        }
    };
}
