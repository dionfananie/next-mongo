import React, { useMemo } from 'react';

const maxQuota = 7;

interface QuotaProps {
    quota: number;
}
const Quota = ({ quota }: QuotaProps) => {
    const availQuota = useMemo(() => quota / maxQuota, [quota]);
    return (
        <>
            <div className="flex justify-between mb-1">
                <span className="text-base font-medium text-purple-700 ">Tersisa</span>
                <span className="text-sm font-medium text-purple-700 ">{quota} Quota lagi</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                    className="bg-purple-600 h-2.5 rounded-full"
                    style={{ width: 100 - availQuota * 100 + '%' }}></div>
            </div>
        </>
    );
};

export default Quota;
