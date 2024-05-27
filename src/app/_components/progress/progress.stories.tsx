import { Meta, StoryObj } from "@storybook/react";
import { Progress } from ".";
import results from '../../../../.jest-test-results.json'

import {withTests} from '@storybook/addon-jest'



const meta: Meta<typeof Progress> = {
    component : Progress,
    tags:['autodocs']
}


export default meta


type Story = StoryObj<typeof Progress>;

export const Tests:Story = {
    render:(arge) =>(<Progress {...arge} ></Progress>) 
}

Tests.decorators = [withTests({results})]


export const BrandColor:Story = {
    render:()=>(
        <>
        <Progress value={85}/>
        <Progress value={85} variant="neutral"/>
        <Progress value={85} variant="primary"/>
        <Progress value={85} variant="secondary"/>
        <Progress value={85} variant="accent"/>
        <Progress value={85} variant="ghost"/>
        </>
    )
}


export const StateColors: Story = {
    render: ()=>(
        <>
            <Progress value={85} variant="success"/>
            <Progress value={85} variant="warning"/>
            <Progress value={85} variant="error"/>
        </>
    )
}




export const ProgressSize:Story = {
    render:()=>(
        <>
        <Progress value={85} size="tiny"/>
        <Progress value={85} size="small"/>
        <Progress value={85} size="normal"/>
        <Progress value={85} size="large"/>
        </>
    )
}


