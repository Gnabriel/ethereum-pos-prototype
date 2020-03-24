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
import {Link} from 'react-router-dom'


const SignupSchema = Yup.object().shape({
    checkboxCustomSingle1: Yup.bool().oneOf([true], "Must agree to something"),
    checkboxCustomSingle2: Yup.bool().oneOf([true], "Must agree to something"),
    checkboxCustomSingle3: Yup.bool().oneOf([true], "Must agree to something"),
    checkboxCustomSingle4: Yup.bool().oneOf([true], "Must agree to something"),
});


class UploadDashboard extends Component {
    constructor(props) {
        super(props);
    }

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
                                <PaginationLink className="prev" href="generate">
                                    <i className="simple-icon-arrow-left"/>
                                </PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="generate">1</PaginationLink>
                            </PaginationItem>
                            <PaginationItem active>
                                <PaginationLink href="#">2</PaginationLink>
                            </PaginationItem>
                            <PaginationItem disabled>
                                <PaginationLink href="connect">3</PaginationLink>
                            </PaginationItem>
                            <PaginationItem disabled>
                                <PaginationLink href="summary">4</PaginationLink>
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
                            Upload validator file
                        </h2>
                        <Separator className="mb-5"/>
                    </Colxx>
                </Row>

                {/* Upload */}
                <Row className="mb-4">
                    <Colxx xxs="12">
                        <Card>
                            <CardBody>
                                <CardTitle>
                                    Upload validator file
                                </CardTitle>
                                <span>
                                    Upload your validator file.
                                    <br/>
                                    <br/>
                                </span>
                                <DropzoneExample label ="hejsan"/>

                                <br/>

                                {/* Next step button */}
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}>
                                    <Row>
                                        <Colxx>
                                            <Link to='connect'>
                                                <Button color="primary"
                                                        size="lg"
                                                        className="mb-2" >
                                                    UPLOAD VALIDATOR FILE
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

export default injectIntl(UploadDashboard);
