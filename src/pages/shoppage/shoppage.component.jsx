import React from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import SHOP_DATA from './shoppage.data'

class Shoppage extends React.Component {
    constructor () {
        super ()
        this.state = {
            collections: SHOP_DATA
        };
    }

    render() {
        const {collections} = this.state;
        return (
        <div className='shop-page'>
            {
                collections.map(({id, ...otherCollectionProps}) => (
                    <CollectionPreview key={collections.id} {...otherCollectionProps}/>
                ))
            }
        </div>
        )
    }
}

export default Shoppage;