const LoaderTable = () => {
    const newArr = new Array(6).fill(0);
    return newArr.map((list, key) => (
        <tr className="animate-pulse" key={'list-' + key}>
            {newArr.map((item, key) => (
                <th
                    key={`th-${key}`}
                    className="px-6 py-4 font-medium text-gray-900  whitespace-nowrap">
                    <div className="h-2.5 bg-gray-300 rounded-full w-10/12 pr-5"></div>
                </th>
            ))}
        </tr>
    ));
};

export default LoaderTable;
