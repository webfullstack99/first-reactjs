import Product from "../product/product";

const { Component } = require("react");

class ProductList extends Component {

    getProductListHtml() {
        let productListHtml = this.props.productArr
            .map((product, index) => {
                let html = '';
                if (product.status === 'active') {
                    return (
                        <Product
                            onDeleteProduct={this.props.onDeleteProduct}
                            key={index}
                            id={product.id}
                            brand={product.brand}
                            price={product.price}
                        >
                            {product.title}
                        </Product>
                    )
                }
                return html;
            })
        return productListHtml;
    }

    render() {
        return (
            <div className="product-list-wrapper">
                <h3>Product list</h3>
                {(this.props.productArr.length > 0)
                    ?
                    <div className="row">
                        {this.getProductListHtml()}
                    </div>
                    :
                    <div class="alert alert-info" role="alert"> You don't have any product, yet! </div>
                }
            </div>
        )
    }
}
export default ProductList;