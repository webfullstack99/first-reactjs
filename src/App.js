import './App.css';
import { Component } from 'react';
import Navbar from './components/navbar/navbar';
import ProductList from './components/productt_list/product_list';
import Form from './components/form/form';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productArr: [
                {
                    id: 1,
                    title: 'iphone x',
                    brand: 'apple',
                    price: 10000000,
                    status: 'active',
                },
                {
                    id: 2,
                    title: 'galaxy 7 prime',
                    brand: 'samsung',
                    price: 7000000,
                    status: 'active',
                },
                {
                    id: 3,
                    title: 'xperia z',
                    brand: 'sony',
                    price: 13000000,
                    status: 'active',
                },
            ],
        }
    }

    onFormSubmit = (params) => {
        let productArr = this.state.productArr;
        let id = productArr[productArr.length - 1];
        params.id = id + 1;
        params.status = 'active';
        productArr.push(params);
        this.setState({ productArr });
    }

    onDeleteProduct = (id) =>{
        let items = this.state.productArr;
        items.splice(items.findIndex((item) => {
            return (item.id === id);
        }), 1);
        this.setState({productArr: items});
    }

    render() {
        return (
            <div className="wrapper">

                {/* HEADER */}
                <div className="header">
                    <Navbar></Navbar>
                </div>

                {/* MAIN CONTENT */}
                <div className="main-content">
                    <div className="container-fluid my-3">
                        <div className="row">
                            <div className="col-lg-8 order-2 order-lg-1">
                                <ProductList onDeleteProduct={this.onDeleteProduct} productArr={this.state.productArr}></ProductList>
                            </div>
                            <div className="col-lg-4 order-1 order-lg-2">
                                <Form onFormSubmit={this.onFormSubmit}></Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
