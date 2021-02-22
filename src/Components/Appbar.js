import { CommandBar } from '@fluentui/react';
import React ,{useState} from 'react';
import {lightTheme,darkTheme} from './Theme';
import {Card} from '@uifabric/react-cards';
import Menu from './Menu';
import { initializeIcons } from '@uifabric/icons';
import { ThemeProvider } from '@fluentui/react-theme-provider';
import {ICommandBarItemProps,
     IIconStyles,
     Stack,
     IButtonStyles,
     ICommandBarStyles,
     Toggle,
     IconButton,
    TextField,
    IStackStyles,
    ITextFieldStyles,
        } from "office-ui-fabric-react";





const Appbar = (props) => {

  const[icon ,SetIcon] = useState(false);
  const[useDarkMode, setUseDarkMode] = useState(false);

 // const iconPressed = () =>{
 //    SetIcon(!icon)
 // };

 const MenuStyle={
   color:'white',
   backgroundColor:'White'
 }

  const textStyle={
    padding:'10px',
    fontSize:'10px'
}
const rightCard={
    position:'absolute',
    top:'60px',
    right:'60px'
}

const cardTokens={
    border: "2px solid red",
    maxWidth:"250px"
}

    
  const searchBarStackStyles: IStackStyles = {
    root: {
      borderBottom: "2px solid #EAEAEA",
      height: 60,
      margin: "0px 8px"
    }
  };

  const searchBarTextFieldStyles:ITextFieldStyles ={
   width:200,
   input:'200%',
   fieldGroup: { border: "none" },
   field: {
    fontSize: 13.3333,
    padding: 0
  }
  }
  


    const commandBarMenuIconStyles: IButtonStyles = {
        root: {
          backgroundColor: "#124078",
          width: 50
        },
        rootHovered: {
          backgroundColor: "#124078"
        },
        rootPressed: {
          backgroundColor: "#124078"
        }
      };

    const outerCommandBarStyles: ICommandBarStyles = {
        root: {
          backgroundColor: "#124078",
          height: 60,
          padding: 0
        }
      };

    const commandBarIconButtonStyles: IButtonStyles = {
        root: {
          
          backgroundColor: "#124078",
          width: 40,
          padding:0
        },
        rootHovered: {
          backgroundColor: "#124078"
        },
        rootPressed: {
          backgroundColor: "#124078"
        }
      };
    
    const commandBarIconButtonIconStyles: IIconStyles = {
        root: {
          color: "white"
        }
      };


     const outerCommandBarItems:ICommandBarItemProps[]=[
         {
             key:'MenuIcon',
             iconOnly:true,
             iconProps:{
                 iconName:'GlobalNavButton',
                 style: commandBarIconButtonIconStyles
             },
             buttonStyles: commandBarMenuIconStyles
         },
         {
             key:'Balm',
             name:'BALM',
             buttonStyles:{
                root:{
                 backgroundColor:'#124078',
                 fontSize:22,
                 marginLeft:20,
                 padding:0
                },
               rootHovered:{
                   backgroundColor:'#124078'
               },
               rootPressed:{
                   backgroundColor:'#124078'
               },
               label:{
                   color:'white',
                   margin:0
               }
             }
         },
        
     ]

     const outerCommandBarFarItems:ICommandBarItemProps[]=[
         {
             key:'toggle',
             ariaLabel:'Toggle',
             commandBarButtonAs:ToggleButtonCommandBarComponent
            
         },
         {
            key: "info",
            iconOnly: true,
            iconProps: {
              iconName: "Info",
              styles: commandBarIconButtonIconStyles

            },
            buttonStyles: commandBarIconButtonStyles,
           onClick: () =>{
              SetIcon(!icon)
            
            }

            

            

            
          },
          {
            key: "account",
            iconOnly: true,
            iconProps: {
              iconName: "Contact",
              styles: commandBarIconButtonIconStyles
            },
            buttonStyles: commandBarIconButtonStyles
          }
          
     ]
        


     initializeIcons();
       
   
     

      function ToggleButtonCommandBarComponent(){
        
        const ToggleButtonStyle={
           paddingTop:20
        }
          


          return(
            <ThemeProvider applyTo="body" theme={useDarkMode? darkTheme: lightTheme} >
              <div style={ToggleButtonStyle}>
                <Toggle  onChange={() => setUseDarkMode(!useDarkMode)}/>
              </div>
             
            </ThemeProvider>
          );
      };
  
    
    return (
        
        <div>
        
          <Stack>
              <CommandBar 
                items={outerCommandBarItems} 
                farItems={outerCommandBarFarItems}
                styles={outerCommandBarStyles}
              />
              <Stack horizontal>
               <Stack.Item>
                <Stack >
                  <Stack horizontal 
                     verticalAlign="center"
                    styles={searchBarStackStyles}
                   >
                   <TextField
              placeholder="Search Menu"
              styles={searchBarTextFieldStyles}
              
            />
                   <IconButton
                iconProps={{ iconName: "Search" }}
               
              />
             </Stack>
             <Menu styles={MenuStyle} />

            </Stack>
               
           </Stack.Item>
              
              
              
              </Stack>
          </Stack>
           
            

            {
              (()=>{
                 if(icon){
                  return(

                  <div style={rightCard} >
                  <Card  tokens={cardTokens}>
                   <Card.Section>
                   <Card.Item style={textStyle}>
                <text >
                <pre><h2>BALM</h2>
                    <p>version:3.6.3</p>
                    <p>Copyright:&copy;</p>
                    <p>2020 Surya Soft Systems PVT LTD. </p>
                    <p>Support mail balmsupport@surya-soft.com</p>
                </pre>
                </text>
                </Card.Item>
             </Card.Section>
             </Card>
            </div>)
                  
                 }
              })()
            }

        
            

        </div>
        
    )
}

export default Appbar
