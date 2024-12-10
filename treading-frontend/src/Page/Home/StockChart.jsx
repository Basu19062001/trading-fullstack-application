/* eslint-disable no-unused-vars */
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const timeSeries = [
  {
    keyword:"DIGITAL_CURRENCY_DAILY",
    key:"Time Series (Daily)",
    lable:"1 Day",
    value: 1,
  },
  {
    keyword:"DIGITAL_CURRENCY_DAILY",
    key:"Weekly Time Series",
    lable:"1 Week",
    value: 7,
  },
  {
    keyword:"DIGITAL_CURRENCY_DAILY",
    key:"Monthly Time Series",
    lable:"1 Month",
    value: 30,
  },
  // {
  //   keyword:"DIGITAL_CURRENCY_DAILY",
  //   key:"Yearly Time Series",
  //   lable:"1 year",
  //   value: 365,
  // }
];

const StockChart = () => {
  
  const [activeLable,setActiveLable] = useState("1 Day");

  const searies = [
    {
      data: [
        [1731248072496, 79687.47138685943],
        [1731251396125, 79525.63342469053],
        [1731254570940, 79753.65091497928],
        [1731259124704, 79737.65841837798],
        [1731262070260, 80672.70034022776],
        [1731265329113, 80804.32968627992],
        [1731269952878, 79499.77987503516],
        [1731273383636, 78649.59273844388],
        [1731276243680, 79931.957300912],
        [1731279745260, 80600.03416750283],
        [1731284475769, 80525.26287473195],
        [1731287615252, 80435.76087399015],
        [1731291383203, 81464.08366869198],
        [1731294240770, 81475.90641772648],
        [1731298096760, 81674.57955797578],
        [1731302129244, 81535.74228417478],
        [1731305650664, 80938.07137423645],
        [1731308683353, 80948.7190232381],
        [1731312144996, 81191.11578605659],
        [1731316578903, 81539.06022739943],
        [1731320271607, 82174.01489942106],
        [1731323353654, 81980.49339863413],
        [1731326503023, 82245.15914350266],
        [1731331092966, 81780.07940078432],
        [1731334481598, 82180.48935135211],
        [1731338427896, 82964.7712537831],
        [1731341164323, 84088.70443006037],
        [1731345280670, 84678.22798556116],
        [1731348272877, 84688.84419519649],
        [1731352013747, 85653.29541086064],
        [1731355646729, 86497.72438677796],
        [1731359505086, 87116.03613648882],
        [1731363374453, 87446.57204066028],
        [1731366043379, 88117.0604501521],
        [1731370439362, 88102.09667019248],
        [1731373592184, 89050.57290212612],
        [1731377994024, 88677.16665584246],
        [1731381454363, 87908.1096042888],
        [1731384402259, 88190.75886630068],
        [1731388614937, 88526.90126096137],
        [1731392442924, 88464.32598431838],
        [1731395474002, 89256.30393079246],
        [1731398864829, 88995.19935423242],
        [1731403131177, 88406.23216897136],
      ],
    },
  ];

  const options ={
    chart:{
      id:"area-datetime",
      type:"area",
      height:450,
      zoom:{
        autoScaleYaxis:true
      }
    },
    dataLabels:{
      enabled:false
    },
    xaxis:{
      type:"datetime",
      tickAmount:6
    },
    // colors:["#758AA2"],
    markers:{
      colors:["#fff"],
      strokeColor:"#fff",
      size:0,
      strokeWidth:1,
      style:"hollow"
    },
    tooltip:{
      theme:"dark"
    },
    fill:{
      type:"gradient",
      gradient:{
        shadeIntensity:1,
        opacityFrom:0.6,
        opacityTo:0.9,
        stops:[0,100]
      }
    },
    grid:{
      borderColor:"#47535E",
      strokeDashArray:4,
      show:true
    }
  }

  const handleActiveLable=(value)=>{
    setActiveLable(value);
  }

  return(
    <div>

      <div className="space-x-3">
        {
          timeSeries.map(
            (item)=> 
            <Button 
            variant={activeLable==item.lable?"":"outline"}
            onClick={()=>handleActiveLable(item.lable)}
            key={item.lable}
            >
              {item.lable}
            </Button> 
            
          )
        }
      </div>

      <div id="chart-timelines">
        <ReactApexChart
          options={options}
          series={searies}
          type="area"
          height={450}
        />
      </div>
    </div>
  ); 
  
};

export default StockChart;
