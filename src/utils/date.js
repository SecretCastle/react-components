const DataJS = {
    getYearStamp(from = 1900, to = 2099) {
        let month = []
        for (let i = 1; i <= 12; i++) {
            month[i] = [];
            if (i === 1 || i === 3 || i === 5 || i === 7 || i === 8 || i === 10 || i === 12) {
                let z = 1
                while (z <= 31) {
                    month[i].push(z)
                    z++;
                }
            }
            if (i === 4 || i === 6 || i === 9 || i === 11) {
                let z = 1
                while (z <= 30) {
                    month[i].push(z)
                    z++;
                }
            }
            if (i === 2) {
                let z = 1;
                while (z <= 29) {
                    month[i].push(z)
                    z++;
                }
            }
        }
        //later fix
        let year_arr = [];
        for (let i = from; i <= to; i++) {
            // if (i % 100 !== 0) {
            //     //当后两位不为 00时
            //     if (i % 4 !== 0) {
            //         //平年
            //         // console.log('平年', i);
            //     } else {
            //         // console.log('闰年', i);
            //     }
            // } else {
            //     //当后两位为 00时
            //     if (i % 400 !== 0) {
            //         //平年
            //         // console.log('平年', i);
            //     } else {
            //         // console.log('闰年', i);
            //     }
            // }
            year_arr.push(i)
        }
        return [year_arr, month]
    },
    getTimeStamp() {
        var hour = [],
            min = [],
            i = 0,
            j = 0;
        while (i < 24) {
            hour.push(i);
            i++
        }
        while (j < 60) {
            min.push(j)
            j++
        }
        return [hour, min]
    },
    getDiyDate() {

    }
}
export default DataJS;