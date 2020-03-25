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

const SignupSchema = Yup.object().shape({
    checkboxCustomSingle: Yup.bool().oneOf([true], "Must agree to something")
});


class GenerateDashboard extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = (values, {setSubmitting}) => {
        window.location.href='/app/dashboards/upload';

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
                            <PaginationItem >
                                <PaginationLink className="prev" href="overview">
                                    <i className="simple-icon-arrow-left"/>
                                </PaginationLink>
                            </PaginationItem>
                            <PaginationItem >
                                <PaginationLink href="overview">1</PaginationLink>
                            </PaginationItem>
                            <PaginationItem active>
                                <PaginationLink href="#">2</PaginationLink>
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
                            Generate key pairs
                        </h2>
                        <Separator className="mb-5"/>
                    </Colxx>
                </Row>

                {/* Step 1 */}
                <Row>
                    <Colxx>
                        <Card className="mb-4">
                            <CardBody>
                                <CardTitle>
                                    1. Install Python and Git
                                </CardTitle>
                                <p>To install Git and Python type the following in the terminal window:</p>
                                <InputGroup className="mb-3">
                                    <Input value={"sudo apt install git-all"} disabled={true}/>
                                    <InputGroupAddon addonType="append">
                                        <Button outline color="secondary"
                                                onClick={() => copyStringToClipboard("sudo apt install git-all")}>
                                            Copy
                                        </Button>
                                    </InputGroupAddon>
                                </InputGroup>
                            </CardBody>
                        </Card>
                    </Colxx>
                </Row>

                {/* Step 2 */}
                <Row>
                    <Colxx>
                        <Card className="mb-4">
                            <CardBody>
                                <CardTitle>
                                    2. Clone and install the deposit tool repository
                                </CardTitle>
                                <span>
                                    Type the following lines into the terminal window and replace the n with the amount
                                    of validators you plan to run:
                                    <br/>
                                    <br/>
                                </span>
                                <InputGroup className="mb-3">
                                    <Input value={"git clone https://github.com/ethereum/eth2.0-deposit.git"}
                                           disabled={true}/>
                                    <InputGroupAddon addonType="append">
                                        <Button outline color="secondary"
                                                onClick={() => copyStringToClipboard("git clone https://github.com/ethereum/eth2.0-deposit.git")}>
                                            Copy
                                        </Button>
                                    </InputGroupAddon>
                                </InputGroup>
                                <InputGroup className="mb-3">
                                    <Input value={"cd eth2.0-deposit"} disabled={true}/>
                                    <InputGroupAddon addonType="append">
                                        <Button outline color="secondary"
                                                onClick={() => copyStringToClipboard("cd eth2.0-deposit")}>
                                            Copy
                                        </Button>
                                    </InputGroupAddon>
                                </InputGroup>
                                <InputGroup className="mb-3">
                                    <Input value={"pip3 install -r requirements.txt"} disabled={true}/>
                                    <InputGroupAddon addonType="append">
                                        <Button outline color="secondary"
                                                onClick={() => copyStringToClipboard("pip3 install -r requirements.txt")}>
                                            Copy
                                        </Button>
                                    </InputGroupAddon>
                                </InputGroup>
                                <InputGroup className="mb-3">
                                    <Input value={"python3 deposit.py --num_validators n"} disabled={true}/>
                                    <InputGroupAddon addonType="append">
                                        <Button outline color="secondary"
                                                onClick={() => copyStringToClipboard("python3 deposit.py --num_validators n")}>
                                            Copy
                                        </Button>
                                    </InputGroupAddon>
                                </InputGroup>
                            </CardBody>
                        </Card>
                    </Colxx>
                </Row>

                {/* Step 3 */}
                <Row>
                    <Colxx>
                        <Card className="mb-4">
                            <CardBody>
                                <CardTitle>
                                    3. Save the key files and get the validator file ready
                                </CardTitle>
                                <CardText>
                                    <span>
                                        You should now be able to save the file <b>signing-keystore-...json </b>
                                        which contains your key pairs.
                                        Please make sure to keep it safe, preferably offline.
                                    </span>
                                    <span>
                                        <br/>The second file you will export is <b>deposit_data.json </b>
                                        that you will need to upload in the next step.
                                    </span>
                                </CardText>
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


export default injectIntl(GenerateDashboard);

