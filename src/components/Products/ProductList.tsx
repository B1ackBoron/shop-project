import ProductListItem from './ProductListItem'
import { Grid, Typography } from '@mui/material'
import productsArray from 'utils/productsArray'

type Props = {}

const ProductList = (props: Props) => {
    return (
        <>
            <Typography
                component="h2"
                variant="h3"
                align="center"
                sx={{ marginBottom: '30px' }}
            >
                List of Products
            </Typography>
            <Grid container spacing={4}>
                {productsArray
                    .filter((item) => item.category === 'phone')
                    .map(
                        ({
                            id,
                            title,
                            description,
                            type,
                            capacity,
                            price,
                            image,
                        }) => (
                            <Grid item xs={12} sm={6} md={4} key={id}>
                                <ProductListItem
                                    id={id}
                                    title={title}
                                    description={description}
                                    type={type}
                                    capacity={capacity}
                                    price={price}
                                    image={image}
                                />
                            </Grid>
                        )
                    )}
            </Grid>
        </>
    )
}
export default ProductList
