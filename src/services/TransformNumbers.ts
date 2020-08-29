import {
    Delta,
    N_COLUMNS,
    N_MaxNeighboursForContinueLife,
    N_MinNeighboursForContinueLife,
    N_ROWS, N_ValueNeighboursForStartLife
} from "../config/config";

interface NeighboursResult
{
    alive: number
    dead: number
}

export default class TransformNumbers
{
    private readonly resultNumbers: Array<Array<number>>

    constructor(private originalNumbers:Array<Array<number>>)
    {
        this.resultNumbers = JSON.parse(JSON.stringify(this.originalNumbers));
    }

    getNumbers() {
        for (let i = 0; i < this.originalNumbers.length; i++) {
            for (let j = 0; j < this.originalNumbers[i].length; j++) {
                this.resultNumbers[i][j] = this.determineNumberState(i, j);
            }
        }
        this.originalNumbers = this.resultNumbers;
        return this.resultNumbers;

    }

    determineNumberState(i: number, j: number) {
        const resultNeighbours = this.getNeighbours(i, j);
        if (this.originalNumbers[i][j] === 1) {
            if (resultNeighbours.alive < N_MinNeighboursForContinueLife || resultNeighbours.alive > N_MaxNeighboursForContinueLife) {
                return 0;
            }
        }
        if (this.originalNumbers[i][j] === 0) {
            if (resultNeighbours.alive === N_ValueNeighboursForStartLife) {
                return 1;
            }
        }

        return this.originalNumbers[i][j];
    }

    isValid(index: number, limit:number):boolean
    {
        return index >= 0 && index < limit;
    }

    influenceAria() : Array<number>
    {
        const aria = [];
        aria.push(0);
        for (let i = 1; i <= Delta; i++) {
            aria.push(i);
            aria.push(-i);

        }

        return aria;
    }

    getNeighbours(i: number, j: number): NeighboursResult
    {
        const aria = this.influenceAria();
        const result = { alive: 0, dead: 0 };

        let iValue, jValue;

        aria.forEach(iCurrent => {
            aria.forEach(jCurrent => {
                iValue = i + iCurrent;
                jValue = j + jCurrent;
                if (iValue === i && jValue === j) {

                } else {
                    if (this.isValid(iValue, N_COLUMNS) && this.isValid(jValue, N_ROWS)) {
                        result[this.originalNumbers[iValue][jValue] === 0 ? "dead" : "alive"]++;
                    }
                }
            })
        })

        return result;
    }
}
