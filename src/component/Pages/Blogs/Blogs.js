import React from 'react';

const Blogs = () => {
    return (
        <div className=' p-5 bg-slate-300 '>
            <div className='text-black my-6'>
                <h2 className=' text-4xl text-center font-bold m-3'>Difference between SQL and NoSQL</h2>
                <p className=' text-center text-lg font-medium'>SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.Comparing SQL vs NoSQL databases, SQL databases are table-based databases, whereas NoSQL databases can be document-based, key-value pairs, and graph databases.SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases have a predefined schema, whereas NoSQL databases use a dynamic schema for unstructured data</p>
            </div>
            <div className='text-black my-6'>
                <h2 className=' text-4xl text-center font-bold m-3'>What is JWT, and how does it work? </h2>
                <p className=' text-center text-lg font-medium'>JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object.

                    It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP). So the integrity and authenticity of the token can be verified by other parties involved.

                    The purpose of using JWT is not to hide data but to ensure the authenticity of the data. JWT is signed and encoded, not encrypted.

                    JWT is a token based stateless authentication mechanism. Since it is a client-side based stateless session, server doesn't have to completely rely on a datastore(database) to save session information.</p>
            </div>
            <div className='text-black my-6'>
                <h2 className=' text-4xl text-center font-bold m-3'> What is the difference between javascript and NodeJS?</h2>
                <p className=' text-center text-lg font-medium'> JavaScript is a client-side scripting language that is lightweight, cross-platform, and interpreted. Both Java and HTML include it. Node.js, on the other hand, is a V8-based server-side programming language JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node.js, on the other hand, is an interpreter or execution environment for the JavaScript programming language. It requires libraries that can be conveniently accessed from JavaScript programming to be more helpful.Any engine may run JavaScript. As a result, writing JavaScript is incredibly easy, and any working environment is similar to a complete browser. Node.js, on the other hand, only enables the V8 engine. Written JavaScript code, on the other hand, can run in any context, regardless of whether the V8 engine is supported</p>
            </div>
            <div className='text-black my-6'>
                <h2 className=' text-4xl text-center font-bold m-3'>How does NodeJS handle multiple requests at the same time? </h2>
                <p className=' text-center text-lg font-medium'>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.  EventLoop is the listener for the EventQueue.
                    If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.
                    How to scale your NodeJS application with Cluster Module?
                    A single instance of Node.js runs in a single thread. If you have a multi-core system then you can utilize every core. Sometimes developer wants to launch a cluster of NodeJS process to take advantage of the multi-core system.
                    The cluster module allows easy creation of child processes that all share the same server ports. </p>
            </div>

        </div>
    );
};

export default Blogs;