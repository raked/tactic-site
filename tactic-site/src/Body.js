function Body() {
    return (
        <div>
            <section id="music" className="bg-dark">
                <h1 className="text-center text-white pt-5" style={{ fontFamily: "Mate SC" }}>Check out my music below</h1>
                <div className="d-flex text-center justify-content-center align-items-center min-vh-100">
                    <div className="p-3">
                        <a href="https://soundcloud.com/andyv15/rich-the-kid-splashin-prod-tactic" className="link-primary" target="_blank" rel="noreferrer">
                            <div className="card" style={{ width: "18rem" }}>
                                <img src={"/assets/images/song_0.PNG"} className="card-img-top" alt="Rich the Kid - Splashin (prod. Tactic)" />
                                < div className="card-body" >
                                    <p className="card-text">Rich the Kid - Splashin (prod. Tactic)</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="p-3">
                        <a href="https://soundcloud.com/andyv15/atmos" className="link-primary" target="_blank" rel="noreferrer">
                            <div className="card" style={{ width: "18rem" }}>
                                <img src={"/assets/images/song_1.PNG"} className="card-img-top" alt="Atmos" />
                                < div className="card-body" >
                                    <p className="card-text">Atmos</p>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="p-3">
                        <a href="https://soundcloud.com/andyv15/betrayal" className="link-primary" target="_blank" rel="noreferrer">
                            <div className="card" style={{ width: "18rem" }}>
                                <img src={"/assets/images/song_2.PNG"} className="card-img-top" alt="Betrayal" />
                                < div className="card-body" >
                                    <p className="card-text">Betrayal</p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </section>
            <section id="contact">

            </section>
        </div>
    );
}

export default Body;