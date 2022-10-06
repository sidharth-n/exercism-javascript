//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//


export class Matrix {
    constructor(matrix) {
        this.matrix = matrix
            .split('\n')
            .map(row => row
                .split(' ')
                .map(val => +val));
    }
    get rows() {
        return this.matrix;
    }
    get columns() {
        let colSize = this.matrix[0].length;
        let colMatrix = Array.from({ length: colSize }, () => []);
        //for each row in matrix
        this.matrix.forEach(elem => {
            //loops through values in each rows in matrix
            for (let [index, entry] of elem.entries()) {
                //fill colArray from left colum to right
                colMatrix[index].push(entry);
            }
        });
        return colMatrix;
    }
}