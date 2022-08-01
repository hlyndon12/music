import Button from "react-bootstrap/Button";
import { useState } from "react";
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom'

function Login() {
    let Navigate = useNavigate();
    const [userId, setUserId] = useState("");
    const [pwd, setPwd] = useState("");

    function handleSubmit(event) {
        if (userId === "lylhodges" && pwd === "123") {
            Navigate("/");
        }
        else {
            alert(`Login Unsucessful\nInvalid User Id or Password`);
        }
        event.preventDefault();
    }
    return (
        <div className='container text-white-smoke'>
            <div class="row">
                <div class="col-sm-4"></div>
                <div class="col-sm-4">
                    <Card
                        bg='dark'
                        key='Dark'
                        text='dark'
                        style={{ width: '18rem' }}
                        className="mt-5"
                    >
                        
                        <Card.Body>
                            <Card.Title>Login Form</Card.Title>
                            <Card.Text>
                                <div>

                                    <Form onSubmit={handleSubmit}>
                                        <Form.Group className="mb-3" controlId="userId">
                                            <Form.Label>User Id</Form.Label>
                                            <Form.Control type="text" placeholder="Enter User ID" id='UID' name='UID' value={userId} onChange={(e) => setUserId(e.target.value)} />

                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="pwd">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="password" placeholder="Password" id='pwd' name='pwd' value={pwd} onChange={(e) => setPwd(e.target.value)} />
                                        </Form.Group>
                                        <Button variant="outline-light" type="submit">
                                            Submit
                                        </Button>
                                        <br />
                                        <p>Don't have an account?
                                            <a href="/register">Sign up now</a></p>

                                    </Form>

                                </div>
                            </Card.Text>

                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>

    );

}
export default Login;