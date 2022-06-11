import Link from '@docusaurus/Link';
import React from 'react';
import Button from '../Button';
import CodeBlock from '@theme/CodeBlock';

const Home = () => {

  const runDemo = () => {
    window.TutoBox.startTuto("demo")
  }

  return (
    <div className=' mx-1 mt-10 text-center sm:mx-6 md:mx-10 lg:mx-40 '>
      <h1 className=' text-7xl'>
        A library to perform your users <br />
        <span
        data-tuto="demo"
        data-step-des="This is what the library do"
        data-step="1"
        className='mt-1 text-blue-500'>Onboarding</span>
      </h1>
      <p className='text-center text-xl'>
        Implement guides on your application to guide your users step by step in using your product.
      </p>
      <div className="my-5 flex justify-center">
        <Button 
        data-tuto="demo"
        data-step-title="Start demo"
        data-step-des="The button to start demo"
        data-step="2"
        onClick={runDemo}
        className=' bg-slate-100 text-blue-500'>
          See demo
        </Button>
        <Button 
        data-tuto="demo"
        data-step-title="Go to documentation"
        data-step-des="Read about how to use TutoBox"
        data-step="3"
        className=' bg-blue-500  '>
          <Link
            className="text-white"
            to="/docs/intro">
            Read the docs
          </Link>
        </Button>
      </div>
      <h2 className=' text-4xl mb-10'>Installation</h2>
      <div
      data-tuto="demo"
      data-step-title="Using exemple"
      data-step-des="This example gives you an idea of how to use TutoBox."
      data-step="4">
      <CodeBlock
        language="html"
        className=' text-left'
        showLineNumbers>
        {
`<!-- Add TutoBox Css -->
<link rel="stylesheet" href="https://unpkg.com/tutobox@1.0/dist/index.min.css" />
`}
      </CodeBlock>
      <CodeBlock
        language="html"
        className=' text-left'
        showLineNumbers>
        {
`<!-- Add TutoBox Js -->
<script type="text/javascript" defer src="https://unpkg.com/tutobox@1.0/dist/index.min.js"></script>`
}
      </CodeBlock>
      </div>
      <h2 className=' text-4xl mb-10'>Using</h2>
      <div
      data-tuto="demo"
      data-step-title="See how to install"
      data-step-des="Add Css and Js on your page."
      data-step="5">
      <CodeBlock
        language="html"
        className=' text-left'
        title="exemple.html"
        showLineNumbers>
        {
`<button
  data-tuto="create-post"
  data-step-des="Click to publish the post"
  data-step="5"
>
  Send
</button>`
}
      </CodeBlock>
      <CodeBlock
        language="js"
        className=' text-left'
        title="index.js"
        showLineNumbers>
        {
`TutoBox.startTuto("create-post")`
}
      </CodeBlock>
      </div>
    </div>
  )
}

export default Home