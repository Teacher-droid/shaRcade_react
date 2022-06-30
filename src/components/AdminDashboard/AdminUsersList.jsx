import React, {useState, useEffect} from 'react';
import Table from 'react-bootstrap/Table';
import { FaUserCheck, FaUserEdit, FaUserSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AdminUsersList = (props) => {

  const [adaptiveUserTableContent, setAdaptiveUserTableContent] = useState();
  
  const noUserYetLine = (
    <tr>
      <td colSpan={11}>-- No registered user yet --</td>
    </tr>
  );

  const myUsersLines = props.usersindex.map(my_user => {  
    return(
      <tr key={"admindb-user-line"+my_user.id}>
        <td key={"admindb-user-line"+my_user.id+"col-id"}>{my_user.id}</td>
        <td key={"admindb-user-line"+my_user.id+"col-role"}>{my_user.role}</td>
        <td key={"admindb-user-line"+my_user.id+"col-firstname"}>{my_user.firstname}</td>
        <td key={"admindb-user-line"+my_user.id+"col-lastname"}>{my_user.lastname}</td>
        <td key={"admindb-user-line"+my_user.id+"col-nickname"}>{my_user.nickname}</td>
        <td key={"admindb-user-line"+my_user.id+"col-birthdate"}>{my_user.birthdate}</td>
        <td key={"admindb-user-line"+my_user.id+"col-gender"}>{my_user.gender}</td>
        <td key={"admindb-user-line"+my_user.id+"col-email"}><a href={`mailto:${my_user.email}?subject=[ShaRcade] Message from your beloved admin`}>{my_user.email}</a></td>
        <td key={"admindb-user-line"+my_user.id+"col-show"}><Link to={"/usershow/"+my_user.id}><FaUserCheck/></Link></td>
        <td key={"admindb-user-line"+my_user.id+"col-update"}><Link to={"/userupdate/"+my_user.id}><FaUserEdit/></Link></td>
        <td key={"admindb-user-line"+my_user.id+"col-delete"}><Link to={"/userdelete/"+my_user.id}><FaUserSlash/></Link></td>
      </tr>
    );
  }); 
   
  useEffect(() => {
    props.usersindex ? setAdaptiveUserTableContent(myUsersLines) : setAdaptiveUserTableContent(noUserYetLine);
  }, [props.usersindex]);

  return (
    <section className='users-list-container'>
      <Table striped bordered hover variant="dark" size="sm" className='users-list-table'>
        <thead>
          <tr>
            <th>#</th>
            <th>ROLE</th>
            <th>FIRST NAME</th>
            <th>LAST NAME</th>
            <th>NICKNAME</th>
            <th>BIRTHDATE</th>
            <th>GENDER</th>
            <th>E-MAIL</th>
            <th colSpan={3}>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {adaptiveUserTableContent}
        </tbody>
      </Table>
    </section>
  );
}

export default AdminUsersList;