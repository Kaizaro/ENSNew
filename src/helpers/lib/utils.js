export const renderNumberWithDelimiters = value => {
    console.log('>>>>>VALUE', value);
    if (value) {
        let valueModified = value.toString();
        return valueModified.replace(
            /(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g,
            '$1' + ' ',
        );
    } else {
        console.log(
            '>>>>>>modifyNumberWithDelimiters not works: returned 0',
            value,
        );
        return 0;
    }
};

export const renderVehicleLicense = license => {
    const firstLetter = license.charAt(0).toUpperCase();
    const numbers = license.substr(1, 3);
    const secondLetters = license.substr(4, 2);
    const region = license.substr(6, 3);
    const modifiedLicense = `${firstLetter} ${numbers} ${secondLetters} ${region}`;
    return modifiedLicense;
};

export const removePhoneNumberSpaces = phoneNumber => {
    const phoneNumberFixed = phoneNumber.replace(/\s/g, '');
    return phoneNumberFixed;
};
