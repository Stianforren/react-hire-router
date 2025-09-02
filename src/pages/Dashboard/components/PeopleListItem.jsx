import { Link } from "react-router-dom"
function PeopleListItem(props) {
  const { person } = props

  return (
    <article className="user_profile">
    <li>
      <h3 className="profile_name">
        <Link to={`view/${person.login.uuid}`}> {person.name.first} {person.name.last}</Link>
      </h3>
      {person.wage && <p>Wage: £{person.wage}</p>}
      
    </li>
    </article>
  )
}

export default PeopleListItem
