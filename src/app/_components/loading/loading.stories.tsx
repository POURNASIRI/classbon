import { Meta, StoryObj } from "@storybook/react";
import { Loading } from ".";

const meta: Meta<typeof Loading> ={
    component:Loading,
    tags:['autodocs'],


    decorators:[
        (Story)=>{
            document.documentElement.classList.add('dark');
            return <Story/>
        }
    ]
}


export default meta;




type Story = StoryObj<typeof Loading>


export const LoadingSpinner: Story={
    render: ()=>(
        <>
        <Loading size="tiny"/>
        <Loading size="small"/>
        <Loading size="normal"/>
        <Loading size="large"/>
        </>
        )
    }


export  const LoadingSpinnerWithColor: Story ={
    render:()=>(
        <>
        <Loading size='normal' variant="neutral"/>
        <Loading size='normal' variant="primary"/>
        <Loading size='normal' variant="secondary"/>
        <Loading size='normal' variant="accent"/>
        <Loading size='normal' variant="success"/>
        <Loading size='normal' variant="info"/>
        <Loading size='normal' variant="error"/>
        <Loading size='normal' variant="warning"/>
        </>
    )
}


export const LoadingRing: Story={
    render: ()=>(
        <>
        <Loading size="tiny" type="ring"/>
        <Loading size="normal" type="ring"/>
        <Loading size="small" type="ring"/>
        <Loading size="large" type="ring"/>
        </>
    )
}

export  const LoadingRingWithColor: Story ={
    render:()=>(
        <>
        <Loading size='normal' type="ring" variant="neutral"/>
        <Loading size='normal' type="ring" variant="primary"/>
        <Loading size='normal' type="ring" variant="secondary"/>
        <Loading size='normal' type="ring" variant="accent"/>
        <Loading size='normal' type="ring" variant="success"/>
        <Loading size='normal' type="ring" variant="info"/>
        <Loading size='normal' type="ring" variant="error"/>
        <Loading size='normal' type="ring" variant="warning"/>
        </>
    )
}