import React from 'react';
import { Message } from '../../types';

interface MessageListProps {
    messages: Message[];
}

const MessageList: React.FC<MessageListProps> = ({ messages }) => {
    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-12">
                    <h3 className="mb-4">Chat Messages</h3>
                    <ul id="messagesList" className="list-group w-100">
                        {messages.map((message) => (
                            <li key={message._id} className="list-group-item">
                                <strong>{message.author}</strong> ({new Date(message.datetime).toLocaleString()}): {message.message}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MessageList;
