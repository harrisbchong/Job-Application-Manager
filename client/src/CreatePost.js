import { Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'

function CreatePost() {
    const navigate = useNavigate()
    const [post, setPost] = useState({
        title: '',
        description: '',
        status: '',
        location: '',
    })

    const handleChange = (event) => {
        const { name, value } = event.target

        setPost((prev) => {
            return {
                ...prev,
                [name]: value,
            }
        })
    }

    const handleClick = (event) => {
        event.preventDefault()

        axios.post('/create', post).then(res => console.log(res)).catch(err => console.log(err))

        navigate('posts')
    }

    return (
        <div>
            <div style={{ width: '90%', margin: 'auto auto', textAlign: 'center', marginBottom: '6%', color: '#59981A' }} >
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', padding: '5px' }} >
                    <FontAwesomeIcon icon={faBriefcase} size='3x' />
                    <h1 style={{ marginLeft: '1rem' }} >Job Application Manager</h1>
                </div>
            </div>
            <div style={{
                border: 'solid lightgray 2px',
                borderRadius: '8px',
                marginBottom: '1rem',
                padding: '1rem',
                width: "30%",
                margin: 'auto auto',
                textAlign: "center"
            }}>
                <h1>Add a Job Application</h1>
                <Form>
                    <Form.Group>
                        <Form.Control
                            name="title"
                            value={post.title}
                            placeholder='Company'
                            style={{ marginBottom: '1rem' }}
                            onChange={handleChange}
                        />
                        <Form.Control
                            name='description'
                            value={post.description}
                            placeholder='Position'
                            style={{ marginBottom: '1rem' }}
                            onChange={handleChange}
                        />
                        <Form.Control
                            name='status'
                            value={post.status}
                            placeholder='Status'
                            style={{ marginBottom: '1rem' }}
                            onChange={handleChange}
                        />
                        <Form.Control
                            name='location'
                            value={post.location}
                            placeholder='Location'
                            style={{ marginBottom: '1rem' }}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Button
                        onClick={handleClick}
                        style={{ width: '100%', marginBottom: '1rem' }}
                        variant="outline-success"
                    >Add Job</Button>
                </Form>
                <Button
                    variant="outline-dark"
                    style={{ width: '100%' }}
                    onClick={() => navigate(+1)}>Application List</Button>
            </div>
        </div>
    )
}

export default CreatePost