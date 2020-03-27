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
import { Colxx, Separator } from '../../../../components/common/CustomBootstrap';
import IntlMessages from "../../../../helpers/IntlMessages";
import CardText from "reactstrap/es/CardText";
import {Form, Formik} from "formik";
import {FormikCustomCheckbox} from "../../../../containers/form-validations/FormikFields";
import * as Yup from "yup";
import { iconsmind, simplelineicons } from "../../../../data/icons";
import {Link} from "react-router-dom";



const SignupSchema = Yup.object().shape({
    checkboxCustomSingle1: Yup.bool().oneOf([true], "Must agree to this"),
    checkboxCustomSingle2: Yup.bool().oneOf([true], "Must agree to this"),
    checkboxCustomSingle3: Yup.bool().oneOf([true], "Must agree to this"),
});


class SummaryDashboard extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = (values, {setSubmitting}) => {
        window.location.href='/app/dashboards/nf/success';

        setTimeout(() => {
            setSubmitting(false);
        }, 1000);
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
                                <PaginationLink className="prev" href="connect">
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
                            <PaginationItem>
                                <PaginationLink href="connect">4</PaginationLink>
                            </PaginationItem>
                            <PaginationItem active>
                                <PaginationLink href="#">5</PaginationLink>
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
                            Summary
                        </h2>
                        <Separator className="mb-5"/>
                    </Colxx>
                </Row>

                {/* Deposit Summary */}
                <Row>
                    <Colxx>
                        <Card className="mb-4">
                            <CardBody>
                                <CardTitle>
                                    Deposit Ceremony Summary
                                </CardTitle>

                                <InputGroup className="mb-3">
                                    <Colxx md={3}>
                                        <b>Validators</b>
                                        <Input value={"1"} disabled={true} />
                                    </Colxx>

                                    <Colxx md={3}>
                                        <b>Amount</b>
                                        <Input value={"32 ETH"} disabled={true}/>
                                    </Colxx>

                                    <Colxx md={3}>
                                        <b>Key Pairs Generated</b>
                                        <Input value={"1"} disabled={true}/>
                                    </Colxx>
                                </InputGroup>

                            </CardBody>
                        </Card>
                    </Colxx>
                </Row>

                {/* Keys */}
                {/*
                <Row>
                    <Colxx>
                        <Card className="mb-4">
                            <CardBody>
                                <CardTitle>
                                    Keys
                                </CardTitle>
                                <p>Here are your cold keys, you will have the hot keys</p>
                                <b>Key 1</b>
                                <InputGroup className="mb-3">
                                    <Input value={"0xea7214fc9e50774494e7feacc3b1e464c3946551"} disabled={true}/>
                                    <InputGroupAddon addonType="append">
                                        <Button outline color="secondary"
                                                onClick={() => copyStringToClipboard("0xea7214fc9e50774494e7feacc3b1e464c3946551")}>
                                            Copy
                                        </Button>
                                    </InputGroupAddon>
                                </InputGroup>
                            </CardBody>
                        </Card>
                    </Colxx>
                </Row>
                */}

                {/* Alert Friction */}
                <Row>
                    <Colxx>
                        <Card className="mb-4">
                            <CardBody>
                                {/* Next step button */}
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}>
                                    <Row>
                                        <Colxx>
                                            <Link to='success'>
                                                <Button color="primary"
                                                        size="lg"
                                                        className="mb-2" >
                                                    CONTINUE TO CONNECT
                                                </Button>
                                            </Link>
                                        </Colxx>
                                    </Row>
                                </div>
                            </CardBody>
                        </Card>
                    </Colxx>
                </Row>
            </Fragment>
        );
    }
}

function copyStringToClipboard(str) {
    // Create new element
    var el = document.createElement('textarea');
    // Set value (string to be copied)
    el.value = str;
    // Set non-editable to avoid focus and move outside of view
    el.setAttribute('readonly', '');
    el.style = {position: 'absolute', left: '-9999px'};
    document.body.appendChild(el);
    // Select text inside element
    el.select();
    // Copy text to clipboard
    document.execCommand('copy');
    // Remove temporary element
    document.body.removeChild(el);
}

export default injectIntl(SummaryDashboard);
