import React from "react"

const WrapperOne = () => {
  const data = [
    {
      num: "500",
      text: "Test Done",
    },
    {
      num: "999",
      text: "Specialists",
    },
    {
      num: "3325",
      text: "Helped",
    },
    {
      num: "54380",
      text: " Genomes ",
    },
  ]
  return (
    <>
      <section className='Branding wrapperOne'>
        <div className='container grid1'>
          {data.map((value) => {
            return (
              <div className='box'>
                <h1>{value.num}</h1>
                <p>{value.text}</p>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default WrapperOne
