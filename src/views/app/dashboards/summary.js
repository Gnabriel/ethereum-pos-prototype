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


const SignupSchema = Yup.object().shape({
    checkboxCustomSingle1: Yup.bool().oneOf([true], "Must agree to something"),
    checkboxCustomSingle2: Yup.bool().oneOf([true], "Must agree to something"),
    checkboxCustomSingle3: Yup.bool().oneOf([true], "Must agree to something"),
    checkboxCustomSingle4: Yup.bool().oneOf([true], "Must agree to something"),
});


class SummaryDashboard extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = (values, {setSubmitting}) => {
        window.location.href='/app/dashboards/summary';

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
                                <PaginationLink className="prev" href="#">
                                    <i className="simple-icon-arrow-left"/>
                                </PaginationLink>
                            </PaginationItem>
                            <PaginationItem active>
                                <PaginationLink href="#">1</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#">2</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#">3</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink className="next" href="#">
                                    <i className="simple-icon-arrow-right"/>
                                </PaginationLink>
                            </PaginationItem>
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

                {/* Alert Friction */}
                <Row>
                    <Colxx>
                        <Card className="mb-4">
                            <CardBody>
                                <Formik
                                    initialValues={{
                                        checkboxCustomSingle1: false,
                                        checkboxCustomSingle2: false,
                                        checkboxCustomSingle3: false,
                                        checkboxCustomSingle4: false
                                    }}
                                    validationSchema={SignupSchema}
                                    onSubmit={this.handleSubmit}>
                                    {({
                                          handleSubmit,
                                          setFieldValue,
                                          setFieldTouched,
                                          handleChange,
                                          handleBlur,
                                          values,
                                          errors,
                                          touched,
                                          isSubmitting
                                      }) => (
                                        <Form className="av-tooltip tooltip-label-right">
                                            <Alert color="danger">
                                                <Row>
                                                    <div className={"glyph-icon simple-icon-exclamation"} />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;Please proceed with caution!
                                                </Row>
                                            </Alert>

                                            <FormGroup className="error-l-150">
                                                <FormikCustomCheckbox
                                                    name="checkboxCustomSingle1"
                                                    className="form-control"
                                                    value={values.checkboxCustomSingle1}
                                                    label="I understand that if I lose my mnemonic phrase I won't be
                                                    able to withdraw my funds"
                                                    onChange={setFieldValue}
                                                    onBlur={setFieldTouched}
                                                />
                                                {errors.checkboxCustomSingle1 &&
                                                touched.checkboxCustomSingle1 ? (
                                                    <div className="invalid-feedback d-block">
                                                        {errors.checkboxCustomSingle1}
                                                    </div>
                                                ) : null}
                                            </FormGroup>

                                            <FormGroup className="error-l-150">
                                                <FormikCustomCheckbox
                                                    name="checkboxCustomSingle2"
                                                    className="form-control"
                                                    value={values.checkboxCustomSingle2}
                                                    label="I am aware of the early adopter and slashing risks"
                                                    onChange={setFieldValue}
                                                    onBlur={setFieldTouched}
                                                />
                                                {errors.checkboxCustomSingle2 &&
                                                touched.checkboxCustomSingle2 ? (
                                                    <div className="invalid-feedback d-block">
                                                        {errors.checkboxCustomSingle2}
                                                    </div>
                                                ) : null}
                                            </FormGroup>

                                            <FormGroup className="error-l-150">
                                                <FormikCustomCheckbox
                                                    name="checkboxCustomSingle3"
                                                    className="form-control"
                                                    value={values.checkboxCustomSingle3}
                                                    label="I am aware that this transaction is not reversible"
                                                    onChange={setFieldValue}
                                                    onBlur={setFieldTouched}
                                                />
                                                {errors.checkboxCustomSingle3 &&
                                                touched.checkboxCustomSingle3 ? (
                                                    <div className="invalid-feedback d-block">
                                                        {errors.checkboxCustomSingle3}
                                                    </div>
                                                ) : null}
                                            </FormGroup>

                                            <Alert color="danger">
                                                <Row>
                                                    <div className={"glyph-icon simple-icon-exclamation"} />
                                                    &nbsp;&nbsp;&nbsp;&nbsp;Please make sure you are not being phished!
                                                </Row>
                                            </Alert>

                                            <span>You are responsible for the transaction. Fraudulent websites might
                                                lure u into sending the 32 ETH to them instead of the official deposit
                                                contract. Please check that the address you are sending the transaction
                                                to is the correct address. Learn here how to do it safely ->
                                                <br/>
                                                <br/>
                                            </span>

                                            <FormGroup className="error-l-150">
                                                <FormikCustomCheckbox
                                                    name="checkboxCustomSingle4"
                                                    className="form-control"
                                                    value={values.checkboxCustomSingle4}
                                                    label="I know how to check that I am sending my ETH into the correct deposit contract and I will do so."
                                                    onChange={setFieldValue}
                                                    onBlur={setFieldTouched}
                                                />
                                                {errors.checkboxCustomSingle4 &&
                                                touched.checkboxCustomSingle4 ? (
                                                    <div className="invalid-feedback d-block">
                                                        {errors.checkboxCustomSingle4}
                                                    </div>
                                                ) : null}
                                            </FormGroup>

                                            {/* Next step button */}
                                            <div style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                            }}>
                                                <Row>
                                                    <Colxx>
                                                        <Button color="primary" type="submit" size="lg"
                                                                className="mb-2" >
                                                            SIGN 1 TRANSACTION AND DEPOSIT 32 ETH
                                                        </Button>
                                                    </Colxx>
                                                </Row>
                                            </div>
                                        </Form>
                                    )}
                                </Formik>
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
