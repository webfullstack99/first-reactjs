const { Component } = require("react");

class Product extends Component {

    constructor(props) {
        super(props);
        this.state = {
            background: 'bg-light',
            textColor: 'text-dark',
        }
    }
    addToCart = () => {
        console.log('add to cart', this.props.children);

    }

    changeColor = () => {
        let background = (this.state.background === 'bg-light') ? 'bg-dark' : 'bg-light';
        let textColor = (this.state.textColor === 'text-light') ? 'text-dark' : 'text-light';
        this.setState({ background: background, textColor: textColor });
    }

    render() {
        return (
            <div className="product-wrapper col-md-6 mb-3" >
                <div className={'card ' + this.state.textColor + ' ' + this.state.background}>
                    <div className="card-body">
                        <h4 className="card-title">{this.props.children}</h4>
                        <div className="card-text">
                            <div>
                                <span>Brand:</span>
                                <span className="badge badge-dark">{this.props.brand}</span>
                            </div>
                            <div>
                                <span>Price:</span>
                                <span className="badge badge-success">{this.props.price}</span>
                            </div>
                            <div className="mt-2">
                                <button className="btn btn-primary btn-sm" onClick={this.addToCart}>Add to cart</button>
                                <button className="btn btn-dark btn-sm ml-2" onClick={this.changeColor}>Change color</button>
                                <button className="btn btn-danger btn-sm ml-2" onClick={() => { this.props.onDeleteProduct(this.props.id) }}>Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Product;