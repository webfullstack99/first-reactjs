import React, { Component } from 'react'

class Form extends Component {

    constructor(props) {
        super(props);
        this.createInputRefs();
        this.state = {
            isValid: false,
        }
    }

    createInputRefs() {
        this.brandRef = React.createRef();
        this.titleRef = React.createRef();
        this.priceRef = React.createRef();
    }

    getFormValues() {
        try {
            return {
                title: this.titleRef.current.value,
                price: this.priceRef.current.value,
                brand: this.brandRef.current.value,
            }
        } catch (e) {
            return {
                title: '',
                price: '',
                brand: '',
            };
        }
    }

    onSubmit = () => {
        this.props.onFormSubmit(this.getFormValues());
        this.reset();
    }

    reset(){
        this.titleRef.current.value = '';
        this.brandRef.current.value = '';
        this.priceRef.current.value = '';
    }

    isValid() {
        let values = this.getFormValues();
        return (
            values.title.trim() !== '' &&
            values.price.trim() !== '' &&
            values.brand.trim() !== ''
        )
    }

    onInput = () => {
        this.setState({
            isValid: this.isValid()
        })
    }

    render() {
        return (
            <div className="form-wrapper">
                <h3>Form</h3>
                <div className="form-group">
                    <input type="text" className="form-control" name="title" ref={this.titleRef} placeholder="Title" onKeyUp={this.onInput} />
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" ref={this.brandRef} placeholder="Brand" onKeyUp={this.onInput} />
                </div>
                <div className="form-group">
                    <input type="number" className="form-control" ref={this.priceRef} placeholder="price" onKeyUp={this.onInput} />
                </div>
                <div className="form-group">
                    <button onClick={this.onSubmit} type="submit" className="btn btn-primary" disabled={!this.isValid()}>Submit</button>
                </div>
            </div>
        )
    }

}

export default Form;