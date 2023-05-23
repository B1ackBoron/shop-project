import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
import Title from './Title'
import { Content } from './Content'

const App = () => {
    return (
        <>
            <Title title="App" />
            <Title title="React" num={2} />

            <Content
                text1={
                    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias voluptatibus porro reiciendis quaerat dolores labore repudiandae nulla, corrupti autem eius earum fugiat est deserunt, minus perferendis accusamus non culpa placeat ut quia nostrum quos enim. Explicabo aperiam repellendus minima optio, amet eius non porro tenetur sapiente ex dolorem magni quod.'
                }
                text2={
                    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias voluptatibus porro reiciendis quaerat dolores labore repudiandae nulla, corrupti autem eius earum fugiat est deserunt, minus perferendis accusamus non culpa placeat ut quia nostrum quos enim. Explicabo aperiam repellendus minima optio, amet eius non porro tenetur sapiente ex dolorem magni quod.'
                }
            />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
