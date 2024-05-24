import { render, screen } from "@testing-library/react";
import { describe } from "node:test";
import { Badge } from ".";

describe("Badge Component",()=>{
    test("applies the correct css class for diffrent varients",()=>{
        const{rerender}= render(<Badge variant="primary">Content</Badge>);
        expect(screen.getByText("Content")).toHaveClass("badge-primary")


        rerender(<Badge variant="info">Content</Badge>)
        expect(screen.getByText("Content")).toHaveClass("badge-info")

        rerender(<Badge size="tiny">Content</Badge>);
        expect(screen.getByText("Content")).toHaveClass("badge-xs")

    })

    test('show rendered badge',()=>{
        render(<Badge 
            variant="info"
            size="large"
        >
           Content
        </Badge>)
        screen.debug()
    })
})