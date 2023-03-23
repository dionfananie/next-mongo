import Delete from '@components/CTA/Delete';
import { deleteTypeQurban } from '@lib/fetch-data';
import { func, string } from 'prop-types';
import { useState } from 'react';
import ToastInfo from './ToastInfo';

const DeleteTipe = ({ id, fetch }) => {
    const [isShow, setIsShow] = useState(false);
    const deleteType = async () => {
        const resp = await deleteTypeQurban(id);
        if (resp.is_success) {
            setIsShow(true);
            setTimeout(() => {
                setIsShow(false);
            }, 2000);
            fetch();
        }
    };
    return (
        <>
            <Delete onClick={deleteType} />
            {isShow && (
                <ToastInfo onClose={() => setIsShow(false)} text="Sukses menghapus tipe qurban" />
            )}
        </>
    );
};
DeleteTipe.propTypes = {
    id: string.isRequired,
    fetch: func.isRequired
};
export default DeleteTipe;
