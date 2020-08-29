export function getRandomNumber(min: number, max: number) : number
{
    if (min > max) {
        [min, max] = [max, min];
    }
    return min + Math.round(Math.random() * (max - min))
}
export function getRandomMatrix(nColumns: number, nRows: number, min: number, max: number): Array<Array<number>>
{
    const numbers:Array<Array<number>> = [];
    for (let i = 0; i < nRows; i++) {
        numbers[i] = []
        for (let j = 0; j < nColumns; j++) {
            numbers[i].push(getRandomNumber(min, max));
        }
    }
    return numbers;
}
