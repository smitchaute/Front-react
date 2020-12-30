import React from "react";
import PropTypes from 'prop-types';

//import Admin from "../../layouts/Admin";
// react plugin for creating charts
// @material-ui/core
import { makeStyles, withStyles } from "@material-ui/core/styles";
// core components
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import Table from "../../components/Table/Table.js";
import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardBody from "../../components/Card/CardBody.js";
//import styles from "../../assets/jss/material-dashboard-react/views/dashboardStyle.js";


const useStyles = makeStyles(theme => ({
  cardCategoryWhite: {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0",
  },
  cardTitleWhite: {
      color: "#FFFFFF",
      marginTop: "0px",
      minHeight: "auto",
      fontWeight: "300",
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      marginBottom: "3px",
      textDecoration: "none",
  },
}));


class Dashboard extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
        todoList: [],
        activeItem: {
            id: null,
            name: '',
            email: '',
            phoneno: '',
            message: '',
            completed: false,
        },
        editing: false,
        table: []
    };
    this.fetchTasks = this.fetchTasks.bind(this);
    //this.handleChange = this.handleChange.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);
    //this.getCookie = this.getCookie.bind(this);
  }
  componentWillMount(){
    this.fetchTasks()
  }
  fetchTasks(){
    console.log('Fetching....')

    fetch('https://interior-react.herokuapp.com/interior/')
    .then(Response => Response.json())
    .then(data => {
      console.log(data)
      for(let d of data ){
        let arr = []
        arr.push(d["id"])
        arr.push(d["name"])
        arr.push(d["email"])
        arr.push(d["phoneno"])
        arr.push(d["message"])
        let newState = this.state.table
        newState.push(arr)
        this.setState({table:newState})
      }
    }
        
        )
  }

  render(){
    const {classes} = this.props;
    return(
      <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="warning">
              <h4 className={classes.cardTitleWhite}>Feedback</h4>
              <p className={classes.cardCategoryWhite}>
                Response from visited Users
              </p>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="warning"
                tableHead={["ID", "Name","Email","Phone Number","Message"]}
                tableData={this.state.table}
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
    )
  }
}

    Dashboard.propTypes = {
      classes: PropTypes.object.isRequired,
    };
export default withStyles(useStyles)(Dashboard);
