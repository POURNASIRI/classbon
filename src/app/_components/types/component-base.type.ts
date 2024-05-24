

import { Size } from "./size.type"
import { Variant } from "./variant.type"

// all components must be have this type
export type ComponentBase = {
    isDisabled?:boolean,
    className?:string,
    variant?: Variant,
    size?:Size,
}
