//rfce
import React, { useEffect } from 'react'
function MoviesTable() {
  const [isLoaded, setLoaded]= React.useState(true);
  const [content,setContent] = React.useState("");
  // if we pass functon ans bracket in useEffect the it will run once after statement is executed 
  useEffect( async function (){
  let responce = await fetch('https://react-backend101.herokuapp.com/movies');
    responce = await responce.json();
      setLoaded(false);   
      setContent(responce);     
 
  },[])
  return (
    <div>{isLoaded == true ? <div className='font-bold'>
      Loading...</div> : 
      <table className='table-auto'>
     <thead>
     <tr>
            <th className="px-2">#</th>
            <th className="px-2"> Title</th>
            <th className="px-2">Genre</th>
            <th className="px-2">Stock</th>
            <th className="px-2">Rate</th>
       <th></th>
     </tr>
     </thead>
     <tbody>
     
         {
           content.movies.map(function (movie,idx){
             return   <tr>
             <td className="px-2 text-center">{idx+1}</td>
             <td className="px-2 text-center">{movie.title}</td>
             <td className="px-2 text-center">{movie.genre.name}</td>
             <td className="px-2 text-center">{movie.numberInStock}</td>
             <td className="px-2 text-center">{movie.dailyRentalRate}</td>
             <td><button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>Delete</button></td>
           </tr>
           })}
     </tbody>
      </table>}
       </div>
  )
}

export default MoviesTable