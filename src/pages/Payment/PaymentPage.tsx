import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
    Grid,
    Typography,
    Button,
    Card,
    CardContent,
    CardActions,
} from '@mui/material'
import { RootState } from 'redux/store'
import { addProductToCart, removeProductFromCart } from 'redux/cartReducer'
import productsArray, { Product } from 'utils/productsArray'

interface Props {}

const PaymentPage = (props: Props) => {
    const conversionRates: Record<string, number> = {
        usd: 1.0,
        eur: 0.91,
        uah: 36.93,
        mdl: 18.25,
    }

    const [selectedCurrency, setSelectedCurrency] = useState('usd')
    const [priceMultiplier, setPriceMultiplier] = useState(1.0)
    const dispatch = useDispatch()
    const cartItems = useSelector((state: RootState) => state.productsInCart)

    const handleCurrencyChange = (currency: string) => {
        setSelectedCurrency(currency)
        setPriceMultiplier(conversionRates[currency])
    }

    const handleAddToCart = (productId: number) => {
        dispatch(addProductToCart({ id: productId, count: 1 }))
    }

    const handleRemoveFromCart = (productId: number) => {
        dispatch(removeProductFromCart(productId))
    }

    const getTotalCost = () => {
        let totalCost = 0
        for (const [productId, count] of Object.entries(cartItems)) {
            const product = productsArray.find(
                (p) => p.id === Number(productId)
            )
            if (product) {
                totalCost += product.price * count * priceMultiplier
            }
        }
        return totalCost
    }

    return (
        <>
            <Typography
                component="h2"
                variant="h3"
                align="center"
                sx={{ marginBottom: '30px' }}
            >
                Our shop page
            </Typography>

            <Grid
                container
                justifyContent="center"
                spacing={2}
                sx={{ marginBottom: '30px' }}
            >
                <Grid item>
                    <Button
                        variant="outlined"
                        onClick={() => handleCurrencyChange('usd')}
                        sx={{
                            backgroundColor:
                                selectedCurrency === 'usd' ? 'yellow' : 'white',
                        }}
                    >
                        USD
                    </Button>
                </Grid>
                <Grid item>
                    <Button
                        variant="outlined"
                        onClick={() => handleCurrencyChange('eur')}
                        sx={{
                            backgroundColor:
                                selectedCurrency === 'eur' ? 'yellow' : 'white',
                        }}
                    >
                        EUR
                    </Button>
                </Grid>
                <Grid item>
                    <Button
                        variant="outlined"
                        onClick={() => handleCurrencyChange('uah')}
                        sx={{
                            backgroundColor:
                                selectedCurrency === 'uah' ? 'yellow' : 'white',
                        }}
                    >
                        UAH
                    </Button>
                </Grid>
                <Grid item>
                    <Button
                        variant="outlined"
                        onClick={() => handleCurrencyChange('mdl')}
                        sx={{
                            backgroundColor:
                                selectedCurrency === 'mdl' ? 'yellow' : 'white',
                        }}
                    >
                        MDL
                    </Button>
                </Grid>
            </Grid>

            <Grid container spacing={2} sx={{ marginBottom: '30px' }}>
                {productsArray.map((product: Product) => (
                    <Grid item xs={12} sm={6} md={4} key={product.id}>
                        <Card className="product" variant="outlined">
                            <CardContent>
                                <h4 className="product-title">
                                    {product.title}
                                </h4>
                                <div className="product-price">
                                    {selectedCurrency}{' '}
                                    {product.price * priceMultiplier}
                                </div>
                            </CardContent>
                            <CardActions className="btn-wrap">
                                {cartItems[product.id] ? (
                                    <Button
                                        variant="outlined"
                                        onClick={() =>
                                            handleRemoveFromCart(product.id)
                                        }
                                    >
                                        Remove from cart
                                    </Button>
                                ) : (
                                    <Button
                                        variant="outlined"
                                        onClick={() =>
                                            handleAddToCart(product.id)
                                        }
                                    >
                                        Add to cart
                                    </Button>
                                )}
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            <Typography variant="h4" align="center">
                Total Cost: {selectedCurrency} {getTotalCost()}
            </Typography>
        </>
    )
}

export default PaymentPage
