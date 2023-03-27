import React from 'react'
const Footer = () => {
    return (
        <>
            <div className="text-center text-lg-start bg-light text-muted">
                <section className="">
                    <div className="container text-center text-md-start mt-5">
                        <div className="row mt-3">
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                                <p><i className="fas fa-home me-3"></i> E-2/93 Chanakya Place, New Delhi-110059,India</p>
                                <p>
                                    <i className="fas fa-envelope me-3"></i>
                                    sales@Unforgettableholidays.in
                                </p>
                                <p><i className="fas fa-phone me-3"></i> +91 813 090 8129</p>
                                <p><i className="fas fa-print me-3"></i> +91 966 771 0692</p>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="text-center p-4" style={{"background-color": "rgba(0, 0, 0, 0.05);"}}>
                    © 2021 Copyright:
                    <a className="text-reset fw-bold" href="https://Unforgettableholidays.in/">Unforgettableholidays.in</a>
                </div>
            </div>
        </>
    )
}

export default Footer
