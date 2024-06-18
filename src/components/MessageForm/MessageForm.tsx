import React, { useState } from 'react';

interface MessageFormProps {
    onSendMessage: (author: string, message: string) => void;
}

const MessageForm: React.FC<MessageFormProps> = ({ onSendMessage }) => {
    const [author, setAuthor] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        onSendMessage(author, message);
        setAuthor('');
        setMessage('');
    };

    return (
        <div className="container mt-5 p-3 bg-light text-dark">
            <div className="row">
                <div className="col-md-8 mx-auto">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="authorField" className="form-label">User Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="authorField"
                                value={author}
                                onChange={(e) => setAuthor(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="messageField" className="form-label">Message</label>
                            <input
                                type="text"
                                className="form-control"
                                id="messageField"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                        </div>
                        <button type="submit" className="btn btn-success btn-block">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MessageForm;

