import Header from 'Container/Header/Header'
import CssBaseline from '@mui/material/CssBaseline'
import { StyledEngineProvider } from '@mui/material/styles'
import { Container } from '@mui/material'
import CartPage from 'pages/Cart/CartPage'
import Home from 'pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import CheckoutPage from 'pages/Checkout/CheckoutPage'
import PaymentPage from 'pages/Payment/PaymentPage'

const App = () => {
    return (
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <Header />
            <Container
                sx={{
                    padding: '40px 0',
                }}
            >
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route path="/checkout" element={<CheckoutPage />} />
                    <Route path="/payment" element={<PaymentPage />} />
                </Routes>
            </Container>
        </StyledEngineProvider>
    )
}

export default App
