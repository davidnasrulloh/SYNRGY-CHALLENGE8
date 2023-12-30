import { useState } from 'react';

const Faq = () => {
  // State to manage the open/closed state of each accordion item
  const [accordionState, setAccordionState] = useState({
    item1: false,
    item2: false,
    item3: false,
    item4: false,
    item5: false,
  });

  // Function to toggle the state of an accordion item
  const toggleAccordion = (item:any) => {
    setAccordionState((prevState:any) => ({
      ...prevState,
      [item]: !prevState[item],
    }));
  };

  return (
    <section className="py-24" id="faq">
      <div className="flex flex-row">
        <div className="w-[50%] text-start">
          <h2 className="font-bold text-xl mb-3">Frequently Asked Question</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
        <div className="w-[50%]">
          <div className="flex flex-col justify-start text-start">
            {/* Accordion Item 1 */}
            <div className="border rounded-lg px-6 py-3 cursor-pointer" onClick={() => toggleAccordion('item1')}>
              <h2 className="font-semibold text-md">
                  Apa saja syarat yang dibutuhkan?
              </h2>
              <div className={`mt-2 ${accordionState.item1 ? 'block' : 'hidden'}`}>
                <div className="">
                  Placeholder content for this, which is intended to demonstrate the{' '}
                  <code>.-flush</code> className. This is the first item's body.
                </div>
              </div>
            </div>

            {/* Repeat the above structure for other accordion items */}
            {/* Accordion Item 2 */}
            <div className="border rounded-lg px-6 py-3 my-2 cursor-pointer" onClick={() => toggleAccordion('item2')}>
              <h2 className="font-semibold text-md">
                Berapa hari minimal sewa mobil lepas kunci?
              </h2>
              <div className={`mt-2 ${accordionState.item2 ? 'block' : 'hidden'}`}>
                <div className="">
                    Placeholder content for this , which is intended to demonstrate the <code>.-flush</code> className. This is the second item's  body. Let's imagine this being filled with some actual content.
                </div>
              </div>
            </div>

            {/* Accordion Item 3 */}
            <div className="border rounded-lg px-6 py-3 my-2 cursor-pointer" onClick={() => toggleAccordion('item3')}>
              <h2 className="font-semibold text-md">
                Berapa hari sebelumnya sabaiknya booking sewa mobil?
              </h2>
              <div className={`mt-2 ${accordionState.item3 ? 'block' : 'hidden'}`}>
                <div className="">Placeholder content for this , which is intended to demonstrate the <code>.-flush</code> className. This is the third item's  body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.
                </div>
              </div>
            </div>

            {/* Accordion Item 4 */}
            <div className="border rounded-lg px-6 py-3 my-2 cursor-pointer" onClick={() => toggleAccordion('item4')}>
              <h2 className="font-semibold text-md">
                Apakah Ada biaya antar-jemput?
              </h2>
              <div className={`mt-2 ${accordionState.item4 ? 'block' : 'hidden'}`}>
                <div className="">Placeholder content for this , which is intended to demonstrate the <code>.-flush</code> className. This is the third item's  body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
              </div>
            </div>

            {/* Accordion Item 5 */}
            <div className="border rounded-lg px-6 py-3 my-2 cursor-pointer" onClick={() => toggleAccordion('item5')}>
              <h2 className="font-semibold text-md">
                Bagaimana jika terjadi kecelakaan
              </h2>
              <div className={`mt-2 ${accordionState.item5 ? 'block' : 'hidden'}`}>
                <div className="">
                    Placeholder content for this , which is intended to demonstrate the <code>.accordion-flush</code> className. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
