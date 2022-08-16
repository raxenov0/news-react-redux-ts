function Epley(m: number, k: number): number {
    return ((m * k) / 30 + m)
}

function Matt(m: number, k: number): number {
    return (m * (36 / (37 - k)))
}

function Lander(m: number, k: number): number {
    return ((100 * m) / (101.3 - 2.67123 * k))
}

function Konner(m: number, k: number): number {
    return (m * (1 + 0.025 * k))
}

export function squats(m:number, k:number):number{
    switch (k){
        case 1:
             return m;
        case 2:
             return m*1.0475
        case 3:
             return m*1.13
        case 4:
             return m*1.1575
        case 5:
             return m*1.2
        case 6:
             return m*1.242
        case 7:
             return m*1.284
        case 8:
             return m*1.326
        case 9:
             return m*1.368
        case 10:
             return m*1.41
        default:
             return 0
    }
}

export function Deadlifts(m:number, k:number):number{
    switch (k){
        case 1:
             return m;
        case 2:
             return m*1.065
        case 3:
             return m*1.13
        case 4:
             return m*1.147
        case 5:
             return m*1.164
        case 6:
             return m*1.181
        case 7:
             return m*1.198
        case 8:
             return m*1.232
        case 9:
             return m*1.232
        case 10:
             return m*1.24
        default:
             return 0
    }
}

let epley: number = 0;
let matt: number = 0;
let lander: number = 0;
let konner: number = 0;


export function getAverage(weight:number, count:number): number {
    if (weight < 1 || count < 1) return 0
    epley = Epley(Number(weight), Number(count))
    matt = Matt(Number(weight), Number(count))
    lander = Lander(Number(weight), Number(count))
    konner = Konner(Number(weight), Number(count))
    return ((epley + matt + lander + konner) / 4)
}