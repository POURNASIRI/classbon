import classNames from "classnames";
import { AlertProps } from ".";
import { IconClose } from "../icons/icons";

export const Alert:React.FC<AlertProps> = ({
    variant,
    showIcon = true,
    className,
    children
})=>{
        const classes = classNames(
            "alert",
            {[`alert-${variant}`]:variant},
            className
        );

        return(
            <div className={classes}>
                {
                    showIcon && <IconClose width={18}/>
                }
            </div>
        )
}