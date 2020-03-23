import React, { Component, Fragment } from 'react';
import { injectIntl } from 'react-intl';
import {
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

const SignupSchema = Yup.object().shape({
    checkboxCustomSingle: Yup.bool().oneOf([true], "Must agree to something")
});


class StepTwoDashboard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { messages } = this.props.intl;
        return (
            <Fragment>
                <Row>
                </Row>
            </Fragment>
        );
    }
}



export default injectIntl(StepTwoDashboard);
