import React from 'react'
import { Chart as Chartjs ,defaults} from "chart.js/auto";
import { Bar , Line , Doughnut, Bubble} from "react-chartjs-2";
import revenueData from "./data/revenueData.json"
import './App.css';
import sourcedata from "./data/sourcedata.json"

defaults.maintainAspectRatio= false;
defaults.responsive=  true;

defaults.plugins.title.display=true;
defaults.plugins.title.align="start";
defaults.plugins.title.font.size=20;
defaults.plugins.title.color="black";

function App() {
  return (
    <div className="App">
      <div className="dataCard revenueCard">
      
      <Line 
        data={{
          labels  : revenueData.map((data)=> data.label),      //x axis
          datasets:[             
            {
              label:"Revenue",             
              data : revenueData.map((data)=> data.revenue),    // y axis
              backgroundColor: "#064FF0",
              borderColor: "#064FF0"
            },
            { 
              label:"Cost",  
              data : revenueData.map((data)=> data.cost),  
              backgroundColor: "#FF3030",
              borderColor: "#FF3030"
            },
           
          ]
        }}


        options={{
          elements:{
            line:{
              tension:0.5
            },
      },
          plugins:{
            title:{
              text:"Line Chart"
            }
          }
        }}
        
        />

       
        
        </div>
      <div className="dataCard customerCard">
      
      <Doughnut 
        data={{
          labels  : sourcedata.map((data)=> data.label),   
          datasets:[             
            {
              label:"Count",
              data : sourcedata.map((data)=> data.value),  
              backgroundColor: [ 
               'rgba(450, 34, 29 , 0.8)',   
               'rgba(51, 620, 42, 0.8)'   ,  
               'rgba(4, 13, 190, 1)'     ],
               borderColor: [ 
                'rgba(45, 34, 29 , 0.8)',   
                'rgba(51, 62, 42, 0.8)'   ,  
                'rgba(4, 13 19, 1)'     ],
            },
           
          ]
        }}

        options={{
          plugins:{
            title:{
              text:"Doughnut Chart"
            }
          }
        }}
        
        />
      </div>
      <div className="dataCard categoryCard">
     
        <Bar 
        data={{
          labels  : sourcedata.map((data)=> data.label),   
          datasets:[             
            {
              label:"Count",
              data : sourcedata.map((data)=> data.value),  
              backgroundColor: [ 
               'rgba(500, 3, 45 , 0.8)',   
               'rgba(11, 7, 300, 0.8)'   ,  
               'rgba(420, 19 ,700, 0.8)'     ],
               borderRadius:5,
            },
           
          ]
        }}

        options={{
          plugins:{
            title:{
              text:"Bar Chart"
            }
          }
        }}
        
        />




      </div>
      </div>
        
  );
}

export default App;
