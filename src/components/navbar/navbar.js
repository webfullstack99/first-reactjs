const { Component } = require("react");

class Navbar extends Component {
    render() {
        return (
            <div className="navbar-wrapper">
                <nav className="navbar navbar-expand navbar-dark bg-dark d-flex justify-content-center">
                    <ul className="nav navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link active" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link  disabled" href="/">Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}
export default Navbar;