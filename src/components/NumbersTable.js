
export default function NumbersTable({ limit }) {
    const arr = []
    for(let i=1; i<=limit; i++) {
        if(i%2 === 0) {
            arr.push('red')
        }
        else {
            arr.push('white');
        }
    }
    return(
        arr.map((num, k) => (
            <div key={k} className="numbers-table" style={{backgroundColor: num}}>
                {k+1}
            </div>
        ))
    )
}