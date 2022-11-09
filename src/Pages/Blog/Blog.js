import React from 'react';
import useTitle from '../../hooks/useTitle';

const Blog = () => {
    useTitle('Blog')
    return (
        <div className='mt-24'>
            <div>
                <div className="card shadow-lg mb-10 m-auto w-96 bg-primary text-primary-content">
                    <div className="card-body">
                        <h2 className="card-title">Difference between SQL and NoSQL??</h2>
                        <p><strong>The five critical differences between SQL vs NoSQL are:</strong>
                            <br />
                            1. SQL databases are relational, NoSQL databases are non-relational. <br />
                            2. SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.
                            <br />
                            3. SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.
                            <br />
                            4. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.
                            <br />
                            5. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
                    </div>
                </div>
            </div>
            <div>
                <div className="card w-96 mb-10 m-auto bg-primary text-primary-content">
                    <div className="card-body">
                        <h2 className="card-title">What is JWT, and how does it work?</h2>
                        <p><strong>JWT:</strong>
                            <br />
                            JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued. <br />
                            <strong>JWT Works:</strong>
                            <br />
                            JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted. A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz
                        </p>

                    </div>
                </div>
            </div>
            <div>
                <div className="card w-96 mb-10 m-auto bg-primary text-primary-content">
                    <div className="card-body">
                        <h2 className="card-title">What is the difference between javascript and NodeJS?</h2>
                        <p><strong>Difference between javascript and NodeJS:</strong> <br />
                            1.  JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node.js, on the other hand, is an interpreter or execution environment for the JavaScript programming language. It requires libraries that can be conveniently accessed from JavaScript programming to be more helpful.
                            <br />
                            2. Any engine may run JavaScript. As a result, writing JavaScript is incredibly easy, and any working environment is similar to a complete browser. Node.js, on the other hand, only enables the V8 engine. Written JavaScript code, on the other hand, can run in any context, regardless of whether the V8 engine is supported.
                            <br />
                            3. The critical benefits of JavaScript include a wide choice of interfaces and interactions and just the proper amount of server contact and direct visitor input.
                            Node.js, on the other hand, offers node package management with over 500 modules and the capacity to handle many requests at the same time.
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <div className="card w-96 mb-10 m-auto bg-primary text-primary-content">
                    <div className="card-body">
                        <h2 className="card-title">How does NodeJS handle multiple requests at the same time?</h2>
                        <p><strong>NodeJS handle multiple requests:</strong> <br />
                        NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.
                        If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;