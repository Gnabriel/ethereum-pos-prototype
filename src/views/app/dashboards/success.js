import React, { Component, Fragment } from 'react';
import { injectIntl } from 'react-intl';
import {
    Alert,
    Button,
    Card,
    CardBody,
    CardTitle, CustomInput, FormGroup, Input,
    InputGroup,
    InputGroupAddon, Label,
    Pagination,
    PaginationItem,
    PaginationLink,
    Row
} from 'reactstrap';
import { Colxx, Separator } from '../../../components/common/CustomBootstrap';
import IntlMessages from "../../../helpers/IntlMessages";
import CardText from "reactstrap/es/CardText";
import {Form, Formik} from "formik";
import {FormikCustomCheckbox} from "../../../containers/form-validations/FormikFields";
import * as Yup from "yup";
import { iconsmind, simplelineicons } from "../../../data/icons";
import Congratulations from "../img/congratulations.png"




class SuccessDashboard extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        const { messages } = this.props.intl;
        return (
            <Fragment>

                {/* Header */}
                <Row>
                    <Colxx xxs="12">
                        <h2>
                            Success
                        </h2>
                        <Separator className="mb-5"/>
                    </Colxx>
                </Row>

                <Card>
                    <CardBody>
                        <div className="div-centered">
                            <img src={Congratulations} alt="Congratulations"/>
                        </div>
                    </CardBody>
                </Card>

                <Card style={{marginTop: 50}}>
                    <CardBody>
                        <h2>Du kan nu avsluta skärminspelningen. Tack för ditt deltagande!</h2>
                    </CardBody>
                </Card>

            </Fragment>
        );
    }
}


export default injectIntl(SuccessDashboard);
