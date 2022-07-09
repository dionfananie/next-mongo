import React from 'react';

const ListOption = () => {
    return (
        <div className="flex items-center">
            <label htmlFor="countries" className="block text-sm font-medium text-gray-900 mr-4">
                Pilih Sapi Qurban
            </label>
            <select
                id="countries"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5">
                <option selected>Sapi Qurban</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
            </select>
        </div>
    );
};

export default ListOption;
