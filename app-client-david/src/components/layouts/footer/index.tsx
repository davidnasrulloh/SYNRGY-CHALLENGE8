const Footer = () => {
    return (
        <footer className="px-32 py-20">
            <div className="flex flex-row justify-between">
                    <div className="text-start">
                        <ul className="list-unstyled">
                            <li className="mb-2">
                                <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                            </li>
                            <li className="mb-2">
                                <p>binarcarrental@gmail.com</p>
                            </li>
                            <li className="mb-2">
                                <p>081-233-334-808</p>
                            </li>
                        </ul>
                    </div>
                    <div className="text-start">
                        <ul className="list-unstyled">
                            <li className="mb-2"><a href="#services" className="font-normal text-gray-900">Our services</a></li>
                            <li className="mb-2"><a href="#whyus" className="font-normal text-gray-900">Why Us</a></li>
                            <li className="mb-2"><a href="#testi" className="font-normal text-gray-900">Testimonial</a></li>
                            <li className="mb-2"><a href="#faq" className="font-normal text-gray-900">FAQ</a></li>
                        </ul>
                    </div>
                    <div className="text-start">
                        <p className="mb-2">Connect with us</p>
                        <div className="flex flex-row justify-start">
                            <a href="https://web.facebook.com/binaracademy/"
                                className="w-8 mr-1" target="_blank" rel="noreferrer" >
                                <img src="https://res.cloudinary.com/dabl8rcsp/image/upload/v1694236221/SYNRGY/CH1/icon_medsos/icon_facebook_qjvtni.png" alt="facebook" data-bs-toggle="tooltip"
                                    data-bs-placement="top" title="Facebook"></img>
                            </a>
                            <a href="https://www.instagram.com/academybinar/" className="w-8 mr-1"
                                target="_blank" rel="noreferrer">
                                <img src="https://res.cloudinary.com/dabl8rcsp/image/upload/v1694236221/SYNRGY/CH1/icon_medsos/icon_instagram_csxlek.png" alt="instagram" data-bs-toggle="tooltip"
                                    data-bs-placement="top" title="Instagram"></img>
                            </a>
                            <a href="https://twitter.com/academybinar" className="w-8 mr-1"
                                target="_blank" rel="noreferrer">
                                <img src="https://res.cloudinary.com/dabl8rcsp/image/upload/v1694236220/SYNRGY/CH1/icon_medsos/icon_twitter_icqxuv.png" alt="icon_twitter" data-bs-toggle="tooltip"
                                    data-bs-placement="top" title="Twitter"></img>
                            </a>
                            <a href="mailto:service@binar.co.id" className="w-8 mr-1"
                                target="_blank" rel="noreferrer">
                                <img src="https://res.cloudinary.com/dabl8rcsp/image/upload/v1694236221/SYNRGY/CH1/icon_medsos/icon_mail_xqafht.png" alt="gmail" data-bs-toggle="tooltip"
                                    data-bs-placement="top" title="Gmail"></img>
                            </a>
                            <a href="https://www.binaracademy.com/" className="w-8 mr-1"
                                target="_blank" rel="noreferrer">
                                <img src="https://res.cloudinary.com/dabl8rcsp/image/upload/v1694236220/SYNRGY/CH1/icon_medsos/icon_twitch_xyfidj.png" alt="icon_twitch" data-bs-toggle="tooltip"
                                    data-bs-placement="top" title="Twitch"></img>
                            </a>
                        </div>
                    </div>
                    <div className="text-start">
                        <p className="mb-2">Copyright Binar 2022</p>
                        <div className="w-[100px] h-[34px] bg-blue-800" />
                    </div>
                </div>
        </footer>
    )
}

export default Footer
