import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Label,
  Row,
  Col,
} from "reactstrap"

import { Control, LocalForm, Errors } from "react-redux-form"

import { useState } from "react"

function Comment() {
  const required = (val) => val && val.length
  const maxLength = (len) => (val) => !val || val.length <= len
  const isNumber = (val) => !isNaN(Number(val))
  const [modal, setModal] = useState(false)

  const toggle = () => setModal(!modal)

  function handleSubmit(values) {
    console.log(JSON.stringify(values))
    alert(JSON.stringify(values))
  }

  return (
    <div>
      <Button color="light" onClick={toggle}>
        <i className="fa fa-edit"></i> Submit Comments
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Submit Comment</ModalHeader>
        <ModalBody>
          <div className="col-12 col-md-9">
            <LocalForm onSubmit={(values) => handleSubmit(values)}>
              <Row className="form-group">
                <Label htmlFor="rating" md={3}>
                  Rating
                </Label>
                <Col md={9}>
                  <Control.text
                    model=".rating"
                    className="form-control"
                    id="rating"
                    name="rating"
                    placeholder="Rating"
                    validators={{
                      required,
                      isNumber,
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".rating"
                    show="touched"
                    messages={{
                      required: "Required",
                      isNumber: "It should be a number",
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="name" md={3}>
                  Your Name
                </Label>
                <Col md={9}>
                  <Control.text
                    model=".name"
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    validators={{
                      required,
                      maxLength: maxLength(15),
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".name"
                    show="touched"
                    messages={{
                      required: "Required",
                      maxLength: "Max len 15",
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="comment" md={3}>
                  Comment
                </Label>
                <br />
                <Col md={9}>
                  <Control.textarea
                    model=".comment"
                    className="form-control"
                    id="comment"
                    name="comment"
                    placeholder="Your Comment"
                    validators={{
                      required,
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".comment"
                    show="touched"
                    messages={{
                      required: "Required",
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Col md={{ size: 10, offset: 0 }}>
                  <Button type="submit" color="primary">
                    Submit
                  </Button>
                </Col>
              </Row>
            </LocalForm>
          </div>
        </ModalBody>
        <ModalFooter></ModalFooter>
      </Modal>
    </div>
  )
}

export default Comment
