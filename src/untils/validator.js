// 是否合法IP地址
export function validateIP(rule, value, callback) {
    if (value === '' || value === undefined || value === null) {
        callback();
    } else {
        const reg = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;
        if ((!reg.test(value)) && value !== '') {
            callback(new Error('请输入正确的IP地址'));
        } else {
            callback();
        }
    }
}
// 是否手机号码
export function validatePhone(rule, value, callback) {
    const reg = /^[1][3,4,5,7,8][0-9]{9}$/;
    if (value === '' || value === undefined || value === null) {
        callback();
    } else {
        if ((!reg.test(value)) && value !== '') {
            callback(new Error('请输入正确的电话号码'));
        } else {
            callback();
        }
    }
}
//  是否身份证号码
export function validateIdNo(rule, value, callback) {
    const reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
    if (value === '' || value === undefined || value === null) {
        callback();
    } else {
        if ((!reg.test(value)) && value !== '') {
            callback(new Error('请输入正确的身份证号码'));
        } else {
            callback();
        }
    }
}
// 是否邮箱
// export function validateEMail(rule, value, callback) {
//     const reg = /^([a-zA-Z0-9]+[-_\.]?)+@[a-zA-Z0-9]+\.[a-z]+$/;
//     if (value === '' || value === undefined || value === null) {
//         callback();
//     } else {
//         if (!reg.test(value)) {
//             callback(new Error('请输入正确的邮箱地址'));
//         } else {
//             callback();
//         }
//     }
// }
// 合法uri
export function validateURL(textval) {
    const urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
    return urlregex.test(textval);
}
// 验证是否1-99之间
export function isOneToNinetyNine(rule, value, callback) {
    if (!value) {
        return callback(new Error('输入不可以为空'));
    }
    setTimeout(() => {
        if (!Number(value)) {
            callback(new Error('请输入正整数'));
        } else {
            const re = /^[1-9][0-9]{0,1}$/;
            const rsCheck = re.test(value);
            if (!rsCheck) {
                callback(new Error('请输入正整数，值为【1,99】'));
            } else {
                callback();
            }
        }
    }, 0);
}

// 验证是否1-99之间 非必填
export function isOneToNinetyNineNoMust(rule, value, callback) {
    if (!value) {
        callback();
    }
    setTimeout(() => {
        if (!Number(value)) {
            callback(new Error('请输入正整数'));
        } else {
            const re = /^[0-9][0-9]{0,1}$/;
            const rsCheck = re.test(value);
            if (!rsCheck) {
                callback(new Error('请输入正整数，值为【1,99】'));
            } else {
                callback();
            }
        }
    }, 0);
}

// 验证是否整数
export function isInteger(rule, value, callback) {
    if (!value) {
        return callback(new Error('输入不可以为空'));
    }
    setTimeout(() => {
        if (!Number(value)) {
            callback(new Error('请输入正整数'));
        } else {
            const re = /^[0-9]*[1-9][0-9]*$/;
            const rsCheck = re.test(value);
            if (!rsCheck) {
                callback(new Error('请输入正整数'));
            } else {
                callback();
            }
        }
    }, 0);
}
// 验证是否整数,非必填
export function isIntegerNotMust(rule, value, callback) {
    if (!value) {
        callback();
    }
    setTimeout(() => {
        if (!Number(value)) {
            callback(new Error('请输入正整数'));
        } else {
            const re = /^[0-9]*[1-9][0-9]*$/;
            const rsCheck = re.test(value);
            if (!rsCheck) {
                callback(new Error('请输入正整数'));
            } else {
                callback();
            }
        }
    }, 1000);
}
// 验证是否是[0-1]的小数
export function isDecimal(rule, value, callback) {
    if (!value) {
        return callback(new Error('输入不可以为空'));
    }
    setTimeout(() => {
        if (!Number(value)) {
            callback(new Error('请输入[0,1]之间的数字'));
        } else {
            if (value < 0 || value > 1) {
                callback(new Error('请输入[0,1]之间的数字'));
            } else {
                callback();
            }
        }
    }, 100);
}
// 验证是否是[0-1]的小数
export function isDecimalCanNull(rule, value, callback) {
    // if (!value) {
    //     return callback(new Error('输入不可以为空'));
    // }
    if(value !== '' && value !== null){
        setTimeout(() => {
            if (!Number(value)) {
                callback(new Error('请输入[0,1]之间的数字'));
            } else {
                if (value < 0 || value > 1) {
                    callback(new Error('请输入[0,1]之间的数字'));
                } else {
                    callback();
                }
            }
        }, 100);
    }else{
        callback(); 
    }
}

// 验证是否数字 非必填
export function isNumberNoMust(rule, value, callback) {
    if (!value) {
        callback();
    }
    setTimeout(() => {
        if (!Number(value)) {
            callback(new Error('请输入正确数字'));
        } else {
            const re = /^[0-9][0-9]{0,4}(\.\d{1,2}){0,2}$/;
            const rsCheck = re.test(value);
            if (!rsCheck) {
                callback(new Error('请输入正确数字'));
            } else {
                callback();
            }
        }
    }, 0);
}

// 验证是否是[0-1]的小数
export function royaltyLimit(rule, value, callback) {
    // if (!value) {
    //     return callback(new Error('输入不可以为空'));
    // }
    if(value !== '' && value !== null){
        setTimeout(() => {
            if (!Number(value)) {
                callback(new Error('请输入0-0.4之间小数'));
            } else {
                if (value < 0 || value > 0.4) {
                    callback(new Error('提成比例不能超过0.4'));
                } else {
                    callback();
                }
            }
        }, 100);
    }else{
        callback(); 
    }
}