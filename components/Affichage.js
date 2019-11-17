import React from 'react';




const Affichage = props => {
    const { data} = props;
    
    return(
       
            <div>
            <ul>
                    <li> {data.node.id}</li>
                    <li> {data.node.firstName} {data.node.lastName}</li>
                    <li> {data.node.email}</li>
                    <li> {data.node.phone}</li>
                </ul>
            </div>
          
        
    
    );
};

export default Affichage;