
  

  const person = {
 name: 'Gregorio Y. Zara',
theme: {
  backgroundColor: 'black',
  color: 'pink'
} 
  }
  
function Avatar() {
  return (
    <section>
   
    <div style={person.theme}>
      <h1>{person.name}'s Todos</h1>
      <img
        className="avatar"
        src="https://i.imgur.com/7vQD0fPs.jpg"
     
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
    </section>
  )
}
export default Avatar;