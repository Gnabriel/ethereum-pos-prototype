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


class DefaultDashboard extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = (values, { setSubmitting }) => {

        {/*
        const payload = {
            ...values,
            reactSelect: values.reactSelect.map(t => t.value)
        };
        */}

        setTimeout(() => {
            setSubmitting(false);
        }, 1000);
    };

  render() {
    const { messages } = this.props.intl;
    return (
      <Fragment>
          <Row>
              <Colxx xxs="12">
                  <Pagination
                      size="sm"
                      aria-label="Page navigation example"
                      listClassName="justify-content-center"
                  >
                      <PaginationItem>
                          <PaginationLink className="prev" href="#">
                              <i className="simple-icon-arrow-left" />
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
                              <i className="simple-icon-arrow-right" />
                          </PaginationLink>
                      </PaginationItem>
                  </Pagination>
              </Colxx>
          </Row>
      {/* Header */}
        <Row>
          <Colxx xxs="12">
            <h2>
              Generate key pairs
            </h2>
              <Separator className="mb-5" />
          </Colxx>
        </Row>
      {/* Step 1 */}
        <Row>
          <Colxx>
            <Card className="mb-4">
                <CardBody>
                    <CardTitle>
                        <IntlMessages id="1. Install Python and Git" />
                    </CardTitle>
                    <p>To install Git and Python type the following in the terminal window:</p>
                    <InputGroup className="mb-3">
                        <Input value={"sudo apt install git-all"} disabled={true} />
                        <InputGroupAddon addonType="append">
                            <Button outline color="secondary" onClick={() => copyStringToClipboard("sudo apt install git-all")} >
                                <IntlMessages id="Copy" />
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
                            <IntlMessages id="2. Clone and install the deposit tool repository" />
                        </CardTitle>
                        <p>
                            Type the following lines into the terminal window and replace the n with the amount
                            of validators you plan to run:
                        </p>
                        <InputGroup className="mb-3">
                            <Input value={"git clone https://github.com/ethereum/eth2.0-deposit.git"} disabled={true} />
                            <InputGroupAddon addonType="append">
                                <Button outline color="secondary" onClick={() => copyStringToClipboard("git clone https://github.com/ethereum/eth2.0-deposit.git")} >
                                    <IntlMessages id="Copy" />
                                </Button>
                            </InputGroupAddon>
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <Input value={"cd eth2.0-deposit"} disabled={true} />
                            <InputGroupAddon addonType="append">
                                <Button outline color="secondary" onClick={() => copyStringToClipboard("cd eth2.0-deposit")} >
                                    <IntlMessages id="Copy" />
                                </Button>
                            </InputGroupAddon>
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <Input value={"pip3 install -r requirements.txt"} disabled={true} />
                            <InputGroupAddon addonType="append">
                                <Button outline color="secondary" onClick={() => copyStringToClipboard("pip3 install -r requirements.txt")} >
                                    <IntlMessages id="Copy" />
                                </Button>
                            </InputGroupAddon>
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <Input value={"python3 deposit.py --num_validators n"} disabled={true} />
                            <InputGroupAddon addonType="append">
                                <Button outline color="secondary" onClick={() => copyStringToClipboard("python3 deposit.py --num_validators n")} >
                                    <IntlMessages id="Copy" />
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
                    <IntlMessages id="3. Save the key files and get the validator file ready" />
                </CardTitle>
                <CardText>
                  <p>
                      You should now be able to save the file <b>signing-keystore-...json </b>
                      which contains your key pairs.
                      Please make sure to keep it safe, preferably offline.
                  </p>
                  <p>
                      The second file you will export is <b>deposit_data.json </b>
                      that you will need to upload in the next step.
                  </p>
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
                                          value={values.checkboxCustomSingle}
                                          label="Agree to something"
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

                                  <Button color="primary" type="submit" size="lg" className="mb-2">
                                      CONTINUE TO UPLOAD
                                  </Button>
                              </Form>
                          )}
                      </Formik>
                  </CardBody>
              </Card>
          </Colxx>
      </Row>
      {/* Next step */}
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center',}}>
          <Row>
              <Colxx>
                  <Button color="primary" size="lg" className="mb-2">
                      <IntlMessages id="CONTINUE TO UPLOAD" />
                  </Button>
              </Colxx>
          </Row>
      </div>
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

function handleInputChange(event) {

}

export default injectIntl(DefaultDashboard);
