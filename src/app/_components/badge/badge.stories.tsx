import {Meta, StoryObj} from '@storybook/react'
import { Badge } from '.'
import results from '../../../../.jest-test-results.json'

import {withTests} from '@storybook/addon-jest'


const meta: Meta<typeof Badge> = {
    component: Badge,
    tags:['autodocs'],



}

export default meta


type Story = StoryObj<typeof Badge>
export const Tests: Story = {
    render: (args) => (<Badge {...args}>content</Badge>)
 };
 Tests.decorators = [ withTests({results})]

export const BadgeColors: Story={
    render: ()=>(
        <>
            <Badge>Default</Badge>
            <Badge variant='accent'>accent</Badge>
            <Badge variant='primary'>Primary</Badge>
            <Badge variant='secondary'>Secondary</Badge>
            <Badge variant='accent'>Accent</Badge>
            <Badge variant='ghost'>Ghost</Badge>
        </>

    )
}

export const StateColors:Story={
    render:()=>(
        <>
           <Badge variant="success">Success</Badge>
            <Badge variant="info">Info</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="error">Error</Badge>
        </>
    )
}

export const BadgeSize:Story={
    render:()=>(
        <>
        <Badge size='tiny' variant='accent'>Tiny</Badge>
        <Badge size='small' variant='accent'>Small</Badge>
        <Badge size='normal' variant='accent'>Normal</Badge>
        <Badge size='large' variant='accent'>Larg</Badge>
        </>
    )
}