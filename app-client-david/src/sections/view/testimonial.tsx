import { useState } from "react";
import { useKeenSlider } from "keen-slider/react"
import {CaretLeft, CaretRight} from "@phosphor-icons/react";
import "keen-slider/keen-slider.min.css"
import "../../index.css"

const Testimonial = () => {

    const [currentSlide, setCurrentSlide] = useState(0)
    const [loaded, setLoaded] = useState(false)
    const [sliderRef, instanceRef] = useKeenSlider({
        initial: 0,
        slideChanged(slider:any) {
            setCurrentSlide(slider.track.details.rel)
        },
        created() {
            setLoaded(true)
        },
    })


    return (
        <>
            <section className="testimonial py-24" id="testi">
                    <div className="w-full text-center flex flex-col gap-2 mb-8">
                        <h2 className="w-[100%] text-center text-black text-2xl font-bold font-['Helvetica'] leading-9">Testimonial</h2>
                        <div className="text-center text-black text-lg font-light font-['Helvetica'] leading-tight">Berbagai review positif dari para pelanggan kami</div>
                    </div>
                    <div className="navigation-wrapper relative mx-auto w-[70%]">
                        <div ref={sliderRef} className="keen-slider rounded-2xl">
                            <div className="keen-slider__slide flex justify-center bg-[#F1F3FF] rounded-2xl">
                                <div className="w-[80%] py-24 flex flex-row justify-center content-center">
                                    <div className="w-16 my-auto">
                                        <img src="https://res.cloudinary.com/dabl8rcsp/image/upload/v1694239301/SYNRGY/CH1/img_photo1_gvivei.png"
                                            className="img-fluid mx-auto d-block rounded-circle" alt="photo1" height="10" />
                                    </div>
                                    <div className="w-full px-12 flex flex-col gap-2 text-start">
                                        <div className="flex gap-2">
                                            <img src="https://res.cloudinary.com/dabl8rcsp/image/upload/v1694239490/SYNRGY/CH1/icon_star_bqgrw5.svg" className=""></img>
                                            <img src="https://res.cloudinary.com/dabl8rcsp/image/upload/v1694239490/SYNRGY/CH1/icon_star_bqgrw5.svg" className=""></img>
                                            <img src="https://res.cloudinary.com/dabl8rcsp/image/upload/v1694239490/SYNRGY/CH1/icon_star_bqgrw5.svg" className=""></img>
                                            <img src="https://res.cloudinary.com/dabl8rcsp/image/upload/v1694239490/SYNRGY/CH1/icon_star_bqgrw5.svg" className=""></img>
                                            <img src="https://res.cloudinary.com/dabl8rcsp/image/upload/v1694239490/SYNRGY/CH1/icon_star_bqgrw5.svg" className=""></img>
                                        </div>
                                        <p className="font-normal text-lg">
                                            <q>This is a wider card with supporting text below as a
                                                natural lead-in to additional content. This content is a little bit
                                                longer.</q>
                                        </p>
                                        <h5 className="font-semibold text-lg">John Dee 32, Bromo</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="keen-slider__slide flex justify-center bg-[#F1F3FF] rounded-2xl">
                                <div className="w-[80%] py-24 flex flex-row justify-center content-center">
                                    <div className="w-16 my-auto">
                                        <img src="https://res.cloudinary.com/dabl8rcsp/image/upload/v1694239301/SYNRGY/CH1/img_photo1_gvivei.png"
                                            className="img-fluid mx-auto d-block rounded-circle" alt="photo1" height="10" />
                                    </div>
                                    <div className="w-full px-12 flex flex-col gap-2 text-start">
                                        <div className="flex gap-2">
                                            <img src="https://res.cloudinary.com/dabl8rcsp/image/upload/v1694239490/SYNRGY/CH1/icon_star_bqgrw5.svg" className=""></img>
                                            <img src="https://res.cloudinary.com/dabl8rcsp/image/upload/v1694239490/SYNRGY/CH1/icon_star_bqgrw5.svg" className=""></img>
                                            <img src="https://res.cloudinary.com/dabl8rcsp/image/upload/v1694239490/SYNRGY/CH1/icon_star_bqgrw5.svg" className=""></img>
                                            <img src="https://res.cloudinary.com/dabl8rcsp/image/upload/v1694239490/SYNRGY/CH1/icon_star_bqgrw5.svg" className=""></img>
                                            <img src="https://res.cloudinary.com/dabl8rcsp/image/upload/v1694239490/SYNRGY/CH1/icon_star_bqgrw5.svg" className=""></img>
                                        </div>
                                        <p className="font-normal text-lg">
                                            <q>This is a wider card with supporting text below as a
                                                natural lead-in to additional content. This content is a little bit
                                                longer.</q>
                                        </p>
                                        <h5 className="font-semibold text-lg">John Dee 32, Bromo</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="keen-slider__slide flex justify-center bg-[#F1F3FF] rounded-2xl">
                                <div className="w-[80%] py-24 flex flex-row justify-center content-center">
                                    <div className="w-16 my-auto">
                                        <img src="https://res.cloudinary.com/dabl8rcsp/image/upload/v1694239301/SYNRGY/CH1/img_photo1_gvivei.png"
                                            className="img-fluid mx-auto d-block rounded-circle" alt="photo1" height="10" />
                                    </div>
                                    <div className="w-full px-12 flex flex-col gap-2 text-start">
                                        <div className="flex gap-2">
                                            <img src="https://res.cloudinary.com/dabl8rcsp/image/upload/v1694239490/SYNRGY/CH1/icon_star_bqgrw5.svg" className=""></img>
                                            <img src="https://res.cloudinary.com/dabl8rcsp/image/upload/v1694239490/SYNRGY/CH1/icon_star_bqgrw5.svg" className=""></img>
                                            <img src="https://res.cloudinary.com/dabl8rcsp/image/upload/v1694239490/SYNRGY/CH1/icon_star_bqgrw5.svg" className=""></img>
                                            <img src="https://res.cloudinary.com/dabl8rcsp/image/upload/v1694239490/SYNRGY/CH1/icon_star_bqgrw5.svg" className=""></img>
                                            <img src="https://res.cloudinary.com/dabl8rcsp/image/upload/v1694239490/SYNRGY/CH1/icon_star_bqgrw5.svg" className=""></img>
                                        </div>
                                        <p className="font-normal text-lg">
                                            <q>This is a wider card with supporting text below as a
                                                natural lead-in to additional content. This content is a little bit
                                                longer.</q>
                                        </p>
                                        <h5 className="font-semibold text-lg">John Dee 32, Bromo</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="keen-slider__slide flex justify-center bg-[#F1F3FF] rounded-2xl">
                                <div className="w-[80%] py-24 flex flex-row justify-center content-center">
                                    <div className="w-16 my-auto">
                                        <img src="https://res.cloudinary.com/dabl8rcsp/image/upload/v1694239301/SYNRGY/CH1/img_photo1_gvivei.png"
                                            className="img-fluid mx-auto d-block rounded-circle" alt="photo1" height="10" />
                                    </div>
                                    <div className="w-full px-12 flex flex-col gap-2 text-start">
                                        <div className="flex gap-2">
                                            <img src="https://res.cloudinary.com/dabl8rcsp/image/upload/v1694239490/SYNRGY/CH1/icon_star_bqgrw5.svg" className=""></img>
                                            <img src="https://res.cloudinary.com/dabl8rcsp/image/upload/v1694239490/SYNRGY/CH1/icon_star_bqgrw5.svg" className=""></img>
                                            <img src="https://res.cloudinary.com/dabl8rcsp/image/upload/v1694239490/SYNRGY/CH1/icon_star_bqgrw5.svg" className=""></img>
                                            <img src="https://res.cloudinary.com/dabl8rcsp/image/upload/v1694239490/SYNRGY/CH1/icon_star_bqgrw5.svg" className=""></img>
                                            <img src="https://res.cloudinary.com/dabl8rcsp/image/upload/v1694239490/SYNRGY/CH1/icon_star_bqgrw5.svg" className=""></img>
                                        </div>
                                        <p className="font-normal text-lg">
                                            <q>This is a wider card with supporting text below as a
                                                natural lead-in to additional content. This content is a little bit
                                                longer.</q>
                                        </p>
                                        <h5 className="font-semibold text-lg">John Dee 32, Bromo</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="keen-slider__slide flex justify-center bg-[#F1F3FF] rounded-2xl">
                                <div className="w-[80%] py-24 flex flex-row justify-center content-center">
                                    <div className="w-16 my-auto">
                                        <img src="https://res.cloudinary.com/dabl8rcsp/image/upload/v1694239301/SYNRGY/CH1/img_photo1_gvivei.png"
                                            className="img-fluid mx-auto d-block rounded-circle" alt="photo1" height="10" />
                                    </div>
                                    <div className="w-full px-12 flex flex-col gap-2 text-start">
                                        <div className="flex gap-2">
                                            <img src="https://res.cloudinary.com/dabl8rcsp/image/upload/v1694239490/SYNRGY/CH1/icon_star_bqgrw5.svg" className=""></img>
                                            <img src="https://res.cloudinary.com/dabl8rcsp/image/upload/v1694239490/SYNRGY/CH1/icon_star_bqgrw5.svg" className=""></img>
                                            <img src="https://res.cloudinary.com/dabl8rcsp/image/upload/v1694239490/SYNRGY/CH1/icon_star_bqgrw5.svg" className=""></img>
                                            <img src="https://res.cloudinary.com/dabl8rcsp/image/upload/v1694239490/SYNRGY/CH1/icon_star_bqgrw5.svg" className=""></img>
                                            <img src="https://res.cloudinary.com/dabl8rcsp/image/upload/v1694239490/SYNRGY/CH1/icon_star_bqgrw5.svg" className=""></img>
                                        </div>
                                        <p className="font-normal text-lg">
                                            <q>This is a wider card with supporting text below as a
                                                natural lead-in to additional content. This content is a little bit
                                                longer.</q>
                                        </p>
                                        <h5 className="font-semibold text-lg">John Dee 32, Bromo</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {loaded && instanceRef.current && (
                            <>
                                <button
                                    className="absolute z-[1000] top-[135px] left-0 bg-transparent hover:cursor-pointer hover:border-0 border-0 hover:bg-slate-200 mx-2 px-1"
                                    onClick={(e:any) =>
                                        e.stopPropagation() || instanceRef.current?.prev()
                                    }
                                    disabled={currentSlide === 0}>
                                    <CaretLeft size={32} weight="fill" />
                                </button>

                                <button
                                    className="absolute z-[1000] top-[135px] right-0 bg-transparent hover:cursor-pointer hover:border-0 border-0 hover:bg-slate-200 mx-2 px-1"
                                    onClick={(e:any) =>
                                        e.stopPropagation() || instanceRef.current?.next()
                                    }
                                    disabled={
                                        currentSlide ===
                                        instanceRef?.current?.track?.details?.slides?.length - 1
                                    }
                                    >
                                    <CaretRight size={32} weight="fill" />
                                </button>
                            </>
                        )}
                    </div>

                   

            </section >
        </>
    );

}

export default Testimonial
