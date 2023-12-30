import { MainLayout } from "../../components"
import { About, Faq, Ourservices, StartRent, Testimonial, WhyUs } from "../../sections"

const HomePage = () => {
  return (
    <MainLayout>
        <StartRent/>
        <main className="px-32">
            <Ourservices/>
            <WhyUs/>
            <Testimonial/>
            <About/>
            <Faq/>
        </main>
    </MainLayout>
  )
}

export default HomePage