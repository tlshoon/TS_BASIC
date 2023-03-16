let a : number = 1;
let b : string = 'hi';
let c : boolean = false;

let d : number[] = [1,2];
let e : string[] = ['hi', 'bye'];
let f : boolean[] = [true,false];

const plyerNico : {
    name : string,
    age ?: number   // ?는 있을 수도 있고 없을 수도 있고
} = {
    name: 'nico'
} 

type Age = number;
type Name = string;

type Player = {
    name : Name,
    age ?: Age,
}

const lynn : Player = {
    name: 'lynn',
    age: 12
}


function playerMaker(name:string) : Player {
    return {
        name
    }
}

const playerMakes = (name:Name) : Player => ({name})


const numbers : readonly number[] = [1,2,3,4]   // 추가 못함

const player : [string, number, boolean] = ["nico", 13, true]

const g : any[] = [1,2,"hi",true]


let h : unknown;   // 변수 타입을 미리 알지 못할 때 사용

if (typeof h === 'number') {
    let e = h + 1;
}

function hello() : void {       // 함수가 아무것도 리턴하지 않는 것
    console.log('hello')
}


type Add = (a : number, b : number) => number;  // call signiture

const add:Add = (a,b) => a+b


// 오버로딩 : call signiture가 여러개인 함수

type Adds = {
    (a : number, b : number) : number
    (a : number, b : string) : number
}

const adds: Adds = (a,b) => {
    if(typeof b === 'string') return a
    return a+b
}


type Config = {
    path: string,
    state: object
}

type Push = {
    (path:string):void
    (config:Config):void
}

const push : Push = (config) => {
    if(typeof config === 'string') {console.log(config)}
    else{
        console.log(config.path)
    }
}


// 다형성 : 여러가지 다른 형태
type SuperPrint = {
    <T,M>(arr: T[], b:M): T        // 타입을 유추하도록 알려줌 (제네릭)
}

const superPrint: SuperPrint = (arr) => arr[0]

const ab = superPrint([1,2,3,4], "x")
const cd = superPrint([true,false,true], 1)
const ef = superPrint(["a","b","c","d"], false)
const gh = superPrint([1,2,true,false,"hello"], [])

  