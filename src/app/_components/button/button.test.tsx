import { describe } from "node:test";
import { render,screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import { Button } from ".";


describe('Button Copmonent',()=>{
//  we cann use two method for test
// it or test
    test('renders a default button', ()=>{
       const {getByText} = render(<Button>Click here</Button>); //render also insert and cleanup element in document
        expect(getByText("Click here")).toBeInTheDocument();
    })

    test('disables the button when isDisablesd prop is true',()=>{
            render(<Button isDisabled={true}>Click here</Button>)
            expect(screen.getByRole('button')).toBeDisabled()
            
    })
    test('applies the correct css class for diffrent button variants', ()=>{
        const {rerender} = render(<Button variant="primary">Click here</Button>)
        expect(screen.getByRole("button")).toHaveClass("btn-primary")

        rerender(<Button variant="info">Click here</Button>)
        expect(screen.getByRole("button")).toHaveClass('btn-info')

        rerender(<Button variant="secondary">Click here</Button>)
        expect(screen.getByRole('button')).toHaveClass('btn-secondary')
    })

    test('applies the correct css class when isOutline prop true',()=>{
        render(<Button isOutline={true}>Click here</Button>)
        expect(screen.getByRole("button")).toHaveClass("btn-outline")
    })

    test("get isLoading css class when isLoading true",()=>{
        render(<Button isLoading={true}>Click here</Button>)
        expect(screen.getByRole("button")).toHaveClass("pointer-events-none opacity-80")
    })

    test("applies the correct css class when isLink prop be true",()=>{
        render(<Button isLink={true}>Click here</Button>)
        expect(screen.getByRole("button")).toHaveClass("btn-link")
    })

    test('applies the correct css class when button shape change',()=>{
        render(<Button shape="square" >Click here</Button>)
        expect(screen.getByRole("button")).toHaveClass("btn-square")
    })


    test("applies the correct css class when button shape change",()=>{
        render(<Button size="large" >click here</Button>)
        expect(screen.getByRole("button")).toHaveClass("btn-lg")
    })

    // test('show rendered button',()=>{
    //     render(<Button 
    //         variant="info"
    //         isOutline={true}
    //         size="large"
    //         isDisabled={true}
    //     >
    //         Click here
    //     </Button>)
    //     screen.debug()
    // })
})