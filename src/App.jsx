import React from "react"
import Avatar from "./Avatar"
import Header from "./Header"
import Product from "./Product"
import Button from "./Button"

const App = () => {
    return(
        <div className="card">
            <Avatar />
            <Header />
            <Product />
            <Button />
        </div>
    )
}

export default App