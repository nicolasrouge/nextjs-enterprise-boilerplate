export function PillarsOfPoo() {
     const pillars = [
          { name: 'Abstraction' },
          { name: 'Encapsulation' },
          { name: 'Inheritance' },
          { name: 'Polymorphism' },
     ];

     return (
          <div className='p-4'>
               <h1 className='text-lg font-bold mb-4'>The 4 Pillars of OOP</h1>
               <div className='flex flex-wrap -m-2'>
                    {pillars.map((pillar, index) => (
                         <div key={index} className='p-2 w-full sm:w-1/2 md:w-1/4'>
                              <div className='flex rounded-lg h-full bg-blue-100 p-4 flex-col'>
                                   <div className='flex items-center mb-3'>
                                        <h2 className='text-gray-900 text-lg title-font font-medium'>{pillar.name}</h2>
                                   </div>
                                   <div className='flex-grow'>
                                   </div>
                              </div>
                         </div>
                    ))}
               </div>
          </div>
     );
}

export default PillarsOfPoo;
