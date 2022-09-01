import { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';
import { arrayOf } from 'prop-types';
import { object } from 'prop-types';
import { func } from 'prop-types';

export default function ListType({ list, onChange }) {
    const [selected, setSelected] = useState({ name: 'Pilih Tipe Sapi' });
    const handleChange = (v) => {
        setSelected(list.find((item) => item.type === v));
        onChange(v);
    };

    return (
        <div className="top-16 w-72">
            <Listbox value={selected} onChange={(e) => handleChange(e)}>
                <div className="relative mt-1">
                    <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                        <span className="block truncate">{selected.name}</span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                            <SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                        </span>
                    </Listbox.Button>
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0">
                        <Listbox.Options className="absolute mt-1 max-h-60 w-full z-10 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {list.map((item, itemIdx) => (
                                <Listbox.Option
                                    key={itemIdx}
                                    className={({ active }) =>
                                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                            active
                                                ? 'bg-purple-100 text-purple-900'
                                                : 'text-gray-900'
                                        }`
                                    }
                                    value={item.type}>
                                    <>
                                        <span
                                            className={`block truncate ${
                                                selected._id === item._id
                                                    ? 'font-medium'
                                                    : 'font-normal'
                                            }`}>
                                            {item.name}
                                        </span>
                                        {selected._id === item._id ? (
                                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-purple-600">
                                                <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                            </span>
                                        ) : null}
                                    </>
                                </Listbox.Option>
                            ))}
                        </Listbox.Options>
                    </Transition>
                </div>
            </Listbox>
        </div>
    );
}

ListType.propTypes = {
    list: arrayOf(object).isRequired,
    onChange: func.isRequired
};
