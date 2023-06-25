import { Typography } from '@mui/material'
import axios from 'axios'
import { useState } from 'react'

type Props = {}

type Order = {
    name: string
    adress: string
}

const CheckoutPage = (props: Props) => {
    const [orderData, setOrderData] = useState<Order>({
        name: '',
        adress: '',
    })

    const [isOrderSend, setIsOrderSend] = useState<boolean>(false)

    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOrderData((prevState) => ({
            ...prevState,
            name: e.target.value,
        }))
    }

    const handleAdress = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOrderData((prevState) => ({
            ...prevState,
            adress: e.target.value,
        }))
    }

    const onSend = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()

        axios
            .post(
                'https://my-json-server.typicode.com/kznkv-skillup/server/orders',
                {
                    name: orderData.name,
                    adress: orderData.adress,
                }
            )
            .then((res) => res.data)
            .then(({ name, adress }) => {
                setOrderData({ name, adress })
                setIsOrderSend(true)
            })
            .catch((e) => console.log(e))
    }

    const renderForm = () => {
        return (
            <form onSubmit={onSend}>
                <div>
                    <input
                        type="text"
                        placeholder="Name"
                        value={orderData.name}
                        onChange={handleName}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Adress"
                        value={orderData.adress}
                        onChange={handleAdress}
                    />
                </div>
                <button type="submit">Send</button>
            </form>
        )
    }

    const renderMessage = () => {
        return (
            <div>
                <div>Dear, {orderData.name} thanks for your order!</div>
                <div> Adress: {orderData.adress}</div>
            </div>
        )
    }

    return (
        <div>
            <Typography variant="h4" component={'h1'}>
                Checkout
            </Typography>
            {isOrderSend ? renderMessage() : renderForm()}
        </div>
    )
}

export default CheckoutPage
