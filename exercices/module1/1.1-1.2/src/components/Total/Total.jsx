import '../../App.css';

const Total = ({exercice1, exercice2, exercice3}) => {
     
    return (
        <p>
            Number of exercises {exercice1+exercice2+exercice3}
        </p>
      )
}


export default Total