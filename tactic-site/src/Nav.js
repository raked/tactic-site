function Nav() {
    return (
        <div className="d-flex-inline justify-content-around bg-light" /*style={{ backgroundColor: "#cfe8fb" }}*/>
            <nav className="navbar navbar-light navbar-expand-lg">
                <div className="container-fluid">

                    <a href="#music" className="nav-link link-dark ms-5">Music</a>
                    <div className="lead">Tactic</div>
                    <a href="#contact" className="nav-link link-dark me-5">Contact</a>

                </div>
            </nav>
        </div>
    );
}

export default Nav;