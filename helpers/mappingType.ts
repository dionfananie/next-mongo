const mappingType = (type: string) => {
    let name = 'no Type';
    switch (type) {
        case '10':
            name = 'PO';
            break;
        case '20':
            name = 'Limousin';
            break;
        case '30':
            name = 'Limousin Metal';
            break;

        case '40':
            name = 'bali';
            break;

        default:
            break;
    }
    return name;
};

export default mappingType;
