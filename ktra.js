// Bài1
// Cho danh sách các điểm thi ở trong một mảng
// Hãy viết hàm tìm được điểm thi cao thứ 3 với đầu vào là một mảng điểm.
// //  (không dùng hàm có sẵn để sắp xếp).

// let array = [5, 4, 7, 2, 8, 12 ,6, 3];
//
// array.sort(function(a, b) {
//     return a - b;
// });
// console.log("số lớn thứ 3 = ",array[array.length-3]);


// bài2
// Viết hàm tryRemoveFromArray() nhận vào tham số là một
// mảng và một số nguyên index, trả về mảng ban đầu đã được
// loại bỏ phần tử tại vị trí index nếu index hợp lệ. Nếu index
// // không hợp lệ, trả về mảng ban đầu
// function tryRemoveFromArray(arr, index) {
//     if (index < 0 || index >= arr.length) {
//         return arr; // Trả về mảng ban đầu nếu index không hợp lệ
//     }
//
//     let result = [];
//
//     for (let i = 0; i < arr.length; i++) {
//         if (i !== index) {
//             result.push(arr[i]);
//         }
//     }
//
//     return result;
// }
// const array = [1, 2, 3, 4, 5];
// const indexToRemove = 2;
// const newArray = tryRemoveFromArray(array, indexToRemove);
// console.log("New array:", newArray);


// bai3
// Viết hàm kiểm tra xem 1 chuỗi có nằm trong chuỗi còn lại
// không. Với đầu vào là 2 chuỗi (str1,str2) trong đó sẽ kiểm tra
// str1 có nằm trong str2 không, nếu có trả về true và ngược lại
// false

// function checkSubstring(str1, str2) {
//     for (let i = 0; i <= str2.length - str1.length; i++) {
//         let match = true;
//         for (let j = 0; j < str1.length; j++) {
//             if (str1[j] !== str2[i + j]) {
//                 match = false;
//                 break;
//             }
//         }
//         if (match) {
//             return true;
//         }
//     }
//     return false;
// }
// console.log(checkSubstring("abc", "abcdef"));
// console.log(checkSubstring("xyz", "abcdef"));


// bai4
class Rectangle {
    constructor(x, y, width, height, color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    }

    render(canvas) {
        for (let i = this.y; i < this.y + this.height; i++) {
            for (let j = this.x; j < this.x + this.width; j++) {
                canvas[i][j] = this.color;
            }
        }
    }
}

function main() {
    const canvasWidth = 300;
    const canvasHeight = 200;
    const canvas = Array.from({ length: canvasHeight }, () => Array(canvasWidth).fill('#FFFFFF'));
    const rectangle = new Rectangle(10, 10, 200, 100, '#000000');
    rectangle.render(canvas);
    for (let row of canvas) {
        console.log(row.join(' '));
    }
}
main();
