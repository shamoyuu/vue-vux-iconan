export default {
    /**
     * 删除数组所有指定元素（或数组），并返回一个新数组，不修改原数组
     */
    removeArrayItem: function (arr, item) {
        if (!Array.isArray(arr)) {
            return [];
        }
        if (!Array.isArray(item)) {
            item = [item];
        }

        let newArr = [];
        for (let i = 0; i < arr.length; i++) {
            var temp = arr[i];
            if (item.indexOf(temp) == -1) {
                newArr.push(temp);
            }
        }
        return newArr;
    }
}
