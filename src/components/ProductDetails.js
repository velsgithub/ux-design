import { useState } from 'react';
import { ProgressBar } from 'primereact/progressbar';
import { getProductDetails } from '../services/product';
import { Card } from 'primereact/card';
import { StyledH4 } from './Title';

const LabelSection = props => <div>
    <p className='mb-min'>{props.label}</p>
    <StyledH4 color='#1badc3' className='m-0 mb-min' label={props.value}/>
</div>

const ProductDetails = () => {
    const [product] = useState(getProductDetails());
    return <>
        <h2>Product Details</h2>
        <div className='p-grid' style={{ alignItems: 'center' }}>
            <div className="p-col-4">
                <Card className='p-0'>
                    <img style={{ width: 200, borderRadius: 20, maxWidth: '100%' }} alt="Card"
                        src={product.imageUrl} />
                </Card>
            </div>
            <div className="p-col-7 p-0 pl-min">
                <h3 className='m-0 mb-min'>{product.title}</h3>
                <h3 className='m-0 mb-min'>{product.brand}</h3>
                <StyledH4 className='m-0 mb-min' color='#1071ba' label='Full Spec'/>
                <div className='align-between'>
                    <LabelSection label='Serial Number' value={product.serialNo} />
                    <LabelSection label='Year' value={product.model} />
                </div>
            </div>
        </div>
        <div className='align-between'>
            <LabelSection label='Purchase Date' value={product.purchaseDate} />
            <LabelSection label='Warranty Expiration' value={product.warrantyExpiration} />
        </div>
        <div className='mt-1'>
            <h4 className='m-0 mb-min'>Battery({product.batteryType})</h4>
            <ProgressBar color='#e65411' showValue={false} value={75} />
        </div>
        <div className='align-between mt-1 border-top'>
            <LabelSection label='Total Miles' value={product.totalMiles} />
            <LabelSection label='Daily average' value={product.dailyAvg} />
        </div>
    </>
}

export default ProductDetails;