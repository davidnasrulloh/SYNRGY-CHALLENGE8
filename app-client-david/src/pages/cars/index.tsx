import { FormFilter, MainLayout } from "../../components"
import { StartRent } from "../../sections"

const CarsPage = () => {
  return (
    <MainLayout>
        <div className="relative">
          <StartRent/>
          <div className="mt-32">
            <FormFilter/>
          </div>
        </div>

    </MainLayout>
  )
}

export default CarsPage