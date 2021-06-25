function* gen(){
    yield 1;
    yield 2;
}
function* gen2(){
    yield 1;
    yield 2;
    yield gen();
}
let g=gen2()
console.log(g.next());
console.log(g.next());
console.log(g.next());