const StartRent = () => {
    return (
        <section className="bg-[#F1F3FF] pt-12">
            <div className="flex flex-row">
                <div className="pl-32 flex flex-col gap-3 my-auto">
                    <h1 className="text-black text-4xl font-bold font-['Helvetica'] leading-[54px]">Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
                    <div className="text-black text-md font-light font-['Helvetica'] leading-normal">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</div>
                    <a href="/cars" className="w-44 h-9 px-3 py-2 bg-green-400 rounded-sm border justify-center items-center gap-2.5 inline-flex">
                        <div className="text-white text-sm font-bold font-['Helvetica'] leading-tight">Mulai Sewa Mobil</div>
                    </a>
                </div>
                <div className="pl-32">
                    <img src="https://res.cloudinary.com/dabl8rcsp/image/upload/v1694185842/SYNRGY/CH1/img_car_bg3bzx.png" alt="car mulai-sewa" className=""></img>
                </div>
            </div>
        </section>
    )
}

export default StartRent