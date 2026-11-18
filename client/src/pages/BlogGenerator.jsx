import React, { useState } from 'react';
import { Typography } from '@mui/material';
import Converter from '../components/Converter';

const Blog = () => {
    const [blog, setBlog] = useState("");

    return (
        <Converter
            outputState={blog}
            setOutputState={setBlog}
            title="Blog / Essay Generator"
            buttonName="Generate"
            outputDesc="Blog Content"
            outputData={<Typography p={2}>{blog}</Typography>}
            route="blog-generator"
            inputLabel="Enter topic for blog"
        />
    );
};

export default Blog;
