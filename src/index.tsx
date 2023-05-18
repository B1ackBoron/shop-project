import React from 'react'
import ReactDOM from 'react-dom/client'

const app = (
    <div>
        <h1 id="text">Hello App</h1>
        <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione
            reiciendis enim voluptatem, dolor quibusdam ab illo! Nobis eaque
            assumenda rem blanditiis corrupti natus eius tenetur cumque ex aut
            quo, temporibus ut sed ab rerum dignissimos recusandae quisquam
            doloremque praesentium dolores autem dolore cum perferendis?
            Pariatur dolor veritatis necessitatibus natus corporis.
        </p>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<React.StrictMode>{app}</React.StrictMode>)
