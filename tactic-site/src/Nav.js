function Nav() {
    return (
        <div className="d-flex-inline justify-content-around">
            <nav className="navbar navbar-light navbar-expand-lg" style={{ backgroundColor: "#cfe8fb" }}>
                <div className="container-fluid">
                    
                        <a href="#music" className="link-dark ms-5">Music</a>
                        <div className="lead">Tactic</div>
                        <a href="#contact" className="link-dark me-5">Contact</a>
                    
                </div>
            </nav>
        </div>
    );
}

export default Nav;