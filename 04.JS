// 불변 객체->깊은 복사, 재귀적 수행
var copyObjectDeep = function (target) {
    var result = {};
    if (typeof target === 'object' && target !== null) {
        for (var prop in target) {
            result[pop] = copyObjectDeep(target[prop]);
        }
    } else {
        result = target;
    }
    return result;
}