

const getPyramidByData = data => {
    const pyramidArray = [];
    let i = 0, stop
    while (!stop) {
        const concatPyramidArray = pyramidArray.length ? pyramidArray.toString().split(',') : []
        if(!data[concatPyramidArray.length + i]) {
            stop = true
            return pyramidArray
        }

        const chunk = data.slice(concatPyramidArray.length, concatPyramidArray.length + i + 1);
        if (chunk.length > i) {
            pyramidArray.push(chunk)
        }
        i++
    }
    return pyramidArray;
}

const nearestWay = (layers, pyramid) => {
    const rez = []
    pyramid.forEach((item, i) => {
        if (i + 1 > layers) return

        if (i === 0) {
            rez.push({
                val: item[0],
                index: 0
            })
        } else if (i === 1) {
            const smalestVal = Math.min(...item)
            rez.push({
                val: smalestVal,
                index: item.indexOf(smalestVal)
            })
        } else {
            const lastRezItemIndex = rez[rez.length - 1].index;
            const itemObjArray = item.map((val, index) => {
                return {
                    val: val,
                    index: index
                }
            })
            const closestPair = itemObjArray.slice(lastRezItemIndex, lastRezItemIndex + 2)

            const closestItem = closestPair[0].val < closestPair[1].val ? closestPair[0] : closestPair[1]
            rez.push(closestItem);
        }

    })
    let sum = 0;
    rez.forEach(item => {
        sum = sum + item.val
    })
    return sum
    
}

const data = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28];
const layers = 4
const pyramid = getPyramidByData(data)

console.log(pyramid)
console.log(nearestWay(layers, pyramid))
