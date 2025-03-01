
function ContactInfo() {
    return (
        <div className='bg-dark text-light py-5 shadow'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6 d-flex flex-column align-items-center justify-content-center mb-5 mb-lg-0'>
                        <div className='d-flex flex-column align-items-center'>
                            <h2 className='fs-1 mb-3 text-uppercase fw-bold'>Nos encontramos en 📍</h2>
                            <p className='mb-5 fs-5'>Brandsen 805 - Ciudad Autonoma de Buenos Aires</p>
                            <h3>Horarios:</h3>
                            <p className='m-0 fs-5'>Martes a Domingo: 08:00 - 00:00 hs</p>
                            <p className="fs-5">Lunes: Cerrado</p>
                        </div>
                    </div>
                    <div className='col-lg-6 d-flex justify-content-center'>
                        <img className='img-fluid' src="https://images.pexels.com/photos/744780/pexels-photo-744780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Contact-info" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactInfo
