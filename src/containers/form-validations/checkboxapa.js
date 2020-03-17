import React, { Component } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import {
    FormikReactSelect,
    FormikCheckboxGroup,
    FormikCheckbox,
    FormikRadioButtonGroup,
    FormikCustomCheckbox,
    FormikCustomCheckboxGroup,
    FormikCustomRadioGroup,
    FormikTagsInput,
    FormikSwitch,
    FormikDatePicker
} from "./FormikFields";
import { Row, Card, CardBody, FormGroup, Label, Button } from "reactstrap";
import { Colxx } from "../../components/common/CustomBootstrap";
import IntlMessages from "../../helpers/IntlMessages";

const SignupSchema = Yup.object().shape({
    checkboxCustomSingle: Yup.bool().oneOf([true], "Must agree to something")
});


class FormikCustomComponents extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = (values, { setSubmitting }) => {
        const payload = {
            ...values,
            reactSelect: values.reactSelect.map(t => t.value)
        };
        setTimeout(() => {
            console.log(JSON.stringify(payload, null, 2));
            setSubmitting(false);
        }, 1000);
    };

    render() {
        return (
            <Row className="mb-4">
                <Colxx xxs="12">
                    <Card>
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

                                        <Button color="primary" type="submit">
                                            Submit
                                        </Button>
                                    </Form>
                                )}
                            </Formik>
                        </CardBody>
                    </Card>
                </Colxx>
            </Row>
        );
    }
}
export default FormikCustomComponents;
