function header(name) {
    var headerField = request.getHeaderField(name);
    if (headerField == null) {
        return '';
    }
    var value = headerField.getHeaderFieldValue();
    if (value == null) {
        return '';
    }
    return value.getText();
}

function log(message) {
    if (console == null) {
        return;
    }
    console.print(message + '\n', consoleViewContentTypeInfo)
}

function guid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0,
            v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}
guid() // "a1ca0f7b-51bd-4bf3-a5d5-6a74f6adc1c7"
