import React from 'react';
import { Accordion } from 'react-bootstrap';

const AdminGameTypesList = (props) => {

  const [adaptiveGameTypeContent, setAdaptiveGameTypeContent] = useState();
  
  const noGametypeYetLine = (
    <tr>
      <td colSpan={11}>-- No registered user yet --</td>
    </tr>
  );

  const myGameTypeLines = props.gametypesindex.map((gt, gt_index) => {  
    return(
      <Accordion.Item eventKey={gt_index}>
          <Accordion.Header>{gt.id} {gt.game_type_title}</Accordion.Header>
          <Accordion.Body>
            {gt.game_type_descr}
          </Accordion.Body>
        </Accordion.Item>
    );
  }); 
   
  useEffect(() => {
    props.usersindex ? setAdaptiveGameTypeContent(myGameTypeLines) : setAdaptiveGameTypeContent(noGametypeYetLine);
  }, [props.gametypesindex]);

    return (
      <Accordion defaultActiveKey="0">
        {}
      </Accordion>
    );
}

export default AdminGameTypesList;