import React, { Component } from "react";
import "./App.css";
import Card from "./Components/Card";
import Navbar from "./Components/Navbar";
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from "victory";
import image from "./Components/background.jpeg";

const links = [
  "https://www.healthcare.gov/get-coverage/",
  "https://www.cdc.gov/tobacco/quit_smoking/index.htm",
  "https://www.alcoholrehabguide.org/alcohol/binge-drinking/",
  "https://www.niddk.nih.gov/health-information/weight-management/adult-overweight-obesity/treatment#plan",
  "https://www.mountsinai.org/health-library/special-topic/colon-cancer-screening",
  "https://www.cvs.com/minuteclinic/services/flu-shots/in-person-visit"
];
const data2010 = [{ year: 1, percenatge: 16.7 }];
const data2011 = [{ year: 2, percenatge: 18.6 }];
const data2012 = [{ year: 3, percenatge: 19.8 }];
const data2013 = [{ year: 4, percenatge: 20.9 }];
const data2014 = [{ year: 5, percenatge: 13.8 }];
const data2015 = [{ year: 6, percenatge: 12.6 }];
const data2016 = [{ year: 7, percenatge: 10.9 }];
const data2017 = [{ year: 8, percenatge: 11.8 }];
const data2018 = [{ year: 9, percenatge: 11.6 }];
const data2019 = [{ year: 10, percenatge: 12.7 }];
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount = () => {
    fetch(
      "https://data.cityofnewyork.us/resource/csut-3wpr.json?$$app_token=2y6eroq5UDtsqbdRlo8SOA9rt"
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({ data: data });
        console.log(this.state.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  render() {
    return (
      <div className="App">
        <Navbar />
        <h1>Health</h1>
        <img src={image} />
        {/* <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card /> */}
        <div className="flexbox">
          {this.state.data.map((item, index) => (
            <Card className="card" data={item} links={links[index]} />
          ))}
        </div>

        <VictoryChart domainPadding={3} theme={VictoryTheme.material}>
          <VictoryAxis dependentAxis tickFormat={(x) => `${x}%`} />
          <VictoryAxis
            tickValues={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
            tickFormat={[
              "2010",
              "2011",
              "2012",
              "2013",
              "2014",
              "2015",
              "2016",
              "2017",
              "2018",
              "2019"
            ]}
          />
          <VictoryBar data={data2010} x="year" y="percenatge" />
          <VictoryBar data={data2011} x="year" y="percenatge" />
          <VictoryBar data={data2012} x="year" y="percenatge" />
          <VictoryBar data={data2013} x="year" y="percenatge" />
          <VictoryBar data={data2014} x="year" y="percenatge" />
          <VictoryBar data={data2015} x="year" y="percenatge" />
          <VictoryBar data={data2016} x="year" y="percenatge" />
          <VictoryBar data={data2017} x="year" y="percenatge" />
          <VictoryBar data={data2018} x="year" y="percenatge" />
          <VictoryBar data={data2019} x="year" y="percenatge" />
        </VictoryChart>
      </div>
    );
  }
}

export default App;
