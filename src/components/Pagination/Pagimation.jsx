import { useState } from "react"

export default function Pagination ({onChangePage}) {
    const [count, setCount] = useState(1)

    const doChangePage = (newPage) => {
        setCount(newPage)
        onChangePage(newPage)
    }

    return <div className="b-container">
        <button className="b-btn-pages" onClick={() => doChangePage(count - 1)}>
            {"<"}
        </button>
        <div className="counter">{count}</div>
        <button className="b-btn-pages" onClick={() => doChangePage(count + 1)}>
            {">"}
        </button>
    </div>
}