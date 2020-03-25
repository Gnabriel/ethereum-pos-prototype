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
import DropzoneExample from "../../../containers/forms/DropzoneExample";
import {Link} from "react-router-dom";
import MinNumber from "../../../containers/form-validations/AvailityCustom";
import { AvForm, AvField, AvGroup } from "availity-reactstrap-validation";

const SignupSchema = Yup.object().shape({
    checkboxCustomSingle1: Yup.bool().oneOf([true], "Must agree to something"),
    checkboxCustomSingle2: Yup.bool().oneOf([true], "Must agree to something"),
    checkboxCustomSingle3: Yup.bool().oneOf([true], "Must agree to something"),
    checkboxCustomSingle4: Yup.bool().oneOf([true], "Must agree to something"),
});


class ConnectDashboard extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event, errors, values) {
        console.log(errors);
        console.log(values);
        if (errors.length === 0) {
            window.location.href='/app/dashboards/summary';
        }
    };

    render() {
        const { messages } = this.props.intl;
        return (
            <Fragment>
                {/* Page Navigation */}
                <Row>
                    <Colxx xxs="12">
                        <Pagination
                            size="sm"
                            aria-label="Page navigation example"
                            listClassName="justify-content-center"
                        >
                            <PaginationItem>
                                <PaginationLink className="prev" href="upload">
                                    <i className="simple-icon-arrow-left"/>
                                </PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="overview">1</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="generate">2</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="upload">3</PaginationLink>
                            </PaginationItem>
                            <PaginationItem active>
                                <PaginationLink href="#">4</PaginationLink>
                            </PaginationItem>
                            <PaginationItem disabled>
                                <PaginationLink href="summary">5</PaginationLink>
                            </PaginationItem>
                            {/*
                            <PaginationItem disabled>
                                <PaginationLink className="next" href="#">
                                    <i className="simple-icon-arrow-right"/>
                                </PaginationLink>
                            </PaginationItem>
                            */}
                        </Pagination>
                    </Colxx>
                </Row>

                {/* Header */}
                <Row>
                    <Colxx xxs="12">
                        <h2>
                            Connect wallet
                        </h2>
                        <Separator className="mb-5"/>
                    </Colxx>
                </Row>

                {/* Connect */}
                <Row className="mb-4">
                    <Colxx xxs="12">
                        <Card>
                            <CardBody>
                                <AvForm
                                    className="av-tooltip tooltip-label-right"
                                    onSubmit={this.handleSubmit}>
                                    {/* Wallet address */}
                                    <Row>
                                        <Colxx>
                                            <CardTitle>
                                                1. Enter receiving wallet address
                                            </CardTitle>
                                            <p>To install Git and Python type the following in the terminal window:</p>
                                            <InputGroup className="mb-3">
                                                <Input/>
                                            </InputGroup>
                                        </Colxx>
                                    </Row>

                                    {/* Amount */}
                                    <Row>
                                        <Colxx>
                                            <CardTitle>
                                                2. Enter amount of Ether
                                            </CardTitle>

                                            <AvGroup className="error-t-negative">
                                                <Label>Bla bla bla lägg in ether.</Label>

                                                <Row>
                                                    <Colxx xs={1}>
                                                        <InputGroupAddon addonType="prepend">ETH</InputGroupAddon>
                                                    </Colxx>

                                                    <Colxx xs={11}>
                                                    <AvField
                                                        name="minPropNumberProp"
                                                        type="text"
                                                        validate={{
                                                            min: { value: 32, errorMessage: "Minimum 32 ETH" },
                                                            required: {
                                                                value: true,
                                                                errorMessage: "Please enter a number"
                                                            }
                                                        }}
                                                    />
                                                    </Colxx>
                                                </Row>
                                            </AvGroup>
                                        </Colxx>
                                    </Row>

                                    {/* Private Key */}
                                    <Row>
                                        <Colxx>
                                            <CardTitle>
                                                3. Enter your private key
                                            </CardTitle>
                                            <p>To install Git and Python type the following in the terminal window:</p>
                                            <InputGroup className="mb-3">
                                                <Input/>
                                            </InputGroup>
                                        </Colxx>
                                    </Row>

                                    {/* Next step button */}
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}>
                                        <Row>
                                            <Colxx>
                                                <Button color="primary"
                                                        size="lg"
                                                        className="mb-2"
                                                        type="submit">
                                                    CONTINUE TO SUMMARY
                                                </Button>
                                            </Colxx>
                                        </Row>
                                    </div>
                                </AvForm>
                            </CardBody>
                        </Card>
                    </Colxx>
                </Row>

            </Fragment>
        );
    }
}


export default injectIntl(ConnectDashboard);
