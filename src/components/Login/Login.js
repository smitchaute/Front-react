import {React, Redirect, Component} from "react";
import {withRouter} from "react-router-dom"
import PropTypes from 'prop-types';
import axios from "axios";
import { withStyles } from '@material-ui/styles';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
//mport InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "../../components/Grid/GridItem.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import CustomInput from "../../components/CustomInput/CustomInput.js";
import Button from "../../components/CustomButtons/Button.js";
import Card from "../../components/Card/logincard.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardBody from "../../components/Card/CardBody.js";
import CardFooter from "../../components/Card/CardFooter.js";

//import avatar from "../../assets/img/faces/marc.jpg";
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


// const useStyles = makeStyles(styles);
class Login extends Component{
    constructor() {
        super();
        localStorage.removeItem("username");
        localStorage.removeItem("password");
        this.state = {
            data: [],
            redirect: "",
            username: "",
            password: "",
            errormsg: "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        var th = this;
        this.serverRequest = axios
            .get("https://interior-react.herokuapp.com/login/")
            .then(function (res) {
                th.setState({
                    data: res.data,
                });
            });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        ////////////Comparision for valid email ID////////////////
        this.state.data.map((user) => {
            if (
                user.username === this.state.username &&
                user.password === this.state.password
            ) {
                localStorage.setItem("username", this.state.username);
                localStorage.setItem("password", user.password);        
                this.props.history.push("/admin/Dashboard")
                // this.setState({
                
                // });
            } 
        });
    };

    handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;

        this.setState({
            [name]: value,
        });

        console.log(name,value);
        console.log(this.state);
    }


    render(){
        const {classes} = this.props;
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />;
        }
        return(
            <div>
                <form  onSubmit={this.handleSubmit}>
                <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                    <Card>
                        <CardHeader color="primary">
                            <h4 className={classes.cardTitleWhite}>
                                Login
                            </h4>
                            {/* <p className={classes.cardCategoryWhite}>
                                Complete your profile
                            </p> */}
                        </CardHeader>
                        <CardBody>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={12}>
                                    <CustomInput
                                        onChange={this.handleChange}
                                        labelText="Username"
                                        id="username"
                                        name="username"
                                        formControlProps={{
                                            fullWidth: true,
                                        }}
                                    />
                                </GridItem>
                            </GridContainer>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={12}>
                                    <CustomInput
                                        onChange={this.handleChange}
                                        labelText="Password"
                                        id="password"
                                        name="password"
                                        formControlProps={{
                                            fullWidth: true,
                                        }}
                                    />
                                </GridItem>
                            </GridContainer>
                        </CardBody>
                        <CardFooter>
                            <Button color="primary" value="Login">Login</Button>
                            {this.state.errormsg}
                        </CardFooter>
                    </Card>
                </GridItem>
                
            </GridContainer>
                </form>
            
        </div>
        )
    }
}
    Login.propTypes = {
        classes: PropTypes.object.isRequired,
    };
export default withStyles(useStyles)(withRouter(Login));