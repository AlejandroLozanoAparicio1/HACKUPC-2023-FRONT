export function toBase64(file) {
    var reader = new FileReader();
    let result;

    reader.onload = function () {
        const base64String = reader.result
            .replace('data:', '')
            .replace(/^.+,/, '');

        const imageBase64Stringsep = base64String;

        console.log(base64String);
    };
    reader.readAsDataURL(file);

    return reader.result;
}
