import styles from '../styles/styles.module.css'

import { useProduct } from '../hooks/useProduct'
import React, { CSSProperties, createContext } from 'react';
import { InitialValues, Product, ProductCardHandlers, ProductContextProps, onChangeArgs } from '../interfaces/interfaces';


export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
  product: Product;
  // children?: ReactElement | ReactElement[];
  children: (args: ProductCardHandlers) => JSX.Element;
  className?: string;
  style?: CSSProperties;
  onChange?: ( args: onChangeArgs ) => void;
  value?: number;
  initialValues?: InitialValues
}

export const ProductCard = ({ product, children, className, style, onChange, value, initialValues }: Props) => {

    const { counter, increaseBy, maxCount, isMaxCountReached, reset } = useProduct( { onChange, product, value, initialValues } );

  return (
    <Provider value={{
        counter,
        product,
        maxCount,
        increaseBy,
    }}>
        <div 
          className={`${styles.productCard} ${className}`}
          style={ style }
        >
        { 
          children({
            count: counter,
            isMaxCountReached: isMaxCountReached,
            maxCount: initialValues?.maxCount,
            product,
            increaseBy,
            reset
          }) 
        }
        </div>
    </Provider>
  )
}

// ProductCard.Imge = ProductImage;
// ProductCard.Title = ProductTitle;
// ProductCard.Buttons = ProductButtons;
