import React from 'react'
import {Card} from '@uifabric/react-cards';
import { Stack ,Text} from '@fluentui/react';
import {  Persona, PersonaSize } from 'office-ui-fabric-react/lib/Persona';


const AccountDetailsCard = () => {
    
  const stackStyle = {
    root: {
      borderBottom: "1px solid #EEEEEE",
      paddingBottom: "12px"
    }
  };
    



      

      


    return (
        <div  >
         <Card  >
         <Stack
         horizontalAlign="center"
         
       >
       <Text>Current Login</Text>
       <Text> 23-Oct-2020 11:35:23AM</Text>
       </Stack>
       <Stack horizontalAlign="center">
       <Text>Current Login</Text>
       <Text> 23-Oct-2020 11:35:23AM</Text>
       </Stack>
           
         
           
        </Card>
        </div>

    );
}

export default AccountDetailsCard


