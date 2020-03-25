import React, {Component, Fragment} from 'react';
import {injectIntl} from 'react-intl';
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
import {Colxx, Separator} from '../../../components/common/CustomBootstrap';
import IntlMessages from "../../../helpers/IntlMessages";
import CardText from "reactstrap/es/CardText";
import {Form, Formik} from "formik";
import {FormikCustomCheckbox} from "../../../containers/form-validations/FormikFields";
import * as Yup from "yup";
import {Link} from "react-router-dom";
import { NavLink } from "react-router-dom";
import * as ReactDOM from "react-dom";
import EthereumHeader from "/img/ethereum-pos.jpg"

const SignupSchema = Yup.object().shape({
    checkboxCustomSingle: Yup.bool().oneOf([true], "Must agree to something")
});


class OverviewDashboard extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = (values, {setSubmitting}) => {
        window.location.href='/app/dashboards/generate';

        setTimeout(() => {
            setSubmitting(false);
        }, 1000);
    };

    render() {
        const {messages} = this.props.intl;
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
                            <PaginationItem disabled>
                                <PaginationLink className="prev" href="#">
                                    <i className="simple-icon-arrow-left"/>
                                </PaginationLink>
                            </PaginationItem>
                            <PaginationItem active>
                                <PaginationLink href="#">1</PaginationLink>
                            </PaginationItem>
                            <PaginationItem disabled>
                                <PaginationLink href="generate">2</PaginationLink>
                            </PaginationItem>
                            <PaginationItem disabled>
                                <PaginationLink href="upload">3</PaginationLink>
                            </PaginationItem>
                            <PaginationItem disabled>
                                <PaginationLink href="connect">4</PaginationLink>
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
                            Become a validator and help secure the eth2 network.
                        </h2>
                        <Separator className="mb-5"/>
                    </Colxx>
                </Row>

                <Row>
                    <Colxx>
                        <Card className="mb-4">
                            <CardBody>
                                <img src={EthereumHeader} alt="Ethereum POS"/>
                            </CardBody>
                        </Card>
                    </Colxx>
                </Row>

                {/* Validation */}
                <Row>
                    <Colxx>
                        <Card className="mb-4">
                            <CardBody>
                                <Formik
                                    initialValues={{
                                        checkboxCustomSingle: false
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
                                            <FormGroup className="error-l-150">
                                                <FormikCustomCheckbox
                                                    name="checkboxCustomSingle"
                                                    className="form-control"
                                                    value={values.checkboxCustomSingle}
                                                    label="I am keeping my keys safe and have
                                                    backed up my mnemonic phrase"
                                                    onChange={setFieldValue}
                                                    onBlur={setFieldTouched}
                                                />
                                                {errors.checkboxCustomSingle &&
                                                touched.checkboxCustomSingle ? (
                                                    <div className="invalid-feedback d-block">
                                                        {errors.checkboxCustomSingle}
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
                                                            CONTINUE TO UPLOAD
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


export default injectIntl(OverviewDashboard);

