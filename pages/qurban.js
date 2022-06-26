import { object } from 'prop-types';
import { arrayOf } from 'prop-types';
import React from 'react';

const Qurban = ({ list }) => {
    return (
        <div>
            {list?.map((item, key) => (
                <>
                    <p key={key}>{item.name}</p>
                    <p key={key}>{item.price}</p>
                </>
            ))}
        </div>
    );
};

export async function getServerSideProps() {
    try {
        const res = await fetch(`https://express-mongo-iota.vercel.app/qurban`);
        const data = await res.json();
        return {
            props: { list: data }
        };
    } catch (e) {
        console.error(e);
        return {
            props: { list: [] }
        };
    }
}

Qurban.propTypes = {
    list: arrayOf(object)
};

export default Qurban;
