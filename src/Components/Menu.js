import  React  from 'react';
import {Nav,
      INavLinkGroup,
      INavStyles    } from "office-ui-fabric-react";
import { initializeIcons } from '@uifabric/icons';
    

const navStyles: INavStyles = {
    root: {
      width: 230,
      color: 'green'
    },
    linkText: {},
    link: {},
    compositeLink: {},
    chevronButton: {},
    chevronIcon: {},
    navItems: {},
    navItem: {},
    group: {},
    groupContent: {}
  };



const navLinkGroups: INavLinkGroup[] = [
    {
      name: 'Liquidity Risk',
      iconProps :'ChevronRight',
      expandAriaLabel: 'Expand Extended components section',
      collapseAriaLabel: 'Collapse Extended components section',
      links: [
        {
          key: 'StructuralLiquidity',
          name: 'Structural Liquidity',
          url: '',
        },
        {
          key: 'StructuralLiquidityReport2' ,
          name: 'Structural Liquidity Report 2',
          url: '',
        },
        {
          key: 'GraphicalAnalysis',
          name: 'GraphicalAnalysis',
          url: '',
        },
        {
            key: 'LiquidityRiskSummary',
            name: 'Liquidity Risk Summary',
            url: '',
        },
      ],
    },
    {
      name: 'InterestRateRisk',
      links: [
        {
          key: '',
          name: '',
          url: '',
        },
        {
          key: '',
          name: '',
          url: '',
        },
        {
          key: '',
          name: '',
          url: '',
        },
      ],
    },
    {
      name: 'Analytics',
      links: [
        {
          key: '',
          name: '',
          url: '',
        },
        {
          key: '',
          name: '',
          url: '',
        },
        {
          key: '',
          name: '',
          url: '',
        },
      ],
    },
    {
        name: 'Parameter',
        links: [
          {
            key: '',
            name: '',
            url: '',
          },
          {
            key: '',
            name: '',
            url: '',
          },
          {
            key: '',
            name: '',
            url: '',
          },
        ],
      }
  ];


  
  const Menu = () => {
    initializeIcons();
      return (
          <Nav groups={navLinkGroups} styles={navStyles} />
      )
  }
  
  export default Menu
  