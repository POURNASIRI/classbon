import {Meta, StoryObj} from '@storybook/react'
import { Button } from './button'
import results from '../../../../.jest-test-results.json'

import {withTests} from '@storybook/addon-jest'

const meta: Meta<typeof Button> ={
    component: Button,
    tags:['autodocs'],         //it means this file automaticly detect by storybook this value alwayes set in autodoce

    decorators:[               //for add dark mode staticly to storybook body
        (Story)=>{
            document.documentElement.classList.add('dark');
            return <Story/>
        }
    ]
}

export default meta;



type Story = StoryObj<typeof Button>;

export const Tests:Story = {
    render:(arge) =>(<Button {...arge} >Click here</Button>) 
}

Tests.decorators = [withTests({results})]

export const BrandColors: Story ={
    render: ()=>(
        <>
            <Button value="default">Default</Button>
            <Button variant='neutral'>Neutral</Button>
            <Button variant='primary'>Primary</Button>
            <Button variant='secondary'>Secondary</Button>
            <Button variant='accent'>Accent</Button>
            <Button variant='ghost'>Ghost</Button>
            <Button isLink={true}>Link</Button>
        </>
    )
}

export const StateColors: Story = {
    render: ()=>(
        <>
        <Button variant='success'>Success</Button>
        <Button variant='error'>Error</Button>
        <Button variant='warning'>Warning</Button>
        </>
    )
}


export const OutLineButtons: Story={
    render: ()=>(
        <>
        <Button>Default</Button>
        <Button isOutline variant="neutral">Neutral</Button>
        <Button isOutline variant='primary'>Primary</Button>
        <Button isOutline variant='secondary'>Secondary</Button>
        <Button isOutline variant='accent'>Accent</Button>
        <Button isOutline variant='ghost'>Ghost</Button>
        </>
    )
}

export const OutLineStateButtons: Story={
    render: ()=>(
        <>
        <Button isOutline variant='success'>Success</Button>
        <Button isOutline variant='error'>Error</Button>
        <Button isOutline variant='warning'>Warning</Button>
        </>
    )
}

export const ButtonSize: Story ={
    render: ()=>(
        <>
        <Button size='tiny' variant='neutral'>Tiny</Button>
        <Button size='small' variant='neutral'>Small</Button>
        <Button size='normal' variant='neutral'>Normal</Button>
        <Button size='large' variant='neutral'>Larg</Button>
        </>
    )
}


export const WideButton: Story={
    render:()=>(
        <Button variant='neutral' shape='wide'>
            Wide Button
        </Button>
    )
}


export const FullButton: Story = {
    render: () => (
        <>
            <Button variant="neutral" shape="full">
                Full Button
            </Button>
        </>
    ),
};

export const SqureButtons: Story = {
    render: () => (
        <>
            <Button variant="neutral" size="tiny" shape="square">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                    ></path>
                </svg>
            </Button>
            <Button variant="neutral" size="small" shape="square">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                    ></path>
                </svg>
            </Button>
            <Button variant="neutral" size="normal" shape="square">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                    ></path>
                </svg>
            </Button>
            <Button variant="neutral" size="large" shape="square">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                    ></path>
                </svg>
            </Button>
        </>
    ),
};

export const DisabledButton: Story = {
    render: () => (
        <>
            <Button variant="neutral" disabled>
                Disabled Button
            </Button>
        </>
    ),
};

export const IconButton: Story = {
    render: () => (
        <>
            <Button variant="neutral">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                </svg>
                Submit
            </Button>
            <Button variant="neutral">
                Submit
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                </svg>
            </Button>
        </>
    ),
};

export const ButtonWithLoading: Story = {
    render: () => (
        <>
            <Button variant="neutral" isLoading={true} loadingText="Loading">
            </Button>
            <Button variant="neutral"  isLoading={true} loadingType={"ring"} loadingText="Loading">
            </Button>
            <Button variant="primary" isLoading={true} loadingText="Loading">
            </Button>
            <Button variant="accent"  isOutline isLoading={true} loadingType={"ring"} loadingText="Loading">
            </Button>
        </>
    ),
};