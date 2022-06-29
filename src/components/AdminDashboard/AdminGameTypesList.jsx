import React, { useEffect, useState } from 'react'
import { Accordion } from 'react-bootstrap';

const AdminGameTypesList = (props) => {

  const [adaptiveGameTypeContent, setAdaptiveGameTypeContent] = useState();
  
  const noGametypeYetLine = (
    <Accordion.Item eventKey="0" className='game-types-list-item'>
      <Accordion.Header className='game-types-list-header'>Game Types still loading</Accordion.Header>
      <Accordion.Body className='game-types-list-body'>
        ... Games types loading...
      </Accordion.Body>
    </Accordion.Item>
  );

  const myGameTypeLines = props.gametypesindex.map((gt, gt_index) => {  
    return(
      <Accordion.Item eventKey={gt_index} key={'gt_acc_item_'+gt.id} className='game-types-list-item'>
        <Accordion.Header key={'gt_acc_header_'+gt.id} className='game-types-list-header'>{gt.id}. {gt.game_type_title}</Accordion.Header>
        <Accordion.Body key={'gt_acc_body_'+gt.id} className='game-types-list-body'>
          {gt.game_type_descr}
        </Accordion.Body>
      </Accordion.Item>
    );
  }); 
   
  useEffect(() => {
    props.gametypesindex ? setAdaptiveGameTypeContent(myGameTypeLines) : setAdaptiveGameTypeContent(noGametypeYetLine);
  }, [props.gametypesindex]);

    return (
      <section className='game-types-list-container'>
        <Accordion defaultActiveKey="0" className='game-types-list-accordion'>
          {adaptiveGameTypeContent}
        </Accordion>
      </section>
    );
}

export default AdminGameTypesList;