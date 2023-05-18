import React from 'react'
import ReactDOM from 'react-dom/client'

const Title = () => {
    return <h1>Hello App component</h1>
}

const Content = () => {
    return (
        <React.Fragment>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Accusantium corporis earum quae quod, eum impedit ducimus ullam
                similique numquam sint eos vel ipsa quidem dolores, dolore
                fugit, delectus doloribus molestiae?
            </p>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus
                ea error magni voluptate ab numquam alias, tenetur dolore quis,
                deleniti magnam? Adipisci tempora, voluptas nobis ratione
                impedit sit quod eveniet!
            </p>
        </React.Fragment>
    )
}
const App = () => {
    return (
        <>
            <Title />
            <Content />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
