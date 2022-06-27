import React, {useState, useEffect} from 'react';
import Table from 'react-bootstrap/Table';
import { FaUserCheck, FaUserEdit, FaUserSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AdminUsersList = (props) => {

  const [adaptiveUserTableContent, setAdaptiveUserTableContent] = useState();
  
  useEffect(() => {

    const noUserYetLine = (
      <tr>
        <td colSpan={11}>No registered user yet</td>
      </tr>
    );
  
    const myUsersLines = props.usersindex.forEach(my_user => {  
      <tr key={"admindb-user-line"+my_user.id}>
        <td key={"admindb-user-line"+my_user.id+"col-id"}>{my_user.id}</td>
        <td key={"admindb-user-line"+my_user.id+"col-role"}>{my_user.role}</td>
        <td key={"admindb-user-line"+my_user.id+"col-firstname"}>{my_user.firstname}</td>
        <td key={"admindb-user-line"+my_user.id+"col-lastname"}>{my_user.lastname}</td>
        <td key={"admindb-user-line"+my_user.id+"col-nickname"}>{my_user.nickname}</td>
        <td key={"admindb-user-line"+my_user.id+"col-birthdate"}>{my_user.birthdate}</td>
        <td key={"admindb-user-line"+my_user.id+"col-gender"}>{my_user.gender}</td>
        <td key={"admindb-user-line"+my_user.id+"col-email"}><a href={`mailto:${my_user.email}?subject='Message from ShaRcade admin`}>{my_user.email}</a></td>
        <td key={"admindb-user-line"+my_user.id+"col-show"}><Link to={"/usershow/"+my_user.id}><FaUserCheck/></Link></td>
        <td key={"admindb-user-line"+my_user.id+"col-update"}><Link to={"/userupdate/"+my_user.id}><FaUserEdit/></Link></td>
        <td key={"admindb-user-line"+my_user.id+"col-delete"}><Link to={"/userdelete/"+my_user.id}><FaUserSlash/></Link></td>
      </tr>
    });  

    props.users ? setAdaptiveUserTableContent(myUsersLines) : setAdaptiveUserTableContent(noUserYetLine);
  }, [props]);

  return (
    <div className='users-list-container'>
      <Table striped bordered hover variant="dark" size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Role</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Nickname</th>
            <th>Birthdate</th>
            <th>Gender</th>
            <th>E-mail</th>
            <th colSpan={3}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {adaptiveUserTableContent}
        </tbody>
      </Table>
    </div>
  );
}

export default AdminUsersList;