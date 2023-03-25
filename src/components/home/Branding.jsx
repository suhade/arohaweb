import React from "react"

const Branding = () => {
  const data = [
    {
      id: "01",
      heading: "Book Test",
      desc: "Book a DNA test through easy-to-use digital tools.",
    },
    {
      id: "02",
      heading: "Specimen Collection",
      desc: "You will be connected with a Specialist and Collect specimens.",
    },
    {
      id: "03",
      heading: "Instance Result",
      desc: "Get your result in our Portal anywhere anytime.",
    },
  ]
  return (
    <>
      <section className='Branding'>
        <div className='container grid'>
          {data.map((value) => {
            return (
              <div className='box flex'>
                <div className='text'>
                  <h1>{value.id}</h1>
                </div>
                <div className='para'>
                  <h2>{value.heading}</h2>
                  <p>{value.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Branding
