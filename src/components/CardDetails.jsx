import React from 'react'


const CardDetails = () => {
  return (
    <div className='w-3/4 border-2 rounded-md mt-10 mb-20 py-10 shadow-md m-auto h-auto justify-center text-left'>
        <h1 className='font-semibold text-2xl mx-16'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, molestias?</h1>
        <iframe className='m-auto mt-5 mb-5 rounded-xl shadow-lg' width="1080" height="550" src="https://www.youtube.com/embed/hkttoqnZJ2w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
       

        <p className='mt-2 mx-16 font-Proxima'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse eaque repellendus adipisci magnam possimus libero quam quaerat! Enim provident temporibus dolore eligendi accusantium animi ad dolores officia voluptate, consequuntur autem, deleniti, saepe expedita? Voluptate vel neque iusto rerum beatae ipsam nulla dolore debitis et unde consequatur fugit sed iste suscipit expedita aspernatur placeat, quis repellat aperiam deleniti? Necessitatibus, dolore magnam. Quasi necessitatibus reiciendis ut quibusdam provident magni vitae, placeat accusantium commodi in laboriosam repellat corrupti doloremque quidem velit adipisci ipsum praesentium, maxime eum tempore totam amet? Doloremque sed error ab provident quaerat aut, explicabo sapiente ducimus perspiciatis soluta sequi incidunt.</p>
        
      <div className='mx-10 border-2 border-l-4 border-green-500 bg-green-100 rounded-md mt-10 p-10 h-auto shadow-md m-auto'>
          <h1 className='py-2 font-bold font-Proxima' >Hint:</h1>
          <p>
           
           First declear two valiable 
           and assign value
           make sum like this.
           
          </p>
      </div>

      <div className=' mx-10 rounded mt-10 p-4 px-6 bg-black text-white m-auto h-auto justify-center text-left'>
        <pre>
          <code>
            var a = 10; {"\n"}
            var b = 20; {"\n"}
            var sum = a + b;{"\n"}
            console.log(sum);{"\n"}
          </code>
        </pre>
      </div>

    </div>
  )
}

export default CardDetails