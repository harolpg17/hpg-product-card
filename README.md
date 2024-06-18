# HPG-Product-Card

Este es un paquete de pruebas de despliegue en NPM

# Ejemplo

```
import { ProductCard, ProductImage, ProductTitle, ProductButtons} from 'hpg-product-card'
```

```
 <ProductCard 
    product={product}
    initialValues={{
    count: 4,
    maxCount: 10
    }}
>
    {
        ({
            count,
            maxCount,
            isMaxCountReached,
            reset,
            increaseBy
        }) => (
            <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
            </>
        )
    }
</ProductCard>    
```