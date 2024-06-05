import { Meta, StoryObj } from "@storybook/react";
import { Alert } from "./alert";


const meta:Meta<typeof Alert> = {
    component:Alert,
    tags:['autodocs'],

    decorators:[               //for add dark mode staticly to storybook body
    (Story)=>{
        document.documentElement.classList.add('dark');
        return <Story/>
    }
]
}

export default meta;


type Story = StoryObj<typeof Alert>;


export const AlertColor:Story ={
    render:()=>(
        <>
            <Alert variant="error">Error</Alert>
            <Alert variant="info">Info</Alert>
            <Alert variant="success">Success</Alert>
            <Alert variant="warning">Warning</Alert>
        </>
    )
}