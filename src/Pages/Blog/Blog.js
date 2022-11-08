import React from 'react';

const Blog = () => {
    return (
        <div className=''>
            <div>
                <div className="card shadow-lg mb-10 w-96 m-auto bg-primary text-primary-content">
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
                        <h2 className="card-title">Card title!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="card w-96 mb-10 m-auto bg-primary text-primary-content">
                    <div className="card-body">
                        <h2 className="card-title">Card title!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;