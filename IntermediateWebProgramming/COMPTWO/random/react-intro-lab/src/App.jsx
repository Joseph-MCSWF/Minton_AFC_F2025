import UserCard from "./components/UserCard.jsx";
import CardContainer from "./components/CardContainer.jsx";

function App() {
    const people = [
        {name: "Joe", age: 25},
        {name: "Cody", age: 33},
        {name: "Dennis", age: 22},
    ];

    const sortByAgeAsec = (arr) => {
        return arr.sort((a,b) => a.age - b.age);
    }

    const sortedPeople = sortByAgeAsec(people);


    return (
      <CardContainer>
          {sortedPeople.map((person,index) => (
              <UserCard key={index} name={person.name} age={person.age} />
          ))}
      </CardContainer>
  )
}

export default App
