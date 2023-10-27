import { useNavigate } from 'react-router-dom'
import { Input, Form, Button } from 'antd';

const CreateNew = (props) => {
    const navigate = useNavigate()
    
    const onFinish = (values) => {
        props.addNew({
          ...values,
          votes: 0,
        });
        navigate("/")
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      }; 
    

    return (
        <div>
            <h2>create a new anecdote</h2>
            <Form name='newAnecdote' onFinish={onFinish} onFinishFailed={onFinishFailed}>
                <Form.Item
                    label="content"
                    name="content"
                    rules={[
                        {
                            required: true,
                            message: 'Please input the content!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="author"
                    name="author"
                    rules={[
                        {
                            required: true,
                            message: 'Please input the author!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="url for more info"
                    name="info"
                    rules={[
                        {
                            required: true,
                            message: 'Please input the url for more info!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Button type='primary' htmlType='submit'>create</Button>
            </Form>
        </div>
    )

}

export default CreateNew;