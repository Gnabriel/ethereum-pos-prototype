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
import {Colxx, Separator} from '../../../../components/common/CustomBootstrap';
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
            exportInputs(values);
            window.location.href = '/app/dashboards/nf/summary';
        }
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

                                            <AvField name="address" label="Enter the receiving wallet adress here. Do not copy/paste
                                                the link." type="text"/>
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
                                                from." type="text"/>
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

function exportInputs(values) {
    return values;
}

export const inputValues = () => exportInputs;

export default injectIntl(ConnectDashboard);
