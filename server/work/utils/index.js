module.exports = {
    isCellPhone(phone){
        return /^1[34578]\d{9}$/.test(phone);
    },
    isEmail(email){
        return email.search(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/) != -1
    }
}