function Nav() {
    return (
        <div>
            <nav className="navbar navbar-light navbar-expand-lg d-flex" style={{ backgroundColor: "#cfe8fb" }}>
                <div className="container-fluid">
                    <ul>
                        <li class="link"><a href="#music" className="link-dark">Music</a></li>
                        <li><a href="#" className="link-dark">Tactic</a></li>
                        <li><a href="#contact" className="link-dark">Contact</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Nav;