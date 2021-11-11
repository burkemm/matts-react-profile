import React from 'react';
import Card from './Card';

const canines = [
  {
    name: '5 Day Weather Planner',
    DeployedApp:'https://djenkins88.github.io/Weather-Forecast/',
    Github:'https://github.com/Djenkins88/Weather-Forecast',
    id: 1,
  },
  {
    name: 'Note Taker',
    
    id: 2,
  },
  {
    name: 'Walter',
    description: 'Friend for life',
    id: 3,
  },
  {
    name: 'Walter',
    description: 'Friend for life',
    id: 4,
  },
  {
    name: 'Walter',
    description: 'Friend for life',
    id: 5,
  },
  {
    name: 'Walter',
    description: 'Friend for life',
    id: 6,
  },
];




export default function Portfolio() {
  return (
    <div>
      
        <Card />
      
    </div>
  );
}