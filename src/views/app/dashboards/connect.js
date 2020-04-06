import React, {Component, Fragment} from 'react';
import {injectIntl} from 'react-intl';
import {
    Alert,
    Button,
    Card,
    CardBody,
    CardTitle,
    InputGroupAddon,
    Label,
    Pagination,
    PaginationItem,
    PaginationLink,
    Row
} from 'reactstrap';
import {Colxx, Separator} from '../../../components/common/CustomBootstrap';
import * as Yup from "yup";
import {AvCheckbox, AvCheckboxGroup, AvField, AvForm, AvGroup} from "availity-reactstrap-validation";

const SignupSchema = Yup.object().shape({
    checkboxCustomSingle: Yup.bool().oneOf([true], "Must agree to this"),
});


class ConnectDashboard extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit (event, errors, values){
        console.log(values);
        if (errors.length === 0) {
            window.location.href = '/app/dashboards/summary';
        }
        return values;
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
                                            {/*
                                            <p>Enter the receiving wallet adress here. Do not copy/paste
                                                the link.</p>
                                            */}

                                            <AvField name="address" label="Enter the receiving wallet address here. Do not copy/paste
                                                the address." type="text" validate={{
                                                required: {value: true, errorMessage: 'Please enter an address'},
                                                pattern: {value: '^[A-Za-z0-9]+$', errorMessage: 'The address must be composed only with letter and numbers'},
                                                minLength: {value: 42, errorMessage: 'Invalid address. The address must be 42 characters'},
                                                maxLength: {value: 42, errorMessage: 'Invalid address. The address must be 42 characters'}
                                            }} />
                                        </Colxx>
                                    </Row>

                                    {/* Amount */}
                                    <Row>
                                        <Colxx>
                                            <CardTitle>
                                                2. Enter amount of Ether
                                            </CardTitle>

                                            <Label>Enter the amount of ether you would like to transfer. It should
                                                be 32 times the amount of validations.</Label>
                                            <AvGroup className="error-t-negative">
                                                <Row>
                                                    <Colxx xs={1}>
                                                        <InputGroupAddon addonType="prepend">ETH</InputGroupAddon>
                                                    </Colxx>

                                                    <Colxx xs={11}>
                                                        <AvField
                                                            name="minPropNumberProp"
                                                            type="text"
                                                            validate={{
                                                                min: {value: 32, errorMessage: "Minimum 32 ETH"},
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
                                            {/*
                                            <p>Enter the private key to the wallet which you are sending the Ether
                                                from.</p>
                                            */}

                                            <AvField name="private-key" label="Enter the private key to the wallet which you are sending the Ether
                                                from." type="text" validate={{
                                                required: {value: true, errorMessage: 'Please enter your private key'},
                                                pattern: {value: '^[A-Za-z0-9]+$', errorMessage: 'The private key must be composed only with letter and numbers'},
                                                minLength: {value: 64, errorMessage: 'Invalid private key. The key must be 64 characters'},
                                                maxLength: {value: 64, errorMessage: 'Invalid private key. The key must be 64 characters'}
                                            }} />
                                        </Colxx>
                                    </Row>


                                    <Alert color="danger" style={{marginTop: 50}}>
                                        <Row>
                                            <div className={"glyph-icon simple-icon-exclamation"}/>
                                            &nbsp;&nbsp;&nbsp;&nbsp;Please make sure you are not being
                                            phished!
                                        </Row>
                                    </Alert>

                                    <span>
                                        You are responsible for the transaction. Fraudulent websites might
                                        lure you into sending the Ether to them instead of the official deposit
                                        contract. Please check that the address you are sending the transaction
                                        to is the correct address.
                                        <br/>
                                        <br/>
                                    </span>


                                    <AvCheckboxGroup
                                        className="error-l-150"
                                        inline
                                        name="checkboxCustomInputExample2"
                                        required>
                                        <AvCheckbox customInput label="I have confirmed that I am sending Ether to
                                        the correct address." value="Yes"/>
                                    </AvCheckboxGroup>

                                    {/* Next step button */}
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}>
                                        <Row>
                                            <Colxx>
                                                <Button color="primary" type="submit" size="lg"
                                                        className="mb-2">
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



export const connectObj = new ConnectDashboard();
//export const exportValues = inputValues;

export default injectIntl(ConnectDashboard);
